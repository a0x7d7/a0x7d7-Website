export function initNoise() {
  const input = document.getElementById("noiseInput");
  const btn = document.getElementById("speakNoise");
  if (!input || !btn) return;

  btn.onclick = () => {
    if (!input.value) return;
    const u = new SpeechSynthesisUtterance(input.value);
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  };
}