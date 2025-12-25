import { initCounter } from "./counter.js";
import { initOverlay } from "./overlay.js";
import { initPixelWall } from "./pixelWall.js";
import { initBackground } from "./background.js";
import { initNoise } from "./noise.js";
import { initWordbank } from "./wordbank.js";
import { initBelt } from "./belt.js";

document.addEventListener("DOMContentLoaded", () => {
  initCounter();
  initOverlay();
  initPixelWall();
  initBackground();
  initNoise();
  initWordbank();
  initBelt();
});