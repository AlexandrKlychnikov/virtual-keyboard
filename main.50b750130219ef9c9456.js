/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/changeLayout.js":
/*!*********************************!*\
  !*** ./scripts/changeLayout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeLayout)
/* harmony export */ });
function changeLayout(keyboard, pressedKeys) {
  var changeLayoutKeys = ['ControlLeft', 'AltLeft'];
  if (pressedKeys.length === 0) return;
  var runChangeLayout = true;
  var runShift = true;
  changeLayoutKeys.forEach(function (key) {
    if (!pressedKeys.includes(key)) {
      runChangeLayout = false;
    }
  });

  if (runChangeLayout) {
    if (keyboard.isCapsLock) {
      keyboard.capitalize();
      keyboard.changeLayout(localStorage.layout === 'lat' ? 'rus' : 'lat');
      keyboard.capitalize();
    } else {
      keyboard.changeLayout(localStorage.layout === 'lat' ? 'rus' : 'lat');
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

/***/ }),

/***/ "./scripts/handle-backspace.js":
/*!*************************************!*\
  !*** ./scripts/handle-backspace.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleBackspace)
/* harmony export */ });
function handleBackspace() {
  var screen = document.querySelector('.screen');
  screen.focus();
  if (screen.value.length === 0) return;
  var text = screen.value;
  var start = screen.selectionStart;
  var end = screen.selectionEnd;

  if (start < end) {
    var text1 = start > 0 ? text.slice(0, start) : '';
    var text2 = end < text.length ? text.slice(end) : '';
    screen.value = text1 + text2;
    screen.selectionStart = text1.length;
    screen.selectionEnd = text1.length;
  } else if (start > 0) {
    var _text = start - 1 > 0 ? text.slice(0, start - 1) : '';

    var _text2 = start < text.length ? text.slice(start) : '';

    screen.value = _text + _text2;
    screen.selectionStart = _text.length;
    screen.selectionEnd = _text.length;
  }
}

/***/ }),

/***/ "./scripts/handle-click.js":
/*!*********************************!*\
  !*** ./scripts/handle-click.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleClick)
/* harmony export */ });
/* harmony import */ var _keyset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyset */ "./scripts/keyset.js");
/* harmony import */ var _handle_backspace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handle-backspace */ "./scripts/handle-backspace.js");
/* harmony import */ var _handle_enter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-enter */ "./scripts/handle-enter.js");
/* harmony import */ var _handle_del__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handle-del */ "./scripts/handle-del.js");
/* harmony import */ var _changeLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeLayout */ "./scripts/changeLayout.js");





function handleClick(event, caseMode, pressedKeys, keyboard) {
  var screen = document.querySelector('.screen');

  if (event.key === 'Alt' && !pressedKeys.includes('ShiftLeft') && !pressedKeys.includes('ShiftRight')) {
    event.preventDefault();
    screen.focus();
    (0,_changeLayout__WEBPACK_IMPORTED_MODULE_4__["default"])(keyboard, pressedKeys);
  }

  if (event.code === 'ControlLeft' || event.key === 'Shift') {
    (0,_changeLayout__WEBPACK_IMPORTED_MODULE_4__["default"])(keyboard, pressedKeys);
  }

  if (event.code) {
    var key = document.getElementById("".concat(event.code));

    if (!_keyset__WEBPACK_IMPORTED_MODULE_0__["default"][event.code].mod) {
      event.preventDefault();
      var text = key.innerHTML;
      screen.focus();
      screen.setRangeText(text, screen.selectionStart, screen.selectionEnd, 'end');
    } else if (event.code === 'Tab') {
      event.preventDefault();
      (0,_handle_enter__WEBPACK_IMPORTED_MODULE_2__["default"])('\t');
    } else if (event.code === 'Backspace') {
      (0,_handle_backspace__WEBPACK_IMPORTED_MODULE_1__["default"])();
    } else if (event.code === 'Enter') {
      (0,_handle_enter__WEBPACK_IMPORTED_MODULE_2__["default"])('\n');
    } else if (event.code === 'Delete') {
      (0,_handle_del__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else if (event.code === 'ArrowUp' || event.code === 'ArrowDown' || event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
      var _text = key.innerHTML;
      screen.focus();
      screen.setRangeText(_text, screen.selectionStart, screen.selectionEnd, 'end');
    }
  } else if (!_keyset__WEBPACK_IMPORTED_MODULE_0__["default"][event.target.id].mod) {
    var _text2 = event.target.innerHTML;
    screen.focus();
    screen.setRangeText(_text2, screen.selectionStart, screen.selectionEnd, 'end');
  } else if (event.target.id === 'Backspace') {
    (0,_handle_backspace__WEBPACK_IMPORTED_MODULE_1__["default"])();
  } else if (event.target.id === 'Enter') {
    (0,_handle_enter__WEBPACK_IMPORTED_MODULE_2__["default"])('\n');
  } else if (event.target.id === 'Delete') {
    (0,_handle_del__WEBPACK_IMPORTED_MODULE_3__["default"])();
  } else if (event.target.id === 'Tab') {
    (0,_handle_enter__WEBPACK_IMPORTED_MODULE_2__["default"])('\t');
  } else if (event.target.id === 'ArrowUp' || event.target.id === 'ArrowDown' || event.target.id === 'ArrowLeft' || event.target.id === 'ArrowRight') {
    var _text3 = event.target.innerHTML;
    screen.focus();
    screen.setRangeText(_text3, screen.selectionStart, screen.selectionEnd, 'end');
  }
}

/***/ }),

/***/ "./scripts/handle-del.js":
/*!*******************************!*\
  !*** ./scripts/handle-del.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleDel)
/* harmony export */ });
function handleDel() {
  var screen = document.querySelector('.screen');
  screen.focus();
  if (screen.value.length === 0) return;
  var text = screen.value;
  var start = screen.selectionStart;
  var end = screen.selectionEnd;

  if (start < end) {
    var text1 = start > 0 ? text.slice(0, start) : '';
    var text2 = end < text.length ? text.slice(end) : '';
    screen.value = text1 + text2;
    screen.selectionStart = text1.length;
    screen.selectionEnd = text1.length;
    screen.focus();
  } else if (start > 0) {
    var _text = start - 1 >= 0 ? text.slice(0, start) : '';

    var _text2 = start < text.length ? text.slice(start + 1) : '';

    screen.value = _text + _text2;
    screen.selectionStart = _text.length;
    screen.selectionEnd = _text.length;
    screen.focus();
  }
}

/***/ }),

/***/ "./scripts/handle-enter.js":
/*!*********************************!*\
  !*** ./scripts/handle-enter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleEnterTab)
/* harmony export */ });
function handleEnterTab(mod) {
  var screen = document.querySelector('.screen');
  screen.focus();
  var text = screen.value;
  var start = screen.selectionStart;
  var end = screen.selectionEnd;

  if (start < end) {
    var text1 = start > 0 ? text.slice(0, start) : '';
    var text2 = end < text.length ? text.slice(end) : '';
    screen.value = "".concat(text1).concat(mod).concat(text2);
    screen.selectionStart = text1.length;
    screen.selectionEnd = text1.length;
  } else if (start === screen.value.length && start === end) {
    text += mod;
    screen.value = text;
  } else if (start > 0) {
    var _text = start - 1 >= 0 ? text.slice(0, start) : '';

    var _text2 = start < text.length ? text.slice(start) : '';

    screen.value = "".concat(_text).concat(mod).concat(_text2);
    screen.selectionStart = _text.length;
    screen.selectionEnd = _text.length;
  }
}

/***/ }),

/***/ "./scripts/heading.js":
/*!****************************!*\
  !*** ./scripts/heading.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headingComponent)
/* harmony export */ });
/* harmony import */ var _styles_heading_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/heading.sass */ "./styles/heading.sass");

function headingComponent() {
  var heading = document.createElement('h1');
  heading.textContent = 'RSS Virtual keyboard';
  heading.classList.add('heading');
  return heading;
}

/***/ }),

/***/ "./scripts/infotext.js":
/*!*****************************!*\
  !*** ./scripts/infotext.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ infotextComponent)
/* harmony export */ });
/* harmony import */ var _styles_infotext_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/infotext.sass */ "./styles/infotext.sass");

function infotextComponent() {
  var info = document.createElement('p');
  info.innerHTML = "The keyboard was created in the Windows operating system<br>\n  The combination to switch the language layout: left Ctrl + left Alt";
  info.classList.add('info');
  return info;
}

/***/ }),

/***/ "./scripts/key.js":
/*!************************!*\
  !*** ./scripts/key.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ keyComponent)
/* harmony export */ });
/* harmony import */ var _styles_key_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/key.sass */ "./styles/key.sass");

function keyComponent() {
  var key = document.createElement('div');
  key.classList.add('key');
  return key;
}

/***/ }),

/***/ "./scripts/keyboard.js":
/*!*****************************!*\
  !*** ./scripts/keyboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./scripts/key.js");
/* harmony import */ var _keyset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyset */ "./scripts/keyset.js");
/* harmony import */ var _styles_keyboard_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/keyboard.sass */ "./styles/keyboard.sass");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Keyboard = /*#__PURE__*/function () {
  function Keyboard() {
    var _this = this;

    var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage.layout ? localStorage.layout : 'lat';

    _classCallCheck(this, Keyboard);

    this.isCapsLock = false;
    this.node = document.createElement('div');
    this.node.classList.add('keyboard');
    Object.keys(_keyset__WEBPACK_IMPORTED_MODULE_1__["default"]).forEach(function (e) {
      var key = (0,_key__WEBPACK_IMPORTED_MODULE_0__["default"])();

      _this.node.appendChild(key);

      key.id = "".concat(e);
      key.innerHTML = _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][e][layout].reg;
      key.style.width = "".concat(_keyset__WEBPACK_IMPORTED_MODULE_1__["default"][e].size ? _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][e].size : '44px');
      if (_keyset__WEBPACK_IMPORTED_MODULE_1__["default"][e].mod) key.style.backgroundColor = 'black';
    });
  }

  _createClass(Keyboard, [{
    key: "changeLayout",
    value: function changeLayout(layout) {
      var keys = this.node.getElementsByClassName('key');

      _toConsumableArray(keys).forEach(function (key, i) {
        keys[i].innerHTML = _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][key.id][layout].reg;
      });

      localStorage.layout = layout === 'rus' ? 'rus' : 'lat';
    }
  }, {
    key: "capitalize",
    value: function capitalize() {
      var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage.layout ? localStorage.layout : 'lat';
      var currentMode = this.caseMode();
      var caseMode = currentMode === 'reg' ? 'shift' : 'reg';
      var keys = this.node.getElementsByClassName('key');

      _toConsumableArray(keys).forEach(function (key, i) {
        var _char = key.id.slice(0, 3);

        var rusChar = _char === 'Key' || key.id === 'Backquote' || key.id === 'BracketLeft' || key.id === 'BracketRight' || key.id === 'Semicolon' || key.id === 'Quote' || key.id === 'Comma' || key.id === 'Period';

        if (layout === 'rus' && rusChar) {
          keys[i].innerHTML = _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][key.id][layout][caseMode];
        } else if (layout === 'lat' && _char === 'Key') {
          keys[i].innerHTML = _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][key.id][layout][caseMode];
        }
      });
    }
  }, {
    key: "shift",
    value: function shift() {
      var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage.layout ? localStorage.layout : 'lat';
      var currentMode = this.caseMode();
      var caseMode = currentMode === 'reg' ? 'shift' : 'reg';
      var antiCaseMode = caseMode === 'shift' ? 'reg' : 'shift';
      var keys = this.node.getElementsByClassName('key');

      if (this.isCapsLock) {
        _toConsumableArray(keys).forEach(function (key, i) {
          var _char2 = key.id.slice(0, 3);

          var rusChar = _char2 === 'Key' || key.id === 'Backquote' || key.id === 'BracketLeft' || key.id === 'BracketRight' || key.id === 'Semicolon' || key.id === 'Quote' || key.id === 'Comma' || key.id === 'Period';

          if (layout === 'rus' && rusChar) {
            keys[i].innerHTML = _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][key.id][layout][caseMode];
          } else if (layout === 'rus' && !rusChar) {
            keys[i].innerHTML = _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][key.id][layout][antiCaseMode];
          } else if (layout === 'lat' && _char2 === 'Key') {
            keys[i].innerHTML = _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][key.id][layout][caseMode];
          } else if (layout === 'lat' && _char2 !== 'Key') {
            keys[i].innerHTML = _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][key.id][layout][antiCaseMode];
          }
        });
      } else {
        _toConsumableArray(keys).forEach(function (key, i) {
          keys[i].innerHTML = _keyset__WEBPACK_IMPORTED_MODULE_1__["default"][key.id][layout][caseMode];
        });
      }
    }
  }, {
    key: "caseMode",
    value: function caseMode() {
      var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage.layout ? localStorage.layout : 'lat';
      var keys = this.node.getElementsByClassName('key');
      var caseMode;

      if (layout === 'lat') {
        caseMode = keys.KeyQ.innerHTML === 'q' ? 'reg' : 'shift';
      } else {
        caseMode = keys.KeyQ.innerHTML === 'й' ? 'reg' : 'shift';
      }

      return caseMode;
    }
  }]);

  return Keyboard;
}();



