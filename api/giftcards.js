export default function handler(req, res) {
  res.status(200).json({
    g1: process.env.GIFTCARD_1,
    g2: process.env.GIFTCARD_2,
    g3: process.env.GIFTCARD_3,
  });
}
