import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-[#E65100]/50 rounded-xl transition-all duration-300 ease-out overflow-hidden">
      
      {/* Button Highlight Gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      
      {/* Icon Box */}
      <div className="w-8 h-8 rounded-lg bg-[#E65100] flex items-center justify-center shadow-lg shadow-[#E65100]/20 group-hover:scale-110 transition-transform duration-300">
         <div className="grid grid-cols-3 gap-0.5 opacity-80">
            {[...Array(9)].map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
            ))}
         </div>
      </div>
      
      <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
        {text}
      </span>
      
      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#E65100] group-hover:translate-x-1 transition-all" />
    </button>
  );
};

