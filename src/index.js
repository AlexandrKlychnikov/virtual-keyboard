import headingComponent from './scripts/heading';
import screenComponent from './scripts/screen';
import Keyboard from './scripts/keyboard';
import infotextComponent from './scripts/infotext';
import './styles/input.sass';

const keyboard = new Keyboard();
const screen = screenComponent();
document.body.appendChild(headingComponent());
document.body.appendChild(screen);
document.body.appendChild(keyboard.node);
document.body.appendChild(infotextComponent());
