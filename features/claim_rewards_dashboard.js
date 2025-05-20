import { useState, useEffect } from 'react';

export default function ClaimRewardsDashboard() {
  const [xp, setXp] = useState(120);
  const [level, setLevel] = useState(1);
  const [rewardClaimed, setRewardClaimed] = useState(false);

  useEffect(() => {
    setLevel(Math.floor(xp / 100) + 1);
  }, [xp]);

  const claimReward = () => {
    if (!rewardClaimed) {
      alert('You claimed a Rare Avatar Frame!');
      setRewardClaimed(true);
    }
  };

  return (
    <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded shadow text-center">
      <h3 className="text-lg font-semibold">Your XP: {xp}</h3>
      <div className="w-full bg-gray-300 rounded-full h-4 my-3">
        <div
          className="bg-green-500 h-4 rounded-full transition-all"
          style={{ width: `${xp % 100}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">Level {level}</p>
      <button
        onClick={claimReward}
        className={`mt-3 px-4 py-2 rounded ${
          rewardClaimed ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600'
        } text-white`}
        disabled={rewardClaimed}
      >
        {rewardClaimed ? 'Reward Claimed' : 'Claim Reward'}
      </button>
    </div>
  );
}
