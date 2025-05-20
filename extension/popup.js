document.getElementById('scanButton').addEventListener('click', async () => {
  const input = document.getElementById('tokenInput').value.trim();
  const resultBox = document.getElementById('result');

  if (!input) {
    resultBox.innerHTML = '<span class="status-warning">Please enter a token address.</span>';
    return;
  }

  resultBox.innerHTML = 'Scanning BittKing backend...';

  try {
    // Replace this with your real deployed API URL once ready
    const backendUrl = `https://bittking.vercel.app/api/audit?address=${input}`;

    const response = await fetch(backendUrl);
    const data = await response.json();

    if (data.error) {
      resultBox.innerHTML = '<span class="status-danger">Token not found or audit failed.</span>';
      return;
    }

    let output = '';

    output += `<strong>Token:</strong> ${data.token.name} (${data.token.symbol})<br/>`;
    output += `<span class="status-${data.token.verified ? 'safe' : 'danger'}">Verified: ${data.token.verified}</span><br/><br/>`;

    output += '<strong>Uniswap Pool:</strong><br/>';
    output += `<span class="status-safe">ETH Locked: ${data.liquidity.ethLocked} ETH</span><br/>`;
    output += `<span class="status-safe">USD Value: $${data.liquidity.usdValue}</span><br/>`;
    output += `<span class="status-warning">24h Volume: $${data.liquidity.volume24h}</span><br/><br/>`;

    output += '<strong>Risk Score:</strong><br/>';
    output += `<span class="status-warning">${data.riskScore} / 100</span><br/>`;

    output += '<strong>Flags:</strong><br/>';
    data.flags.forEach(flag => {
      output += `<span class="status-danger">- ${flag}</span><br/>`;
    });

    resultBox.innerHTML = output;

  } catch (err) {
    resultBox.innerHTML = '<span class="status-danger">Failed to fetch audit data.</span>';
  }
});
