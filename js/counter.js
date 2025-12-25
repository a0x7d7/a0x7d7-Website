export function initCounter() {
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const count = document.getElementById("count");
  if (!plus || !minus || !count) return;

  let value = 0;
  plus.onclick = () => count.textContent = ++value;
  minus.onclick = () => count.textContent = --value;
}