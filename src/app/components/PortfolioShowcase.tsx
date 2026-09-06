import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, MonitorPlay, X } from "lucide-react";
import { Button } from "./ui/button";

import frameOne from "../../assets/gallery/portfolio/frame-1.png";
import frameTwo from "../../assets/gallery/portfolio/frame-2.png";
import frameThree from "../../assets/gallery/portfolio/frame-3.png";
import frameFour from "../../assets/gallery/portfolio/frame-4.png";
import frameFive from "../../assets/gallery/portfolio/frame-5.png";
import frameSix from "../../assets/gallery/portfolio/frame-6.png";
import frameSeven from "../../assets/gallery/portfolio/frame-7.png";
import frameEight from "../../assets/gallery/portfolio/frame-8.png";

const frames = [
  { src: frameOne, alt: "Portfolio website home page" },
  { src: frameTwo, alt: "Portfolio website about section" },
  { src: frameThree, alt: "Portfolio website skills section" },
  { src: frameFour, alt: "Portfolio website projects section" },
  { src: frameFive, alt: "Portfolio website gallery" },
  { src: frameSix, alt: "Portfolio website experience section" },
  { src: frameSeven, alt: "Portfolio website contact section" },
  { src: frameEight, alt: "Portfolio website footer" },
];

export function PortfolioShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % frames.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => setActiveIndex((current) => (current - 1 + frames.length) % frames.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % frames.length);
  const activeFrame = frames[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-slate-950 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <MonitorPlay className="h-4 w-4 text-primary" />
          Portfolio Website
        </div>
        <span className="text-xs text-slate-400">{activeIndex + 1} / {frames.length}</span>
      </div>

      <div className="relative aspect-[16/9] bg-slate-900">
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="group absolute inset-0 z-[1] flex items-center justify-center"
          aria-label={`Expand ${activeFrame.alt}`}
        >
          <img src={activeFrame.src} alt={activeFrame.alt} className="h-full w-full object-contain transition-opacity duration-300" />
          <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
            <Maximize2 className="h-3.5 w-3.5" />
            Expand image
          </span>
        </button>
        <Button type="button" size="icon" variant="secondary" onClick={showPrevious} aria-label="Show previous Portfolio image" className="absolute left-3 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-slate-950/80 text-white hover:bg-primary">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button type="button" size="icon" variant="secondary" onClick={showNext} aria-label="Show next Portfolio image" className="absolute right-3 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-slate-950/80 text-white hover:bg-primary">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-slate-900/90 px-4 py-3">
        {frames.map((frame, index) => (
          <button key={frame.alt} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show Portfolio image ${index + 1}`} aria-current={activeIndex === index} className={`h-2 rounded-full transition-all ${activeIndex === index ? "w-7 bg-primary" : "w-2 bg-slate-500 hover:bg-slate-300"}`} />
        ))}
      </div>

      {isExpanded && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={activeFrame.alt} onClick={() => setIsExpanded(false)}>
          <button type="button" onClick={() => setIsExpanded(false)} aria-label="Close expanded Portfolio image" className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-primary">
            <X className="h-6 w-6" />
          </button>
          <img src={activeFrame.src} alt={activeFrame.alt} className="max-h-full max-w-full object-contain" onClick={(event) => event.stopPropagation()} />
          <button type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Show previous expanded Portfolio image" className="absolute left-5 top-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-primary">
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Show next expanded Portfolio image" className="absolute right-5 top-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-primary">
            <ChevronRight className="h-7 w-7" />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">{activeFrame.alt}</p>
        </div>
      )}
    </div>
  );
}
