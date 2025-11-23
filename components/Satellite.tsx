import React from 'react';

interface SatelliteProps {
  icon: React.ReactNode;
  size: number; // Diameter of the satellite bubble
  orbitDuration: number; // Seconds for full rotation
  orbitRadius: number; // Distance from center (px)
  initialAngle?: number; // Starting degree
  reverse?: boolean;
  color?: string;
}

export const Satellite: React.FC<SatelliteProps> = ({
  icon,
  size,
  orbitDuration,
  orbitRadius,
  initialAngle = 0,
  reverse = false,
  color = 'text-orange-500',
}) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 pointer-events-none"
      style={{
        width: 0,
        height: 0,
      }}
    >
      <div
        className="absolute top-0 left-0 w-0 h-0 flex items-center justify-center"
        style={{
          animation: `spin ${orbitDuration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          transform: `rotate(${initialAngle}deg)`,
        }}
      >
        <div
          className="absolute transform"
          style={{
            transform: `translateX(${orbitRadius}px)`,
          }}
        >
          <div
            className="relative group cursor-pointer pointer-events-auto transition-transform hover:scale-110"
            style={{
              width: size,
              height: size,
              animation: `spin ${orbitDuration}s linear infinite`,
              animationDirection: reverse ? 'normal' : 'reverse',
            }}
          >
            <div className="absolute inset-0 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-orange-100 flex items-center justify-center hover:shadow-orange-200/50 transition-shadow duration-300">
              <span className={`text-2xl ${color} opacity-80 group-hover:opacity-100`}>{icon}</span>
            </div>
            <div className="absolute -inset-1 rounded-full border border-dashed border-orange-200/30 animate-spin-slow pointer-events-none" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export const SafeSatellite: React.FC<SatelliteProps> = ({
  icon,
  size,
  orbitDuration,
  orbitRadius,
  initialAngle = 0,
  reverse = false,
  color = 'text-orange-500',
}) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div
        className="absolute top-0 left-0 flex items-center justify-center"
        style={{
          animation: `orbit ${orbitDuration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
          transform: `rotate(${initialAngle}deg)`,
        }}
      >
        <div style={{ transform: `translateX(${orbitRadius}px)` }}>
          <div
            className="group cursor-pointer pointer-events-auto relative transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              width: size,
              height: size,
              animation: `orbit ${orbitDuration}s linear infinite`,
              animationDirection: reverse ? 'normal' : 'reverse',
            }}
          >
            {/* Glassy Background */}
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-full shadow-[0_8px_16px_-6px_rgba(234,88,12,0.15)] border border-white/50 flex items-center justify-center z-10">
              <span className={`text-2xl ${color}`}>{icon}</span>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-orange-200" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};


