export default function handler(req, res) {
  res.status(200).json({
    g1: process.env.VITE_GIFTCARD_1,
    g2: process.env.VITE_GIFTCARD_2,
    g3: process.env.VITE_GIFTCARD_3,
  });
}
