export function initBackground() {
  const rows = document.querySelectorAll(".fidget-row");
  if (rows.length < 3) return;

  const sliders = rows[2].querySelectorAll("input[type='range']");
  const buttons = rows[2].querySelectorAll("button");
  if (sliders.length < 2 || buttons.length < 2) return;

  const speed = sliders[1];
  const volume = sliders[0];
  const musicBtn = buttons[0];
  const heartBtn = buttons[1];

  const style = document.documentElement;

  speed.min = 0; speed.max = 100; speed.value = 50;
  const updateSpeed = () => {
    const t = speed.value / 100;
    const s = 300 - t * 280;
    style.style.setProperty("--dot-speed", `${s}s`);
  };
  speed.oninput = updateSpeed;
  updateSpeed();

  const audio = new Audio("assets/bgm.mp3");
  audio.loop = true;
  audio.volume = 0.5;
  let playing = false;

  musicBtn.onclick = () => {
    playing ? audio.pause() : audio.play();
    playing = !playing;
  };

  volume.min = 0; volume.max = 100; volume.value = 50;
  volume.oninput = () => audio.volume = volume.value / 100;

  const dot = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='1.5' fill='%23bbb' fill-opacity='0.45'/%3E%3C/svg%3E")`;
  const heart = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cg transform='translate(6 6) scale(0.4)'%3E%3Cpath d='M12 21s-6.7-4.35-9.5-7.87C.9 11.4 1.2 7.9 4.3 6.5 6.2 5.7 8.3 6.3 9.6 7.8L12 10.3l2.4-2.5c1.3-1.5 3.4-2.1 5.3-1.3 3.1 1.4 3.4 4.9 1.8 6.6C18.7 16.65 12 21 12 21z' fill='%23bbb' fill-opacity='0.45'/%3E%3C/g%3E%3C/svg%3E")`;

  let hearts = false;
  heartBtn.onclick = () => {
    style.style.setProperty("--bg-pattern", hearts ? dot : heart);
    heartBtn.textContent = hearts ? "❤︎" : "•";
    hearts = !hearts;
  };
}