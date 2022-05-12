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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vLy4vc2NyaXB0cy9oYW5kbGUtYmFja3NwYWNlLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvaGFuZGxlLWNsaWNrLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvaGFuZGxlLWRlbC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2hhbmRsZS1lbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2hlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9pbmZvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2tleS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2tleWJvYXJkLmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMva2V5c2V0LmpzIiwid2VicGFjazovLy8uL3NjcmlwdHMvc2NyZWVuLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9oZWFkaW5nLnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZm90ZXh0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2lucHV0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2tleS5zYXNzIiwid2VicGFjazovLy8uL3N0eWxlcy9rZXlib2FyZC5zYXNzIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3JlZW4uc2FzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hlYWRpbmcuc2Fzcz9jMjcyIiwid2VicGFjazovLy8uL3N0eWxlcy9pbmZvdGV4dC5zYXNzP2YzZGQiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2lucHV0LnNhc3M/MDc1YyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMva2V5LnNhc3M/YmNlMCIsIndlYnBhY2s6Ly8vLi9zdHlsZXMva2V5Ym9hcmQuc2Fzcz9lZGVhIiwid2VicGFjazovLy8uL3N0eWxlcy9zY3JlZW4uc2Fzcz9iNGVkIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZUxheW91dChrZXlib2FyZCwgcHJlc3NlZEtleXMpIHtcbiAgY29uc3QgY2hhbmdlTGF5b3V0S2V5cyA9IFsnQ29udHJvbExlZnQnLCAnQWx0TGVmdCddO1xuICBpZiAocHJlc3NlZEtleXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIGxldCBydW5DaGFuZ2VMYXlvdXQgPSB0cnVlO1xuICBsZXQgcnVuU2hpZnQgPSB0cnVlO1xuICBjaGFuZ2VMYXlvdXRLZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcHJlc3NlZEtleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcnVuQ2hhbmdlTGF5b3V0ID0gZmFsc2U7XG4gICAgfVxuICB9KTtcbiAgaWYgKHJ1bkNoYW5nZUxheW91dCkge1xuICAgIGlmIChrZXlib2FyZC5pc0NhcHNMb2NrKSB7XG4gICAgICBrZXlib2FyZC5jYXBpdGFsaXplKCk7XG4gICAgICBrZXlib2FyZC5jaGFuZ2VMYXlvdXQoKGxvY2FsU3RvcmFnZS5sYXlvdXQgPT09ICdsYXQnKSA/ICdydXMnIDogJ2xhdCcpO1xuICAgICAga2V5Ym9hcmQuY2FwaXRhbGl6ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXlib2FyZC5jaGFuZ2VMYXlvdXQoKGxvY2FsU3RvcmFnZS5sYXlvdXQgPT09ICdsYXQnKSA/ICdydXMnIDogJ2xhdCcpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXByZXNzZWRLZXlzLmluY2x1ZGVzKCdTaGlmdExlZnQnKSAmJiAhcHJlc3NlZEtleXMuaW5jbHVkZXMoJ1NoaWZ0UmlnaHQnKSkge1xuICAgIHJ1blNoaWZ0ID0gZmFsc2U7XG4gIH1cbiAgaWYgKHJ1blNoaWZ0KSB7XG4gICAga2V5Ym9hcmQuc2hpZnQoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlQmFja3NwYWNlKCkge1xuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJyk7XG4gIHNjcmVlbi5mb2N1cygpO1xuICBpZiAoc2NyZWVuLnZhbHVlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICBjb25zdCB0ZXh0ID0gc2NyZWVuLnZhbHVlO1xuICBjb25zdCBzdGFydCA9IHNjcmVlbi5zZWxlY3Rpb25TdGFydDtcbiAgY29uc3QgZW5kID0gc2NyZWVuLnNlbGVjdGlvbkVuZDtcbiAgaWYgKHN0YXJ0IDwgZW5kKSB7XG4gICAgY29uc3QgdGV4dDEgPSAoc3RhcnQgPiAwKSA/IHRleHQuc2xpY2UoMCwgc3RhcnQpIDogJyc7XG4gICAgY29uc3QgdGV4dDIgPSAoZW5kIDwgdGV4dC5sZW5ndGgpID8gdGV4dC5zbGljZShlbmQpIDogJyc7XG4gICAgc2NyZWVuLnZhbHVlID0gdGV4dDEgKyB0ZXh0MjtcbiAgICBzY3JlZW4uc2VsZWN0aW9uU3RhcnQgPSB0ZXh0MS5sZW5ndGg7XG4gICAgc2NyZWVuLnNlbGVjdGlvbkVuZCA9IHRleHQxLmxlbmd0aDtcbiAgfSBlbHNlIGlmIChzdGFydCA+IDApIHtcbiAgICBjb25zdCB0ZXh0MSA9IChzdGFydCAtIDEgPiAwKSA/IHRleHQuc2xpY2UoMCwgc3RhcnQgLSAxKSA6ICcnO1xuICAgIGNvbnN0IHRleHQyID0gKHN0YXJ0IDwgdGV4dC5sZW5ndGgpID8gdGV4dC5zbGljZShzdGFydCkgOiAnJztcbiAgICBzY3JlZW4udmFsdWUgPSB0ZXh0MSArIHRleHQyO1xuICAgIHNjcmVlbi5zZWxlY3Rpb25TdGFydCA9IHRleHQxLmxlbmd0aDtcbiAgICBzY3JlZW4uc2VsZWN0aW9uRW5kID0gdGV4dDEubGVuZ3RoO1xuICB9XG59XG4iLCJpbXBvcnQga2V5U2V0IGZyb20gJy4va2V5c2V0JztcbmltcG9ydCBoYW5kbGVCYWNrc3BhY2UgZnJvbSAnLi9oYW5kbGUtYmFja3NwYWNlJztcbmltcG9ydCBoYW5kbGVFbnRlclRhYiBmcm9tICcuL2hhbmRsZS1lbnRlcic7XG5pbXBvcnQgaGFuZGxlRGVsIGZyb20gJy4vaGFuZGxlLWRlbCc7XG5pbXBvcnQgY2hhbmdlTGF5b3V0IGZyb20gJy4vY2hhbmdlTGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQsIGNhc2VNb2RlLCBwcmVzc2VkS2V5cywga2V5Ym9hcmQpIHtcbiAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcmVlbicpO1xuICBpZiAoZXZlbnQua2V5ID09PSAnQWx0JyAmJiAhcHJlc3NlZEtleXMuaW5jbHVkZXMoJ1NoaWZ0TGVmdCcpICYmICFwcmVzc2VkS2V5cy5pbmNsdWRlcygnU2hpZnRSaWdodCcpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzY3JlZW4uZm9jdXMoKTtcbiAgICBjaGFuZ2VMYXlvdXQoa2V5Ym9hcmQsIHByZXNzZWRLZXlzKTtcbiAgfVxuICBpZiAoZXZlbnQuY29kZSA9PT0gJ0NvbnRyb2xMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdTaGlmdCcpIHtcbiAgICBjaGFuZ2VMYXlvdXQoa2V5Ym9hcmQsIHByZXNzZWRLZXlzKTtcbiAgfVxuICBpZiAoZXZlbnQuY29kZSkge1xuICAgIGNvbnN0IGtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2V2ZW50LmNvZGV9YCk7XG4gICAgaWYgKCFrZXlTZXRbZXZlbnQuY29kZV0ubW9kKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdGV4dCA9IGtleS5pbm5lckhUTUw7XG4gICAgICBzY3JlZW4uZm9jdXMoKTtcbiAgICAgIHNjcmVlbi5zZXRSYW5nZVRleHQodGV4dCwgc2NyZWVuLnNlbGVjdGlvblN0YXJ0LCBzY3JlZW4uc2VsZWN0aW9uRW5kLCAnZW5kJyk7XG4gICAgfSBlbHNlIGlmIChldmVudC5jb2RlID09PSAnVGFiJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhhbmRsZUVudGVyVGFiKCdcXHQnKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICBoYW5kbGVCYWNrc3BhY2UoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgIGhhbmRsZUVudGVyVGFiKCdcXG4nKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdEZWxldGUnKSB7XG4gICAgICBoYW5kbGVEZWwoKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJyB8fCBldmVudC5jb2RlID09PSAnQXJyb3dEb3duJ1xuICAgICAgfHwgZXZlbnQuY29kZSA9PT0gJ0Fycm93TGVmdCcgfHwgZXZlbnQuY29kZSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICBjb25zdCB0ZXh0ID0ga2V5LmlubmVySFRNTDtcbiAgICAgIHNjcmVlbi5mb2N1cygpO1xuICAgICAgc2NyZWVuLnNldFJhbmdlVGV4dCh0ZXh0LCBzY3JlZW4uc2VsZWN0aW9uU3RhcnQsIHNjcmVlbi5zZWxlY3Rpb25FbmQsICdlbmQnKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWtleVNldFtldmVudC50YXJnZXQuaWRdLm1vZCkge1xuICAgIGNvbnN0IHRleHQgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MO1xuICAgIHNjcmVlbi5mb2N1cygpO1xuICAgIHNjcmVlbi5zZXRSYW5nZVRleHQodGV4dCwgc2NyZWVuLnNlbGVjdGlvblN0YXJ0LCBzY3JlZW4uc2VsZWN0aW9uRW5kLCAnZW5kJyk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnQmFja3NwYWNlJykge1xuICAgIGhhbmRsZUJhY2tzcGFjZSgpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ0VudGVyJykge1xuICAgIGhhbmRsZUVudGVyVGFiKCdcXG4nKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdEZWxldGUnKSB7XG4gICAgaGFuZGxlRGVsKCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnVGFiJykge1xuICAgIGhhbmRsZUVudGVyVGFiKCdcXHQnKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdBcnJvd1VwJyB8fCBldmVudC50YXJnZXQuaWQgPT09ICdBcnJvd0Rvd24nXG4gICAgfHwgZXZlbnQudGFyZ2V0LmlkID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC50YXJnZXQuaWQgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgIGNvbnN0IHRleHQgPSBldmVudC50YXJnZXQuaW5uZXJIVE1MO1xuICAgIHNjcmVlbi5mb2N1cygpO1xuICAgIHNjcmVlbi5zZXRSYW5nZVRleHQodGV4dCwgc2NyZWVuLnNlbGVjdGlvblN0YXJ0LCBzY3JlZW4uc2VsZWN0aW9uRW5kLCAnZW5kJyk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZURlbCgpIHtcbiAgY29uc3Qgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcmVlbicpO1xuICBzY3JlZW4uZm9jdXMoKTtcbiAgaWYgKHNjcmVlbi52YWx1ZS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgY29uc3QgdGV4dCA9IHNjcmVlbi52YWx1ZTtcbiAgY29uc3Qgc3RhcnQgPSBzY3JlZW4uc2VsZWN0aW9uU3RhcnQ7XG4gIGNvbnN0IGVuZCA9IHNjcmVlbi5zZWxlY3Rpb25FbmQ7XG4gIGlmIChzdGFydCA8IGVuZCkge1xuICAgIGNvbnN0IHRleHQxID0gKHN0YXJ0ID4gMCkgPyB0ZXh0LnNsaWNlKDAsIHN0YXJ0KSA6ICcnO1xuICAgIGNvbnN0IHRleHQyID0gKGVuZCA8IHRleHQubGVuZ3RoKSA/IHRleHQuc2xpY2UoZW5kKSA6ICcnO1xuICAgIHNjcmVlbi52YWx1ZSA9IHRleHQxICsgdGV4dDI7XG4gICAgc2NyZWVuLnNlbGVjdGlvblN0YXJ0ID0gdGV4dDEubGVuZ3RoO1xuICAgIHNjcmVlbi5zZWxlY3Rpb25FbmQgPSB0ZXh0MS5sZW5ndGg7XG4gICAgc2NyZWVuLmZvY3VzKCk7XG4gIH0gZWxzZSBpZiAoc3RhcnQgPiAwKSB7XG4gICAgY29uc3QgdGV4dDEgPSAoc3RhcnQgLSAxID49IDApID8gdGV4dC5zbGljZSgwLCBzdGFydCkgOiAnJztcbiAgICBjb25zdCB0ZXh0MiA9IChzdGFydCA8IHRleHQubGVuZ3RoKSA/IHRleHQuc2xpY2Uoc3RhcnQgKyAxKSA6ICcnO1xuICAgIHNjcmVlbi52YWx1ZSA9IHRleHQxICsgdGV4dDI7XG4gICAgc2NyZWVuLnNlbGVjdGlvblN0YXJ0ID0gdGV4dDEubGVuZ3RoO1xuICAgIHNjcmVlbi5zZWxlY3Rpb25FbmQgPSB0ZXh0MS5sZW5ndGg7XG4gICAgc2NyZWVuLmZvY3VzKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUVudGVyVGFiKG1vZCkge1xuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJyk7XG4gIHNjcmVlbi5mb2N1cygpO1xuICBsZXQgdGV4dCA9IHNjcmVlbi52YWx1ZTtcbiAgY29uc3Qgc3RhcnQgPSBzY3JlZW4uc2VsZWN0aW9uU3RhcnQ7XG4gIGNvbnN0IGVuZCA9IHNjcmVlbi5zZWxlY3Rpb25FbmQ7XG4gIGlmIChzdGFydCA8IGVuZCkge1xuICAgIGNvbnN0IHRleHQxID0gKHN0YXJ0ID4gMCkgPyB0ZXh0LnNsaWNlKDAsIHN0YXJ0KSA6ICcnO1xuICAgIGNvbnN0IHRleHQyID0gKGVuZCA8IHRleHQubGVuZ3RoKSA/IHRleHQuc2xpY2UoZW5kKSA6ICcnO1xuICAgIHNjcmVlbi52YWx1ZSA9IGAke3RleHQxfSR7bW9kfSR7dGV4dDJ9YDtcbiAgICBzY3JlZW4uc2VsZWN0aW9uU3RhcnQgPSB0ZXh0MS5sZW5ndGg7XG4gICAgc2NyZWVuLnNlbGVjdGlvbkVuZCA9IHRleHQxLmxlbmd0aDtcbiAgfSBlbHNlIGlmIChzdGFydCA9PT0gc2NyZWVuLnZhbHVlLmxlbmd0aCAmJiBzdGFydCA9PT0gZW5kKSB7XG4gICAgdGV4dCArPSBtb2Q7XG4gICAgc2NyZWVuLnZhbHVlID0gdGV4dDtcbiAgfSBlbHNlIGlmIChzdGFydCA+IDApIHtcbiAgICBjb25zdCB0ZXh0MSA9IChzdGFydCAtIDEgPj0gMCkgPyB0ZXh0LnNsaWNlKDAsIHN0YXJ0KSA6ICcnO1xuICAgIGNvbnN0IHRleHQyID0gKHN0YXJ0IDwgdGV4dC5sZW5ndGgpID8gdGV4dC5zbGljZShzdGFydCkgOiAnJztcbiAgICBzY3JlZW4udmFsdWUgPSBgJHt0ZXh0MX0ke21vZH0ke3RleHQyfWA7XG4gICAgc2NyZWVuLnNlbGVjdGlvblN0YXJ0ID0gdGV4dDEubGVuZ3RoO1xuICAgIHNjcmVlbi5zZWxlY3Rpb25FbmQgPSB0ZXh0MS5sZW5ndGg7XG4gIH1cbn1cbiIsImltcG9ydCAnLi4vc3R5bGVzL2hlYWRpbmcuc2Fzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRpbmdDb21wb25lbnQoKSB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1JTUyBWaXJ0dWFsIGtleWJvYXJkJztcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gIHJldHVybiBoZWFkaW5nO1xufVxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvaW5mb3RleHQuc2Fzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZm90ZXh0Q29tcG9uZW50KCkge1xuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbmZvLmlubmVySFRNTCA9IGBUaGUga2V5Ym9hcmQgd2FzIGNyZWF0ZWQgaW4gdGhlIFdpbmRvd3Mgb3BlcmF0aW5nIHN5c3RlbTxicj5cbiAgVGhlIGNvbWJpbmF0aW9uIHRvIHN3aXRjaCB0aGUgbGFuZ3VhZ2UgbGF5b3V0OiBsZWZ0IEN0cmwgKyBsZWZ0IEFsdGA7XG4gIGluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICByZXR1cm4gaW5mbztcbn1cbiIsImltcG9ydCAnLi4vc3R5bGVzL2tleS5zYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ga2V5Q29tcG9uZW50KCkge1xuICBjb25zdCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAga2V5LmNsYXNzTGlzdC5hZGQoJ2tleScpO1xuICByZXR1cm4ga2V5O1xufVxuIiwiaW1wb3J0IGtleUNvbXBvbmVudCBmcm9tICcuL2tleSc7XG5pbXBvcnQga2V5U2V0IGZyb20gJy4va2V5c2V0JztcbmltcG9ydCAnLi4vc3R5bGVzL2tleWJvYXJkLnNhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZCB7XG4gIGNvbnN0cnVjdG9yKGxheW91dCA9IChsb2NhbFN0b3JhZ2UubGF5b3V0KSA/IGxvY2FsU3RvcmFnZS5sYXlvdXQgOiAnbGF0Jykge1xuICAgIHRoaXMuaXNDYXBzTG9jayA9IGZhbHNlO1xuICAgIHRoaXMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZCcpO1xuICAgIE9iamVjdC5rZXlzKGtleVNldCkuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0ga2V5Q29tcG9uZW50KCk7XG4gICAgICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoa2V5KTtcbiAgICAgIGtleS5pZCA9IGAke2V9YDtcbiAgICAgIGtleS5pbm5lckhUTUwgPSBrZXlTZXRbZV1bbGF5b3V0XS5yZWc7XG4gICAgICBrZXkuc3R5bGUud2lkdGggPSBgJHtrZXlTZXRbZV0uc2l6ZSA/IGtleVNldFtlXS5zaXplIDogJzQ0cHgnfWA7XG4gICAgICBpZiAoa2V5U2V0W2VdLm1vZCkga2V5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgfSk7XG4gIH1cblxuICBjaGFuZ2VMYXlvdXQobGF5b3V0KSB7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMubm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdrZXknKTtcbiAgICBbLi4ua2V5c10uZm9yRWFjaCgoa2V5LCBpKSA9PiB7XG4gICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleVNldFtrZXkuaWRdW2xheW91dF0ucmVnO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5sYXlvdXQgPSAobGF5b3V0ID09PSAncnVzJykgPyAncnVzJyA6ICdsYXQnO1xuICB9XG5cbiAgY2FwaXRhbGl6ZShsYXlvdXQgPSAobG9jYWxTdG9yYWdlLmxheW91dCkgPyBsb2NhbFN0b3JhZ2UubGF5b3V0IDogJ2xhdCcpIHtcbiAgICBjb25zdCBjdXJyZW50TW9kZSA9IHRoaXMuY2FzZU1vZGUoKTtcbiAgICBjb25zdCBjYXNlTW9kZSA9IChjdXJyZW50TW9kZSA9PT0gJ3JlZycpID8gJ3NoaWZ0JyA6ICdyZWcnO1xuICAgIGNvbnN0IGtleXMgPSB0aGlzLm5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgna2V5Jyk7XG4gICAgWy4uLmtleXNdLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgY29uc3QgY2hhciA9IGtleS5pZC5zbGljZSgwLCAzKTtcbiAgICAgIGNvbnN0IHJ1c0NoYXIgPSBjaGFyID09PSAnS2V5JyB8fCBrZXkuaWQgPT09ICdCYWNrcXVvdGUnXG4gICAgICB8fCBrZXkuaWQgPT09ICdCcmFja2V0TGVmdCcgfHwga2V5LmlkID09PSAnQnJhY2tldFJpZ2h0J1xuICAgICAgfHwga2V5LmlkID09PSAnU2VtaWNvbG9uJyB8fCBrZXkuaWQgPT09ICdRdW90ZSdcbiAgICAgIHx8IGtleS5pZCA9PT0gJ0NvbW1hJyB8fCBrZXkuaWQgPT09ICdQZXJpb2QnO1xuICAgICAgaWYgKGxheW91dCA9PT0gJ3J1cycgJiYgcnVzQ2hhcikge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleVNldFtrZXkuaWRdW2xheW91dF1bY2FzZU1vZGVdO1xuICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdsYXQnICYmIGNoYXIgPT09ICdLZXknKSB7XG4gICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5U2V0W2tleS5pZF1bbGF5b3V0XVtjYXNlTW9kZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaGlmdChsYXlvdXQgPSAobG9jYWxTdG9yYWdlLmxheW91dCkgPyBsb2NhbFN0b3JhZ2UubGF5b3V0IDogJ2xhdCcpIHtcbiAgICBjb25zdCBjdXJyZW50TW9kZSA9IHRoaXMuY2FzZU1vZGUoKTtcbiAgICBjb25zdCBjYXNlTW9kZSA9IChjdXJyZW50TW9kZSA9PT0gJ3JlZycpID8gJ3NoaWZ0JyA6ICdyZWcnO1xuICAgIGNvbnN0IGFudGlDYXNlTW9kZSA9IChjYXNlTW9kZSA9PT0gJ3NoaWZ0JykgPyAncmVnJyA6ICdzaGlmdCc7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMubm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdrZXknKTtcbiAgICBpZiAodGhpcy5pc0NhcHNMb2NrKSB7XG4gICAgICBbLi4ua2V5c10uZm9yRWFjaCgoa2V5LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSBrZXkuaWQuc2xpY2UoMCwgMyk7XG4gICAgICAgIGNvbnN0IHJ1c0NoYXIgPSBjaGFyID09PSAnS2V5JyB8fCBrZXkuaWQgPT09ICdCYWNrcXVvdGUnXG4gICAgICAgIHx8IGtleS5pZCA9PT0gJ0JyYWNrZXRMZWZ0JyB8fCBrZXkuaWQgPT09ICdCcmFja2V0UmlnaHQnXG4gICAgICAgIHx8IGtleS5pZCA9PT0gJ1NlbWljb2xvbicgfHwga2V5LmlkID09PSAnUXVvdGUnXG4gICAgICAgIHx8IGtleS5pZCA9PT0gJ0NvbW1hJyB8fCBrZXkuaWQgPT09ICdQZXJpb2QnO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncnVzJyAmJiBydXNDaGFyKSB7XG4gICAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlTZXRba2V5LmlkXVtsYXlvdXRdW2Nhc2VNb2RlXTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdydXMnICYmICFydXNDaGFyKSB7XG4gICAgICAgICAga2V5c1tpXS5pbm5lckhUTUwgPSBrZXlTZXRba2V5LmlkXVtsYXlvdXRdW2FudGlDYXNlTW9kZV07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnbGF0JyAmJiBjaGFyID09PSAnS2V5Jykge1xuICAgICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5U2V0W2tleS5pZF1bbGF5b3V0XVtjYXNlTW9kZV07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnbGF0JyAmJiBjaGFyICE9PSAnS2V5Jykge1xuICAgICAgICAgIGtleXNbaV0uaW5uZXJIVE1MID0ga2V5U2V0W2tleS5pZF1bbGF5b3V0XVthbnRpQ2FzZU1vZGVdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgWy4uLmtleXNdLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgICBrZXlzW2ldLmlubmVySFRNTCA9IGtleVNldFtrZXkuaWRdW2xheW91dF1bY2FzZU1vZGVdO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY2FzZU1vZGUobGF5b3V0ID0gKGxvY2FsU3RvcmFnZS5sYXlvdXQpID8gbG9jYWxTdG9yYWdlLmxheW91dCA6ICdsYXQnKSB7XG4gICAgY29uc3Qga2V5cyA9IHRoaXMubm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdrZXknKTtcbiAgICBsZXQgY2FzZU1vZGU7XG4gICAgaWYgKGxheW91dCA9PT0gJ2xhdCcpIHtcbiAgICAgIGNhc2VNb2RlID0gKGtleXMuS2V5US5pbm5lckhUTUwgPT09ICdxJykgPyAncmVnJyA6ICdzaGlmdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhc2VNb2RlID0gKGtleXMuS2V5US5pbm5lckhUTUwgPT09ICfQuScpID8gJ3JlZycgOiAnc2hpZnQnO1xuICAgIH1cbiAgICByZXR1cm4gY2FzZU1vZGU7XG4gIH1cbn1cbiIsImNvbnN0IGtleVNldCA9IHtcbiAgQmFja3F1b3RlOiB7IGxhdDogeyByZWc6ICdgJywgc2hpZnQ6ICd+JyB9LCBydXM6IHsgcmVnOiAn0ZEnLCBzaGlmdDogJ9CBJyB9IH0sXG4gIERpZ2l0MTogeyBsYXQ6IHsgcmVnOiAnMScsIHNoaWZ0OiAnIScgfSwgcnVzOiB7IHJlZzogJzEnLCBzaGlmdDogJyEnIH0gfSxcbiAgRGlnaXQyOiB7IGxhdDogeyByZWc6ICcyJywgc2hpZnQ6ICdAJyB9LCBydXM6IHsgcmVnOiAnMicsIHNoaWZ0OiAnXCInIH0gfSxcbiAgRGlnaXQzOiB7IGxhdDogeyByZWc6ICczJywgc2hpZnQ6ICcjJyB9LCBydXM6IHsgcmVnOiAnMycsIHNoaWZ0OiAn4oSWJyB9IH0sXG4gIERpZ2l0NDogeyBsYXQ6IHsgcmVnOiAnNCcsIHNoaWZ0OiAnJCcgfSwgcnVzOiB7IHJlZzogJzQnLCBzaGlmdDogJzsnIH0gfSxcbiAgRGlnaXQ1OiB7IGxhdDogeyByZWc6ICc1Jywgc2hpZnQ6ICclJyB9LCBydXM6IHsgcmVnOiAnNScsIHNoaWZ0OiAnJScgfSB9LFxuICBEaWdpdDY6IHsgbGF0OiB7IHJlZzogJzYnLCBzaGlmdDogJ14nIH0sIHJ1czogeyByZWc6ICc2Jywgc2hpZnQ6ICc6JyB9IH0sXG4gIERpZ2l0NzogeyBsYXQ6IHsgcmVnOiAnNycsIHNoaWZ0OiAnJicgfSwgcnVzOiB7IHJlZzogJzcnLCBzaGlmdDogJz8nIH0gfSxcbiAgRGlnaXQ4OiB7IGxhdDogeyByZWc6ICc4Jywgc2hpZnQ6ICcqJyB9LCBydXM6IHsgcmVnOiAnOCcsIHNoaWZ0OiAnKicgfSB9LFxuICBEaWdpdDk6IHsgbGF0OiB7IHJlZzogJzknLCBzaGlmdDogJygnIH0sIHJ1czogeyByZWc6ICc5Jywgc2hpZnQ6ICcoJyB9IH0sXG4gIERpZ2l0MDogeyBsYXQ6IHsgcmVnOiAnMCcsIHNoaWZ0OiAnKScgfSwgcnVzOiB7IHJlZzogJzAnLCBzaGlmdDogJyknIH0gfSxcbiAgTWludXM6IHsgbGF0OiB7IHJlZzogJy0nLCBzaGlmdDogJ18nIH0sIHJ1czogeyByZWc6ICctJywgc2hpZnQ6ICdfJyB9IH0sXG4gIEVxdWFsOiB7IGxhdDogeyByZWc6ICc9Jywgc2hpZnQ6ICcrJyB9LCBydXM6IHsgcmVnOiAnPScsIHNoaWZ0OiAnKycgfSB9LFxuICBCYWNrc3BhY2U6IHtcbiAgICBsYXQ6IHsgcmVnOiAnQmFja3NwYWNlJywgc2hpZnQ6ICdCYWNrc3BhY2UnIH0sXG4gICAgcnVzOiB7IHJlZzogJ0JhY2tzcGFjZScsIHNoaWZ0OiAnQmFja3NwYWNlJyB9LFxuICAgIHNpemU6ICc5MnB4JyxcbiAgICBtb2Q6IHRydWUsXG4gIH0sXG4gIFRhYjoge1xuICAgIGxhdDogeyByZWc6ICdUYWInLCBzaGlmdDogJ1RhYicgfSxcbiAgICBydXM6IHsgcmVnOiAnVGFiJywgc2hpZnQ6ICdUYWInIH0sXG4gICAgc2l6ZTogJzY5cHgnLFxuICAgIG1vZDogdHJ1ZSxcbiAgfSxcbiAgS2V5UTogeyBsYXQ6IHsgcmVnOiAncScsIHNoaWZ0OiAnUScgfSwgcnVzOiB7IHJlZzogJ9C5Jywgc2hpZnQ6ICfQmScgfSB9LFxuICBLZXlXOiB7IGxhdDogeyByZWc6ICd3Jywgc2hpZnQ6ICdXJyB9LCBydXM6IHsgcmVnOiAn0YYnLCBzaGlmdDogJ9CmJyB9IH0sXG4gIEtleUU6IHsgbGF0OiB7IHJlZzogJ2UnLCBzaGlmdDogJ0UnIH0sIHJ1czogeyByZWc6ICfRgycsIHNoaWZ0OiAn0KMnIH0gfSxcbiAgS2V5UjogeyBsYXQ6IHsgcmVnOiAncicsIHNoaWZ0OiAnUicgfSwgcnVzOiB7IHJlZzogJ9C6Jywgc2hpZnQ6ICfQmicgfSB9LFxuICBLZXlUOiB7IGxhdDogeyByZWc6ICd0Jywgc2hpZnQ6ICdUJyB9LCBydXM6IHsgcmVnOiAn0LUnLCBzaGlmdDogJ9CVJyB9IH0sXG4gIEtleVk6IHsgbGF0OiB7IHJlZzogJ3knLCBzaGlmdDogJ1knIH0sIHJ1czogeyByZWc6ICfQvScsIHNoaWZ0OiAn0J0nIH0gfSxcbiAgS2V5VTogeyBsYXQ6IHsgcmVnOiAndScsIHNoaWZ0OiAnVScgfSwgcnVzOiB7IHJlZzogJ9CzJywgc2hpZnQ6ICfQkycgfSB9LFxuICBLZXlJOiB7IGxhdDogeyByZWc6ICdpJywgc2hpZnQ6ICdJJyB9LCBydXM6IHsgcmVnOiAn0YgnLCBzaGlmdDogJ9CoJyB9IH0sXG4gIEtleU86IHsgbGF0OiB7IHJlZzogJ28nLCBzaGlmdDogJ08nIH0sIHJ1czogeyByZWc6ICfRiScsIHNoaWZ0OiAn0KknIH0gfSxcbiAgS2V5UDogeyBsYXQ6IHsgcmVnOiAncCcsIHNoaWZ0OiAnUCcgfSwgcnVzOiB7IHJlZzogJ9C3Jywgc2hpZnQ6ICfQlycgfSB9LFxuICBCcmFja2V0TGVmdDogeyBsYXQ6IHsgcmVnOiAnWycsIHNoaWZ0OiAneycgfSwgcnVzOiB7IHJlZzogJ9GFJywgc2hpZnQ6ICfQpScgfSB9LFxuICBCcmFja2V0UmlnaHQ6IHsgbGF0OiB7IHJlZzogJ10nLCBzaGlmdDogJ30nIH0sIHJ1czogeyByZWc6ICfRiicsIHNoaWZ0OiAn0KonIH0gfSxcbiAgQmFja3NsYXNoOiB7IGxhdDogeyByZWc6ICdcXFxcJywgc2hpZnQ6ICd8JyB9LCBydXM6IHsgcmVnOiAnXFxcXCcsIHNoaWZ0OiAnLycgfSB9LFxuICBEZWxldGU6IHsgbGF0OiB7IHJlZzogJ0RlbCcsIHNoaWZ0OiAnRGVsJyB9LCBydXM6IHsgcmVnOiAnRGVsJywgc2hpZnQ6ICdEZWwnIH0sIG1vZDogdHJ1ZSB9LFxuICBDYXBzTG9jazoge1xuICAgIGxhdDogeyByZWc6ICdDYXBzTG9jaycsIHNoaWZ0OiAnQ2Fwc0xvY2snIH0sIHJ1czogeyByZWc6ICdDYXBzTG9jaycsIHNoaWZ0OiAnQ2Fwc0xvY2snIH0sIG1vZDogdHJ1ZSwgc2l6ZTogJzkwcHgnLFxuICB9LFxuICBLZXlBOiB7IGxhdDogeyByZWc6ICdhJywgc2hpZnQ6ICdBJyB9LCBydXM6IHsgcmVnOiAn0YQnLCBzaGlmdDogJ9CkJyB9IH0sXG4gIEtleVM6IHsgbGF0OiB7IHJlZzogJ3MnLCBzaGlmdDogJ1MnIH0sIHJ1czogeyByZWc6ICfRiycsIHNoaWZ0OiAn0KsnIH0gfSxcbiAgS2V5RDogeyBsYXQ6IHsgcmVnOiAnZCcsIHNoaWZ0OiAnRCcgfSwgcnVzOiB7IHJlZzogJ9CyJywgc2hpZnQ6ICfQkicgfSB9LFxuICBLZXlGOiB7IGxhdDogeyByZWc6ICdmJywgc2hpZnQ6ICdGJyB9LCBydXM6IHsgcmVnOiAn0LAnLCBzaGlmdDogJ9CQJyB9IH0sXG4gIEtleUc6IHsgbGF0OiB7IHJlZzogJ2cnLCBzaGlmdDogJ0cnIH0sIHJ1czogeyByZWc6ICfQvycsIHNoaWZ0OiAn0J8nIH0gfSxcbiAgS2V5SDogeyBsYXQ6IHsgcmVnOiAnaCcsIHNoaWZ0OiAnSCcgfSwgcnVzOiB7IHJlZzogJ9GAJywgc2hpZnQ6ICfQoCcgfSB9LFxuICBLZXlKOiB7IGxhdDogeyByZWc6ICdqJywgc2hpZnQ6ICdKJyB9LCBydXM6IHsgcmVnOiAn0L4nLCBzaGlmdDogJ9CeJyB9IH0sXG4gIEtleUs6IHsgbGF0OiB7IHJlZzogJ2snLCBzaGlmdDogJ0snIH0sIHJ1czogeyByZWc6ICfQuycsIHNoaWZ0OiAn0JsnIH0gfSxcbiAgS2V5TDogeyBsYXQ6IHsgcmVnOiAnbCcsIHNoaWZ0OiAnTCcgfSwgcnVzOiB7IHJlZzogJ9C0Jywgc2hpZnQ6ICfQlCcgfSB9LFxuICBTZW1pY29sb246IHsgbGF0OiB7IHJlZzogJzsnLCBzaGlmdDogJzonIH0sIHJ1czogeyByZWc6ICfQticsIHNoaWZ0OiAn0JYnIH0gfSxcbiAgUXVvdGU6IHsgbGF0OiB7IHJlZzogXCInXCIsIHNoaWZ0OiAnXCInIH0sIHJ1czogeyByZWc6ICfRjScsIHNoaWZ0OiAn0K0nIH0gfSxcbiAgRW50ZXI6IHtcbiAgICBsYXQ6IHsgcmVnOiAnRW50ZXInLCBzaGlmdDogJ0VudGVyJyB9LCBydXM6IHsgcmVnOiAnRW50ZXInLCBzaGlmdDogJ0VudGVyJyB9LCBtb2Q6IHRydWUsIHNpemU6ICcxMDRweCcsXG4gIH0sXG4gIFNoaWZ0TGVmdDoge1xuICAgIGxhdDogeyByZWc6ICdTaGlmdCcsIHNoaWZ0OiAnU2hpZnQnIH0sIHJ1czogeyByZWc6ICdTaGlmdCcsIHNoaWZ0OiAnU2hpZnQnIH0sIG1vZDogdHJ1ZSwgc2l6ZTogJzExMnB4JyxcbiAgfSxcbiAgS2V5WjogeyBsYXQ6IHsgcmVnOiAneicsIHNoaWZ0OiAnWicgfSwgcnVzOiB7IHJlZzogJ9GPJywgc2hpZnQ6ICfQrycgfSB9LFxuICBLZXlYOiB7IGxhdDogeyByZWc6ICd4Jywgc2hpZnQ6ICdYJyB9LCBydXM6IHsgcmVnOiAn0YcnLCBzaGlmdDogJ9CnJyB9IH0sXG4gIEtleUM6IHsgbGF0OiB7IHJlZzogJ2MnLCBzaGlmdDogJ0MnIH0sIHJ1czogeyByZWc6ICfRgScsIHNoaWZ0OiAn0KEnIH0gfSxcbiAgS2V5VjogeyBsYXQ6IHsgcmVnOiAndicsIHNoaWZ0OiAnVicgfSwgcnVzOiB7IHJlZzogJ9C8Jywgc2hpZnQ6ICfQnCcgfSB9LFxuICBLZXlCOiB7IGxhdDogeyByZWc6ICdiJywgc2hpZnQ6ICdCJyB9LCBydXM6IHsgcmVnOiAn0LgnLCBzaGlmdDogJ9CYJyB9IH0sXG4gIEtleU46IHsgbGF0OiB7IHJlZzogJ24nLCBzaGlmdDogJ04nIH0sIHJ1czogeyByZWc6ICfRgicsIHNoaWZ0OiAn0KInIH0gfSxcbiAgS2V5TTogeyBsYXQ6IHsgcmVnOiAnbScsIHNoaWZ0OiAnTScgfSwgcnVzOiB7IHJlZzogJ9GMJywgc2hpZnQ6ICfQrCcgfSB9LFxuICBDb21tYTogeyBsYXQ6IHsgcmVnOiAnLCcsIHNoaWZ0OiAnPCcgfSwgcnVzOiB7IHJlZzogJ9CxJywgc2hpZnQ6ICfQkScgfSB9LFxuICBQZXJpb2Q6IHsgbGF0OiB7IHJlZzogJy4nLCBzaGlmdDogJz4nIH0sIHJ1czogeyByZWc6ICfRjicsIHNoaWZ0OiAn0K4nIH0gfSxcbiAgU2xhc2g6IHsgbGF0OiB7IHJlZzogJy8nLCBzaGlmdDogJz8nIH0sIHJ1czogeyByZWc6ICcuJywgc2hpZnQ6ICcsJyB9IH0sXG4gIEFycm93VXA6IHsgbGF0OiB7IHJlZzogJ+GQgycsIHNoaWZ0OiAn4ZCDJyB9LCBydXM6IHsgcmVnOiAn4ZCDJywgc2hpZnQ6ICfhkIMnIH0sIG1vZDogdHJ1ZSB9LFxuICBTaGlmdFJpZ2h0OiB7XG4gICAgbGF0OiB7IHJlZzogJ1NoaWZ0Jywgc2hpZnQ6ICdTaGlmdCcgfSwgcnVzOiB7IHJlZzogJ1NoaWZ0Jywgc2hpZnQ6ICdTaGlmdCcgfSwgbW9kOiB0cnVlLCBzaXplOiAnMTA4cHgnLFxuICB9LFxuICBDb250cm9sTGVmdDoge1xuICAgIGxhdDogeyByZWc6ICdDdHJsJywgc2hpZnQ6ICdDdHJsJyB9LCBydXM6IHsgcmVnOiAnQ3RybCcsIHNoaWZ0OiAnQ3RybCcgfSwgbW9kOiB0cnVlLCBzaXplOiAnNjBweCcsXG4gIH0sXG4gIE1ldGFMZWZ0OiB7IGxhdDogeyByZWc6ICdXaW4nLCBzaGlmdDogJ1dpbicgfSwgcnVzOiB7IHJlZzogJ1dpbicsIHNoaWZ0OiAnV2luJyB9LCBtb2Q6IHRydWUgfSxcbiAgQWx0TGVmdDogeyBsYXQ6IHsgcmVnOiAnQWx0Jywgc2hpZnQ6ICdBbHQnIH0sIHJ1czogeyByZWc6ICdBbHQnLCBzaGlmdDogJ0FsdCcgfSwgbW9kOiB0cnVlIH0sXG4gIFNwYWNlOiB7IGxhdDogeyByZWc6ICcgJywgc2hpZnQ6ICcgJyB9LCBydXM6IHsgcmVnOiAnICcsIHNoaWZ0OiAnICcgfSwgc2l6ZTogJzM0MnB4JyB9LFxuICBBbHRSaWdodDogeyBsYXQ6IHsgcmVnOiAnQWx0Jywgc2hpZnQ6ICdBbHQnIH0sIHJ1czogeyByZWc6ICdBbHQnLCBzaGlmdDogJ0FsdCcgfSwgbW9kOiB0cnVlIH0sXG4gIEFycm93TGVmdDogeyBsYXQ6IHsgcmVnOiAn4ZCKJywgc2hpZnQ6ICfhkIonIH0sIHJ1czogeyByZWc6ICfhkIonLCBzaGlmdDogJ+GQiicgfSwgbW9kOiB0cnVlIH0sXG4gIEFycm93RG93bjogeyBsYXQ6IHsgcmVnOiAn4ZCBJywgc2hpZnQ6ICfhkIEnIH0sIHJ1czogeyByZWc6ICfhkIEnLCBzaGlmdDogJ+GQgScgfSwgbW9kOiB0cnVlIH0sXG4gIEFycm93UmlnaHQ6IHsgbGF0OiB7IHJlZzogJ+GQhScsIHNoaWZ0OiAn4ZCFJyB9LCBydXM6IHsgcmVnOiAn4ZCFJywgc2hpZnQ6ICfhkIUnIH0sIG1vZDogdHJ1ZSB9LFxuICBDb250cm9sUmlnaHQ6IHtcbiAgICBsYXQ6IHsgcmVnOiAnQ3RybCcsIHNoaWZ0OiAnQ3RybCcgfSwgcnVzOiB7IHJlZzogJ0N0cmwnLCBzaGlmdDogJ0N0cmwnIH0sIG1vZDogdHJ1ZSwgc2l6ZTogJzU2cHgnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQga2V5U2V0O1xuIiwiaW1wb3J0ICcuLi9zdHlsZXMvc2NyZWVuLnNhc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JlZW5Db21wb25lbnQoKSB7XG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIHNjcmVlbi5jbGFzc0xpc3QuYWRkKCdzY3JlZW4nKTtcbiAgcmV0dXJuIHNjcmVlbjtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRpbmcge1xcbiAgY29sb3I6IGRhcmtncmVlbjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9oZWFkaW5nLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWFkaW5nXFxuICBjb2xvcjogZGFya2dyZWVuXFxuICBmb250LXNpemU6IDMwcHhcXG4gIGZvbnQtd2VpZ2h0OiA5MDBcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaW5mbyB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3R5bGVzL2luZm90ZXh0LnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaW5mb1xcbiAgZm9udC1zaXplOiAyMHB4XFxuICBsaW5lLWhlaWdodDogMzJweFxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9pbnB1dC5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKlxcbiAgbWFyZ2luOiAwXFxuICBwYWRkaW5nOiAwXFxuXFxuYm9keVxcbiAgZGlzcGxheTogZmxleFxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxcbiAgcGFkZGluZzogMTBweCAxMHB4XFxuICBnYXA6IDEwcHhcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIua2V5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMjNkMGY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiKDg3LCA5MCwgODcpO1xcbiAgYm94LXNoYWRvdzogMCA2cHggcmdiKDAsIDM4LCA2KSwgMCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCksIGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgaW5zZXQgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XFxufVxcbi5rZXk6aG92ZXIsIC5rZXkuYWN0aXZlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICM1MTZiNTUgbGluZWFyLWdyYWRpZW50KCM1YjllNmYsICM1NTkyNzYgODAlKTtcXG59XFxuLmtleTphY3RpdmUsIC5rZXkuYWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgMnB4ICMxMzU4MTksIDAgMXB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNCksIGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSwgaW5zZXQgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDRweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA0cHgpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZXMva2V5LnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFkVztFQWVYLDRJQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBREY7QUFFRTtFQUNFLGVBQUE7RUFDQSx5REFBQTtBQUFKO0FBQ0U7RUFDRSxxSUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkbWFpbi1jb2xvcjogcmdiKDg3LCA5MCwgODcpXFxuXFxuLmtleVxcbiAgZm9udC1zaXplOiAxNnB4XFxuICBwYWRkaW5nOiAwXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcXG4gIGZvbnQtd2VpZ2h0OiBib2xkXFxuICBjb2xvcjogI2ZmZlxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXFxuICB0ZXh0LXNoYWRvdzogMCAtMXB4IHJnYmEoMCwwLDAsLjUpXFxuICB1c2VyLXNlbGVjdDogbm9uZVxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAyM2QwZlxcbiAgYm9yZGVyLXJhZGl1czogNXB4XFxuICBvdXRsaW5lOiBub25lXFxuICBiYWNrZ3JvdW5kOiAkbWFpbi1jb2xvclxcbiAgYm94LXNoYWRvdzogMCA2cHggcmdiKDAsMzgsNiksIDAgM3B4IDE1cHggcmdiYSgwLDAsMCwuNCksIGluc2V0IDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjMpLCBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LDI1NSwyNTUsLjUpXFxuICB0cmFuc2l0aW9uOiAuMnNcXG4gIHRleHQtYWxpZ246IGNlbnRlclxcbiAgbGluZS1oZWlnaHQ6IDQ4cHhcXG4gICY6aG92ZXIsICYuYWN0aXZlXFxuICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICBiYWNrZ3JvdW5kOiAjNTE2YjU1IGxpbmVhci1ncmFkaWVudCgjNWI5ZTZmLCAjNTU5Mjc2IDgwJSlcXG4gICY6YWN0aXZlLCAmLmFjdGl2ZVxcbiAgICBib3gtc2hhZG93OiAwIDJweCAjMTM1ODE5LCAwIDFweCA2cHggcmdiYSgwLDAsMCwuNCksIGluc2V0IDAgMXB4IHJnYmEoMjU1LDI1NSwyNTUsLjMpLCBpbnNldCAwIDAgM3B4IHJnYmEoMjU1LDI1NSwyNTUsLjUpXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgNHB4KVxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCA0cHgpXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmtleWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNzgwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBib3JkZXI6IDRweCBncmF5IHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gIHBhZGRpbmc6IDRweCA1cHggOHB4O1xcbiAgcm93LWdhcDogOHB4O1xcbiAgY29sdW1uLWdhcDogNHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zdHlsZXMva2V5Ym9hcmQuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIua2V5Ym9hcmRcXG4gIGRpc3BsYXk6IGZsZXhcXG4gIGZsZXgtd3JhcDogd3JhcFxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXFxuICB3aWR0aDogNzgwcHhcXG4gIGZvbnQtc2l6ZTogMjBweFxcbiAgYm9yZGVyOiA0cHggZ3JheSBzb2xpZFxcbiAgYm9yZGVyLXJhZGl1czogMTBweFxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5XFxuICBwYWRkaW5nOiA0cHggNXB4IDhweFxcbiAgcm93LWdhcDogOHB4XFxuICBjb2x1bW4tZ2FwOiA0cHhcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2NyZWVuIHtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgbWluLXdpZHRoOiA3ODBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9zY3JlZW4uc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNjcmVlblxcbiAgd2lkdGg6IDUwdndcXG4gIG1pbi13aWR0aDogNzgwcHhcXG4gIGhlaWdodDogMjAwcHhcXG4gIGZvbnQtc2l6ZTogMjBweFxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRpbmcuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRpbmcuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5mb3RleHQuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZm90ZXh0LnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2lucHV0LnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbnB1dC5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9rZXkuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2tleS5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9rZXlib2FyZC5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4va2V5Ym9hcmQuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2NyZWVuLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zY3JlZW4uc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhlYWRpbmdDb21wb25lbnQgZnJvbSAnLi9zY3JpcHRzL2hlYWRpbmcnO1xuaW1wb3J0IHNjcmVlbkNvbXBvbmVudCBmcm9tICcuL3NjcmlwdHMvc2NyZWVuJztcbmltcG9ydCBLZXlib2FyZCBmcm9tICcuL3NjcmlwdHMva2V5Ym9hcmQnO1xuaW1wb3J0IGluZm90ZXh0Q29tcG9uZW50IGZyb20gJy4vc2NyaXB0cy9pbmZvdGV4dCc7XG5pbXBvcnQgaGFuZGxlQ2xpY2sgZnJvbSAnLi9zY3JpcHRzL2hhbmRsZS1jbGljayc7XG5pbXBvcnQgY2hhbmdlTGF5b3V0IGZyb20gJy4vc2NyaXB0cy9jaGFuZ2VMYXlvdXQnO1xuaW1wb3J0IGtleVNldCBmcm9tICcuL3NjcmlwdHMva2V5c2V0JztcbmltcG9ydCAnLi9zdHlsZXMvaW5wdXQuc2Fzcyc7XG5cbmNvbnN0IGtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XG5jb25zdCBzY3JlZW4gPSBzY3JlZW5Db21wb25lbnQoKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbXBvbmVudCgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyZWVuKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoa2V5Ym9hcmQubm9kZSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZm90ZXh0Q29tcG9uZW50KCkpO1xuY29uc3QgQ2Fwc0xvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2Fwc0xvY2snKTtcbmNvbnN0IHByZXNzZWRLZXlzID0gW107XG5cbmtleWJvYXJkLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB7XG4gIGhhbmRsZUNsaWNrKGV2ZW50LCBrZXlib2FyZC5jYXNlTW9kZSgpKTtcbiAgY2hhbmdlTGF5b3V0KGtleWJvYXJkLCBbZXZlbnQudGFyZ2V0LmlkXSk7XG59KTtcblxua2V5Ym9hcmQubm9kZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGV2ZW50KSA9PiB7XG4gIGNoYW5nZUxheW91dChrZXlib2FyZCwgW2V2ZW50LnRhcmdldC5pZF0pO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFPYmplY3Qua2V5cyhrZXlTZXQpLmluY2x1ZGVzKGV2ZW50LmNvZGUpKSByZXR1cm47XG4gIGlmIChldmVudC5jb2RlID09PSAnQ2Fwc0xvY2snKSB7XG4gICAga2V5Ym9hcmQuaXNDYXBzTG9jayA9ICFrZXlib2FyZC5pc0NhcHNMb2NrO1xuICAgIENhcHNMb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGtleWJvYXJkLmNhcGl0YWxpemUoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZXZlbnQuY29kZX1gKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgaWYgKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xuICBwcmVzc2VkS2V5cy5wdXNoKGV2ZW50LmNvZGUpO1xuICBoYW5kbGVDbGljayhldmVudCwga2V5Ym9hcmQuY2FzZU1vZGUoKSwgcHJlc3NlZEtleXMsIGtleWJvYXJkKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICBpZiAoIU9iamVjdC5rZXlzKGtleVNldCkuaW5jbHVkZXMoZXZlbnQuY29kZSkpIHJldHVybjtcbiAgaWYgKGV2ZW50LmNvZGUgIT09ICdDYXBzTG9jaycpIHtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZXZlbnQuY29kZX1gKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZXZlbnQuY29kZX1gKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdTaGlmdCcpIHtcbiAgICAgICAga2V5Ym9hcmQuc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgcG9zID0gcHJlc3NlZEtleXMuaW5kZXhPZihldmVudC5jb2RlKTtcbiAgcHJlc3NlZEtleXMuc3BsaWNlKHBvcywgMSk7XG59KTtcblxuQ2Fwc0xvY2suYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICBrZXlib2FyZC5pc0NhcHNMb2NrID0gIWtleWJvYXJkLmlzQ2Fwc0xvY2s7XG4gIENhcHNMb2NrLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICBrZXlib2FyZC5jYXBpdGFsaXplKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQga2V5Ym9hcmQ7XG4iXSwibmFtZXMiOlsiY2hhbmdlTGF5b3V0Iiwia2V5Ym9hcmQiLCJwcmVzc2VkS2V5cyIsImNoYW5nZUxheW91dEtleXMiLCJsZW5ndGgiLCJydW5DaGFuZ2VMYXlvdXQiLCJydW5TaGlmdCIsImZvckVhY2giLCJrZXkiLCJpbmNsdWRlcyIsImlzQ2Fwc0xvY2siLCJjYXBpdGFsaXplIiwibG9jYWxTdG9yYWdlIiwibGF5b3V0Iiwic2hpZnQiLCJoYW5kbGVCYWNrc3BhY2UiLCJzY3JlZW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb2N1cyIsInZhbHVlIiwidGV4dCIsInN0YXJ0Iiwic2VsZWN0aW9uU3RhcnQiLCJlbmQiLCJzZWxlY3Rpb25FbmQiLCJ0ZXh0MSIsInNsaWNlIiwidGV4dDIiLCJrZXlTZXQiLCJoYW5kbGVFbnRlclRhYiIsImhhbmRsZURlbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjYXNlTW9kZSIsInByZXZlbnREZWZhdWx0IiwiY29kZSIsImdldEVsZW1lbnRCeUlkIiwibW9kIiwiaW5uZXJIVE1MIiwic2V0UmFuZ2VUZXh0IiwidGFyZ2V0IiwiaWQiLCJoZWFkaW5nQ29tcG9uZW50IiwiaGVhZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsImluZm90ZXh0Q29tcG9uZW50IiwiaW5mbyIsImtleUNvbXBvbmVudCIsIktleWJvYXJkIiwibm9kZSIsIk9iamVjdCIsImtleXMiLCJlIiwiYXBwZW5kQ2hpbGQiLCJyZWciLCJzdHlsZSIsIndpZHRoIiwic2l6ZSIsImJhY2tncm91bmRDb2xvciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwiY3VycmVudE1vZGUiLCJjaGFyIiwicnVzQ2hhciIsImFudGlDYXNlTW9kZSIsIktleVEiLCJCYWNrcXVvdGUiLCJsYXQiLCJydXMiLCJEaWdpdDEiLCJEaWdpdDIiLCJEaWdpdDMiLCJEaWdpdDQiLCJEaWdpdDUiLCJEaWdpdDYiLCJEaWdpdDciLCJEaWdpdDgiLCJEaWdpdDkiLCJEaWdpdDAiLCJNaW51cyIsIkVxdWFsIiwiQmFja3NwYWNlIiwiVGFiIiwiS2V5VyIsIktleUUiLCJLZXlSIiwiS2V5VCIsIktleVkiLCJLZXlVIiwiS2V5SSIsIktleU8iLCJLZXlQIiwiQnJhY2tldExlZnQiLCJCcmFja2V0UmlnaHQiLCJCYWNrc2xhc2giLCJEZWxldGUiLCJDYXBzTG9jayIsIktleUEiLCJLZXlTIiwiS2V5RCIsIktleUYiLCJLZXlHIiwiS2V5SCIsIktleUoiLCJLZXlLIiwiS2V5TCIsIlNlbWljb2xvbiIsIlF1b3RlIiwiRW50ZXIiLCJTaGlmdExlZnQiLCJLZXlaIiwiS2V5WCIsIktleUMiLCJLZXlWIiwiS2V5QiIsIktleU4iLCJLZXlNIiwiQ29tbWEiLCJQZXJpb2QiLCJTbGFzaCIsIkFycm93VXAiLCJTaGlmdFJpZ2h0IiwiQ29udHJvbExlZnQiLCJNZXRhTGVmdCIsIkFsdExlZnQiLCJTcGFjZSIsIkFsdFJpZ2h0IiwiQXJyb3dMZWZ0IiwiQXJyb3dEb3duIiwiQXJyb3dSaWdodCIsIkNvbnRyb2xSaWdodCIsInNjcmVlbkNvbXBvbmVudCIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlIiwicmVwZWF0IiwicHVzaCIsInJlbW92ZSIsInBvcyIsImluZGV4T2YiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9