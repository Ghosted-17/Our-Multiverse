import React from 'react';
import Image from 'next/image';
import { BookOpen, Users, Map, User, ArrowRight, Share2, Compass, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505] overflow-x-hidden font-sans">
      
      {/* Pronounced Golden Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#C4A77D]/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center pt-24 mb-16 px-6">
        <div className="inline-flex items-center space-x-3 mb-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4A77D]" />
          <Sparkles className="w-5 h-5 text-[#C4A77D] drop-shadow-[0_0_8px_rgba(196,167,125,0.8)]" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4A77D]" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F2F1ED] mb-6 tracking-wide leading-tight max-w-5xl drop-shadow-xl">
          THE DIGITAL CHRONICLES <br />
          <span className="italic text-[#C4A77D] font-light drop-shadow-[0_0_15px_rgba(196,167,125,0.3)]">OF ALEX</span>
        </h1>
        <p className="text-[#C4A77D] text-sm md:text-base max-w-xl mx-auto tracking-[0.2em] font-medium uppercase opacity-80">
          A personal archive of moments & stories.
        </p>
      </section>

      {/* Accents (Vertical Golden Divider) */}
      <div className="relative z-10 w-[1px] h-32 bg-gradient-to-b from-[#C4A77D]/80 via-[#C4A77D]/20 to-transparent mx-auto mb-16 shadow-[0_0_10px_rgba(196,167,125,0.5)]" />

      {/* Content Showcase (Horizontal Scroll Mobile / Grid Desktop) */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 flex overflow-x-auto md:grid md:grid-cols-2 gap-4 md:gap-6 pb-32 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* Card 1: Chronicle Title */}
        <article className="group relative w-[85vw] md:w-auto flex-none snap-center bg-[#101012]/90 backdrop-blur-2xl border border-[#C4A77D]/30 p-6 rounded-2xl overflow-hidden hover:border-[#C4A77D] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(196,167,125,0.2)]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#C4A77D]/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-[#C4A77D]/20 transition-colors duration-700" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-10 h-10 rounded-full bg-[#050505] border border-[#C4A77D]/50 flex items-center justify-center mb-5 shadow-[0_0_10px_rgba(196,167,125,0.3)] group-hover:border-[#C4A77D] transition-colors duration-500">
              <BookOpen className="w-4 h-4 text-[#C4A77D]" />
            </div>
            <h2 className="font-serif text-2xl text-[#F2F1ED] mb-3 drop-shadow-md">The Summer Solstice</h2>
            <p className="text-[#A39E93] text-xs leading-relaxed mb-6 flex-grow">
              A vivid recounting of the longest day of the year, filled with unscripted adventures and twilight gatherings. A testament to ephemeral beauty.
            </p>
            <button className="self-start inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-[#C4A77D] text-[#C4A77D] text-[10px] tracking-[0.2em] font-bold hover:bg-[#C4A77D] hover:text-[#050505] hover:shadow-[0_0_20px_rgba(196,167,125,0.4)] transition-all duration-300">
              <span>EXPLORE STORY</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </article>

        {/* Card 2: Shared Experience */}
        <article className="group relative w-[85vw] md:w-auto flex-none snap-center bg-[#101012]/90 backdrop-blur-2xl border border-[#C4A77D]/30 p-6 rounded-2xl overflow-hidden hover:border-[#C4A77D] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(196,167,125,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050505] to-transparent opacity-80 z-0" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-10 h-10 rounded-full bg-[#050505] border border-[#C4A77D]/50 flex items-center justify-center mb-5 shadow-[0_0_10px_rgba(196,167,125,0.3)] group-hover:border-[#C4A77D] transition-colors duration-500">
              <Users className="w-4 h-4 text-[#C4A77D]" />
            </div>
            <h2 className="font-serif text-2xl text-[#F2F1ED] mb-4 drop-shadow-md">Midnight Dialogues</h2>
            <ul className="space-y-3 text-[#A39E93] text-xs mb-6 flex-grow">
              <li className="flex items-start">
                <span className="text-[#C4A77D] mr-2 mt-0.5 shadow-[0_0_5px_rgba(196,167,125,0.8)]">•</span>
                <span>Conversations beneath a canopy of stars.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C4A77D] mr-2 mt-0.5 shadow-[0_0_5px_rgba(196,167,125,0.8)]">•</span>
                <span>The collective silence shared between close confidants.</span>
              </li>
            </ul>
            <button className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-[#050505] border border-[#C4A77D]/50 text-[#C4A77D] text-[10px] tracking-[0.2em] font-bold hover:border-[#C4A77D] hover:shadow-[0_0_20px_rgba(196,167,125,0.4)] transition-all duration-300">
              <Share2 className="w-3 h-3" />
              <span>VIEW MOMENT</span>
            </button>
          </div>
        </article>

        {/* Card 3: Story Path */}
        <article className="group relative w-[85vw] md:w-auto flex-none snap-center bg-[#101012]/90 backdrop-blur-2xl border border-[#C4A77D]/30 p-6 rounded-2xl overflow-hidden hover:border-[#C4A77D] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(196,167,125,0.2)]">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
               <div className="w-10 h-10 rounded-full bg-[#050505] border border-[#C4A77D]/50 flex items-center justify-center shadow-[0_0_10px_rgba(196,167,125,0.3)] group-hover:border-[#C4A77D] transition-colors duration-500">
                <Map className="w-4 h-4 text-[#C4A77D]" />
              </div>
              <span className="text-[#C4A77D] text-[9px] tracking-[0.2em] uppercase border border-[#C4A77D]/40 px-3 py-1 rounded-full shadow-[0_0_8px_rgba(196,167,125,0.1)]">Timeline</span>
            </div>
            
            <h2 className="font-serif text-2xl text-[#F2F1ED] mb-5 drop-shadow-md">The Journey North</h2>
            
            <div className="relative pl-5 border-l border-[#C4A77D]/40 space-y-4 flex-grow mb-6">
              <div className="relative">
                <div className="absolute -left-[24.5px] top-1 w-2 h-2 rounded-full bg-[#C4A77D] shadow-[0_0_10px_rgba(196,167,125,1)]" />
                <h3 className="text-[#F2F1ED] text-[11px] font-semibold mb-0.5">Departure</h3>
                <p className="text-[#A39E93] text-[9px]">Leaving familiar city lights.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[24.5px] top-1 w-2 h-2 rounded-full bg-[#050505] border border-[#C4A77D]" />
                <h3 className="text-[#F2F1ED] text-[11px] font-semibold mb-0.5">The Alpine Pass</h3>
                <p className="text-[#A39E93] text-[9px]">Navigating dense fog and frost.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[24.5px] top-1 w-2 h-2 rounded-full bg-[#050505] border border-[#C4A77D]" />
                <h3 className="text-[#F2F1ED] text-[11px] font-semibold mb-0.5">Arrival</h3>
                <p className="text-[#A39E93] text-[9px]">A sanctuary of timber and stone.</p>
              </div>
            </div>

            <button className="self-start inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-[#C4A77D]/50 text-[#C4A77D] text-[10px] tracking-[0.2em] font-bold hover:bg-[#C4A77D] hover:text-[#050505] hover:shadow-[0_0_20px_rgba(196,167,125,0.4)] transition-all duration-300">
              <Compass className="w-3 h-3" />
              <span>TRACE PATH</span>
            </button>
          </div>
        </article>

        {/* Card 4: Personal Insights */}
        <article className="group relative w-[85vw] md:w-auto flex-none snap-center bg-[#101012]/90 backdrop-blur-2xl border border-[#C4A77D]/30 p-6 rounded-2xl overflow-hidden hover:border-[#C4A77D] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(196,167,125,0.2)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#C4A77D]/15 blur-[50px] rounded-full pointer-events-none group-hover:bg-[#C4A77D]/25 transition-colors duration-700" />
          <div className="relative z-10 flex flex-col h-full text-center items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#050505] border border-[#C4A77D]/50 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(196,167,125,0.4)] group-hover:border-[#C4A77D] transition-colors duration-500">
              <User className="w-5 h-5 text-[#C4A77D]" />
            </div>
            <h2 className="font-serif text-2xl text-[#F2F1ED] mb-3 drop-shadow-md">Internal Monologue</h2>
            <p className="text-[#C4A77D]/90 text-xs leading-relaxed mb-6 italic max-w-[200px]">
              "In the quiet spaces between events, we find the truest reflection of our intent."
            </p>
            <button className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#C4A77D] text-[#050505] text-[10px] tracking-[0.2em] font-extrabold hover:bg-[#F2F1ED] hover:shadow-[0_0_25px_rgba(196,167,125,0.6)] transition-all duration-300">
              <span>READ INSIGHTS</span>
            </button>
          </div>
        </article>

      </main>

    </div>
  );
}
