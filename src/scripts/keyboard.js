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

  shift(layout = (localStorage.layout) ? localStorage.layout : 'lat') {
    const currentMode = this.caseMode();
    const caseMode = (currentMode === 'reg') ? 'shift' : 'reg';
    const keys = this.node.getElementsByClassName('key');
    [...keys].forEach((key, i) => {
      keys[i].innerHTML = keySet[key.id][layout][caseMode];
    });
  }

  caseMode(layout = (localStorage.layout) ? localStorage.layout : 'lat') {
    const keys = this.node.getElementsByClassName('key');
    let caseMode;
    if (layout === 'lat') {
      caseMode = (keys.Backquote.innerHTML === '`') ? 'reg' : 'shift';
    } else {
      caseMode = (keys.Backquote.innerHTML === 'ё') ? 'reg' : 'shift';
    }
    return caseMode;
  }
}
