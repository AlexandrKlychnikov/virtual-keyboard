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
    keyboard.changeLayout((localStorage.layout === 'lat') ? 'rus' : 'lat');
    return;
  }

  if (!pressedKeys.includes('ShiftLeft') && !pressedKeys.includes('ShiftRight')) {
    runShift = false;
  }
  if (runShift) {
    keyboard.shift();
  }
}
