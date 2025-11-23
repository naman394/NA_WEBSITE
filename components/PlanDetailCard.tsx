import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Plan } from '../types';

interface PlanDetailCardProps {
  plan: Plan;
}

export const PlanDetailCard: React.FC<PlanDetailCardProps> = ({ plan }) => {
  const Icon = plan.icon;

  return (
    <div className="relative w-full h-full min-h-[450px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, x: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-neutral-950 border border-white/5 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-full flex flex-col"
        >
          {/* Subtle background glow effect internal to card */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-lime-300/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white shadow-inner">
                <Icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-medium text-white tracking-tight">{plan.name}</h3>
            </div>
            
            <div className="flex items-baseline gap-2 mb-4 flex-wrap">
              <span className="text-4xl lg:text-5xl font-light tracking-tighter text-white">
                {plan.currency}{plan.price.toLocaleString('en-US')}
              </span>
              <span className="text-lg text-white/40 font-light">{plan.frequency}</span>
            </div>
            
            <p className="text-base text-white/60 leading-relaxed mb-6 font-light">
              {plan.description}
            </p>
            
            <button className="group/btn w-full bg-lime-300 hover:bg-lime-400 text-black font-semibold py-4 px-6 rounded-full flex items-center justify-between transition-all duration-300 mb-8 shadow-[0_0_20px_rgba(217,255,94,0.15)] hover:shadow-[0_0_30px_rgba(217,255,94,0.3)]">
              <span className="text-lg">{plan.buttonText}</span>
              <div className="bg-black/10 rounded-full p-2 group-hover/btn:translate-x-1 transition-transform">
                <ArrowRight size={20} />
              </div>
            </button>
            
            <div className="space-y-3 flex-grow">
              {plan.features.map((feature, idx) => (
                <motion.div 
                  key={feature.text + idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (idx * 0.05), ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 min-w-[1.25rem] h-4 flex items-center justify-center rounded-full bg-white/5 w-5 h-5">
                    <Check size={12} className="text-lime-300" />
                  </div>
                  <span className="text-white/80 font-light text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

