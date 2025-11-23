import React from 'react';
import { 
  OpenAIIcon, 
  SlackIcon, 
  NotionIcon, 
  PythonIcon,
  DriveIcon,
  Mail, 
  Calendar, 
  Cloud,
  Database,
  BarChart
} from './BrandIcons';

// --- Types ---
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface OrbitItem {
  id: string;
  icon: IconComponent;
  color: string;
}

interface OrbitRingData {
  radius: number; // in pixels
  duration: number; // in seconds
  reverse?: boolean; // direction of rotation
  items: OrbitItem[];
}

// --- Configuration ---
const ORBITS: OrbitRingData[] = [
  // Inner Ring
  {
    radius: 145,
    duration: 40,
    items: [
      { id: 'openai', icon: OpenAIIcon, color: '#10A37F' },
      { id: 'drive', icon: DriveIcon, color: '#1FA463' },
      { id: 'python', icon: PythonIcon, color: '#3776AB' },
    ]
  },
  // Middle Ring
  {
    radius: 245,
    duration: 55,
    reverse: true,
    items: [
      { id: 'slack', icon: SlackIcon, color: '#4A154B' },
      { id: 'notion', icon: NotionIcon, color: '#000000' },
      { id: 'cloud', icon: Cloud, color: '#00A1E0' },
      { id: 'db', icon: Database, color: '#E040FB' },
    ]
  },
  // Outer Ring
  {
    radius: 350,
    duration: 70,
    items: [
      { id: 'mail', icon: Mail, color: '#EA4335' },
      { id: 'calendar', icon: Calendar, color: '#4285F4' },
      { id: 'chart', icon: BarChart, color: '#FBBC05' },
    ]
  }
];

// --- Sub-components ---

/**
 * The Central Sphere (The "Heart")
 */
