export function initBelt() {
  const beltInner = document.querySelector(".belt-inner");
  const toggleBtn = document.getElementById("beltToggle");
  const speedSlider = document.getElementById("beltSpeed");

  if (!beltInner || !toggleBtn || !speedSlider) return;

  let playing = true;

  // --- speed slider ---
  speedSlider.min = 0;
  speedSlider.max = 100;
  speedSlider.value = 50;

  function updateSpeed() {
    const t = speedSlider.value / 100; // 0 → 1
    const seconds = 60 - t * 55;        // 60s → 5s
    document.documentElement.style.setProperty(
      "--belt-speed",
      `${seconds}s`
    );
  }

  speedSlider.addEventListener("input", updateSpeed);
  updateSpeed(); // initialize

  // --- play / stop toggle ---
  toggleBtn.onclick = () => {
    if (playing) {
      beltInner.style.animationPlayState = "paused";
      toggleBtn.textContent = "▶";
    } else {
      beltInner.style.animationPlayState = "running";
      toggleBtn.textContent = "❚❚";
    }
    playing = !playing;
  };
}
