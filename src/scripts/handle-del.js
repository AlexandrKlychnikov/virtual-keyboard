export default function handleDel() {
  const screen = document.querySelector('.screen');
  screen.focus();
  if (screen.value.length === 0) return;
  const text = screen.value;
  const start = screen.selectionStart;
  const end = screen.selectionEnd;
  if (start < end) {
    const text1 = (start > 0) ? text.slice(0, start) : '';
    const text2 = (end < text.length) ? text.slice(end) : '';
    screen.value = text1 + text2;
    screen.selectionStart = text1.length;
    screen.selectionEnd = text1.length;
    screen.focus();
  } else if (start > 0) {
    const text1 = (start - 1 >= 0) ? text.slice(0, start) : '';
    const text2 = (start < text.length) ? text.slice(start + 1) : '';
    screen.value = text1 + text2;
    screen.selectionStart = text1.length;
    screen.selectionEnd = text1.length;
    screen.focus();
  }
}
