import { useState, useRef, useEffect } from "react";
import { Play, Maximize2, Sword, Zap } from "lucide-react";
import { DungeonLegendsModal } from "./DungeonLegendsModal";

export function DungeonLegendsShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isModalOpen]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <div
        className="relative overflow-hidden rounded-xl border border-border bg-slate-950 shadow-xl cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
        role="button"
        aria-label="Open Dungeon Legends showcase"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Sword className="h-4 w-4 text-amber-400" />
            Dungeon Legends: 2D Pixel RPG
          </div>
          <span className="flex items-center gap-1.5 text-xs font-medium text-amber-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            75% Complete · Playable
          </span>
        </div>

        {/* Video preview */}
        <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
          <video
            ref={videoRef}
            src="/dungeon.mp4"
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div
            className={`absolute inset-0 bg-slate-950/60 transition-opacity duration-300 ${
              isHovered ? "opacity-30" : "opacity-70"
            }`}
          />

          {/* Center play button */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/90 shadow-lg shadow-amber-500/30 ring-4 ring-amber-400/20">
                <Play className="h-6 w-6 text-slate-950 fill-slate-950 ml-0.5" />
              </div>
              <span className="text-xs font-medium text-white/80">Watch Gameplay</span>
            </div>
          </div>

          {/* Hover expand hint */}
          <span
            className={`absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Maximize2 className="h-3.5 w-3.5" />
            Full Showcase
          </span>

          {/* Game-style corner decorations */}
          <div className="absolute top-2 left-2 flex gap-1">
            <Zap className="h-3 w-3 text-amber-400/60" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="border-t border-white/10 bg-slate-900/90 px-4 py-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-slate-400">Development Progress</span>
            <span className="text-xs font-semibold text-amber-400">75%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-700 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400"
              style={{ width: "75%" }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && <DungeonLegendsModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

