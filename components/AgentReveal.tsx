import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AgentReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // -- Animation Mapping --
  // 0 -> 0.5: Mask Shrinks from Huge to Face size
  // 0.5 -> 0.8: Content Reveals
  // 0.8 -> 1.0: Final State holds

  // Mask Scale: Starts massive (12) effectively covering screen with gradient, shrinks to 1 (on face)
  const maskScale = useTransform(scrollYProgress, [0, 0.5], [12, 1]);
  
  // Text Opacity: "A new era..." fades out as mask shrinks
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // CTA Button: Appears when mask is settled
  const ctaOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.5, 0.6], [20, 0]);

  // Character: Fades in behind the mask
  const characterOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const characterScale = useTransform(scrollYProgress, [0.1, 0.5], [0.9, 1]);

  // Background Color: Transitions to the warm/grainy look
  const bgColor = useTransform(scrollYProgress, [0.4, 0.6], ["rgba(255, 255, 255, 0)", "rgba(255, 230, 230, 1)"]);

  // Annotation Lines: Fade in at the end
  const linesOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);

  return (
    <div ref={containerRef} className="w-full h-[300vh] relative z-20">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Dynamic Background Layer */}
        <motion.div 
          style={{ backgroundColor: bgColor }}
          className="absolute inset-0 w-full h-full z-0"
        >
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{ filter: 'url(#noiseFilter)' }}></div>
            {/* Radial Gradient for Warmth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-100/50 to-orange-200/50 opacity-80"></div>
        </motion.div>

        {/* Initial Title */}
        <motion.div 
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute top-[15%] w-full text-center z-40 pointer-events-none"
        >
            <h2 className="font-serif text-5xl md:text-7xl text-[#111] tracking-tight leading-none mb-4">
                A new era of humans,<br/>
                with Super Agents
            </h2>
            <div className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium text-lg mt-8">
                Build your own agent
            </div>
        </motion.div>

        {/* Main Content Container */}
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center z-10">
            
            {/* Character Image (Behind Mask) */}
            <motion.div 
                style={{ opacity: characterOpacity, scale: characterScale }}
                className="relative w-[300px] md:w-[400px] aspect-[3/4] flex items-center justify-center"
            >
                {/* Placeholder for the Boy */}
                <img 
                    src="https://images.unsplash.com/photo-1534030347209-7147fd69a12d?q=80&w=1000&auto=format&fit=crop" 
                    alt="Human"
                    className="w-full h-full object-cover rounded-xl shadow-2xl sepia-[0.2] contrast-110 brightness-110"
                />

                {/* Tech Annotations (Lines) */}
                <motion.div style={{ opacity: linesOpacity }} className="absolute inset-0 pointer-events-none">
                    {/* Left Line */}
                    <div className="absolute top-1/3 -left-32 flex items-center">
                        <span className="text-xs font-mono uppercase text-gray-600 tracking-widest mr-2">Works 24/7</span>
                        <div className="w-24 h-px bg-gray-400"></div>
                        <div className="w-2 h-2 bg-black rounded-full -ml-1"></div>
                    </div>
                    {/* Right Line */}
                    <div className="absolute bottom-1/3 -right-32 flex items-center">
                        <div className="w-2 h-2 bg-black rounded-full -mr-1"></div>
                        <div className="w-24 h-px bg-gray-400"></div>
                        <span className="text-xs font-mono uppercase text-gray-600 tracking-widest ml-2">Infinite Memory</span>
                    </div>
                    {/* Top Right Text */}
                    <div className="absolute -top-10 -right-10 text-right">
                        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">500+ Tool<br/>Superpowers</p>
                    </div>
                    {/* Blurred Background Elements for Depth */}
                    <div className="absolute top-1/2 -translate-x-full left-0 text-6xl font-bold text-gray-900/5 blur-sm whitespace-nowrap select-none">
                        DELEGATE<br/>ANY TASK
                    </div>
                    <div className="absolute top-1/3 -translate-x-[-100%] right-0 text-6xl font-bold text-gray-900/5 blur-sm whitespace-nowrap select-none">
                        SUPER<br/>AGENT
                    </div>
                </motion.div>
            </motion.div>

            {/* The Mask (The Glasses) */}
            <motion.div
                style={{ scale: maskScale }}
                className="absolute z-50 w-[280px] md:w-[320px] aspect-[2/1] pointer-events-none"
            >
                {/* SVG Mask mimicking the colorful 3D glasses */}
                <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-2xl">
                    <defs>
                        <linearGradient id="glassGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                            <stop offset="0%" stopColor="#FF6B6B" /> {/* Orange/Red */}
                            <stop offset="50%" stopColor="#D946EF" /> {/* Pink/Purple */}
                            <stop offset="100%" stopColor="#3B82F6" /> {/* Blue */}
                        </linearGradient>
                    </defs>
                    {/* Mask Shape */}
                    <path 
                        d="M20,20 Q50,20 50,45 Q50,70 20,70 Q5,70 5,45 Q5,20 20,20 Z 
                           M180,20 Q150,20 150,45 Q150,70 180,70 Q195,70 195,45 Q195,20 180,20 Z
                           M10,10 Q100,10 190,10 Q200,10 200,50 Q200,90 190,90 Q150,90 120,70 Q100,60 80,70 Q50,90 10,90 Q0,90 0,50 Q0,10 10,10 Z" 
                        fill="url(#glassGradient)" 
                        fillRule="evenodd"
                    />
                    {/* Branding on Mask */}
                    <text x="25" y="28" fontFamily="sans-serif" fontSize="5" fill="rgba(0,0,0,0.4)" fontWeight="bold">
                        <tspan>◆ Super Agent</tspan>
                    </text>
                </svg>
            </motion.div>

            {/* Final CTA - Absolute Bottom */}
            <motion.div 
                style={{ opacity: ctaOpacity, y: ctaY }}
                className="absolute bottom-10 md:bottom-20 z-50"
            >
                 <button className="bg-[#111] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:scale-105 transition-transform">
                    Build your own agent
                </button>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AgentReveal;