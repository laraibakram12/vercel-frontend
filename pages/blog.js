// pages/blog.js
import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>BittKing Blog – Presale Tips & Crypto Guides</title>
        <meta name="description" content="Crypto insights, presale tips, and rug pull detection guides from BittKing." />
      </Head>

      <main className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">BittKing Blog</h1>
          <p className="text-lg mb-6">Your source for crypto presale tips, token audit guides, and safety strategies.</p>

          <ul className="space-y-4">
            <li className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded shadow">
              <h2 className="text-xl font-semibold">How to Detect a Rug Pull</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">Understand the signs of risky tokens and how to protect your wallet.</p>
            </li>
            <li className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded shadow">
              <h2 className="text-xl font-semibold">Maximizing ROI in Presales</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">Strategies to catch early winners and calculate your expected gains.</p>
            </li>
          </ul>
        </div>
      </main>

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
