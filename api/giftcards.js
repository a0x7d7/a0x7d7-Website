async function loadGiftCards() {
  const res = await fetch("/api/giftcards");
  const data = await res.json();
  G1 = data.g1;
  G2 = data.g2;
  G3 = data.g3;
}
