// js/wordbank.js

// ---- WORD DATA ----
export const WORDBANK = {
  starters: [
    "What happens when",
    "Why does",
    "How would you feel if",
    "Is it possible that",
    "What would change if"
  ],

  subjects: [
    "a machine",
    "a memory",
    "a city",
    "a person",
    "a rule",
    "a signal"
  ],

  verbs: [
    "stops obeying",
    "starts remembering",
    "forgets",
    "repeats",
    "distorts",
    "learns"
  ],

  conditions: [
    "itself",
    "the past",
    "the future",
    "nothing at all",
    "too much",
    "too little"
  ]
};

// ---- BEHAVIOR ----
export function initWordbank() {
  const slider = document.getElementById("seedSlider");
  const btn = document.getElementById("questionBtn");

  if (!slider || !btn) return;

  const pick = (arr, s) => arr[s % arr.length];

  btn.onclick = () => {
    const s = parseInt(slider.value || 0, 10);

    const question =
      pick(WORDBANK.starters, s) + " " +
      pick(WORDBANK.subjects, s + 1) + " " +
      pick(WORDBANK.verbs, s + 2) + " " +
      pick(WORDBANK.conditions, s + 3) + "?";

    const utterance = new SpeechSynthesisUtterance(question);
    utterance.rate = 1;
    utterance.pitch = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  };
}
