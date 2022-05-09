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
}
