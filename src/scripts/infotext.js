import '../styles/infotext.sass';

export default function infotextComponent() {
  const info = document.createElement('p');
  info.innerHTML = `The keyboard was created in the Windows operating system<br>
  The combination to switch the language layout: left Ctrl + left Alt`;
  info.classList.add('info');
  return info;
}
