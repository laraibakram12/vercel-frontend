import { useEffect } from 'react';

export default function AnimatedBanner() {
  useEffect(() => {
    const glow = document.querySelector('.glow-text');
    if (glow) {
      glow.classList.add('animate-glow');
    }
  }, []);

  return (
    <div className="text-center my-10">
      <h1 className="text-4xl md:text-6xl font-bold glow-text text-yellow-400">
        Welcome to BittKing
      </h1>
      <style jsx>{`
        .glow-text {
          transition: all 0.3s ease-in-out;
        }
        .animate-glow {
          animation: glow 1.8s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            text-shadow: 0 0 5px #facc15, 0 0 10px #facc15, 0 0 20px #facc15;
          }
          to {
            text-shadow: 0 0 10px #fbbf24, 0 0 20px #fbbf24, 0 0 30px #fbbf24;
          }
        }
      `}</style>
    </div>
  );
}
