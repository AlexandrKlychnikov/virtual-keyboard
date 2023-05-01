import keySet from './keyset';
import handleBackspace from './handle-backspace';
import handleEnterTab from './handle-enter';
import handleDel from './handle-del';
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
    } else if (event.code === 'Tab') {
      event.preventDefault();
      handleEnterTab('\t');
    } else if (event.code === 'Backspace') {
      handleBackspace();
    } else if (event.code === 'Enter') {
      handleEnterTab('\n');
    } else if (event.code === 'Delete') {
      handleDel();
    }
  } else if (!keySet[event.target.id].mod) {
    const text = keySet[event.target.id][layout][caseMode];
    screen.focus();
    screen.setRangeText(text, screen.selectionStart, screen.selectionEnd, 'end');
  } else if (event.target.id === 'Backspace') {
    handleBackspace();
  } else if (event.target.id === 'Enter') {
    handleEnterTab('\n');
  } else if (event.target.id === 'Delete') {
    handleDel();
  } else if (event.target.id === 'Tab') {
    handleEnterTab('\t');
  }
}
