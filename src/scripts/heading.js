import '../styles/heading.sass';

export default function headingComponent() {
  const heading = document.createElement('h1');
  heading.textContent = 'RSS Virtual keyboard';
  heading.classList.add('heading');
  return heading;
}
