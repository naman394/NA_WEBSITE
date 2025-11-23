import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderScreenProps {
  onComplete: () => void;
}

type LoaderPhase = 'upTo66' | 'pause66' | 'upTo100' | 'pause100' | 'exit';

const LoaderScreen: React.FC<LoaderScreenProps> = ({ onComplete }) => {
  const [value, setValue] = useState(0);
  const [phase, setPhase] = useState<LoaderPhase>('upTo66');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isExiting) return;

    let intervalId: number | undefined;
    let timeoutId: number | undefined;

    switch (phase) {
      case 'upTo66': {
        intervalId = window.setInterval(() => {
          setValue((prev) => {
            if (prev >= 66) {
              window.clearInterval(intervalId);
              setPhase('pause66');
              return 66;
            }
            return prev + 1;
          });
        }, 8); // faster ramp-up to 66
        break;
      }

      case 'pause66': {
        timeoutId = window.setTimeout(() => {
          setPhase('upTo100');
        }, 150); // shorter pause at 66
        break;
      }

      case 'upTo100': {
        intervalId = window.setInterval(() => {
          setValue((prev) => {
            if (prev >= 100) {
              window.clearInterval(intervalId);
              setPhase('pause100');
              return 100;
            }
            return prev + 1;
          });
        }, 8); // faster ramp-up to 100
        break;
      }

      case 'pause100': {
        timeoutId = window.setTimeout(() => {
          setPhase('exit');
          setIsExiting(true);
        }, 250); // quick pause at 100 before exit
        break;
      }

      case 'exit':
      default:
        break;
    }

    return () => {
      if (intervalId) window.clearInterval(intervalId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [phase, isExiting]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-start bg-[#D7E7FF] px-10 pb-10"
      initial={{ y: 0 }}
      animate={{ y: isExiting ? '-100%' : 0 }}
      transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (isExiting) {
          onComplete();
        }
      }}
    >
      <span className="text-[140px] md:text-[180px] leading-none font-semibold text-[#101F10]">
        {value}
      </span>
    </motion.div>
  );
};

export default LoaderScreen;