/***/ }),

/***/ "./scripts/keyset.js":
/*!***************************!*\
  !*** ./scripts/keyset.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var keySet = {
  Backquote: {
    lat: {
      reg: '`',
      shift: '~'
    },
    rus: {
      reg: 'ё',
      shift: 'Ё'
    }
  },
  Digit1: {
    lat: {
      reg: '1',
      shift: '!'
    },
    rus: {
      reg: '1',
      shift: '!'
    }
  },
  Digit2: {
    lat: {
      reg: '2',
      shift: '@'
    },
    rus: {
      reg: '2',
      shift: '"'
    }
  },
  Digit3: {
    lat: {
      reg: '3',
      shift: '#'
    },
    rus: {
      reg: '3',
      shift: '№'
    }
  },
  Digit4: {
    lat: {
      reg: '4',
      shift: '$'
    },
    rus: {
      reg: '4',
      shift: ';'
    }
  },
  Digit5: {
    lat: {
      reg: '5',
      shift: '%'
    },
    rus: {
      reg: '5',
      shift: '%'
    }
  },
  Digit6: {
    lat: {
      reg: '6',
      shift: '^'
    },
    rus: {
      reg: '6',
      shift: ':'
    }
  },
  Digit7: {
    lat: {
      reg: '7',
      shift: '&'
    },
    rus: {
      reg: '7',
      shift: '?'
    }
  },
  Digit8: {
    lat: {
      reg: '8',
      shift: '*'
    },
    rus: {
      reg: '8',
      shift: '*'
    }
  },
  Digit9: {
    lat: {
      reg: '9',
      shift: '('
    },
    rus: {
      reg: '9',
      shift: '('
    }
  },
  Digit0: {
    lat: {
      reg: '0',
      shift: ')'
    },
    rus: {
      reg: '0',
      shift: ')'
    }
  },
  Minus: {
    lat: {
      reg: '-',
      shift: '_'
    },
    rus: {
      reg: '-',
      shift: '_'
    }
  },
  Equal: {
    lat: {
      reg: '=',
      shift: '+'
    },
    rus: {
      reg: '=',
      shift: '+'
    }
  },
  Backspace: {
    lat: {
      reg: 'Backspace',
      shift: 'Backspace'
    },
    rus: {
      reg: 'Backspace',
      shift: 'Backspace'
    },
    size: '92px',
    mod: true
  },
  Tab: {
    lat: {
      reg: 'Tab',
      shift: 'Tab'
    },
    rus: {
      reg: 'Tab',
      shift: 'Tab'
    },
    size: '69px',
    mod: true
  },
  KeyQ: {
    lat: {
      reg: 'q',
      shift: 'Q'
    },
    rus: {
      reg: 'й',
      shift: 'Й'
    }
  },
  KeyW: {
    lat: {
      reg: 'w',
      shift: 'W'
    },
    rus: {
      reg: 'ц',
      shift: 'Ц'
    }
  },
  KeyE: {
    lat: {
      reg: 'e',
      shift: 'E'
    },
    rus: {
      reg: 'у',
      shift: 'У'
    }
  },
  KeyR: {
    lat: {
      reg: 'r',
      shift: 'R'
    },
    rus: {
      reg: 'к',
      shift: 'К'
    }
  },
  KeyT: {
    lat: {
      reg: 't',
      shift: 'T'
    },
    rus: {
      reg: 'е',
      shift: 'Е'
    }
  },
  KeyY: {
    lat: {
      reg: 'y',
      shift: 'Y'
    },
    rus: {
      reg: 'н',
      shift: 'Н'
    }
  },
  KeyU: {
    lat: {
      reg: 'u',
      shift: 'U'
    },
    rus: {
      reg: 'г',
      shift: 'Г'
    }
  },
  KeyI: {
    lat: {
      reg: 'i',
      shift: 'I'
    },
    rus: {
      reg: 'ш',
      shift: 'Ш'
    }
  },
  KeyO: {
    lat: {
      reg: 'o',
      shift: 'O'
    },
    rus: {
      reg: 'щ',
      shift: 'Щ'
    }
  },
  KeyP: {
    lat: {
      reg: 'p',
      shift: 'P'
    },
    rus: {
      reg: 'з',
      shift: 'З'
    }
  },
  BracketLeft: {
    lat: {
      reg: '[',
      shift: '{'
    },
    rus: {
      reg: 'х',
      shift: 'Х'
    }
  },
  BracketRight: {
    lat: {
      reg: ']',
      shift: '}'
    },
    rus: {
      reg: 'ъ',
      shift: 'Ъ'
    }
  },
  Backslash: {
    lat: {
      reg: '\\',
      shift: '|'
    },
    rus: {
      reg: '\\',
      shift: '/'
    }
  },
  Delete: {
    lat: {
      reg: 'Del',
      shift: 'Del'
    },
    rus: {
      reg: 'Del',
      shift: 'Del'
    },
    mod: true
  },
  CapsLock: {
    lat: {
      reg: 'CapsLock',
      shift: 'CapsLock'
    },
    rus: {
      reg: 'CapsLock',
      shift: 'CapsLock'
    },
    mod: true,
    size: '90px'
  },
  KeyA: {
    lat: {
      reg: 'a',
      shift: 'A'
    },
    rus: {
      reg: 'ф',
      shift: 'Ф'
    }
  },
  KeyS: {
    lat: {
      reg: 's',
      shift: 'S'
    },
    rus: {
      reg: 'ы',
      shift: 'Ы'
    }
  },
  KeyD: {
    lat: {
      reg: 'd',
      shift: 'D'
    },
    rus: {
      reg: 'в',
      shift: 'В'
    }
  },
  KeyF: {
    lat: {
      reg: 'f',
      shift: 'F'
    },
    rus: {
      reg: 'а',
      shift: 'А'
    }
  },
  KeyG: {
    lat: {
      reg: 'g',
      shift: 'G'
    },
    rus: {
      reg: 'п',
      shift: 'П'
    }
  },
  KeyH: {
    lat: {
      reg: 'h',
      shift: 'H'
    },
    rus: {
      reg: 'р',
      shift: 'Р'
    }
  },
  KeyJ: {
    lat: {
      reg: 'j',
      shift: 'J'
    },
    rus: {
      reg: 'о',
      shift: 'О'
    }
  },
  KeyK: {
    lat: {
      reg: 'k',
      shift: 'K'
    },
    rus: {
      reg: 'л',
      shift: 'Л'
    }
  },
  KeyL: {
    lat: {
      reg: 'l',
      shift: 'L'
    },
    rus: {
      reg: 'д',
      shift: 'Д'
    }
  },
  Semicolon: {
    lat: {
      reg: ';',
      shift: ':'
    },
    rus: {
      reg: 'ж',
      shift: 'Ж'
    }
  },
  Quote: {
    lat: {
      reg: "'",
      shift: '"'
    },
    rus: {
      reg: 'э',
      shift: 'Э'
    }
  },
  Enter: {
    lat: {
      reg: 'Enter',
      shift: 'Enter'
    },
    rus: {
      reg: 'Enter',
      shift: 'Enter'
    },
    mod: true,
    size: '104px'
  },
  ShiftLeft: {
    lat: {
      reg: 'Shift',
      shift: 'Shift'
    },
    rus: {
      reg: 'Shift',
      shift: 'Shift'
    },
    mod: true,
    size: '112px'
  },
  KeyZ: {
    lat: {
      reg: 'z',
      shift: 'Z'
    },
    rus: {
      reg: 'я',
      shift: 'Я'
    }
  },
  KeyX: {
    lat: {
      reg: 'x',
      shift: 'X'
    },
    rus: {
      reg: 'ч',
      shift: 'Ч'
    }
  },
  KeyC: {
    lat: {
      reg: 'c',
      shift: 'C'
    },
    rus: {
      reg: 'с',
      shift: 'С'
    }
  },
  KeyV: {
    lat: {
      reg: 'v',
      shift: 'V'
    },
    rus: {
      reg: 'м',
      shift: 'М'
    }
  },
  KeyB: {
    lat: {
      reg: 'b',
      shift: 'B'
    },
    rus: {
      reg: 'и',
      shift: 'И'
    }
  },
  KeyN: {
    lat: {
      reg: 'n',
      shift: 'N'
    },
    rus: {
      reg: 'т',
      shift: 'Т'
    }
  },
  KeyM: {
    lat: {
      reg: 'm',
      shift: 'M'
    },
    rus: {
      reg: 'ь',
      shift: 'Ь'
    }
  },
  Comma: {
    lat: {
      reg: ',',
      shift: '<'
    },
    rus: {
      reg: 'б',
      shift: 'Б'
    }
  },
  Period: {
    lat: {
      reg: '.',
      shift: '>'
    },
    rus: {
      reg: 'ю',
      shift: 'Ю'
    }
  },
  Slash: {
    lat: {
      reg: '/',
      shift: '?'
    },
    rus: {
      reg: '.',
      shift: ','
    }
  },
  ArrowUp: {
    lat: {
      reg: 'ᐃ',
      shift: 'ᐃ'
    },
    rus: {
      reg: 'ᐃ',
      shift: 'ᐃ'
    },
    mod: true
  },
  ShiftRight: {
    lat: {
      reg: 'Shift',
      shift: 'Shift'
    },
    rus: {
      reg: 'Shift',
      shift: 'Shift'
    },
    mod: true,
    size: '108px'
  },
  ControlLeft: {
    lat: {
      reg: 'Ctrl',
      shift: 'Ctrl'
    },
    rus: {
      reg: 'Ctrl',
      shift: 'Ctrl'
    },
    mod: true,
    size: '60px'
  },
  MetaLeft: {
    lat: {
      reg: 'Win',
      shift: 'Win'
    },
    rus: {
      reg: 'Win',
      shift: 'Win'
    },
    mod: true
  },
  AltLeft: {
    lat: {
      reg: 'Alt',
      shift: 'Alt'
    },
    rus: {
      reg: 'Alt',
      shift: 'Alt'
    },
    mod: true
  },
  Space: {
    lat: {
      reg: ' ',
      shift: ' '
    },
    rus: {
      reg: ' ',
      shift: ' '
    },
    size: '342px'
  },
  AltRight: {
    lat: {
      reg: 'Alt',
      shift: 'Alt'
    },
    rus: {
      reg: 'Alt',
      shift: 'Alt'
    },
    mod: true
  },
  ArrowLeft: {
    lat: {
      reg: 'ᐊ',
      shift: 'ᐊ'
    },
    rus: {
      reg: 'ᐊ',
      shift: 'ᐊ'
    },
    mod: true
  },
  ArrowDown: {
    lat: {
      reg: 'ᐁ',
      shift: 'ᐁ'
    },
    rus: {
      reg: 'ᐁ',
      shift: 'ᐁ'
    },
    mod: true
  },
  ArrowRight: {
    lat: {
      reg: 'ᐅ',
      shift: 'ᐅ'
    },
    rus: {
      reg: 'ᐅ',
      shift: 'ᐅ'
    },
    mod: true
  },
  ControlRight: {
    lat: {
      reg: 'Ctrl',
      shift: 'Ctrl'
    },
    rus: {
      reg: 'Ctrl',
      shift: 'Ctrl'
    },
    mod: true,
    size: '56px'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keySet);

/***/ }),

