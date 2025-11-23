import React from 'react';

// Decorative falling stars overlay for the hero background
const FallingStars: React.FC = () => {
  // Increase count for a denser field
  const stars = Array.from({ length: 32 });

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {stars.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 3.5 + Math.random() * 3.5;
        const size = 3 + Math.random() * 4; // bigger stars

        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/95 shadow-[0_0_18px_rgba(255,255,255,0.85)]"
            style={{
              top: '-40px',
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animation: `na-fall ${duration}s linear ${delay}s infinite`,
              opacity: 0.95,
            }}
          />
        );
      })}

      <style>{`
        @keyframes na-fall {
          0% {
            transform: translate3d(0, 0, 0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translate3d(-120px, 130vh, 0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FallingStars;


