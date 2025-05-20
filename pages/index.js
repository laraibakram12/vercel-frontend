// pages/index.js
import Head from 'next/head';
import AnimatedBanner from '../features/animated_banner';
import DarkModeToggle from '../features/dark_mode_toggle';

export default function Home() {
  return (
    <>
      <Head>
        <title>BittKing – Presale Alerts, Rug Pull Radar, ROI Tools</title>
        <meta name="description" content="Track top crypto presales, detect scams, simulate ROI, and get real-time alerts – powered by BittKing." />
      </Head>

      <DarkModeToggle />
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
        <AnimatedBanner />

        <section className="my-10 max-w-4xl mx-auto px-4 animate-fade-in">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">What is BittKing?</h2>
          <p className="mb-4">BittKing is your all-in-one crypto presale hub. We help you spot the best early-stage tokens, avoid rugs, and simulate potential returns.</p>

          <ul className="space-y-2 sm:space-y-3">
            <li className=🚨 "text-sm sm:text-base"><strong>Rug Pull Radar</strong> – Instant token audits</li>
            <li>📈 <strong>ROI Simulator</strong> – Predict your profits</li>
            <li>🔔 <strong>Presale Alerts</strong> – Get early access notifications</li>
            <li>🧠 <strong>Token Analysis</strong> – Live scores + flags</li>
            <li>📰 <strong>Crypto Blog</strong> – Learn strategies & news</li>
          </ul>
        </section>

        <section className="my-12 px-4 text-center animate-slide-up">
          <a href="https://chrome.google.com/webstore/detail" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded shadow hover:shadow-lg transition">
            Get the Chrome Extension
          </a>
        </section>
      </main>

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
        .animate-slide-up {
          animation: slideUp 1.2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
