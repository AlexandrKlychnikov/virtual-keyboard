const keySet = {
  Backquote: { lat: { reg: '`', shift: '~' }, rus: { reg: 'ё', shift: 'Ё' } },
  Digit1: { lat: { reg: '1', shift: '!' }, rus: { reg: '1', shift: '!' } },
  Digit2: { lat: { reg: '2', shift: '@' }, rus: { reg: '2', shift: '"' } },
  Digit3: { lat: { reg: '3', shift: '#' }, rus: { reg: '3', shift: '№' } },
  Digit4: { lat: { reg: '4', shift: '$' }, rus: { reg: '4', shift: ';' } },
  Digit5: { lat: { reg: '5', shift: '%' }, rus: { reg: '5', shift: '%' } },
  Digit6: { lat: { reg: '6', shift: '^' }, rus: { reg: '6', shift: ':' } },
  Digit7: { lat: { reg: '7', shift: '&' }, rus: { reg: '7', shift: '?' } },
  Digit8: { lat: { reg: '8', shift: '*' }, rus: { reg: '8', shift: '*' } },
  Digit9: { lat: { reg: '9', shift: '(' }, rus: { reg: '9', shift: '(' } },
  Digit0: { lat: { reg: '0', shift: ')' }, rus: { reg: '0', shift: ')' } },
  Minus: { lat: { reg: '-', shift: '_' }, rus: { reg: '-', shift: '_' } },
  Equal: { lat: { reg: '=', shift: '+' }, rus: { reg: '=', shift: '+' } },
  Backspace: {
    lat: { reg: 'Backspace', shift: 'Backspace' },
    rus: { reg: 'Backspace', shift: 'Backspace' },
    size: '92px',
    mod: true,
  },
  Tab: {
    lat: { reg: 'Tab', shift: 'Tab' },
    rus: { reg: 'Tab', shift: 'Tab' },
    size: '69px',
    mod: true,
  },
  KeyQ: { lat: { reg: 'q', shift: 'Q' }, rus: { reg: 'й', shift: 'Й' } },
  KeyW: { lat: { reg: 'w', shift: 'W' }, rus: { reg: 'ц', shift: 'Ц' } },
  KeyE: { lat: { reg: 'e', shift: 'E' }, rus: { reg: 'у', shift: 'У' } },
  KeyR: { lat: { reg: 'r', shift: 'R' }, rus: { reg: 'к', shift: 'К' } },
  KeyT: { lat: { reg: 't', shift: 'T' }, rus: { reg: 'е', shift: 'Е' } },
  KeyY: { lat: { reg: 'y', shift: 'Y' }, rus: { reg: 'н', shift: 'Н' } },
  KeyU: { lat: { reg: 'u', shift: 'U' }, rus: { reg: 'г', shift: 'Г' } },
  KeyI: { lat: { reg: 'i', shift: 'I' }, rus: { reg: 'ш', shift: 'Ш' } },
  KeyO: { lat: { reg: 'o', shift: 'O' }, rus: { reg: 'щ', shift: 'Щ' } },
  KeyP: { lat: { reg: 'p', shift: 'P' }, rus: { reg: 'з', shift: 'З' } },
  BracketLeft: { lat: { reg: '[', shift: '{' }, rus: { reg: 'х', shift: 'Х' } },
  BracketRight: { lat: { reg: ']', shift: '}' }, rus: { reg: 'ъ', shift: 'Ъ' } },
  Backslash: { lat: { reg: '\\', shift: '|' }, rus: { reg: '\\', shift: '/' } },
  Delete: { lat: { reg: 'Del', shift: 'Del' }, rus: { reg: 'Del', shift: 'Del' }, mod: true },
  CapsLock: {
    lat: { reg: 'CapsLock', shift: 'CapsLock' }, rus: { reg: 'CapsLock', shift: 'CapsLock' }, mod: true, size: '90px',
  },
  KeyA: { lat: { reg: 'a', shift: 'A' }, rus: { reg: 'ф', shift: 'Ф' } },
  KeyS: { lat: { reg: 's', shift: 'S' }, rus: { reg: 'ы', shift: 'Ы' } },
  KeyD: { lat: { reg: 'd', shift: 'D' }, rus: { reg: 'в', shift: 'В' } },
  KeyF: { lat: { reg: 'f', shift: 'F' }, rus: { reg: 'а', shift: 'А' } },
  KeyG: { lat: { reg: 'g', shift: 'G' }, rus: { reg: 'п', shift: 'П' } },
  KeyH: { lat: { reg: 'h', shift: 'H' }, rus: { reg: 'р', shift: 'Р' } },
  KeyJ: { lat: { reg: 'j', shift: 'J' }, rus: { reg: 'о', shift: 'О' } },
  KeyK: { lat: { reg: 'k', shift: 'K' }, rus: { reg: 'л', shift: 'Л' } },
  KeyL: { lat: { reg: 'l', shift: 'L' }, rus: { reg: 'д', shift: 'Д' } },
  Semicolon: { lat: { reg: ';', shift: ':' }, rus: { reg: 'ж', shift: 'Ж' } },
  Quote: { lat: { reg: "'", shift: '"' }, rus: { reg: 'э', shift: 'Э' } },
  Enter: {
    lat: { reg: 'Enter', shift: 'Enter' }, rus: { reg: 'Enter', shift: 'Enter' }, mod: true, size: '104px',
  },
  ShiftLeft: {
    lat: { reg: 'Shift', shift: 'Shift' }, rus: { reg: 'Shift', shift: 'Shift' }, mod: true, size: '112px',
  },
  KeyZ: { lat: { reg: 'z', shift: 'Z' }, rus: { reg: 'я', shift: 'Я' } },
  KeyX: { lat: { reg: 'x', shift: 'X' }, rus: { reg: 'ч', shift: 'Ч' } },
  KeyC: { lat: { reg: 'c', shift: 'C' }, rus: { reg: 'с', shift: 'С' } },
  KeyV: { lat: { reg: 'v', shift: 'V' }, rus: { reg: 'м', shift: 'М' } },
  KeyB: { lat: { reg: 'b', shift: 'B' }, rus: { reg: 'и', shift: 'И' } },
  KeyN: { lat: { reg: 'n', shift: 'N' }, rus: { reg: 'т', shift: 'Т' } },
  KeyM: { lat: { reg: 'm', shift: 'M' }, rus: { reg: 'ь', shift: 'Ь' } },
  Comma: { lat: { reg: ',', shift: '<' }, rus: { reg: 'б', shift: 'Б' } },
  Period: { lat: { reg: '.', shift: '>' }, rus: { reg: 'ю', shift: 'Ю' } },
  Slash: { lat: { reg: '/', shift: '?' }, rus: { reg: '.', shift: ',' } },
  ArrowUp: { lat: { reg: 'ᐃ', shift: 'ᐃ' }, rus: { reg: 'ᐃ', shift: 'ᐃ' }, mod: true },
  ShiftRight: {
    lat: { reg: 'Shift', shift: 'Shift' }, rus: { reg: 'Shift', shift: 'Shift' }, mod: true, size: '108px',
  },
  ControlLeft: {
    lat: { reg: 'Ctrl', shift: 'Ctrl' }, rus: { reg: 'Ctrl', shift: 'Ctrl' }, mod: true, size: '60px',
  },
  MetaLeft: { lat: { reg: 'Win', shift: 'Win' }, rus: { reg: 'Win', shift: 'Win' }, mod: true },
  AltLeft: { lat: { reg: 'Alt', shift: 'Alt' }, rus: { reg: 'Alt', shift: 'Alt' }, mod: true },
  Space: { lat: { reg: ' ', shift: ' ' }, rus: { reg: ' ', shift: ' ' }, size: '342px' },
  AltRight: { lat: { reg: 'Alt', shift: 'Alt' }, rus: { reg: 'Alt', shift: 'Alt' }, mod: true },
  ArrowLeft: { lat: { reg: 'ᐊ', shift: 'ᐊ' }, rus: { reg: 'ᐊ', shift: 'ᐊ' }, mod: true },
  ArrowDown: { lat: { reg: 'ᐁ', shift: 'ᐁ' }, rus: { reg: 'ᐁ', shift: 'ᐁ' }, mod: true },
  ArrowRight: { lat: { reg: 'ᐅ', shift: 'ᐅ' }, rus: { reg: 'ᐅ', shift: 'ᐅ' }, mod: true },
  ControlRight: {
    lat: { reg: 'Ctrl', shift: 'Ctrl' }, rus: { reg: 'Ctrl', shift: 'Ctrl' }, mod: true, size: '56px',
  },
};

export default keySet;
