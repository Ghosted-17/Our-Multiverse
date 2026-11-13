'use client';

import React, { useState, useEffect } from 'react';
import { Lock, Heart } from 'lucide-react';

interface PasscodeGateProps {
  children: React.ReactNode;
  correctPasscode: string;
}

export default function PasscodeGate({ children, correctPasscode }: PasscodeGateProps) {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if previously unlocked in this browser session
    const unlocked = sessionStorage.getItem('sanctuary_unlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Case-insensitive and trimmed comparison
    if (passcode.trim().toLowerCase() === correctPasscode.trim().toLowerCase()) {
      sessionStorage.setItem('sanctuary_unlocked', 'true');
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPasscode('');
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-[#0D0D0F]" />;
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen bg-[#0D0D0F] flex flex-col items-center justify-center p-6 text-[#F2F1ED] selection:bg-[#C4A77D]/30 selection:text-[#F2F1ED]">
      {/* Golden Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#C4A77D]/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-sm p-8 rounded-2xl bg-[#1A1A1C]/90 backdrop-blur-xl border border-[#C4A77D]/50 shadow-[0_0_35px_rgba(196,167,125,0.2)] text-center">
        <div className="w-12 h-12 rounded-xl bg-[#0D0D0F] border border-[#2A2624] mx-auto flex items-center justify-center mb-5 shadow-[0_0_12px_rgba(196,167,125,0.25)]">
          <Lock className="w-5 h-5 text-[#C4A77D]" />
        </div>

        <h2 className="font-serif text-2xl text-[#F2F1ED] mb-2 tracking-wide">
          The Sanctuary
        </h2>
        <p className="text-[#C4A77D] text-xs font-serif italic mb-6 leading-relaxed">
          "What's my surname?"
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Enter answer..."
              className="w-full px-4 py-3 rounded-xl bg-[#0D0D0F] border border-[#2A2624] text-center text-[#F2F1ED] placeholder:text-[#A39E93]/50 focus:outline-none focus:border-[#C4A77D] focus:shadow-[0_0_15px_rgba(196,167,125,0.3)] transition-all tracking-wider text-sm"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-[11px] text-red-400/90 font-mono tracking-wider">
              Think carefully... that's not it!
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#C4A77D] text-[#0D0D0F] font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#d4b991] active:scale-95 transition-all shadow-[0_0_15px_rgba(196,167,125,0.4)]"
          >
            Enter Sanctuary
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-[#2A2624]/60 flex items-center justify-center space-x-1.5 text-[9px] text-[#A39E93] uppercase font-mono tracking-widest">
          <Heart className="w-3 h-3 text-[#C4A77D] fill-[#C4A77D]" />
          <span>Curated for Atinuke</span>
        </div>
      </div>
    </div>
  );
}