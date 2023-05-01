import headingComponent from './scripts/heading';
import screenComponent from './scripts/screen';
import Keyboard from './scripts/keyboard';
import infotextComponent from './scripts/infotext';
import handleClick from './scripts/handle-click';
import changeLayout from './scripts/changeLayout';
import keySet from './scripts/keyset';
import './styles/input.sass';

const keyboard = new Keyboard();
const screen = screenComponent();
document.body.appendChild(headingComponent());
document.body.appendChild(screen);
document.body.appendChild(keyboard.node);
document.body.appendChild(infotextComponent());
const CapsLock = document.getElementById('CapsLock');
const pressedKeys = [];

keyboard.node.addEventListener('mousedown', (event) => {
  handleClick(event, keyboard.caseMode());
  changeLayout(keyboard, [event.target.id]);
});

keyboard.node.addEventListener('mouseup', (event) => {
  changeLayout(keyboard, [event.target.id]);
});

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (!Object.keys(keySet).includes(event.code)) return;
  if (event.code === 'CapsLock') {
    keyboard.isCapsLock = !keyboard.isCapsLock;
    CapsLock.classList.toggle('active');
    keyboard.shift();
    return;
  }
  document.getElementById(`${event.code}`).classList.add('active');
  if (event.repeat) return;
  pressedKeys.push(event.code);
  handleClick(event, keyboard.caseMode(), pressedKeys, keyboard);
});

document.addEventListener('keyup', (event) => {
  if (!Object.keys(keySet).includes(event.code)) return;
  if (event.code !== 'CapsLock') {
    if (document.getElementById(`${event.code}`)) {
      document.getElementById(`${event.code}`).classList.remove('active');
      if (event.key === 'Shift') {
        keyboard.shift();
      }
    }
  }
  const pos = pressedKeys.indexOf(event.code);
  pressedKeys.splice(pos, 1);
});

CapsLock.addEventListener('mousedown', () => {
  keyboard.isCapsLock = !keyboard.isCapsLock;
  CapsLock.classList.toggle('active');
  keyboard.shift();
});

export default keyboard;
