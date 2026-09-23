import { Button } from "./ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "motion/react";
import profileImage from "figma:asset/53a348a80dad588bbce5f099c566b261729ec38f.png";
import profileImageLight from "figma:asset/6e19c255cac6f038e0a55798f1797a3ac3834f4b.png";
import { TypeWriter } from "./TypeWriter";
import { useTheme } from "./ThemeProvider";

function downloadResume() {
  const a = document.createElement("a");
  a.href = "/Jayrald_Bonucan_Resume.pdf";
  a.download = "Jayrald_Bonucan_Resume.pdf";
  a.click();
}

export function Hero() {
  const { theme } = useTheme();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Use light mode image when theme is light, otherwise use dark mode image
  const currentProfileImage = theme === "light" ? profileImageLight : profileImage;

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1764258560300-2346b28b4e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kJTIwZGFyayUyMGJsdWUlMjBjeWJlcnxlbnwxfHx8fDE3NzAyOTAxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Background" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Availability Beacon Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 text-xs font-semibold tracking-wide rounded-full bg-primary/10 border border-primary/25 text-primary shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Open for Opportunities · Full-Stack Web Developer</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Hello, I'm <br />
                <TypeWriter
                  texts={[
                    "Jayrald Bonucan",
                    "Full-Stack Web Developer"
                  ]}
                  typingSpeed={85}
                  deletingSpeed={50}
                  pauseDuration={2200}
                />
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Recent <span className="text-foreground font-semibold">BS Information Technology</span> graduate specializing in modern full-stack web development, responsive user experiences, RESTful APIs, and database engineering. Based in Manila, Philippines.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8">
                <Button size="lg" onClick={() => scrollToSection("projects")} className="group shadow-md shadow-primary/25 rounded-xl">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="rounded-xl border-border/80 hover:bg-muted/60">
                  <Mail className="mr-2 h-4 w-4 text-primary" />
                  Contact Me
                </Button>
                <Button size="lg" variant="secondary" onClick={downloadResume} className="rounded-xl">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-border/60 max-w-lg mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-extrabold text-foreground">5+</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Web & Software Projects</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-extrabold text-foreground">15+</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Modern Tech Stack</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-extrabold text-foreground">BSIT</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Degree 2026</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[440px] lg:h-[440px]"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-600/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              
              <div className="relative w-full h-full rounded-full border-2 border-primary/40 p-2.5 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/60 relative bg-background/50 backdrop-blur-sm shadow-inner">
                  <img 
                    src={currentProfileImage} 
                    alt="Jayrald Bonucan" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Floating Pro Tech Badges */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-3 px-3 py-1.5 bg-background/90 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-lg flex items-center gap-2"
              >
                <span className="text-base">🌐</span>
                <span className="text-xs font-bold text-cyan-400">Full-Stack Web Dev</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 -left-6 px-3 py-1.5 bg-background/90 backdrop-blur-md border border-blue-500/30 rounded-xl shadow-lg flex items-center gap-2"
              >
                <span className="text-base">⚛️</span>
                <span className="text-xs font-bold text-blue-400">React & Next.js</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-8 px-3 py-1.5 bg-background/90 backdrop-blur-md border border-emerald-500/30 rounded-xl shadow-lg flex items-center gap-2"
              >
                <span className="text-base">🗄️</span>
                <span className="text-xs font-bold text-emerald-400">Database & APIs</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
