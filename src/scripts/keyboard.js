import keyComponent from './key';
import keySet from './keyset';
import '../styles/keyboard.sass';

export default class Keyboard {
  constructor(layout = (localStorage.layout) ? localStorage.layout : 'lat') {
    this.isCapsLock = false;
    this.node = document.createElement('div');
    this.node.classList.add('keyboard');
    Object.keys(keySet).forEach((e) => {
      const key = keyComponent();
      this.node.appendChild(key);
      key.id = `${e}`;
      key.innerHTML = keySet[e][layout].reg;
      key.style.width = `${keySet[e].size ? keySet[e].size : '44px'}`;
      if (keySet[e].mod) key.style.backgroundColor = 'black';
    });
  }

  changeLayout(layout) {
    const keys = this.node.getElementsByClassName('key');
    [...keys].forEach((key, i) => {
      keys[i].innerHTML = keySet[key.id][layout].reg;
    });
    localStorage.layout = (layout === 'rus') ? 'rus' : 'lat';
  }

  capitalize(layout = (localStorage.layout) ? localStorage.layout : 'lat') {
    const currentMode = this.caseMode();
    const caseMode = (currentMode === 'reg') ? 'shift' : 'reg';
    const keys = this.node.getElementsByClassName('key');
    [...keys].forEach((key, i) => {
      const char = key.id.slice(0, 3);
      const rusChar = char === 'Key' || key.id === 'Backquote'
      || key.id === 'BracketLeft' || key.id === 'BracketRight'
      || key.id === 'Semicolon' || key.id === 'Quote'
      || key.id === 'Comma' || key.id === 'Period';
      if (layout === 'rus' && rusChar) {
        keys[i].innerHTML = keySet[key.id][layout][caseMode];
      } else if (layout === 'lat' && char === 'Key') {
        keys[i].innerHTML = keySet[key.id][layout][caseMode];
      }
    });
  }

  shift(layout = (localStorage.layout) ? localStorage.layout : 'lat') {
    const currentMode = this.caseMode();
    const caseMode = (currentMode === 'reg') ? 'shift' : 'reg';
    const antiCaseMode = (caseMode === 'shift') ? 'reg' : 'shift';
    const keys = this.node.getElementsByClassName('key');
    if (this.isCapsLock) {
      [...keys].forEach((key, i) => {
        const char = key.id.slice(0, 3);
        const rusChar = char === 'Key' || key.id === 'Backquote'
        || key.id === 'BracketLeft' || key.id === 'BracketRight'
        || key.id === 'Semicolon' || key.id === 'Quote'
        || key.id === 'Comma' || key.id === 'Period';
        if (layout === 'rus' && rusChar) {
          keys[i].innerHTML = keySet[key.id][layout][caseMode];
        } else if (layout === 'rus' && !rusChar) {
          keys[i].innerHTML = keySet[key.id][layout][antiCaseMode];
        } else if (layout === 'lat' && char === 'Key') {
          keys[i].innerHTML = keySet[key.id][layout][caseMode];
        } else if (layout === 'lat' && char !== 'Key') {
          keys[i].innerHTML = keySet[key.id][layout][antiCaseMode];
        }
      });
    } else {
      [...keys].forEach((key, i) => {
        keys[i].innerHTML = keySet[key.id][layout][caseMode];
      });
    }
  }

  caseMode(layout = (localStorage.layout) ? localStorage.layout : 'lat') {
    const keys = this.node.getElementsByClassName('key');
    let caseMode;
    if (layout === 'lat') {
      caseMode = (keys.KeyQ.innerHTML === 'q') ? 'reg' : 'shift';
    } else {
      caseMode = (keys.KeyQ.innerHTML === 'й') ? 'reg' : 'shift';
    }
    return caseMode;
  }
}
