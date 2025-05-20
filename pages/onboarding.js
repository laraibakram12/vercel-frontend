// pages/onboarding.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [language, setLanguage] = useState('');
  const [nickname, setNickname] = useState('');
  const [avatar, setAvatar] = useState('default');

  useEffect(() => {
    // Load saved onboarding state
    const saved = localStorage.getItem('onboardingComplete');
    if (saved) router.push('/');
  }, []);

  const completeOnboarding = () => {
    localStorage.setItem('userLanguage', language);
    localStorage.setItem('userNickname', nickname);
    localStorage.setItem('userAvatar', avatar);
    localStorage.setItem('onboardingComplete', 'true');
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 flex flex-col items-center justify-center">
      {step === 1 && (
        <div className="w-full max-w-md animate-fade-in">
          <h2 className="text-xl font-semibold mb-3">Choose Your Language</h2>
          <select
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800"
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          >
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
          </select>
          <button disabled={!language} onClick={() => setStep(2)} className="mt-4 w-full px-4 py-2 bg-yellow-400 text-black rounded shadow">
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="w-full max-w-md animate-fade-in">
          <h2 className="text-xl font-semibold mb-3">Pick a Nickname</h2>
          <input
            type="text"
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-800"
            placeholder="Your nickname..."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button disabled={!nickname} onClick={() => setStep(3)} className="mt-4 w-full px-4 py-2 bg-yellow-400 text-black rounded shadow">
            Continue
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="w-full max-w-md animate-fade-in text-center">
          <h2 className="text-xl font-semibold mb-3">Choose Your Avatar</h2>
          <div className="flex justify-center space-x-4 mb-4">
            <button onClick={() => setAvatar('default')} className={`p-3 border rounded ${avatar === 'default' ? 'bg-yellow-200' : ''}`}>🙂</button>
            <button onClick={() => setAvatar('crown')} className={`p-3 border rounded ${avatar === 'crown' ? 'bg-yellow-200' : ''}`}>👑</button>
            <button onClick={() => setAvatar('pepe')} className={`p-3 border rounded ${avatar === 'pepe' ? 'bg-yellow-200' : ''}`}>🐸</button>
          </div>
          <button onClick={() => setStep(4)} className="w-full px-4 py-2 bg-yellow-400 text-black rounded shadow">
            Continue
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="w-full max-w-md animate-fade-in text-center">
          <h2 className="text-xl font-semibold mb-3">Welcome, {nickname}!</h2>
          <p className="mb-2">You're starting at <strong>Level 1</strong> with 0 XP.</p>
          <p>Earn XP by chatting, tracking tokens, and sharing presales.</p>
          <div className="my-4 h-4 w-full bg-gray-300 rounded-full">
            <div className="h-4 bg-green-500 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <button onClick={completeOnboarding} className="w-full px-4 py-2 bg-green-600 text-white rounded shadow">
            Enter App
          </button>
        </div>
      )}

      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.7s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
