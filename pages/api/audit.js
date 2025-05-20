// pages/api/audit.js
export default async function handler(req, res) {
  const { address } = req.query;

  if (!address) {
    return res.status(400).json({ error: "Missing token address." });
  }

  try {
    const ETHERSCAN_API_KEY = 'ZXCVBNMASDFGHJKL123456';
    const etherscanUrl = `https://api.etherscan.io/api?module=token&action=tokeninfo&contractaddress=${address}&apikey=${ETHERSCAN_API_KEY}`;

    const response = await fetch(etherscanUrl);
    const data = await response.json();

    let tokenInfo = {};
    if (data.status === "1") {
      const token = data.result[0];
      tokenInfo = {
        name: token.tokenName || "Unknown",
        symbol: token.tokenSymbol || "N/A",
        decimals: token.tokenDecimal || 18,
        verified: true
      };
    } else {
      tokenInfo = {
        name: "Unknown",
        symbol: "N/A",
        decimals: 18,
        verified: false
      };
    }

    // Simulated Uniswap pool check
    const liquidityInfo = {
      poolFound: true,
      ethLocked: 18.4,
      usdValue: 56200,
      volume24h: 4300
    };

    // Simulated risk score logic
    const riskScore = tokenInfo.verified ? 72 : 48;
    const flags = [];
    if (!tokenInfo.verified) flags.push("Contract not verified");
    flags.push("Liquidity locked");
    flags.push("Owner not renounced");

    res.status(200).json({
      token: tokenInfo,
      liquidity: liquidityInfo,
      riskScore,
      flags
    });

  } catch (err) {
    res.status(500).json({ error: "Failed to fetch audit data." });
  }
}
