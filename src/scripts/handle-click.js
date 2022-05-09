import keySet from './keyset';
import changeLayout from './changeLayout';

export default function handleClick(event, caseMode, pressedKeys, keyboard) {
  const { layout = 'lat' } = localStorage;
  const screen = document.querySelector('.screen');
  if (event.key === 'Alt') {
    event.preventDefault();
    screen.focus();
    changeLayout(keyboard, pressedKeys);
  }
  if (event.code === 'ControlLeft' || event.key === 'Shift') {
    changeLayout(keyboard, pressedKeys);
  }
  if (event.code) {
    if (!keySet[event.code].mod) {
      event.preventDefault();
      const text = keySet[event.code][layout][caseMode];
      screen.focus();
      screen.setRangeText(text, screen.selectionStart, screen.selectionEnd, 'end');
    }
  } else if (!keySet[event.target.id].mod) {
    const text = keySet[event.target.id][layout][caseMode];
    screen.focus();
    screen.setRangeText(text, screen.selectionStart, screen.selectionEnd, 'end');
  }
}
