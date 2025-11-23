import React, { useState, useEffect } from 'react';
import { Layers, Globe, Server, CheckCircle } from 'lucide-react';
import { Button } from './Button';

export const WebSolutionCard: React.FC = () => {
    const [pathProgress, setPathProgress] = useState(0);

    // Simulate the data flowing through the pipeline
    useEffect(() => {
        const interval = setInterval(() => {
            setPathProgress(prev => (prev >= 100 ? 0 : prev + 1));
        }, 30); // Speed of flow
        return () => clearInterval(interval);
    }, []);

    const isStepActive = (threshold: number) => pathProgress > threshold && pathProgress < threshold + 25;
    const isStepDone = (threshold: number) => pathProgress >= threshold + 25;

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 p-6 md:p-8 overflow-hidden hover:border-gray-300 transition-colors duration-500 flex flex-col justify-between h-full min-h-[240px]">
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
       
        {/* Background radial gradient */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      {/* Animation Container */}
      <div className="relative w-full h-32 mb-6 flex items-center justify-center">
        {/* SVG Pipeline */}
        <div className="relative w-full max-w-md aspect-[2/1]">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting Lines (Background) */}
                <path d="M50 100 L150 100" stroke="#d1d5db" strokeWidth="2" />
                <path d="M150 100 C200 100 200 50 250 50" stroke="#d1d5db" strokeWidth="2" />
                <path d="M150 100 C200 100 200 150 250 150" stroke="#d1d5db" strokeWidth="2" />
                <path d="M250 50 L350 100" stroke="#d1d5db" strokeWidth="2" />
                <path d="M250 150 L350 100" stroke="#d1d5db" strokeWidth="2" />
                
                {/* Animated Flow Lines */}
                <path d="M50 100 L150 100" stroke="#E65100" strokeWidth="2" strokeDasharray="100" strokeDashoffset={100 - Math.min(pathProgress * 4, 100)} className="opacity-80" />
                
                {/* Upper Branch */}
                <path d="M150 100 C200 100 200 50 250 50" stroke="#E65100" strokeWidth="2" strokeDasharray="111" strokeDashoffset={111 - Math.max(0, Math.min((pathProgress - 25) * 4.5, 111))} className="opacity-80" />
                
                {/* Lower Branch */}
                <path d="M150 100 C200 100 200 150 250 150" stroke="#E65100" strokeWidth="2" strokeDasharray="111" strokeDashoffset={111 - Math.max(0, Math.min((pathProgress - 25) * 4.5, 111))} className="opacity-80" />
                
                {/* Merge Upper */}
                <path d="M250 50 L350 100" stroke="#E65100" strokeWidth="2" strokeDasharray="111" strokeDashoffset={111 - Math.max(0, Math.min((pathProgress - 50) * 4.5, 111))} className="opacity-80" />
                
                {/* Merge Lower */}
                <path d="M250 150 L350 100" stroke="#E65100" strokeWidth="2" strokeDasharray="111" strokeDashoffset={111 - Math.max(0, Math.min((pathProgress - 50) * 4.5, 111))} className="opacity-80" />
            </svg>
            
            {/* Nodes */}
            {/* Start Node */}
            <div className="absolute top-1/2 left-[12.5%] -translate-x-1/2 -translate-y-1/2">
                <div className={`relative w-20 h-7 rounded-full border border-gray-300 bg-gray-50 flex items-center justify-center gap-2 text-[10px] font-mono transition-all duration-300 ${isStepActive(0) ? 'border-[#E65100] shadow-[0_0_15px_rgba(230,81,0,0.3)] text-[#E65100]' : 'text-gray-500'}`}>
                    <Layers className="w-3 h-3" />
                    <span>CONCEPT</span>
                </div>
            </div>
            
            {/* Split Node */}
            <div className="absolute top-1/2 left-[37.5%] -translate-x-1/2 -translate-y-1/2">
                <div className={`w-3 h-3 rounded-full border border-gray-300 bg-white transition-all duration-300 ${pathProgress > 25 ? 'bg-[#E65100] border-[#E65100] scale-125' : ''}`} />
            </div>
            
            {/* Top Branch Node (Frontend) */}
            <div className="absolute top-[25%] left-[62.5%] -translate-x-1/2 -translate-y-1/2">
                 <div className={`relative px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-50 flex items-center gap-2 text-[10px] font-mono transition-all duration-300 ${pathProgress > 50 && pathProgress < 75 ? 'border-[#E65100] text-[#E65100] scale-105' : 'text-gray-500'}`}>
                    <Globe className="w-3 h-3" />
                    APP
                </div>
            </div>
            
            {/* Bottom Branch Node (Backend) */}
             <div className="absolute top-[75%] left-[62.5%] -translate-x-1/2 -translate-y-1/2">
                 <div className={`relative px-3 py-1.5 rounded-lg border border-gray-300 bg-gray-50 flex items-center gap-2 text-[10px] font-mono transition-all duration-300 ${pathProgress > 50 && pathProgress < 75 ? 'border-[#E65100] text-[#E65100] scale-105' : 'text-gray-500'}`}>
                    <Server className="w-3 h-3" />
                    API
                </div>
            </div>
            
            {/* End Node (Deploy) */}
             <div className="absolute top-1/2 left-[87.5%] -translate-x-1/2 -translate-y-1/2">
                 <div className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-500 ${pathProgress > 75 ? 'border-[#E65100] bg-[#E65100]/10 shadow-[0_0_30px_rgba(230,81,0,0.4)]' : 'border-gray-300'}`}>
                     {pathProgress > 90 ? (
                         <CheckCircle className="w-5 h-5 text-[#E65100]" />
                     ) : (
                         <div className="w-5 h-5 rounded-full border-2 border-[#E65100] border-t-transparent animate-spin" />
                     )}
                </div>
            </div>
             
             {/* Labels floating */}
             {pathProgress > 80 && (
                <div className="absolute top-1/2 left-[87.5%] -translate-x-1/2 translate-y-6 animate-fade-in-up">
                    <span className="text-xs font-bold text-[#E65100]">LIVE</span>
                </div>
             )}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="mt-auto">
        <div className="mb-4">
             <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                AI Powered Web & App Solutions
            </h2>
        </div>
        <Button text="Start Project" />
      </div>
    </div>
  );
};

