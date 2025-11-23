import React, { useState, useEffect, useRef } from 'react';
import { PRICING_PLANS } from '../constants';
import { PlanDetailCard } from './PlanDetailCard';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AUTO_SWITCH_INTERVAL = 5000; // 5 seconds

export const PricingWidget: React.FC = () => {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);
  const activePlanIndexRef = useRef(0);

  // Keep refs in sync with state
  useEffect(() => {
    isPausedRef.current = isPaused;
    activePlanIndexRef.current = activePlanIndex;
  }, [isPaused, activePlanIndex]);

  // Auto-rotation logic
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Only start interval if not paused
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        // Double-check pause state using ref to avoid stale closures
        if (!isPausedRef.current) {
          setActivePlanIndex((prev) => {
            const nextIndex = (prev + 1) % PRICING_PLANS.length;
            activePlanIndexRef.current = nextIndex;
            return nextIndex;
          });
          setProgressKey((prev) => prev + 1);
        }
      }, AUTO_SWITCH_INTERVAL);
    }

    // Cleanup on unmount or when paused state changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused]);

  const handleManualSelect = (index: number) => {
    // Reset progress when manually selecting
    setActivePlanIndex(index);
    activePlanIndexRef.current = index;
    setProgressKey((prev) => prev + 1);
  };

  const activePlan = PRICING_PLANS[activePlanIndex];

  return (
    <div 
      className="w-full py-12 relative z-10 flex justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-[90%] max-w-[1600px] bg-neutral-950 rounded-[2.5rem] p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Navigation & Info */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight"
            >
              Automate your<br />business logic
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-base text-white/50 mb-6 max-w-md font-light"
            >
              Choose the plan that fits your growth. No hidden fees, cancel anytime.
            </motion.p>
            
            <div className="space-y-3 mb-8">
              {PRICING_PLANS.map((plan, index) => {
                const isActive = index === activePlanIndex;
                return (
                  <button
                    key={plan.id}
                    onClick={() => handleManualSelect(index)}
                    className={`relative w-full text-left p-4 rounded-xl transition-all duration-300 group outline-none focus:ring-2 focus:ring-lime-300/50 ${
                      isActive 
                        ? 'bg-white/10 border border-white/20' 
                        : 'bg-transparent border border-transparent hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`text-lg font-medium mb-0.5 transition-colors ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                          {plan.name}
                        </h3>
                        <p className={`text-xs transition-colors ${isActive ? 'text-white/60' : 'text-white/40'}`}>
                          {plan.subtitle}
                        </p>
                      </div>
                      
                      {/* Active Indicator Arrow */}
                      <div className={`transform transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                        <div className="p-1 rounded-full border border-white/20">
                          <ArrowRight size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Bar for Active Item */}
                    {isActive && !isPaused && (
                      <motion.div 
                        key={progressKey}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: AUTO_SWITCH_INTERVAL / 1000, ease: 'linear' }}
                        className="absolute bottom-0 left-0 h-[2px] bg-lime-300/50 rounded-b-2xl"
                      />
                    )}
                  </button>
                );
              })}
            </div>
            
            {/* Social Proof Footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 mt-auto pt-2"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-neutral-800 bg-neutral-900 overflow-hidden">
                     <img src={`https://picsum.photos/100/100?random=${i + 20}`} alt="User" className="w-full h-full object-cover opacity-80" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs text-white/40">Trusted by 100+ businesses</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column: Detailed Card */}
          <div className="lg:col-span-7 h-full w-full">
             <PlanDetailCard plan={activePlan} />
          </div>
        </div>
      </div>
    </div>
  );
};

