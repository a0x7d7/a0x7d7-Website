export function initPixelWall() {
  const wall = document.getElementById("pixelWall");
  const reset = document.getElementById("resetGrid");
  if (!wall) return;

  const COLS = 64, ROWS = 4;
  const pixels = [];

  for (let i = 0; i < COLS * ROWS; i++) {
    const p = document.createElement("div");
    p.className = "pixel";
    const r = Math.floor(i / COLS);
    const c = i % COLS;

    p.onclick = () => {
      for (let x = 0; x < COLS; x++) {
        pixels[r * COLS + x].classList.toggle("on");
      }
      for (let y = 0; y < ROWS; y++) {
        const idx = y * COLS + c;
        if (idx !== i) pixels[idx].classList.toggle("on");
      }
    };

    pixels.push(p);
    wall.appendChild(p);
  }

  if (reset) reset.onclick = () =>
    pixels.forEach(p => p.classList.remove("on"));
}