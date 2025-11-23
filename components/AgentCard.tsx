import React, { useEffect, useState } from 'react';
import { Bot, Cpu } from 'lucide-react';
import { Button } from './Button';

export const AgentCard: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 p-6 md:p-8 overflow-hidden hover:border-gray-300 transition-colors duration-500 flex flex-col justify-between h-full min-h-[240px]">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
      
      {/* Background radial gradient */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      {/* Animation Section */}
      <div className="relative w-full h-32 mb-6 flex items-center justify-center">
        <div className="flex items-center gap-4 md:gap-8">
            
            {/* Step 1: Input */}
            <div className={`relative flex flex-col items-center transition-all duration-700 ${activeStep === 0 ? 'scale-110 opacity-100' : 'opacity-40 scale-95'}`}>
                <div className={`w-16 h-16 rounded-xl border flex items-center justify-center transition-colors duration-500 ${activeStep === 0 ? 'border-[#E65100]/50 bg-[#E65100]/10' : 'border-gray-300 bg-gray-50'}`}>
                    <div className="grid grid-cols-3 gap-1">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full transition-colors duration-300 ${activeStep === 0 ? 'bg-[#E65100]' : 'bg-gray-400'}`} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Arrow 1 */}
            <div className="text-gray-300 flex flex-col gap-1">
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeStep === 0 ? 'bg-[#E65100]' : 'bg-gray-300'}`} />
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 delay-75 ${activeStep === 0 ? 'bg-[#E65100]' : 'bg-gray-300'}`} />
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 delay-150 ${activeStep === 0 ? 'bg-[#E65100]' : 'bg-gray-300'}`} />
            </div>

            {/* Step 2: Processing */}
            <div className={`relative flex flex-col items-center transition-all duration-700 ${activeStep === 1 ? 'scale-110 opacity-100' : 'opacity-40 scale-95'}`}>
                 <div className={`w-16 h-16 rounded-xl border flex items-center justify-center transition-colors duration-500 ${activeStep === 1 ? 'border-[#E65100]/50 bg-[#E65100]/10' : 'border-gray-300 bg-gray-50'}`}>
                    <Cpu className={`w-7 h-7 transition-colors ${activeStep === 1 ? 'text-[#E65100] animate-spin-slow' : 'text-gray-400'}`} />
                </div>
            </div>

            {/* Arrow 2 */}
            <div className="text-gray-300 flex flex-col gap-1">
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeStep === 1 ? 'bg-[#E65100]' : 'bg-gray-300'}`} />
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 delay-75 ${activeStep === 1 ? 'bg-[#E65100]' : 'bg-gray-300'}`} />
                <div className={`w-2 h-2 rounded-full transition-colors duration-300 delay-150 ${activeStep === 1 ? 'bg-[#E65100]' : 'bg-gray-300'}`} />
            </div>

             {/* Step 3: Agent Output */}
             <div className={`relative flex flex-col items-center transition-all duration-700 ${activeStep === 2 ? 'scale-110 opacity-100' : 'opacity-40 scale-95'}`}>
                 <div className={`w-16 h-16 rounded-xl border flex items-center justify-center transition-colors duration-500 shadow-lg ${activeStep === 2 ? 'border-[#E65100] bg-[#E65100] shadow-[#E65100]/20' : 'border-gray-300 bg-gray-50'}`}>
                    <Bot className={`w-8 h-8 transition-colors ${activeStep === 2 ? 'text-white' : 'text-gray-400'}`} />
                </div>
            </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-auto">
        <div className="mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                AI Agents for Business
            </h2>
        </div>

        <Button text="Explore Agents" />
      </div>
    </div>
  );
};