/***/ "./scripts/screen.js":
/*!***************************!*\
  !*** ./scripts/screen.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ screenComponent)
/* harmony export */ });
/* harmony import */ var _styles_screen_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/screen.sass */ "./styles/screen.sass");

function screenComponent() {
  var screen = document.createElement('textarea');
  screen.classList.add('screen');
  return screen;
}

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/heading.sass":
/*!************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/heading.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".heading {\n  color: darkgreen;\n  font-size: 30px;\n  font-weight: 900;\n}", "",{"version":3,"sources":["webpack://./styles/heading.sass"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,eAAA;EACA,gBAAA;AACF","sourcesContent":[".heading\n  color: darkgreen\n  font-size: 30px\n  font-weight: 900\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/infotext.sass":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/infotext.sass ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info {\n  font-size: 20px;\n  line-height: 32px;\n}", "",{"version":3,"sources":["webpack://./styles/infotext.sass"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,iBAAA;AACF","sourcesContent":[".info\n  font-size: 20px\n  line-height: 32px\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/input.sass":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/input.sass ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 10px;\n  gap: 10px;\n}", "",{"version":3,"sources":["webpack://./styles/input.sass"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;AACF;;AACA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;AAEF","sourcesContent":["*\n  margin: 0\n  padding: 0\n\nbody\n  display: flex\n  flex-direction: column\n  align-items: center\n  padding: 10px 10px\n  gap: 10px\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/key.sass":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/key.sass ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".key {\n  font-size: 16px;\n  padding: 0;\n  display: inline-block;\n  font-weight: bold;\n  color: #fff;\n  text-decoration: none;\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.5);\n  user-select: none;\n  border: 1px solid #023d0f;\n  border-radius: 5px;\n  outline: none;\n  background: rgb(87, 90, 87);\n  box-shadow: 0 6px rgb(0, 38, 6), 0 3px 15px rgba(0, 0, 0, 0.4), inset 0 1px rgba(255, 255, 255, 0.3), inset 0 0 3px rgba(255, 255, 255, 0.5);\n  transition: 0.2s;\n  text-align: center;\n  line-height: 48px;\n}\n.key:hover, .key.active {\n  cursor: pointer;\n  background: #516b55 linear-gradient(#5b9e6f, #559276 80%);\n}\n.key:active, .key.active {\n  box-shadow: 0 2px #135819, 0 1px 6px rgba(0, 0, 0, 0.4), inset 0 1px rgba(255, 255, 255, 0.3), inset 0 0 3px rgba(255, 255, 255, 0.5);\n  -webkit-transform: translate(0, 4px);\n  transform: translate(0, 4px);\n}", "",{"version":3,"sources":["webpack://./styles/key.sass"],"names":[],"mappings":"AAEA;EACE,eAAA;EACA,UAAA;EACA,qBAAA;EACA,iBAAA;EACA,WAAA;EACA,qBAAA;EACA,sCAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,aAAA;EACA,2BAdW;EAeX,4IAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;AADF;AAEE;EACE,eAAA;EACA,yDAAA;AAAJ;AACE;EACE,qIAAA;EACA,oCAAA;EACA,4BAAA;AACJ","sourcesContent":["$main-color: rgb(87, 90, 87)\n\n.key\n  font-size: 16px\n  padding: 0\n  display: inline-block\n  font-weight: bold\n  color: #fff\n  text-decoration: none\n  text-shadow: 0 -1px rgba(0,0,0,.5)\n  user-select: none\n  border: 1px solid #023d0f\n  border-radius: 5px\n  outline: none\n  background: $main-color\n  box-shadow: 0 6px rgb(0,38,6), 0 3px 15px rgba(0,0,0,.4), inset 0 1px rgba(255,255,255,.3), inset 0 0 3px rgba(255,255,255,.5)\n  transition: .2s\n  text-align: center\n  line-height: 48px\n  &:hover, &.active\n    cursor: pointer\n    background: #516b55 linear-gradient(#5b9e6f, #559276 80%)\n  &:active, &.active\n    box-shadow: 0 2px #135819, 0 1px 6px rgba(0,0,0,.4), inset 0 1px rgba(255,255,255,.3), inset 0 0 3px rgba(255,255,255,.5)\n    -webkit-transform: translate(0, 4px)\n    transform: translate(0, 4px)\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/keyboard.sass":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/keyboard.sass ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".keyboard {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 780px;\n  font-size: 20px;\n  border: 4px gray solid;\n  border-radius: 10px;\n  background-color: lightgray;\n  padding: 4px 5px 8px;\n  row-gap: 8px;\n  column-gap: 4px;\n}", "",{"version":3,"sources":["webpack://./styles/keyboard.sass"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,eAAA;EACA,8BAAA;EACA,YAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,2BAAA;EACA,oBAAA;EACA,YAAA;EACA,eAAA;AACF","sourcesContent":[".keyboard\n  display: flex\n  flex-wrap: wrap\n  justify-content: space-between\n  width: 780px\n  font-size: 20px\n  border: 4px gray solid\n  border-radius: 10px\n  background-color: lightgray\n  padding: 4px 5px 8px\n  row-gap: 8px\n  column-gap: 4px\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/screen.sass":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/screen.sass ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".screen {\n  width: 50vw;\n  min-width: 780px;\n  height: 200px;\n  font-size: 20px;\n}", "",{"version":3,"sources":["webpack://./styles/screen.sass"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,gBAAA;EACA,aAAA;EACA,eAAA;AACF","sourcesContent":[".screen\n  width: 50vw\n  min-width: 780px\n  height: 200px\n  font-size: 20px\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles/heading.sass":
/*!*****************************!*\
  !*** ./styles/heading.sass ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./heading.sass */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/heading.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_heading_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/infotext.sass":
/*!******************************!*\
  !*** ./styles/infotext.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_infotext_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./infotext.sass */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/infotext.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_infotext_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_infotext_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_infotext_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_infotext_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/input.sass":
/*!***************************!*\
  !*** ./styles/input.sass ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./input.sass */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/input.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_input_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/key.sass":
/*!*************************!*\
  !*** ./styles/key.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_key_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./key.sass */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/key.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_key_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_key_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_key_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_key_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/keyboard.sass":
/*!******************************!*\
  !*** ./styles/keyboard.sass ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_keyboard_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./keyboard.sass */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/keyboard.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_keyboard_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_keyboard_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_keyboard_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_keyboard_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./styles/screen.sass":
/*!****************************!*\
  !*** ./styles/screen.sass ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_screen_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./screen.sass */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/screen.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_screen_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_screen_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_screen_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_screen_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scripts_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/heading */ "./scripts/heading.js");
/* harmony import */ var _scripts_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/screen */ "./scripts/screen.js");
/* harmony import */ var _scripts_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/keyboard */ "./scripts/keyboard.js");
/* harmony import */ var _scripts_infotext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/infotext */ "./scripts/infotext.js");
/* harmony import */ var _scripts_handle_click__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/handle-click */ "./scripts/handle-click.js");
/* harmony import */ var _scripts_changeLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/changeLayout */ "./scripts/changeLayout.js");
/* harmony import */ var _scripts_keyset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/keyset */ "./scripts/keyset.js");
/* harmony import */ var _styles_input_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/input.sass */ "./styles/input.sass");








