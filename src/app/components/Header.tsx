import { useState, useEffect } from "react";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { cn } from "./ui/utils";
import { useTheme } from "./ThemeProvider";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "experience", "gallery", "resume", "contact"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 220;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-blue-500 to-indigo-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border/80 shadow-sm py-2.5"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => scrollToSection("#hero")}
          >
            <div className="bg-primary/15 p-2 rounded-xl border border-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/25">
              <Code2 className="h-5 w-5 text-primary transition-transform group-hover:rotate-6" />
            </div>
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              Jayrald<span className="text-primary">.Dev</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-muted/40 p-1.5 rounded-full border border-border/50 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "relative text-xs lg:text-sm font-medium transition-all px-3 py-1.5 rounded-full",
                    isActive
                      ? "text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-primary rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border/60 bg-background/60 hover:bg-muted transition-all duration-200 hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              ) : (
                <Moon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              )}
            </button>
            <Button onClick={() => scrollToSection("#contact")} size="sm" className="rounded-full shadow-sm hover:shadow-primary/20">
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              className="text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "text-left py-2.5 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
                        isActive
                          ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                          : "text-muted-foreground hover:text-primary hover:bg-muted/40"
                      )}
                    >
                      <span>{item.name}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                    </button>
                  );
                })}
                <Button onClick={() => scrollToSection("#contact")} className="w-full mt-2 rounded-lg">
                  Hire Me
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}