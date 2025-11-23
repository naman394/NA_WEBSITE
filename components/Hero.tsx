import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center z-20">
      <h1 
        className="font-serif text-5xl md:text-7xl text-[#111] leading-[1.1] tracking-tight mb-6"
      >
        Automate your<br />
        workflow with AI
      </h1>

      <p 
        className="text-lg md:text-xl text-gray-600 font-sans max-w-2xl leading-relaxed mb-10"
      >
        We build custom AI agents, web apps, and automation solutions. 
        Focus on strategy while our digital workforce handles the rest.
      </p>

      {/* Email Capture */}
      <div 
        className="flex items-center w-full max-w-md bg-transparent gap-3 mb-10"
      >
        <input 
          type="email" 
          placeholder="Enter work email" 
          className="flex-grow bg-[#EFECE9]/60 hover:bg-[#EFECE9] focus:bg-[#EFECE9] transition-colors outline-none border-none rounded-xl px-6 py-3.5 text-gray-800 placeholder-gray-500 text-base"
        />
        <button className="bg-black text-white px-6 py-3.5 rounded-xl font-medium hover:scale-105 transition-transform duration-200 active:scale-95 whitespace-nowrap">
          Get a Proposal
        </button>
      </div>

      {/* Social Proof */}
      <div 
        className="flex items-center gap-4"
      >
        <div className="flex -space-x-3">
            {/* Placeholder avatars */}
            <img src="https://picsum.photos/100/100?random=4" alt="User" className="w-10 h-10 rounded-full border-2 border-[#FFFBF7] object-cover" />
            <img src="https://picsum.photos/100/100?random=5" alt="User" className="w-10 h-10 rounded-full border-2 border-[#FFFBF7] object-cover" />
            <img src="https://picsum.photos/100/100?random=6" alt="User" className="w-10 h-10 rounded-full border-2 border-[#FFFBF7] object-cover" />
            <div className="w-10 h-10 rounded-full border-2 border-[#FFFBF7] bg-black flex items-center justify-center text-white">
                <Sparkles size={16} />
            </div>
        </div>
        <p className="text-sm font-medium text-gray-800 max-w-[180px] text-left leading-snug">
          Join 500+ businesses automating with Super Agent.
        </p>
      </div>
    </div>
  );
};

export default Hero;