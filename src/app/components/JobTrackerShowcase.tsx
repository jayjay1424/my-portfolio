import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Briefcase, X } from "lucide-react";
import { Button } from "./ui/button";

import frameOne from "../../assets/gallery/job-tracker/frame-1.png";
import frameTwo from "../../assets/gallery/job-tracker/frame-2.png";
import frameThree from "../../assets/gallery/job-tracker/frame-3.png";
import frameFour from "../../assets/gallery/job-tracker/frame-4.png";
import frameFive from "../../assets/gallery/job-tracker/frame-5.png";

const frames = [
  { src: frameOne, alt: "Job Tracker Kanban Pipeline (Wishlist, Applied, Interview, Offer, Rejected)" },
  { src: frameTwo, alt: "Job Tracker Pipeline Analytics & Submission Velocity Charts" },
  { src: frameThree, alt: "Job Tracker Smart URL Auto-Fill & Posting Analyzer Form" },
  { src: frameFour, alt: "Job Tracker Application Reminders & Deadline Management" },
  { src: frameFive, alt: "Job Tracker Authentication & Sign-in Interface" },
];

export function JobTrackerShowcase() {
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
          <Briefcase className="h-4 w-4 text-cyan-400" />
          Job Tracker: Career OS
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
          <img
            src={activeFrame.src}
            alt={activeFrame.alt}
            className="h-full w-full object-contain transition-opacity duration-300"
          />
          <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
            <Maximize2 className="h-3.5 w-3.5" />
            Expand image
          </span>
        </button>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          onClick={showPrevious}
          aria-label="Show previous Job Tracker image"
          className="absolute left-3 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-slate-950/80 text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="secondary"
          onClick={showNext}
          aria-label="Show next Job Tracker image"
          className="absolute right-3 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full bg-slate-950/80 text-white hover:bg-cyan-500 hover:text-slate-950 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-white/10 bg-slate-900/90 px-4 py-3">
        {frames.map((frame, index) => (
          <button
            key={frame.alt}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show Job Tracker image ${index + 1}`}
            aria-current={activeIndex === index}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index ? "w-7 bg-cyan-400" : "w-2 bg-slate-600 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>

      {isExpanded && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeFrame.alt}
          onClick={() => setIsExpanded(false)}
        >
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            aria-label="Close expanded image"
            className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-red-500/80"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={activeFrame.src}
            alt={activeFrame.alt}
            className="max-h-full max-w-full object-contain rounded-lg"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Show previous image"
            className="absolute left-5 top-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-cyan-500 hover:text-slate-950"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Show next image"
            className="absolute right-5 top-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-cyan-500 hover:text-slate-950"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-4 py-2 text-xs sm:text-sm text-white text-center max-w-[90vw]">
            {activeFrame.alt}
          </p>
        </div>
      )}
    </div>
  );
}

