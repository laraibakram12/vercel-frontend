import { useEffect, useState } from 'react';

const mockPresales = [
  { name: 'PepeMoon', chain: 'Solana', link: '/presale/pepemoon', score: 92 },
  { name: 'ApeVault', chain: 'Ethereum', link: '/presale/apevault', score: 89 },
  { name: 'RugProof', chain: 'Base', link: '/presale/rugproof', score: 88 }
];

export default function PresaleOfTheDay() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * mockPresales.length);
    setFeatured(mockPresales[random]);
  }, []);

  if (!featured) return null;

  return (
    <div className="border rounded-lg p-4 mt-6 bg-yellow-100 dark:bg-yellow-900 text-center shadow">
      <p className="text-sm uppercase text-gray-600">Presale of the Day</p>
      <h2 className="text-2xl font-bold">{featured.name}</h2>
      <p className="text-gray-700 dark:text-gray-300">Chain: {featured.chain} | Score: {featured.score}</p>
      <a href={featured.link} className="text-blue-500 underline mt-2 inline-block">View Presale</a>
    </div>
  );
}
