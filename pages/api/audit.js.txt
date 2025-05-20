export default function handler(req, res) {
  const { tokenAddress } = req.query;
  // You can call any API or logic here
  res.status(200).json({ audit: "Safe", address: tokenAddress });
}