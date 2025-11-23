import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

import { Orb } from './Orb';
import { SafeSatellite } from './Satellite';

const OrbitalSystem: React.FC = () => {
  const [isThinking, setIsThinking] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  const handleOrbClick = async () => {
    if (isThinking) return;

    setIsThinking(true);
    setResponse(null);

    try {
      // Demo behavior: simulate an async AI call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setResponse(
        'Agent activated. Synchronizing contexts across Slack communications, Linear issue tracking, and GitHub repositories to execute requested task.',
      );
    } catch (error) {
      console.error('OrbitalSystem error:', error);
      setResponse('Connection interrupted.');
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#fff,transparent)]" />

      {/* Main Interactive Area */}
      <div className="relative w-[800px] h-[800px] flex items-center justify-center">
        {/* --- Ring 3 (Outer) --- */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full border border-dashed border-slate-300" />
        </div>

        {/* --- Ring 2 (Middle) --- */}
        <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none">
          <div className="w-[520px] h-[520px] rounded-full border border-slate-200" />
        </div>

        {/* --- Ring 1 (Inner) --- */}
        <div className="absolute inset-0 flex items-center justify-center opacity-70 pointer-events-none">
          <div className="w-[260px] h-[260px] rounded-full border border-dashed border-orange-200" />
        </div>

        {/* --- Satellites Layer --- */}

        {/* Inner Ring (radius ~130px) */}
        <SafeSatellite
          icon="🤖"
          size={72}
          orbitRadius={130}
          orbitDuration={25}
          initialAngle={0}
          color="text-slate-800"
        />
        <SafeSatellite
          icon="⚙️"
          size={72}
          orbitRadius={130}
          orbitDuration={25}
          initialAngle={120}
          color="text-slate-800"
        />
        <SafeSatellite
          icon="🔗"
          size={72}
          orbitRadius={130}
          orbitDuration={25}
          initialAngle={240}
          color="text-slate-800"
        />

        {/* Middle Ring (radius ~260px) */}
        <SafeSatellite
          icon="💬"
          size={64}
          orbitRadius={260}
          orbitDuration={40}
          reverse
          initialAngle={45}
          color="text-slate-800"
        />
        <SafeSatellite
          icon="📊"
          size={64}
          orbitRadius={260}
          orbitDuration={40}
          reverse
          initialAngle={165}
          color="text-slate-800"
        />
        <SafeSatellite
          icon="📄"
          size={64}
          orbitRadius={260}
          orbitDuration={40}
          reverse
          initialAngle={285}
          color="text-slate-800"
        />

        {/* Outer Ring (radius ~400px) */}
        <SafeSatellite
          icon="✉️"
          size={56}
          orbitRadius={400}
          orbitDuration={60}
          initialAngle={90}
          color="text-slate-800"
        />
        <SafeSatellite
          icon="🖥️"
          size={56}
          orbitRadius={400}
          orbitDuration={60}
          initialAngle={225}
          color="text-slate-800"
        />

        {/* --- Central Intelligence --- */}
        <Orb isThinking={isThinking} onClick={handleOrbClick} />
      </div>

      {/* Response Card */}
      {response && (
        <div className="absolute bottom-12 max-w-xl w-full px-6 animate-in slide-in-from-bottom-4 fade-in duration-500 z-50">
          <div className="bg-white/90 backdrop-blur-xl border border-orange-100 rounded-2xl p-6 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] ring-1 ring-slate-900/5">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl border border-orange-200/50">
                <Sparkles className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-slate-900 mb-1.5 tracking-tight">
                  Agent Protocol Executed
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{response}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default OrbitalSystem;


