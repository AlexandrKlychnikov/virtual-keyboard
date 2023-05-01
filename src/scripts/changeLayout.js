export default function changeLayout(keyboard, pressedKeys) {
  const changeLayoutKeys = ['ControlLeft', 'AltLeft'];
  if (pressedKeys.length === 0) return;
  let runChangeLayout = true;
  let runShift = true;
  changeLayoutKeys.forEach((key) => {
    if (!pressedKeys.includes(key)) {
      runChangeLayout = false;
    }
  });
  if (runChangeLayout) {
    if (keyboard.isCapsLock) {
      keyboard.capitalize();
      keyboard.changeLayout((localStorage.layout === 'lat') ? 'rus' : 'lat');
      keyboard.capitalize();
    } else {
      keyboard.changeLayout((localStorage.layout === 'lat') ? 'rus' : 'lat');
    }
    return;
  }

  if (!pressedKeys.includes('ShiftLeft') && !pressedKeys.includes('ShiftRight')) {
    runShift = false;
  }
  if (runShift) {
    keyboard.shift();
  }
}
