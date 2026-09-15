import React from 'react';

interface SpotifyTrackProps {
  trackId: string;
  title?: string;
  compact?: boolean;
}

export default function SpotifyTrack({ trackId, title, compact = true }: SpotifyTrackProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-[#2A2624] bg-[#0D0D0F] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      {title && (
        <div className="px-3 py-1.5 border-b border-[#2A2624] text-[10px] text-[#C4A77D] tracking-widest font-mono uppercase">
          {title}
        </div>
      )}
      <iframe
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        scrolling="no"
        className="rounded-b-xl overflow-hidden block"
      />
    </div>
  );
}