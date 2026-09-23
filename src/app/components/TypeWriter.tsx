import { useState, useEffect } from "react";

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export function TypeWriter({ 
  texts, 
  typingSpeed = 85, 
  deletingSpeed = 50, 
  pauseDuration = 2200,
  className = "",
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && displayText === currentText) {
      // Finished typing, pause before deleting
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText === "") {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          // Remove one character
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          // Add one character
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={`inline ${className}`}>
      <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-500 bg-clip-text text-transparent">
        {displayText}
      </span>
      <span
        className="inline-block w-[3px] sm:w-[4px] h-[0.88em] ml-1 bg-primary animate-blink align-[-0.08em] select-none"
        aria-hidden="true"
      />
    </span>
  );
}
