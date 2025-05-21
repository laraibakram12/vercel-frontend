 // pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BittKing - Presale Alerts, Rug Pull Radar, ROI Tools</title>
        <meta
          name="description"
          content="Track top crypto presales, detect scams, simulate ROI, and get real-time alerts – powered by BittKing."
        />
      </Head>

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-500 mb-4 drop-shadow">
          Welcome to BittKing
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          What is BittKing?
        </h2>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
          BittKing is your all-in-one crypto presale hub. We help you spot the best early-stage tokens, avoid rugs, and simulate potential returns.
        </p>

        <ul className="text-left text-base sm:text-lg max-w-xl mx-auto space-y-2">
          <li>🚨 <strong>Rug Pull Radar</strong> – Instant token audits</li>
          <li>📊 <strong>ROI Simulator</strong> – Predict your profits</li>
          <li>⏰ <strong>Presale Alerts</strong> – Get early access notifications</li>
          <li>📈 <strong>Token Analysis</strong> – Live scores + flags</li>
          <li>📰 <strong>Crypto Blog</strong> – Learn strategies & news</li>
        </ul>

        <p className="mt-6">
          <a href="#" className="text-blue-600 underline">
            Get the Chrome Extension
          </a>
        </p>
      </main>
    </div>
  );
}