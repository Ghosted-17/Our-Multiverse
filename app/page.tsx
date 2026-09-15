'use client';

import React, { useState, useEffect, useRef } from 'react';
import SpotifyTrack from '@/components/SpotifyTrack';
import { 
  Sparkles, 
  Heart, 
  Music, 
  Mic2,
  Users2,
  Compass,
  GraduationCap,
  ShoppingBag,
  UtensilsCrossed,
  Mail,
  X,
  RotateCw
} from 'lucide-react';

export default function Home() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const loveNotes = [
    "Just in case you forgot today: having you in my corner is easily my favorite blessing.",
    "You have this quiet warmth that makes everywhere we go feel like home.",
    "Thank you for being my peace, my biggest smile, and my favorite person to talk to.",
    "Every day with you still feels like an answered prayer.",
    "I still wonder what I did right to have someone as sweet and intentional as you.",
    "Your laugh is genuinely my favorite sound in the world. It fixes everything.",
    "I love the way your eyes light up whenever you're talking about things that excite you.",
    "No matter how hectic my day gets, hearing your voice instantly calms my spirit.",
    "You make loving you feel so effortless and natural.",
    "I don't just love you for who you are; I love who I become whenever I'm around you.",
    "You're my safe space, my confidante, and the prettiest girl I've ever laid eyes on.",
    "Thank you for being patient with me, for believing in me, and for choosing me every day.",
    "Even on regular, quiet days when we do nothing, just being near you is the best part of my week.",
    "I love your heart, your drive, and the gentle way you carry yourself.",
    "If I had to live this life all over again, I’d find you even faster just to love you longer.",
    "You inspire me to be better, to work harder, and to love with everything I have.",
    "Being around you feels like a breath of fresh air in a noisy world.",
    "I hope you know how deeply valued, respected, and cherished you are by me.",
    "You have no idea how effortlessly you brighten up every room you walk into.",
    "Every prayer I whisper for my future has you placed right in the center of it.",
    "There is no one else in this world I'd rather share my dreams and late-night thoughts with.",
    "Thank you for loving me gently and being the sweetest part of my reality.",
    "I promise to always be your peace, your loudest cheerleader, and your steady shelter.",
    "Your happiness means everything to me. Seeing you win makes my entire world spin right.",
    "You're not just my girlfriend; you're my best friend and the rhythm to my daily life.",
    "Every single little quirk and detail about you is beautiful to me.",
    "Thank you for being you—pure, genuine, and unmatched in every sense.",
    "The world gets quiet and everything makes sense whenever you're holding my hand.",
    "No matter what life brings our way, having you makes every step worth taking.",
    "Loving you is my easiest decision every morning, and my most peaceful thought every night."
  ];

  const envelopeRef = useRef<HTMLDivElement | null>(null);
  const posRef = useRef({ x: 50, y: 150 });
  const velRef = useRef({ dx: 1.6, dy: 1.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  const getRandomNoteIndex = (currentIndex: number) => {
    let nextIndex = Math.floor(Math.random() * loveNotes.length);
    while (nextIndex === currentIndex && loveNotes.length > 1) {
      nextIndex = Math.floor(Math.random() * loveNotes.length);
    }
    return nextIndex;
  };

  useEffect(() => {
    let animId: number;

    const animate = () => {
      if (isModalOpen) return;

      const el = envelopeRef.current;
      if (el) {
        const width = el.offsetWidth || 130;
        const height = el.offsetHeight || 80;
        const maxX = window.innerWidth - width;
        const maxY = window.innerHeight - height;

        let { x, y } = posRef.current;
        let { dx, dy } = velRef.current;

        x += dx;
        y += dy;

        if (x <= 0) {
          x = 0;
          dx = Math.abs(dx);
        } else if (x >= maxX) {
          x = maxX;
          dx = -Math.abs(dx);
        }

        if (y <= 0) {
          y = 0;
          dy = Math.abs(dy);
        } else if (y >= maxY) {
          y = maxY;
          dy = -Math.abs(dy);
        }

        posRef.current = { x, y };
        velRef.current = { dx, dy };

        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isModalOpen]);

  const handleOpenEnvelope = () => {
    setActiveMessageIndex(prev => getRandomNoteIndex(prev));
    setIsModalOpen(true);
  };

  const hobbiesData = [
    {
      title: "Singing",
      icon: Mic2,
      frontDesc: "Melodies, soft notes, and uninhibited acoustics.",
      backNote: "Whether you're humming absentmindedly or pouring your heart out into praise, your voice is easily the most comforting sound I get to hear."
    },
    {
      title: "Hanging Out",
      icon: Users2,
      frontDesc: "Warm company, inside jokes, and zero pretense.",
      backNote: "We could be doing absolutely nothing, sitting in complete silence, and it would still easily be the best highlight of my entire week."
    },
    {
      title: "Visiting New Places",
      icon: Compass,
      frontDesc: "Uncharted corners, long walks, and fresh sights.",
      backNote: "Every new restaurant or spot we check out is nice, but honestly? It's seeing your eyes light up at something new that makes it memorable."
    },
    {
      title: "Learning New Skills",
      icon: GraduationCap,
      frontDesc: "Curiosity, sharp intellect, and constant growth.",
      backNote: "I love watching you lock in on something you want to master. That determination and sharp mind of yours commands respect every single day."
    },
    {
      title: "Shopping",
      icon: ShoppingBag,
      frontDesc: "Careful picks, aesthetic finds, and patient strolls.",
      backNote: "You taking your time to pick out pretty things that suit you—and me smiling behind you carrying your bags without a single complaint."
    },
    {
      title: "Cooking",
      icon: UtensilsCrossed,
      frontDesc: "Warm spices, intentional flavors, and soul food.",
      backNote: "The care and love you put into food is unreal. There is literally nothing that beats eating a hot meal made specially by your hands."
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#0D0D0F] overflow-x-hidden font-sans text-[#F2F1ED] selection:bg-[#C4A77D]/30 selection:text-[#F2F1ED]">
      
      {/* Golden Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-[#C4A77D]/12 blur-[160px] rounded-full pointer-events-none" />

      {/* Floating DVD Envelope */}
      <div 
        ref={envelopeRef}
        onClick={handleOpenEnvelope}
        className="fixed top-0 left-0 z-40 cursor-pointer select-none will-change-transform active:scale-95 hover:scale-105 transition-transform"
        style={{ transform: `translate3d(50px, 150px, 0)` }}
      >
        <div className="relative w-[130px] h-[80px] bg-[#1A1A1C]/90 backdrop-blur-md border border-[#C4A77D]/60 rounded-xl shadow-[0_0_20px_rgba(196,167,125,0.25)] flex flex-col items-center justify-center space-y-1.5 hover:border-[#C4A77D] hover:shadow-[0_0_25px_rgba(196,167,125,0.4)] transition-all">
          <Mail className="w-6 h-6 text-[#C4A77D]" />
          <span className="text-[8px] tracking-[0.2em] uppercase font-bold text-[#F2F1ED]/90">
            Open Letter
          </span>
          <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-[#C4A77D] shadow-[0_0_8px_rgba(196,167,125,0.9)]" />
        </div>
      </div>

      {/* Love Note Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-md bg-[#1A1A1C] border border-[#C4A77D]/60 p-7 rounded-2xl shadow-[0_0_40px_rgba(196,167,125,0.25)]">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#A39E93] hover:text-[#C4A77D] p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2 text-[#C4A77D] mb-4">
              <Heart className="w-4 h-4 fill-[#C4A77D]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Unsealed Note</span>
            </div>
            
            <p className="font-serif text-lg md:text-xl text-[#F2F1ED] leading-relaxed mb-6 italic">
              "{loveNotes[activeMessageIndex]}"
            </p>

            <div className="flex justify-between items-center pt-4 border-t border-[#2A2624]">
              <span className="text-[10px] text-[#A39E93]">From Alex with love</span>
              <button 
                onClick={() => setActiveMessageIndex(prev => getRandomNoteIndex(prev))}
                className="text-[10px] text-[#C4A77D] tracking-wider uppercase font-bold hover:underline"
              >
                Read Another
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section (Tightened margin) */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center pt-24 mb-6 px-6">
        <div className="inline-flex items-center space-x-3 mb-6">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C4A77D]" />
          <Sparkles className="w-5 h-5 text-[#C4A77D] drop-shadow-[0_0_8px_rgba(196,167,125,0.8)]" />
          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C4A77D]" />
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#F2F1ED] mb-4 tracking-wide leading-tight max-w-5xl drop-shadow-xl">
          THE DIGITAL CHRONICLES <br />
          <span className="italic text-[#C4A77D] font-light drop-shadow-[0_0_15px_rgba(196,167,125,0.3)]">OF ALEX</span>
        </h1>
        <p className="text-[#C4A77D] text-xs md:text-sm max-w-xl mx-auto tracking-[0.25em] font-medium uppercase opacity-85">
          Four quiet chapters, written just for you.
        </p>
      </section>

      {/* Vertical Golden Divider (Shortened height & margin to eliminate dead space) */}
      <div className="relative z-10 w-[1px] h-12 bg-gradient-to-b from-[#C4A77D]/80 via-[#C4A77D]/30 to-transparent mx-auto mb-8 shadow-[0_0_10px_rgba(196,167,125,0.5)]" />

      {/* The 4-Chapter Sequential Love Letter */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 flex overflow-x-auto md:grid md:grid-cols-2 gap-5 pb-20 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        {/* Chapter 1 */}
        <article className="group relative w-[85vw] md:w-auto flex-none snap-center bg-[#1A1A1C]/90 backdrop-blur-2xl border border-[#2A2624] p-7 rounded-2xl overflow-hidden hover:border-[#C4A77D] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="text-[10px] text-[#C4A77D] tracking-[0.25em] uppercase font-bold">Chapter I</span>
              <h2 className="font-serif text-2xl text-[#F2F1ED] mt-2 mb-4 drop-shadow-md">The Serendipity</h2>
              <p className="text-[#A39E93] text-xs md:text-sm leading-relaxed">
                Looking back, none of this felt accidental. In a world full of noise and rushed introductions, crossing your path felt like stepping into an unhurried, gentle stillness. You weren't an addition to my life—you were a complete shift in its rhythm.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#2A2624]/60 text-[10px] tracking-widest text-[#C4A77D] font-mono uppercase">
              Where it all took root
            </div>
          </div>
        </article>

        {/* Chapter 2 */}
        <article className="group relative w-[85vw] md:w-auto flex-none snap-center bg-[#1A1A1C]/90 backdrop-blur-2xl border border-[#2A2624] p-7 rounded-2xl overflow-hidden hover:border-[#C4A77D] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="mb-4 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D0D0F] border border-[#C4A77D]/50 text-[#C4A77D] text-[9px] tracking-widest font-semibold uppercase shadow-[0_0_12px_rgba(196,167,125,0.25)]">
                <Heart className="w-3 h-3 text-[#C4A77D] fill-[#C4A77D]" />
                <span>Status: Taken & Truly Cherished</span>
              </div>

              <div className="block text-[10px] text-[#C4A77D] tracking-[0.25em] uppercase font-bold">Chapter II</div>
              <h2 className="font-serif text-2xl text-[#F2F1ED] mt-2 mb-4 drop-shadow-md">The Safe Harbor</h2>
              <p className="text-[#A39E93] text-xs md:text-sm leading-relaxed">
                With you, I don't feel the need to filter my thoughts or wear a mask. Talking to you at midnight feels as effortless as breathing. You gave my restless mind a calm place to dock, and that kind of security is something I will never take for granted.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#2A2624]/60 text-[10px] tracking-widest text-[#C4A77D] font-mono uppercase">
              The depth between us
            </div>
          </div>
        </article>

        {/* Chapter 3 */}
        <article className="group relative w-[85vw] md:w-auto flex-none snap-center bg-[#1A1A1C]/90 backdrop-blur-2xl border border-[#2A2624] p-7 rounded-2xl overflow-hidden hover:border-[#C4A77D] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="text-[10px] text-[#C4A77D] tracking-[0.25em] uppercase font-bold">Chapter III</span>
              <h2 className="font-serif text-2xl text-[#F2F1ED] mt-2 mb-4 drop-shadow-md">The Quiet Admiration</h2>
              <p className="text-[#A39E93] text-xs md:text-sm leading-relaxed">
                I admire how pure your heart is, even on tough days. I love how genuine your laughter is, how gracefully you carry yourself, and the subtle ways you show kindness to everyone around you. Being loved by you is an honor I carry with pride.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#2A2624]/60 text-[10px] tracking-widest text-[#C4A77D] font-mono uppercase">
              Seeing you clearly
            </div>
          </div>
        </article>

        {/* Chapter 4 */}
        <article className="group relative w-[85vw] md:w-auto flex-none snap-center bg-[#1A1A1C]/90 backdrop-blur-2xl border border-[#2A2624] p-7 rounded-2xl overflow-hidden hover:border-[#C4A77D] transition-all duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <span className="text-[10px] text-[#C4A77D] tracking-[0.25em] uppercase font-bold">Chapter IV</span>
              <h2 className="font-serif text-2xl text-[#F2F1ED] mt-2 mb-4 drop-shadow-md">The Unshakable Vow</h2>
              <p className="text-[#A39E93] text-xs md:text-sm leading-relaxed">
                Whatever chapters come next, through every peak and valley, my intention remains steady. To stand by you, celebrate every single win, hold your hand through quiet doubts, and love you with consistent patience every single day.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#2A2624]/60 text-[10px] tracking-widest text-[#C4A77D] font-mono uppercase">
              Today & always
            </div>
          </div>
        </article>

      </main>

      {/* 6 Hobbies Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 mb-20">
        <div className="mb-6">
          <span className="text-[#C4A77D] text-[10px] tracking-[0.25em] uppercase font-bold">Her Little Worlds</span>
          <h2 className="font-serif text-2xl md:text-3xl text-[#F2F1ED] mt-1">The Things That Bring You Alive</h2>
          <p className="text-[#A39E93] text-xs mt-1">The little details I’ve quietly noticed and love watching you do. Tap to flip.</p>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory no-scrollbar">
          {hobbiesData.map((hobby, idx) => {
            const Icon = hobby.icon;
            const isFlipped = !!flippedCards[idx];

            return (
              <div
                key={idx}
                onClick={() => toggleFlip(idx)}
                className="perspective-1000 w-[75vw] sm:w-[280px] h-[300px] flex-none snap-center cursor-pointer select-none"
              >
                <div
                  className={`relative w-full h-full duration-500 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden p-6 rounded-2xl bg-[#1A1A1C] border border-[#2A2624] hover:border-[#C4A77D]/60 flex flex-col justify-between shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#0D0D0F] border border-[#2A2624] flex items-center justify-center mb-5 shadow-[0_0_12px_rgba(196,167,125,0.15)]">
                        <Icon className="w-5 h-5 text-[#C4A77D]" />
                      </div>
                      <h3 className="font-serif text-xl text-[#F2F1ED] mb-2">{hobby.title}</h3>
                      <p className="text-xs text-[#A39E93] leading-relaxed">{hobby.frontDesc}</p>
                    </div>

                    <div className="inline-flex items-center space-x-2 text-[#C4A77D] text-[10px] tracking-widest font-semibold uppercase">
                      <RotateCw className="w-3 h-3" />
                      <span>How I see you do this</span>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 p-6 rounded-2xl bg-[#121214] border border-[#C4A77D]/70 flex flex-col justify-between shadow-[0_0_30px_rgba(196,167,125,0.15)]">
                    <div>
                      <span className="text-[#C4A77D] text-[9px] tracking-widest uppercase font-mono">What I've Observed & Cherish</span>
                      <h4 className="font-serif text-lg text-[#F2F1ED] mt-1 mb-3">{hobby.title}</h4>
                      <p className="text-xs text-[#F2F1ED]/90 leading-relaxed italic">
                        "{hobby.backNote}"
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 text-[#A39E93] text-[10px] tracking-widest uppercase">
                      <RotateCw className="w-3 h-3 text-[#C4A77D]" />
                      <span>Flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Spotify Players Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pb-28">
        <div className="mb-6">
          <div className="inline-flex items-center space-x-2 text-[#C4A77D] mb-1">
            <Music className="w-4 h-4" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold">Your Frequency</span>
          </div>
          <h2 className="font-serif text-2xl md:text-3xl text-[#F2F1ED]">Sounds You Love</h2>
          <p className="text-[#A39E93] text-xs mt-1">
            I've noticed how much you love these artists. Play them and vibe as you chill on your space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Savy Henry - The Best Part */}
          <div className="p-5 rounded-2xl bg-[#1A1A1C] border border-[#2A2624] flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-[#C4A77D] uppercase">R&B / Soul</span>
              <h3 className="font-serif text-xl text-[#F2F1ED]">Savy Henry</h3>
            </div>
            <SpotifyTrack trackId="0cJhCJFhiK6u4wxYOBJ0gs" title="The Best Part" />
          </div>

          {/* Mercy Chinwo - Okaka */}
          <div className="p-5 rounded-2xl bg-[#1A1A1C] border border-[#2A2624] flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-[#C4A77D] uppercase">Worship & Praise</span>
              <h3 className="font-serif text-xl text-[#F2F1ED]">Mercy Chinwo</h3>
            </div>
            <SpotifyTrack trackId="6erhjuOK4EgCweQkA7dVvR" title="Okaka" />
          </div>

          {/* Mercy Chinwo - Promise Keeper */}
          <div className="p-5 rounded-2xl bg-[#1A1A1C] border border-[#2A2624] flex flex-col justify-between space-y-3">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-[#C4A77D] uppercase">Worship & Praise</span>
              <h3 className="font-serif text-xl text-[#F2F1ED]">Mercy Chinwo</h3>
            </div>
            <SpotifyTrack trackId="7v7F2NAs359SCkFk5YBZEK" title="Promise Keeper" />
          </div>
        </div>
      </section>
    </div>
    );
}