var keyboard = new _scripts_keyboard__WEBPACK_IMPORTED_MODULE_2__["default"]();
var screen = (0,_scripts_screen__WEBPACK_IMPORTED_MODULE_1__["default"])();
document.body.appendChild((0,_scripts_heading__WEBPACK_IMPORTED_MODULE_0__["default"])());
document.body.appendChild(screen);
document.body.appendChild(keyboard.node);
document.body.appendChild((0,_scripts_infotext__WEBPACK_IMPORTED_MODULE_3__["default"])());
var CapsLock = document.getElementById('CapsLock');
var pressedKeys = [];
keyboard.node.addEventListener('mousedown', function (event) {
  (0,_scripts_handle_click__WEBPACK_IMPORTED_MODULE_4__["default"])(event, keyboard.caseMode());
  (0,_scripts_changeLayout__WEBPACK_IMPORTED_MODULE_5__["default"])(keyboard, [event.target.id]);
});
keyboard.node.addEventListener('mouseup', function (event) {
  (0,_scripts_changeLayout__WEBPACK_IMPORTED_MODULE_5__["default"])(keyboard, [event.target.id]);
});
document.addEventListener('keydown', function (event) {
  event.preventDefault();
  if (!Object.keys(_scripts_keyset__WEBPACK_IMPORTED_MODULE_6__["default"]).includes(event.code)) return;

  if (event.code === 'CapsLock') {
    keyboard.isCapsLock = !keyboard.isCapsLock;
    CapsLock.classList.toggle('active');
    keyboard.capitalize();
    return;
  }

  document.getElementById("".concat(event.code)).classList.add('active');
  if (event.repeat) return;
  pressedKeys.push(event.code);
  (0,_scripts_handle_click__WEBPACK_IMPORTED_MODULE_4__["default"])(event, keyboard.caseMode(), pressedKeys, keyboard);
});
document.addEventListener('keyup', function (event) {
  if (!Object.keys(_scripts_keyset__WEBPACK_IMPORTED_MODULE_6__["default"]).includes(event.code)) return;

  if (event.code !== 'CapsLock') {
    if (document.getElementById("".concat(event.code))) {
      document.getElementById("".concat(event.code)).classList.remove('active');

      if (event.key === 'Shift') {
        keyboard.shift();
      }
    }
  }

  var pos = pressedKeys.indexOf(event.code);
  pressedKeys.splice(pos, 1);
});
CapsLock.addEventListener('mousedown', function () {
  keyboard.isCapsLock = !keyboard.isCapsLock;
  CapsLock.classList.toggle('active');
  keyboard.capitalize();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keyboard);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9oYW5kbGUtYmFja3NwYWNlLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvaGFuZGxlLWNsaWNrLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvaGFuZGxlLWRlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2hhbmRsZS1lbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9pbmZvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2tleS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMva2V5c2V0LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9oZWFkaW5nLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZm90ZXh0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2lucHV0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2tleS5zYXNzIiwid2VicGFjazovLy8uL3N0eWxlcy9rZXlib2FyZC5zYXNzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3JlZW4uc2FzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hlYWRpbmcuc2Fzcz9jMjcyIiwid2VicGFjazovLy8uL3N0eWxlcy9pbmZvdGV4dC5zYXNzP2YzZGQiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2lucHV0LnNhc3M/MDc1YyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMva2V5LnNhc3M/YmNlMCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMva2V5Ym9hcmQuc2Fzcz9lZGVhIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3JlZW4uc2Fzcz9iNGVkIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlTGF5b3V0KGtleWJvYXJkLCBwcmVzc2VkS2V5cykge1xuICBjb25zdCBjaGFuZ2VMYXlvdXRLZXlzID0gWydDb250cm9sTGVmdCcsICdBbHRMZWZ0J107XG4gIGlmIChwcmVzc2VkS2V5cy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgbGV0IHJ1bkNoYW5nZUxheW91dCA9IHRydWU7XG4gIGxldCBydW5TaGlmdCA9IHRydWU7XG4gIGNoYW5nZUxheW91dEtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwcmVzc2VkS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBydW5DaGFuZ2VMYXlvdXQgPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICBpZiAocnVuQ2hhbmdlTGF5b3V0KSB7XG4gICAgaWYgKGtleWJvYXJkLmlzQ2Fwc0xvY2spIHtcbiAgICAgIGtleWJvYXJkLmNhcGl0YWxpemUoKTtcbiAgICAgIGtleWJvYXJkLmNoYW5nZUxheW91dCgobG9jYWxTdG9yYWdlLmxheW91dCA9PT0gJ2xhdCcpID8gJ3J1cycgOiAnbGF0Jyk7XG4gICAgICBrZXlib2FyZC5jYXBpdGFsaXplKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleWJvYXJkLmNoYW5nZUxheW91dCgobG9jYWxTdG9yYWdlLmxheW91dCA9PT0gJ2xhdCcpID8gJ3J1cycgOiAnbGF0Jyk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghcHJlc3NlZEtleXMuaW5jbHVkZXMoJ1NoaWZ0TGVmdCcpICYmICFwcmVzc2VkS2V5cy5pbmNsdWRlcygnU2hpZnRSaWdodCcpKSB7XG4gICAgcnVuU2hpZnQgPSBmYWxzZTtcbiAgfVxuICBpZiAocnVuU2hpZnQpIHtcbiAgICBrZXlib2FyZC5zaGlmdCgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVCYWNrc3BhY2UoKSB7XG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JlZW4nKTtcbiAgc2NyZWVuLmZvY3VzKCk7XG4gIGlmIChzY3JlZW4udmFsdWUubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGNvbnN0IHRleHQgPSBzY3JlZW4udmFsdWU7XG4gIGNvbnN0IHN0YXJ0ID0gc2NyZWVuLnNlbGVjdGlvblN0YXJ0O1xuICBjb25zdCBlbmQgPSBzY3JlZW4uc2VsZWN0aW9uRW5kO1xuICBpZiAoc3RhcnQgPCBlbmQpIHtcbiAgICBjb25zdCB0ZXh0MSA9IChzdGFydCA+IDApID8gdGV4dC5zbGljZSgwLCBzdGFydCkgOiAnJztcbiAgICBjb25zdCB0ZXh0MiA9IChlbmQgPCB0ZXh0Lmxlbmd0aCkgPyB0ZXh0LnNsaWNlKGVuZCkgOiAnJztcbiAgICBzY3JlZW4udmFsdWUgPSB0ZXh0MSArIHRleHQyO1xuICAgIHNjcmVlbi5zZWxlY3Rpb25TdGFydCA9IHRleHQxLmxlbmd0aDtcbiAgICBzY3JlZW4uc2VsZWN0aW9uRW5kID0gdGV4dDEubGVuZ3RoO1xuICB9IGVsc2UgaWYgKHN0YXJ0ID4gMCkge1xuICAgIGNvbnN0IHRleHQxID0gKHN0YXJ0IC0gMSA+IDApID8gdGV4dC5zbGljZSgwLCBzdGFydCAtIDEpIDogJyc7XG4gICAgY29uc3QgdGV4dDIgPSAoc3RhcnQgPCB0ZXh0Lmxlbmd0aCkgPyB0ZXh0LnNsaWNlKHN0YXJ0KSA6ICcnO1xuICAgIHNjcmVlbi52YWx1ZSA9IHRleHQxICsgdGV4dDI7XG4gICAgc2NyZWVuLnNlbGVjdGlvblN0YXJ0ID0gdGV4dDEubGVuZ3RoO1xuICAgIHNjcmVlbi5zZWxlY3Rpb25FbmQgPSB0ZXh0MS5sZW5ndGg7XG4gIH1cbn1cbiIsImltcG9ydCBrZXlTZXQgZnJvbSAnLi9rZXlzZXQnO1xuaW1wb3J0IGhhbmRsZUJhY2tzcGFjZSBmcm9tICcuL2hhbmRsZS1iYWNrc3BhY2UnO1xuaW1wb3J0IGhhbmRsZUVudGVyVGFiIGZyb20gJy4vaGFuZGxlLWVudGVyJztcbmltcG9ydCBoYW5kbGVEZWwgZnJvbSAnLi9oYW5kbGUtZGVsJztcbmltcG9ydCBjaGFuZ2VMYXlvdXQgZnJvbSAnLi9jaGFuZ2VMYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCwgY2FzZU1vZGUsIHByZXNzZWRLZXlzLCBrZXlib2FyZCkge1xuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJyk7XG4gIGlmIChldmVudC5rZXkgPT09ICdBbHQnICYmICFwcmVzc2VkS2V5cy5pbmNsdWRlcygnU2hpZnRMZWZ0JykgJiYgIXByZXNzZWRLZXlzLmluY2x1ZGVzKCdTaGlmdFJpZ2h0JykpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNjcmVlbi5mb2N1cygpO1xuICAgIGNoYW5nZUxheW91dChrZXlib2FyZCwgcHJlc3NlZEtleXMpO1xuICB9XG4gIGlmIChldmVudC5jb2RlID09PSAnQ29udHJvbExlZnQnIHx8IGV2ZW50LmtleSA9PT0gJ1NoaWZ0Jykge1xuICAgIGNoYW5nZUxheW91dChrZXlib2FyZCwgcHJlc3NlZEtleXMpO1xuICB9XG4gIGlmIChldmVudC5jb2RlKSB7XG4gICAgY29uc3Qga2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZXZlbnQuY29kZX1gKTtcbiAgICBpZiAoIWtleVNldFtldmVudC5jb2RlXS5tb2QpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0ZXh0ID0ga2V5LmlubmVySFRNTDtcbiAgICAgIHNjcmVlbi5mb2N1cygpO1xuICAgICAgc2NyZWVuLnNldFJhbmdlVGV4dCh0ZXh0LCBzY3JlZW4uc2VsZWN0aW9uU3RhcnQsIHNjcmVlbi5zZWxlY3Rpb25FbmQsICdlbmQnKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdUYWInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaGFuZGxlRW50ZXJUYWIoJ1xcdCcpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIGhhbmRsZUJhY2tzcGFjZSgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgaGFuZGxlRW50ZXJUYWIoJ1xcbicpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgIGhhbmRsZURlbCgpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93VXAnIHx8IGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nXG4gICAgICB8fCBldmVudC5jb2RlID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5jb2RlID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBrZXkuaW5uZXJIVE1MO1xuICAgICAgc2NyZWVuLmZvY3VzKCk7XG4gICAgICBzY3JlZW4uc2V0UmFuZ2VUZXh0KHRleHQsIHNjcmVlbi5zZWxlY3Rpb25TdGFydCwgc2NyZWVuLnNlbGVjdGlvbkVuZCwgJ2VuZCcpO1xuICAgIH1cbiAgfSBlbHNlIGlmICgha2V5U2V0W2V2ZW50LnRhcmdldC5pZF0ubW9kKSB7XG4gICAgY29uc3QgdGV4dCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XG4gICAgc2NyZWVuLmZvY3VzKCk7XG4gICAgc2NyZWVuLnNldFJhbmdlVGV4dCh0ZXh0LCBzY3JlZW4uc2VsZWN0aW9uU3RhcnQsIHNjcmVlbi5zZWxlY3Rpb25FbmQsICdlbmQnKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgaGFuZGxlQmFja3NwYWNlKCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnRW50ZXInKSB7XG4gICAgaGFuZGxlRW50ZXJUYWIoJ1xcbicpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ0RlbGV0ZScpIHtcbiAgICBoYW5kbGVEZWwoKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdUYWInKSB7XG4gICAgaGFuZGxlRW50ZXJUYWIoJ1xcdCcpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ0Fycm93VXAnIHx8IGV2ZW50LnRhcmdldC5pZCA9PT0gJ0Fycm93RG93bidcbiAgICB8fCBldmVudC50YXJnZXQuaWQgPT09ICdBcnJvd0xlZnQnIHx8IGV2ZW50LnRhcmdldC5pZCA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgY29uc3QgdGV4dCA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XG4gICAgc2NyZWVuLmZvY3VzKCk7XG4gICAgc2NyZWVuLnNldFJhbmdlVGV4dCh0ZXh0LCBzY3JlZW4uc2VsZWN0aW9uU3RhcnQsIHNjcmVlbi5zZWxlY3Rpb25FbmQsICdlbmQnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRGVsKCkge1xuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJyk7XG4gIHNjcmVlbi5mb2N1cygpO1xuICBpZiAoc2NyZWVuLnZhbHVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCB0ZXh0ID0gc2NyZWVuLnZhbHVlO1xuICBjb25zdCBzdGFydCA9IHNjcmVlbi5zZWxlY3Rpb25TdGFydDtcbiAgY29uc3QgZW5kID0gc2NyZWVuLnNlbGVjdGlvbkVuZDtcbiAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgY29uc3QgdGV4dDEgPSAoc3RhcnQgPiAwKSA/IHRleHQuc2xpY2UoMCwgc3RhcnQpIDogJyc7XG4gICAgY29uc3QgdGV4dDIgPSAoZW5kIDwgdGV4dC5sZW5ndGgpID8gdGV4dC5zbGljZShlbmQpIDogJyc7XG4gICAgc2NyZWVuLnZhbHVlID0gdGV4dDEgKyB0ZXh0MjtcbiAgICBzY3JlZW4uc2VsZWN0aW9uU3RhcnQgPSB0ZXh0MS5sZW5ndGg7XG4gICAgc2NyZWVuLnNlbGVjdGlvbkVuZCA9IHRleHQxLmxlbmd0aDtcbiAgICBzY3JlZW4uZm9jdXMoKTtcbiAgfSBlbHNlIGlmIChzdGFydCA+IDApIHtcbiAgICBjb25zdCB0ZXh0MSA9IChzdGFydCAtIDEgPj0gMCkgPyB0ZXh0LnNsaWNlKDAsIHN0YXJ0KSA6ICcnO1xuICAgIGNvbnN0IHRleHQyID0gKHN0YXJ0IDwgdGV4dC5sZW5ndGgpID8gdGV4dC5zbGljZShzdGFydCArIDEpIDogJyc7XG4gICAgc2NyZWVuLnZhbHVlID0gdGV4dDEgKyB0ZXh0MjtcbiAgICBzY3JlZW4uc2VsZWN0aW9uU3RhcnQgPSB0ZXh0MS5sZW5ndGg7XG4gICAgc2NyZWVuLnNlbGVjdGlvbkVuZCA9IHRleHQxLmxlbmd0aDtcbiAgICBzY3JlZW4uZm9jdXMoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlRW50ZXJUYWIobW9kKSB7XG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JlZW4nKTtcbiAgc2NyZWVuLmZvY3VzKCk7XG4gIGxldCB0ZXh0ID0gc2NyZWVuLnZhbHVlO1xuICBjb25zdCBzdGFydCA9IHNjcmVlbi5zZWxlY3Rpb25TdGFydDtcbiAgY29uc3QgZW5kID0gc2NyZWVuLnNlbGVjdGlvbkVuZDtcbiAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgY29uc3QgdGV4dDEgPSAoc3RhcnQgPiAwKSA/IHRleHQuc2xpY2UoMCwgc3RhcnQpIDogJyc7XG4gICAgY29uc3QgdGV4dDIgPSAoZW5kIDwgdGV4dC5sZW5ndGgpID8gdGV4dC5zbGljZShlbmQpIDogJyc7XG4gICAgc2NyZWVuLnZhbHVlID0gYCR7dGV4dDF9JHttb2R9JHt0ZXh0Mn1gO1xuICAgIHNjcmVlbi5zZWxlY3Rpb25TdGFydCA9IHRleHQxLmxlbmd0aDtcbiAgICBzY3JlZW4uc2VsZWN0aW9uRW5kID0gdGV4dDEubGVuZ3RoO1xuICB9IGVsc2UgaWYgKHN0YXJ0ID09PSBzY3JlZW4udmFsdWUubGVuZ3RoICYmIHN0YXJ0ID09PSBlbmQpIHtcbiAgICB0ZXh0ICs9IG1vZDtcbiAgICBzY3JlZW4udmFsdWUgPSB0ZXh0O1xuICB9IGVsc2UgaWYgKHN0YXJ0ID4gMCkge1xuICAgIGNvbnN0IHRleHQxID0gKHN0YXJ0IC0gMSA+PSAwKSA/IHRleHQuc2xpY2UoMCwgc3RhcnQpIDogJyc7XG4gICAgY29uc3QgdGV4dDIgPSAoc3RhcnQgPCB0ZXh0Lmxlbmd0aCkgPyB0ZXh0LnNsaWNlKHN0YXJ0KSA6ICcnO1xuICAgIHNjcmVlbi52YWx1ZSA9IGAke3RleHQxfSR7bW9kfSR7dGV4dDJ9YDtcbiAgICBzY3JlZW4uc2VsZWN0aW9uU3RhcnQgPSB0ZXh0MS5sZW5ndGg7XG4gICAgc2NyZWVuLnNlbGVjdGlvbkVuZCA9IHRleHQxLmxlbmd0aDtcbiAgfVxufVxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvaGVhZGluZy5zYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGluZ0NvbXBvbmVudCgpIHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnUlNTIFZpcnR1YWwga2V5Ym9hcmQnO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcbiAgcmV0dXJuIGhlYWRpbmc7XG59XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9pbmZvdGV4dC5zYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5mb3RleHRDb21wb25lbnQoKSB7XG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGluZm8uaW5uZXJIVE1MID0gYFRoZSBrZXlib2FyZCB3YXMgY3JlYXRlZCBpbiB0aGUgV2luZG93cyBvcGVyYXRpbmcgc3lzdGVtPGJyPlxuICBUaGUgY29tYmluYXRpb24gdG8gc3dpdGNoIHRoZSBsYW5ndWFnZSBsYXlvdXQ6IGxlZnQgQ3RybCArIGxlZnQgQWx0YDtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XG4gIHJldHVybiBpbmZvO1xufVxuIiwiaW1wb3J0ICcuLi9zdHlsZXMva2V5LnNhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBrZXlDb21wb25lbnQoKSB7XG4gIGNvbnN0IGtleSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBrZXkuY2xhc3NMaXN0LmFkZCgna2V5Jyk7XG4gIHJldHVybiBrZXk7XG59XG4iLCJpbXBvcnQga2V5Q29tcG9uZW50IGZyb20gJy4va2V5JztcbmltcG9ydCBrZXlTZXQgZnJvbSAnLi9rZXlzZXQnO1xuaW1wb3J0ICcuLi9zdHlsZXMva2V5Ym9hcmQuc2Fzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IobGF5b3V0ID0gKGxvY2FsU3RvcmFnZS5sYXlvdXQpID8gbG9jYWxTdG9yYWdlLmxheW91dCA6ICdsYXQnKSB7XG4gICAgdGhpcy5pc0NhcHNMb2NrID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkJyk7XG4gICAgT2JqZWN0LmtleXMoa2V5U2V0KS5mb3JFYWNoKChlKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlDb21wb25lbnQoKTtcbiAgICAgIHRoaXMubm9kZS5hcHBlbmRDaGlsZChrZXkpO1xuICAgICAga2V5LmlkID0gYCR7ZX1gO1xuICAgICAga2V5LmlubmVySFRNTCA9IGtleVNldFtlXVtsYXlvdXRdLnJlZztcbiAgICAgIGtleS5zdHlsZS53aWR0aCA9IGAke2tleVNldFtlXS5zaXplID8ga2V5U2V0W2VdLnNpemUgOiAnNDRweCd9YDtcbiAgICAgIGlmIChrZXlTZXRbZV0ubW9kKSBrZXkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgICB9KTtcbiAgfVxuXG4gIGNoYW5nZUxheW91dChsYXlvdXQpIHtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5ub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2tleScpO1xuICAgIFsuLi5rZXlzXS5mb3JFYWNoKChrZXksIGkpID0+IHtcbiAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5U2V0W2tleS5pZF1bbGF5b3V0XS5yZWc7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLmxheW91dCA9IChsYXlvdXQgPT09ICdydXMnKSA/ICdydXMnIDogJ2xhdCc7XG4gIH1cblxuICBjYXBpdGFsaXplKGxheW91dCA9IChsb2NhbFN0b3JhZ2UubGF5b3V0KSA/IGxvY2FsU3RvcmFnZS5sYXlvdXQgOiAnbGF0Jykge1xuICAgIGNvbnN0IGN1cnJlbnRNb2RlID0gdGhpcy5jYXNlTW9kZSgpO1xuICAgIGNvbnN0IGNhc2VNb2RlID0gKGN1cnJlbnRNb2RlID09PSAncmVnJykgPyAnc2hpZnQnIDogJ3JlZyc7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMubm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdrZXknKTtcbiAgICBbLi4ua2V5c10uZm9yRWFjaCgoa2V5LCBpKSA9PiB7XG4gICAgICBjb25zdCBjaGFyID0ga2V5LmlkLnNsaWNlKDAsIDMpO1xuICAgICAgY29uc3QgcnVzQ2hhciA9IGNoYXIgPT09ICdLZXknIHx8IGtleS5pZCA9PT0gJ0JhY2txdW90ZSdcbiAgICAgIHx8IGtleS5pZCA9PT0gJ0JyYWNrZXRMZWZ0JyB8fCBrZXkuaWQgPT09ICdCcmFja2V0UmlnaHQnXG4gICAgICB8fCBrZXkuaWQgPT09ICdTZW1pY29sb24nIHx8IGtleS5pZCA9PT0gJ1F1b3RlJ1xuICAgICAgfHwga2V5LmlkID09PSAnQ29tbWEnIHx8IGtleS5pZCA9PT0gJ1BlcmlvZCc7XG4gICAgICBpZiAobGF5b3V0ID09PSAncnVzJyAmJiBydXNDaGFyKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5U2V0W2tleS5pZF1bbGF5b3V0XVtjYXNlTW9kZV07XG4gICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2xhdCcgJiYgY2hhciA9PT0gJ0tleScpIHtcbiAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlTZXRba2V5LmlkXVtsYXlvdXRdW2Nhc2VNb2RlXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNoaWZ0KGxheW91dCA9IChsb2NhbFN0b3JhZ2UubGF5b3V0KSA/IGxvY2FsU3RvcmFnZS5sYXlvdXQgOiAnbGF0Jykge1xuICAgIGNvbnN0IGN1cnJlbnRNb2RlID0gdGhpcy5jYXNlTW9kZSgpO1xuICAgIGNvbnN0IGNhc2VNb2RlID0gKGN1cnJlbnRNb2RlID09PSAncmVnJykgPyAnc2hpZnQnIDogJ3JlZyc7XG4gICAgY29uc3QgYW50aUNhc2VNb2RlID0gKGNhc2VNb2RlID09PSAnc2hpZnQnKSA/ICdyZWcnIDogJ3NoaWZ0JztcbiAgICBjb25zdCBrZXlzID0gdGhpcy5ub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2tleScpO1xuICAgIGlmICh0aGlzLmlzQ2Fwc0xvY2spIHtcbiAgICAgIFsuLi5rZXlzXS5mb3JFYWNoKChrZXksIGkpID0+IHtcbiAgICAgICAgY29uc3QgY2hhciA9IGtleS5pZC5zbGljZSgwLCAzKTtcbiAgICAgICAgY29uc3QgcnVzQ2hhciA9IGNoYXIgPT09ICdLZXknIHx8IGtleS5pZCA9PT0gJ0JhY2txdW90ZSdcbiAgICAgICAgfHwga2V5LmlkID09PSAnQnJhY2tldExlZnQnIHx8IGtleS5pZCA9PT0gJ0JyYWNrZXRSaWdodCdcbiAgICAgICAgfHwga2V5LmlkID09PSAnU2VtaWNvbG9uJyB8fCBrZXkuaWQgPT09ICdRdW90ZSdcbiAgICAgICAgfHwga2V5LmlkID09PSAnQ29tbWEnIHx8IGtleS5pZCA9PT0gJ1BlcmlvZCc7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdydXMnICYmIHJ1c0NoYXIpIHtcbiAgICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleVNldFtrZXkuaWRdW2xheW91dF1bY2FzZU1vZGVdO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ3J1cycgJiYgIXJ1c0NoYXIpIHtcbiAgICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleVNldFtrZXkuaWRdW2xheW91dF1bYW50aUNhc2VNb2RlXTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdsYXQnICYmIGNoYXIgPT09ICdLZXknKSB7XG4gICAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlTZXRba2V5LmlkXVtsYXlvdXRdW2Nhc2VNb2RlXTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdsYXQnICYmIGNoYXIgIT09ICdLZXknKSB7XG4gICAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlTZXRba2V5LmlkXVtsYXlvdXRdW2FudGlDYXNlTW9kZV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBbLi4ua2V5c10uZm9yRWFjaCgoa2V5LCBpKSA9PiB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5U2V0W2tleS5pZF1bbGF5b3V0XVtjYXNlTW9kZV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjYXNlTW9kZShsYXlvdXQgPSAobG9jYWxTdG9yYWdlLmxheW91dCkgPyBsb2NhbFN0b3JhZ2UubGF5b3V0IDogJ2xhdCcpIHtcbiAgICBjb25zdCBrZXlzID0gdGhpcy5ub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2tleScpO1xuICAgIGxldCBjYXNlTW9kZTtcbiAgICBpZiAobGF5b3V0ID09PSAnbGF0Jykge1xuICAgICAgY2FzZU1vZGUgPSAoa2V5cy5LZXlRLmlubmVySFRNTCA9PT0gJ3EnKSA/ICdyZWcnIDogJ3NoaWZ0JztcbiAgICB9IGVsc2Uge1xuICAgICAgY2FzZU1vZGUgPSAoa2V5cy5LZXlRLmlubmVySFRNTCA9PT0gJ9C5JykgPyAncmVnJyA6ICdzaGlmdCc7XG4gICAgfVxuICAgIHJldHVybiBjYXNlTW9kZTtcbiAgfVxufVxuIiwiY29uc3Qga2V5U2V0ID0ge1xuICBCYWNrcXVvdGU6IHsgbGF0OiB7IHJlZzogJ2AnLCBzaGlmdDogJ34nIH0sIHJ1czogeyByZWc6ICfRkScsIHNoaWZ0OiAn0IEnIH0gfSxcbiAgRGlnaXQxOiB7IGxhdDogeyByZWc6ICcxJywgc2hpZnQ6ICchJyB9LCBydXM6IHsgcmVnOiAnMScsIHNoaWZ0OiAnIScgfSB9LFxuICBEaWdpdDI6IHsgbGF0OiB7IHJlZzogJzInLCBzaGlmdDogJ0AnIH0sIHJ1czogeyByZWc6ICcyJywgc2hpZnQ6ICdcIicgfSB9LFxuICBEaWdpdDM6IHsgbGF0OiB7IHJlZzogJzMnLCBzaGlmdDogJyMnIH0sIHJ1czogeyByZWc6ICczJywgc2hpZnQ6ICfihJYnIH0gfSxcbiAgRGlnaXQ0OiB7IGxhdDogeyByZWc6ICc0Jywgc2hpZnQ6ICckJyB9LCBydXM6IHsgcmVnOiAnNCcsIHNoaWZ0OiAnOycgfSB9LFxuICBEaWdpdDU6IHsgbGF0OiB7IHJlZzogJzUnLCBzaGlmdDogJyUnIH0sIHJ1czogeyByZWc6ICc1Jywgc2hpZnQ6ICclJyB9IH0sXG4gIERpZ2l0NjogeyBsYXQ6IHsgcmVnOiAnNicsIHNoaWZ0OiAnXicgfSwgcnVzOiB7IHJlZzogJzYnLCBzaGlmdDogJzonIH0gfSxcbiAgRGlnaXQ3OiB7IGxhdDogeyByZWc6ICc3Jywgc2hpZnQ6ICcmJyB9LCBydXM6IHsgcmVnOiAnNycsIHNoaWZ0OiAnPycgfSB9LFxuICBEaWdpdDg6IHsgbGF0OiB7IHJlZzogJzgnLCBzaGlmdDogJyonIH0sIHJ1czogeyByZWc6ICc4Jywgc2hpZnQ6ICcqJyB9IH0sXG4gIERpZ2l0OTogeyBsYXQ6IHsgcmVnOiAnOScsIHNoaWZ0OiAnKCcgfSwgcnVzOiB7IHJlZzogJzknLCBzaGlmdDogJygnIH0gfSxcbiAgRGlnaXQwOiB7IGxhdDogeyByZWc6ICcwJywgc2hpZnQ6ICcpJyB9LCBydXM6IHsgcmVnOiAnMCcsIHNoaWZ0OiAnKScgfSB9LFxuICBNaW51czogeyBsYXQ6IHsgcmVnOiAnLScsIHNoaWZ0OiAnXycgfSwgcnVzOiB7IHJlZzogJy0nLCBzaGlmdDogJ18nIH0gfSxcbiAgRXF1YWw6IHsgbGF0OiB7IHJlZzogJz0nLCBzaGlmdDogJysnIH0sIHJ1czogeyByZWc6ICc9Jywgc2hpZnQ6ICcrJyB9IH0sXG4gIEJhY2tzcGFjZToge1xuICAgIGxhdDogeyByZWc6ICdCYWNrc3BhY2UnLCBzaGlmdDogJ0JhY2tzcGFjZScgfSxcbiAgICBydXM6IHsgcmVnOiAnQmFja3NwYWNlJywgc2hpZnQ6ICdCYWNrc3BhY2UnIH0sXG4gICAgc2l6ZTogJzkycHgnLFxuICAgIG1vZDogdHJ1ZSxcbiAgfSxcbiAgVGFiOiB7XG4gICAgbGF0OiB7IHJlZzogJ1RhYicsIHNoaWZ0OiAnVGFiJyB9LFxuICAgIHJ1czogeyByZWc6ICdUYWInLCBzaGlmdDogJ1RhYicgfSxcbiAgICBzaXplOiAnNjlweCcsXG4gICAgbW9kOiB0cnVlLFxuICB9LFxuICBLZXlROiB7IGxhdDogeyByZWc6ICdxJywgc2hpZnQ6ICdRJyB9LCBydXM6IHsgcmVnOiAn0LknLCBzaGlmdDogJ9CZJyB9IH0sXG4gIEtleVc6IHsgbGF0OiB7IHJlZzogJ3cnLCBzaGlmdDogJ1cnIH0sIHJ1czogeyByZWc6ICfRhicsIHNoaWZ0OiAn0KYnIH0gfSxcbiAgS2V5RTogeyBsYXQ6IHsgcmVnOiAnZScsIHNoaWZ0OiAnRScgfSwgcnVzOiB7IHJlZzogJ9GDJywgc2hpZnQ6ICfQoycgfSB9LFxuICBLZXlSOiB7IGxhdDogeyByZWc6ICdyJywgc2hpZnQ6ICdSJyB9LCBydXM6IHsgcmVnOiAn0LonLCBzaGlmdDogJ9CaJyB9IH0sXG4gIEtleVQ6IHsgbGF0OiB7IHJlZzogJ3QnLCBzaGlmdDogJ1QnIH0sIHJ1czogeyByZWc6ICfQtScsIHNoaWZ0OiAn0JUnIH0gfSxcbiAgS2V5WTogeyBsYXQ6IHsgcmVnOiAneScsIHNoaWZ0OiAnWScgfSwgcnVzOiB7IHJlZzogJ9C9Jywgc2hpZnQ6ICfQnScgfSB9LFxuICBLZXlVOiB7IGxhdDogeyByZWc6ICd1Jywgc2hpZnQ6ICdVJyB9LCBydXM6IHsgcmVnOiAn0LMnLCBzaGlmdDogJ9CTJyB9IH0sXG4gIEtleUk6IHsgbGF0OiB7IHJlZzogJ2knLCBzaGlmdDogJ0knIH0sIHJ1czogeyByZWc6ICfRiCcsIHNoaWZ0OiAn0KgnIH0gfSxcbiAgS2V5TzogeyBsYXQ6IHsgcmVnOiAnbycsIHNoaWZ0OiAnTycgfSwgcnVzOiB7IHJlZzogJ9GJJywgc2hpZnQ6ICfQqScgfSB9LFxuICBLZXlQOiB7IGxhdDogeyByZWc6ICdwJywgc2hpZnQ6ICdQJyB9LCBydXM6IHsgcmVnOiAn0LcnLCBzaGlmdDogJ9CXJyB9IH0sXG4gIEJyYWNrZXRMZWZ0OiB7IGxhdDogeyByZWc6ICdbJywgc2hpZnQ6ICd7JyB9LCBydXM6IHsgcmVnOiAn0YUnLCBzaGlmdDogJ9ClJyB9IH0sXG4gIEJyYWNrZXRSaWdodDogeyBsYXQ6IHsgcmVnOiAnXScsIHNoaWZ0OiAnfScgfSwgcnVzOiB7IHJlZzogJ9GKJywgc2hpZnQ6ICfQqicgfSB9LFxuICBCYWNrc2xhc2g6IHsgbGF0OiB7IHJlZzogJ1xcXFwnLCBzaGlmdDogJ3wnIH0sIHJ1czogeyByZWc6ICdcXFxcJywgc2hpZnQ6ICcvJyB9IH0sXG4gIERlbGV0ZTogeyBsYXQ6IHsgcmVnOiAnRGVsJywgc2hpZnQ6ICdEZWwnIH0sIHJ1czogeyByZWc6ICdEZWwnLCBzaGlmdDogJ0RlbCcgfSwgbW9kOiB0cnVlIH0sXG4gIENhcHNMb2NrOiB7XG4gICAgbGF0OiB7IHJlZzogJ0NhcHNMb2NrJywgc2hpZnQ6ICdDYXBzTG9jaycgfSwgcnVzOiB7IHJlZzogJ0NhcHNMb2NrJywgc2hpZnQ6ICdDYXBzTG9jaycgfSwgbW9kOiB0cnVlLCBzaXplOiAnOTBweCcsXG4gIH0sXG4gIEtleUE6IHsgbGF0OiB7IHJlZzogJ2EnLCBzaGlmdDogJ0EnIH0sIHJ1czogeyByZWc6ICfRhCcsIHNoaWZ0OiAn0KQnIH0gfSxcbiAgS2V5UzogeyBsYXQ6IHsgcmVnOiAncycsIHNoaWZ0OiAnUycgfSwgcnVzOiB7IHJlZzogJ9GLJywgc2hpZnQ6ICfQqycgfSB9LFxuICBLZXlEOiB7IGxhdDogeyByZWc6ICdkJywgc2hpZnQ6ICdEJyB9LCBydXM6IHsgcmVnOiAn0LInLCBzaGlmdDogJ9CSJyB9IH0sXG4gIEtleUY6IHsgbGF0OiB7IHJlZzogJ2YnLCBzaGlmdDogJ0YnIH0sIHJ1czogeyByZWc6ICfQsCcsIHNoaWZ0OiAn0JAnIH0gfSxcbiAgS2V5RzogeyBsYXQ6IHsgcmVnOiAnZycsIHNoaWZ0OiAnRycgfSwgcnVzOiB7IHJlZzogJ9C/Jywgc2hpZnQ6ICfQnycgfSB9LFxuICBLZXlIOiB7IGxhdDogeyByZWc6ICdoJywgc2hpZnQ6ICdIJyB9LCBydXM6IHsgcmVnOiAn0YAnLCBzaGlmdDogJ9CgJyB9IH0sXG4gIEtleUo6IHsgbGF0OiB7IHJlZzogJ2onLCBzaGlmdDogJ0onIH0sIHJ1czogeyByZWc6ICfQvicsIHNoaWZ0OiAn0J4nIH0gfSxcbiAgS2V5SzogeyBsYXQ6IHsgcmVnOiAnaycsIHNoaWZ0OiAnSycgfSwgcnVzOiB7IHJlZzogJ9C7Jywgc2hpZnQ6ICfQmycgfSB9LFxuICBLZXlMOiB7IGxhdDogeyByZWc6ICdsJywgc2hpZnQ6ICdMJyB9LCBydXM6IHsgcmVnOiAn0LQnLCBzaGlmdDogJ9CUJyB9IH0sXG4gIFNlbWljb2xvbjogeyBsYXQ6IHsgcmVnOiAnOycsIHNoaWZ0OiAnOicgfSwgcnVzOiB7IHJlZzogJ9C2Jywgc2hpZnQ6ICfQlicgfSB9LFxuICBRdW90ZTogeyBsYXQ6IHsgcmVnOiBcIidcIiwgc2hpZnQ6ICdcIicgfSwgcnVzOiB7IHJlZzogJ9GNJywgc2hpZnQ6ICfQrScgfSB9LFxuICBFbnRlcjoge1xuICAgIGxhdDogeyByZWc6ICdFbnRlcicsIHNoaWZ0OiAnRW50ZXInIH0sIHJ1czogeyByZWc6ICdFbnRlcicsIHNoaWZ0OiAnRW50ZXInIH0sIG1vZDogdHJ1ZSwgc2l6ZTogJzEwNHB4JyxcbiAgfSxcbiAgU2hpZnRMZWZ0OiB7XG4gICAgbGF0OiB7IHJlZzogJ1NoaWZ0Jywgc2hpZnQ6ICdTaGlmdCcgfSwgcnVzOiB7IHJlZzogJ1NoaWZ0Jywgc2hpZnQ6ICdTaGlmdCcgfSwgbW9kOiB0cnVlLCBzaXplOiAnMTEycHgnLFxuICB9LFxuICBLZXlaOiB7IGxhdDogeyByZWc6ICd6Jywgc2hpZnQ6ICdaJyB9LCBydXM6IHsgcmVnOiAn0Y8nLCBzaGlmdDogJ9CvJyB9IH0sXG4gIEtleVg6IHsgbGF0OiB7IHJlZzogJ3gnLCBzaGlmdDogJ1gnIH0sIHJ1czogeyByZWc6ICfRhycsIHNoaWZ0OiAn0KcnIH0gfSxcbiAgS2V5QzogeyBsYXQ6IHsgcmVnOiAnYycsIHNoaWZ0OiAnQycgfSwgcnVzOiB7IHJlZzogJ9GBJywgc2hpZnQ6ICfQoScgfSB9LFxuICBLZXlWOiB7IGxhdDogeyByZWc6ICd2Jywgc2hpZnQ6ICdWJyB9LCBydXM6IHsgcmVnOiAn0LwnLCBzaGlmdDogJ9CcJyB9IH0sXG4gIEtleUI6IHsgbGF0OiB7IHJlZzogJ2InLCBzaGlmdDogJ0InIH0sIHJ1czogeyByZWc6ICfQuCcsIHNoaWZ0OiAn0JgnIH0gfSxcbiAgS2V5TjogeyBsYXQ6IHsgcmVnOiAnbicsIHNoaWZ0OiAnTicgfSwgcnVzOiB7IHJlZzogJ9GCJywgc2hpZnQ6ICfQoicgfSB9LFxuICBLZXlNOiB7IGxhdDogeyByZWc6ICdtJywgc2hpZnQ6ICdNJyB9LCBydXM6IHsgcmVnOiAn0YwnLCBzaGlmdDogJ9CsJyB9IH0sXG4gIENvbW1hOiB7IGxhdDogeyByZWc6ICcsJywgc2hpZnQ6ICc8JyB9LCBydXM6IHsgcmVnOiAn0LEnLCBzaGlmdDogJ9CRJyB9IH0sXG4gIFBlcmlvZDogeyBsYXQ6IHsgcmVnOiAnLicsIHNoaWZ0OiAnPicgfSwgcnVzOiB7IHJlZzogJ9GOJywgc2hpZnQ6ICfQricgfSB9LFxuICBTbGFzaDogeyBsYXQ6IHsgcmVnOiAnLycsIHNoaWZ0OiAnPycgfSwgcnVzOiB7IHJlZzogJy4nLCBzaGlmdDogJywnIH0gfSxcbiAgQXJyb3dVcDogeyBsYXQ6IHsgcmVnOiAn4ZCDJywgc2hpZnQ6ICfhkIMnIH0sIHJ1czogeyByZWc6ICfhkIMnLCBzaGlmdDogJ+GQgycgfSwgbW9kOiB0cnVlIH0sXG4gIFNoaWZ0UmlnaHQ6IHtcbiAgICBsYXQ6IHsgcmVnOiAnU2hpZnQnLCBzaGlmdDogJ1NoaWZ0JyB9LCBydXM6IHsgcmVnOiAnU2hpZnQnLCBzaGlmdDogJ1NoaWZ0JyB9LCBtb2Q6IHRydWUsIHNpemU6ICcxMDhweCcsXG4gIH0sXG4gIENvbnRyb2xMZWZ0OiB7XG4gICAgbGF0OiB7IHJlZzogJ0N0cmwnLCBzaGlmdDogJ0N0cmwnIH0sIHJ1czogeyByZWc6ICdDdHJsJywgc2hpZnQ6ICdDdHJsJyB9LCBtb2Q6IHRydWUsIHNpemU6ICc2MHB4JyxcbiAgfSxcbiAgTWV0YUxlZnQ6IHsgbGF0OiB7IHJlZzogJ1dpbicsIHNoaWZ0OiAnV2luJyB9LCBydXM6IHsgcmVnOiAnV2luJywgc2hpZnQ6ICdXaW4nIH0sIG1vZDogdHJ1ZSB9LFxuICBBbHRMZWZ0OiB7IGxhdDogeyByZWc6ICdBbHQnLCBzaGlmdDogJ0FsdCcgfSwgcnVzOiB7IHJlZzogJ0FsdCcsIHNoaWZ0OiAnQWx0JyB9LCBtb2Q6IHRydWUgfSxcbiAgU3BhY2U6IHsgbGF0OiB7IHJlZzogJyAnLCBzaGlmdDogJyAnIH0sIHJ1czogeyByZWc6ICcgJywgc2hpZnQ6ICcgJyB9LCBzaXplOiAnMzQycHgnIH0sXG4gIEFsdFJpZ2h0OiB7IGxhdDogeyByZWc6ICdBbHQnLCBzaGlmdDogJ0FsdCcgfSwgcnVzOiB7IHJlZzogJ0FsdCcsIHNoaWZ0OiAnQWx0JyB9LCBtb2Q6IHRydWUgfSxcbiAgQXJyb3dMZWZ0OiB7IGxhdDogeyByZWc6ICfhkIonLCBzaGlmdDogJ+GQiicgfSwgcnVzOiB7IHJlZzogJ+GQiicsIHNoaWZ0OiAn4ZCKJyB9LCBtb2Q6IHRydWUgfSxcbiAgQXJyb3dEb3duOiB7IGxhdDogeyByZWc6ICfhkIEnLCBzaGlmdDogJ+GQgScgfSwgcnVzOiB7IHJlZzogJ+GQgScsIHNoaWZ0OiAn4ZCBJyB9LCBtb2Q6IHRydWUgfSxcbiAgQXJyb3dSaWdodDogeyBsYXQ6IHsgcmVnOiAn4ZCFJywgc2hpZnQ6ICfhkIUnIH0sIHJ1czogeyByZWc6ICfhkIUnLCBzaGlmdDogJ+GQhScgfSwgbW9kOiB0cnVlIH0sXG4gIENvbnRyb2xSaWdodDoge1xuICAgIGxhdDogeyByZWc6ICdDdHJsJywgc2hpZnQ6ICdDdHJsJyB9LCBydXM6IHsgcmVnOiAnQ3RybCcsIHNoaWZ0OiAnQ3RybCcgfSwgbW9kOiB0cnVlLCBzaXplOiAnNTZweCcsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBrZXlTZXQ7XG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9zY3JlZW4uc2Fzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcmVlbkNvbXBvbmVudCgpIHtcbiAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgc2NyZWVuLmNsYXNzTGlzdC5hZGQoJ3NjcmVlbicpO1xuICByZXR1cm4gc2NyZWVuO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGluZyB7XFxuICBjb2xvcjogZGFya2dyZWVuO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGVzL2hlYWRpbmcuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRpbmdcXG4gIGNvbG9yOiBkYXJrZ3JlZW5cXG4gIGZvbnQtc2l6ZTogMzBweFxcbiAgZm9udC13ZWlnaHQ6IDkwMFxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZXMvaW5mb3RleHQuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pbmZvXFxuICBmb250LXNpemU6IDIwcHhcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIGdhcDogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGVzL2lucHV0LnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqXFxuICBtYXJnaW46IDBcXG4gIHBhZGRpbmc6IDBcXG5cXG5ib2R5XFxuICBkaXNwbGF5OiBmbGV4XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICBhbGlnbi1pdGVtczogY2VudGVyXFxuICBwYWRkaW5nOiAxMHB4IDEwcHhcXG4gIGdhcDogMTBweFxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5rZXkge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyM2QwZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2IoODcsIDkwLCA4Nyk7XFxuICBib3gtc2hhZG93OiAwIDZweCByZ2IoMCwgMzgsIDYpLCAwIDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC40KSwgaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogNDhweDtcXG59XFxuLmtleTpob3ZlciwgLmtleS5hY3RpdmUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogIzUxNmI1NSBsaW5lYXItZ3JhZGllbnQoIzViOWU2ZiwgIzU1OTI3NiA4MCUpO1xcbn1cXG4ua2V5OmFjdGl2ZSwgLmtleS5hY3RpdmUge1xcbiAgYm94LXNoYWRvdzogMCAycHggIzEzNTgxOSwgMCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC40KSwgaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDRweCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9rZXkuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQWRXO0VBZVgsNElBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFERjtBQUVFO0VBQ0UsZUFBQTtFQUNBLHlEQUFBO0FBQUo7QUFDRTtFQUNFLHFJQUFBO0VBQ0Esb0NBQUE7RUFDQSw0QkFBQTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRtYWluLWNvbG9yOiByZ2IoODcsIDkwLCA4NylcXG5cXG4ua2V5XFxuICBmb250LXNpemU6IDE2cHhcXG4gIHBhZGRpbmc6IDBcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRcXG4gIGNvbG9yOiAjZmZmXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcXG4gIHRleHQtc2hhZG93OiAwIC0xcHggcmdiYSgwLDAsMCwuNSlcXG4gIHVzZXItc2VsZWN0OiBub25lXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDIzZDBmXFxuICBib3JkZXItcmFkaXVzOiA1cHhcXG4gIG91dGxpbmU6IG5vbmVcXG4gIGJhY2tncm91bmQ6ICRtYWluLWNvbG9yXFxuICBib3gtc2hhZG93OiAwIDZweCByZ2IoMCwzOCw2KSwgMCAzcHggMTVweCByZ2JhKDAsMCwwLC40KSwgaW5zZXQgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMyksIGluc2V0IDAgMCAzcHggcmdiYSgyNTUsMjU1LDI1NSwuNSlcXG4gIHRyYW5zaXRpb246IC4yc1xcbiAgdGV4dC1hbGlnbjogY2VudGVyXFxuICBsaW5lLWhlaWdodDogNDhweFxcbiAgJjpob3ZlciwgJi5hY3RpdmVcXG4gICAgY3Vyc29yOiBwb2ludGVyXFxuICAgIGJhY2tncm91bmQ6ICM1MTZiNTUgbGluZWFyLWdyYWRpZW50KCM1YjllNmYsICM1NTkyNzYgODAlKVxcbiAgJjphY3RpdmUsICYuYWN0aXZlXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4ICMxMzU4MTksIDAgMXB4IDZweCByZ2JhKDAsMCwwLC40KSwgaW5zZXQgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuMyksIGluc2V0IDAgMCAzcHggcmdiYSgyNTUsMjU1LDI1NSwuNSlcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA0cHgpXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDRweClcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIua2V5Ym9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA3ODBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGJvcmRlcjogNHB4IGdyYXkgc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgcGFkZGluZzogNHB4IDVweCA4cHg7XFxuICByb3ctZ2FwOiA4cHg7XFxuICBjb2x1bW4tZ2FwOiA0cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9rZXlib2FyZC5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5rZXlib2FyZFxcbiAgZGlzcGxheTogZmxleFxcbiAgZmxleC13cmFwOiB3cmFwXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cXG4gIHdpZHRoOiA3ODBweFxcbiAgZm9udC1zaXplOiAyMHB4XFxuICBib3JkZXI6IDRweCBncmF5IHNvbGlkXFxuICBib3JkZXItcmFkaXVzOiAxMHB4XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXlcXG4gIHBhZGRpbmc6IDRweCA1cHggOHB4XFxuICByb3ctZ2FwOiA4cHhcXG4gIGNvbHVtbi1nYXA6IDRweFxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zY3JlZW4ge1xcbiAgd2lkdGg6IDUwdnc7XFxuICBtaW4td2lkdGg6IDc4MHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGVzL3NjcmVlbi5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2NyZWVuXFxuICB3aWR0aDogNTB2d1xcbiAgbWluLXdpZHRoOiA3ODBweFxcbiAgaGVpZ2h0OiAyMDBweFxcbiAgZm9udC1zaXplOiAyMHB4XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGluZy5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGluZy5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmZvdGV4dC5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5mb3RleHQuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5wdXQuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0LnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2tleS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4va2V5LnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2tleWJvYXJkLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9rZXlib2FyZC5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY3JlZW4uc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NjcmVlbi5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBoZWFkaW5nQ29tcG9uZW50IGZyb20gJy4vc2NyaXB0cy9oZWFkaW5nJztcbmltcG9ydCBzY3JlZW5Db21wb25lbnQgZnJvbSAnLi9zY3JpcHRzL3NjcmVlbic7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi9zY3JpcHRzL2tleWJvYXJkJztcbmltcG9ydCBpbmZvdGV4dENvbXBvbmVudCBmcm9tICcuL3NjcmlwdHMvaW5mb3RleHQnO1xuaW1wb3J0IGhhbmRsZUNsaWNrIGZyb20gJy4vc2NyaXB0cy9oYW5kbGUtY2xpY2snO1xuaW1wb3J0IGNoYW5nZUxheW91dCBmcm9tICcuL3NjcmlwdHMvY2hhbmdlTGF5b3V0JztcbmltcG9ydCBrZXlTZXQgZnJvbSAnLi9zY3JpcHRzL2tleXNldCc7XG5pbXBvcnQgJy4vc3R5bGVzL2lucHV0LnNhc3MnO1xuXG5jb25zdCBrZXlib2FyZCA9IG5ldyBLZXlib2FyZCgpO1xuY29uc3Qgc2NyZWVuID0gc2NyZWVuQ29tcG9uZW50KCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRpbmdDb21wb25lbnQoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmVlbik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGtleWJvYXJkLm5vZGUpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbmZvdGV4dENvbXBvbmVudCgpKTtcbmNvbnN0IENhcHNMb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NhcHNMb2NrJyk7XG5jb25zdCBwcmVzc2VkS2V5cyA9IFtdO1xuXG5rZXlib2FyZC5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCkgPT4ge1xuICBoYW5kbGVDbGljayhldmVudCwga2V5Ym9hcmQuY2FzZU1vZGUoKSk7XG4gIGNoYW5nZUxheW91dChrZXlib2FyZCwgW2V2ZW50LnRhcmdldC5pZF0pO1xufSk7XG5cbmtleWJvYXJkLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4ge1xuICBjaGFuZ2VMYXlvdXQoa2V5Ym9hcmQsIFtldmVudC50YXJnZXQuaWRdKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmICghT2JqZWN0LmtleXMoa2V5U2V0KS5pbmNsdWRlcyhldmVudC5jb2RlKSkgcmV0dXJuO1xuICBpZiAoZXZlbnQuY29kZSA9PT0gJ0NhcHNMb2NrJykge1xuICAgIGtleWJvYXJkLmlzQ2Fwc0xvY2sgPSAha2V5Ym9hcmQuaXNDYXBzTG9jaztcbiAgICBDYXBzTG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBrZXlib2FyZC5jYXBpdGFsaXplKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2V2ZW50LmNvZGV9YCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGlmIChldmVudC5yZXBlYXQpIHJldHVybjtcbiAgcHJlc3NlZEtleXMucHVzaChldmVudC5jb2RlKTtcbiAgaGFuZGxlQ2xpY2soZXZlbnQsIGtleWJvYXJkLmNhc2VNb2RlKCksIHByZXNzZWRLZXlzLCBrZXlib2FyZCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZXZlbnQpID0+IHtcbiAgaWYgKCFPYmplY3Qua2V5cyhrZXlTZXQpLmluY2x1ZGVzKGV2ZW50LmNvZGUpKSByZXR1cm47XG4gIGlmIChldmVudC5jb2RlICE9PSAnQ2Fwc0xvY2snKSB7XG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2V2ZW50LmNvZGV9YCkpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2V2ZW50LmNvZGV9YCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnU2hpZnQnKSB7XG4gICAgICAgIGtleWJvYXJkLnNoaWZ0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IHBvcyA9IHByZXNzZWRLZXlzLmluZGV4T2YoZXZlbnQuY29kZSk7XG4gIHByZXNzZWRLZXlzLnNwbGljZShwb3MsIDEpO1xufSk7XG5cbkNhcHNMb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAga2V5Ym9hcmQuaXNDYXBzTG9jayA9ICFrZXlib2FyZC5pc0NhcHNMb2NrO1xuICBDYXBzTG9jay5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAga2V5Ym9hcmQuY2FwaXRhbGl6ZSgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGtleWJvYXJkO1xuIl0sIm5hbWVzIjpbImNoYW5nZUxheW91dCIsImtleWJvYXJkIiwicHJlc3NlZEtleXMiLCJjaGFuZ2VMYXlvdXRLZXlzIiwibGVuZ3RoIiwicnVuQ2hhbmdlTGF5b3V0IiwicnVuU2hpZnQiLCJmb3JFYWNoIiwia2V5IiwiaW5jbHVkZXMiLCJpc0NhcHNMb2NrIiwiY2FwaXRhbGl6ZSIsImxvY2FsU3RvcmFnZSIsImxheW91dCIsInNoaWZ0IiwiaGFuZGxlQmFja3NwYWNlIiwic2NyZWVuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJ2YWx1ZSIsInRleHQiLCJzdGFydCIsInNlbGVjdGlvblN0YXJ0IiwiZW5kIiwic2VsZWN0aW9uRW5kIiwidGV4dDEiLCJzbGljZSIsInRleHQyIiwia2V5U2V0IiwiaGFuZGxlRW50ZXJUYWIiLCJoYW5kbGVEZWwiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY2FzZU1vZGUiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCJnZXRFbGVtZW50QnlJZCIsIm1vZCIsImlubmVySFRNTCIsInNldFJhbmdlVGV4dCIsInRhcmdldCIsImlkIiwiaGVhZGluZ0NvbXBvbmVudCIsImhlYWRpbmciLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbmZvdGV4dENvbXBvbmVudCIsImluZm8iLCJrZXlDb21wb25lbnQiLCJLZXlib2FyZCIsIm5vZGUiLCJPYmplY3QiLCJrZXlzIiwiZSIsImFwcGVuZENoaWxkIiwicmVnIiwic3R5bGUiLCJ3aWR0aCIsInNpemUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImN1cnJlbnRNb2RlIiwiY2hhciIsInJ1c0NoYXIiLCJhbnRpQ2FzZU1vZGUiLCJLZXlRIiwiQmFja3F1b3RlIiwibGF0IiwicnVzIiwiRGlnaXQxIiwiRGlnaXQyIiwiRGlnaXQzIiwiRGlnaXQ0IiwiRGlnaXQ1IiwiRGlnaXQ2IiwiRGlnaXQ3IiwiRGlnaXQ4IiwiRGlnaXQ5IiwiRGlnaXQwIiwiTWludXMiLCJFcXVhbCIsIkJhY2tzcGFjZSIsIlRhYiIsIktleVciLCJLZXlFIiwiS2V5UiIsIktleVQiLCJLZXlZIiwiS2V5VSIsIktleUkiLCJLZXlPIiwiS2V5UCIsIkJyYWNrZXRMZWZ0IiwiQnJhY2tldFJpZ2h0IiwiQmFja3NsYXNoIiwiRGVsZXRlIiwiQ2Fwc0xvY2siLCJLZXlBIiwiS2V5UyIsIktleUQiLCJLZXlGIiwiS2V5RyIsIktleUgiLCJLZXlKIiwiS2V5SyIsIktleUwiLCJTZW1pY29sb24iLCJRdW90ZSIsIkVudGVyIiwiU2hpZnRMZWZ0IiwiS2V5WiIsIktleVgiLCJLZXlDIiwiS2V5ViIsIktleUIiLCJLZXlOIiwiS2V5TSIsIkNvbW1hIiwiUGVyaW9kIiwiU2xhc2giLCJBcnJvd1VwIiwiU2hpZnRSaWdodCIsIkNvbnRyb2xMZWZ0IiwiTWV0YUxlZnQiLCJBbHRMZWZ0IiwiU3BhY2UiLCJBbHRSaWdodCIsIkFycm93TGVmdCIsIkFycm93RG93biIsIkFycm93UmlnaHQiLCJDb250cm9sUmlnaHQiLCJzY3JlZW5Db21wb25lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsInJlcGVhdCIsInB1c2giLCJyZW1vdmUiLCJwb3MiLCJpbmRleE9mIiwic3BsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==