const CentralHub = () => {
  return (
    // Centered container
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none">
      
      {/* 1. Continuous Light Waves (Flowing outward) */}
      {/* We use 3 staggered waves to create a constant "pumping" visual */}
      {[0, 1, 2].map((i) => (
        <div 
          key={i}
          className="absolute top-1/2 left-1/2 rounded-full mix-blend-overlay pointer-events-none"
          style={{ 
            width: '6.5rem', 
            height: '6.5rem',
            // Gradient fill simulates a body of light moving out
            background: 'radial-gradient(circle, rgba(255,180,100,0.3) 0%, rgba(255,140,0,0) 70%)',
            animation: `light-wave 3s linear infinite`,
            animationDelay: `${i * 1}s` 
          }}
        />
      ))}

      {/* 2. Static Ambient Glow (Increased Intensity) */}
      <div className="absolute inset-0 rounded-full bg-orange-500/15 blur-[80px] w-[680px] h-[680px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mix-blend-screen pointer-events-none"></div>
      
      {/* 3. Core Glow (Concentrated Heat) */}
      <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-[50px] w-[220px] h-[220px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mix-blend-overlay"></div>
      
      {/* Main Sphere with Heartbeat Animation */}
      <div 
        className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#FFF8F3] via-[#FFE0B2] to-[#FFCC80] flex items-center justify-center border border-white/90 z-10 shadow-lg"
        style={{ animation: 'heartbeat 3s ease-in-out infinite' }}
      >
        {/* Inner Highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/90 to-transparent pointer-events-none opacity-80"></div>
        
        {/* Logo Text */}
        <div className="relative z-10 drop-shadow-sm transform transition-transform">
           <span className="text-[#E65100] font-bold text-xl tracking-tight font-sans">iotaAI</span>
        </div>
      </div>
    </div>
  );
};

/**
 * A single orbiting tool card.
 */
const OrbitingCard = ({ 
  item, 
  reverse,
  duration
}: { 
  item: OrbitItem; 
  reverse?: boolean;
  duration: number;
}) => {
  const Icon = item.icon;

  return (
    // Centering wrapper to ensure the card's center aligns with the orbit path
    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 pointer-events-auto">
       {/* 
          Counter-Rotation Animation:
          Since the parent "Rotor" spins, this card would normally spin with it (tumbling).
          We apply an equal and opposite spin to this inner container to keep the card upright.
       */}
       <div 
         className="w-full h-full"
         style={{
           animation: `${reverse ? 'spin' : 'spin-reverse'} ${duration}s linear infinite`
         }}
       >
          <div className="group relative w-full h-full rounded-2xl bg-white/80 backdrop-blur-md shadow-[0_2px_15px_rgb(0,0,0,0.05)] border border-white/60 flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-[0_0_25px_rgba(255,165,0,0.25)] hover:border-orange-200 cursor-pointer">
            {/* Icon */}
            <div className="text-slate-500 transition-colors duration-300 group-hover:text-orange-600">
              <Icon className="w-7 h-7" style={{ color: item.color }} />
            </div>
            
            {/* Tooltip */}
            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-bold text-slate-700 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-lg border border-slate-100 whitespace-nowrap z-50 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
              {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
            </div>
          </div>
       </div>
    </div>
  );
};

/**
 * A Ring layer.
 */
const OrbitRing = ({ data }: { data: OrbitRingData }) => {
  const { radius, duration, reverse, items } = data;
  const size = radius * 2;
  
  return (
    <>
      {/* 1. VISUAL TRACK: Static circle */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/30 pointer-events-none"
        style={{ width: size, height: size }}
      />

      {/* 2. KINETIC ROTOR: Zero-size center div that spins */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-0 h-0"
          style={{ 
            animation: `${reverse ? 'spin-reverse' : 'spin'} ${duration}s linear infinite`
          }}
        >
          {items.map((item, index) => {
            const angleStep = 360 / items.length;
            const angle = index * angleStep;
            
            return (
              // 3. THE SPOKE: Rigidly attached to the rotor
              <div 
                key={item.id} 
                className="absolute top-0 left-0"
                style={{
                  // Rotate to the correct angle, then push out by radius
                  transform: `rotate(${angle}deg) translateX(${radius}px)`
                }}
              >
                {/* 
                   4. ORIENTATION CORRECTION: 
                   We statically un-rotate by the placement angle so the starting position is upright relative to the rotor.
                */}
                <div style={{ transform: `rotate(-${angle}deg)` }}>
                   <OrbitingCard item={item} reverse={reverse} duration={duration} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const OrbitingShowcase = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-slate-50 overflow-hidden font-sans py-20">
      
      {/* Styles for animation keyframes injected locally to ensure robustness */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes heartbeat {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,150,0,0); }
          15% { transform: scale(1.1); box-shadow: 0 0 35px 10px rgba(255,140,0,0.4); }
          30% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,150,0,0); }
          45% { transform: scale(1.05); box-shadow: 0 0 20px 5px rgba(255,140,0,0.2); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,150,0,0); }
        }
        @keyframes light-wave {
          0% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(8); opacity: 0; }
        }
      `}</style>

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30 pointer-events-none"></div>
      
      {/* Main Ambient Light Gradient (Subtler) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,100,0.12)_0%,rgba(255,255,255,0)_60%)] pointer-events-none"></div>

      {/* Main Composition with Arrow and Text */}
      <div className="relative w-full h-[750px] flex items-center justify-center gap-6 lg:gap-12 px-6 lg:px-12">
        {/* Left: Revolving Component (slightly left of center) */}
        <div className="relative flex-shrink-0 w-full max-w-[600px] h-full flex items-center justify-center translate-x-12 lg:translate-x-20">
          {/* Orbits */}
          {ORBITS.map((orbit, i) => (
            <OrbitRing key={i} data={orbit} />
          ))}
          
          {/* Central Hub */}
          <CentralHub />
        </div>
        
        {/* Center: Big Arrow */}
        <div className="relative z-30 flex-shrink-0 flex items-center justify-center translate-x-24 lg:translate-x-32">
          <svg 
            width="180" 
            height="180" 
            viewBox="0 0 120 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-400"
          >
            <path 
              d="M30 60 L90 60 M80 50 L90 60 L80 70" 
              stroke="currentColor" 
              strokeWidth="8" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-neutral-600"
            />
          </svg>
        </div>
        
        {/* Right: Title Section (centrally aligned) */}
        <div className="relative z-30 flex-1 flex items-center justify-center translate-x-12 lg:translate-x-20">
          <div className="max-w-md text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.1] mb-4 underline decoration-2 underline-offset-4">
              iotaAI
            </h2>
            <p className="text-base md:text-lg lg:text-xl font-bold text-black uppercase tracking-wider underline decoration-2 underline-offset-4">
              Heartbeat of All AI Business Automation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitingShowcase;

