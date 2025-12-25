export function initOverlay() {
  const btn = document.getElementById("onceBtn");
  const overlay = document.getElementById("overlay");
  if (!btn || !overlay) return;

  btn.onclick = () => overlay.style.display = "flex";

  overlay.onclick = (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
      btn.disabled = true;
    }
  };
}