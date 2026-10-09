import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2 } from "lucide-react";

export function PageIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // If user prefers reduced motion, hide immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(false);
      return;
    }

    // Keep page load animation concise (< 1.4s)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="page-intro"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -24,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse -z-10" />

          {/* Centered Brand Mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 shadow-lg shadow-primary/10">
              <Code2 className="w-8 h-8 text-primary" />
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/40"
                animate={{ scale: [1, 1.15, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="text-center">
              <h2 className="text-xl font-bold tracking-tight">
                Jayrald<span className="text-primary">.Dev</span>
              </h2>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                Full-Stack Web Developer
              </p>
            </div>

            {/* Quick Loading Progress Line */}
            <div className="w-36 h-1 bg-muted rounded-full overflow-hidden mt-2">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-blue-500 to-cyan-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.05, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

