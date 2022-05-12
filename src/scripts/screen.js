import '../styles/screen.sass';

export default function screenComponent() {
  const screen = document.createElement('textarea');
  screen.classList.add('screen');
  return screen;
}
