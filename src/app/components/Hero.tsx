import { Button } from "./ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "motion/react";
import profileImage from "figma:asset/53a348a80dad588bbce5f099c566b261729ec38f.png";
import profileImageLight from "figma:asset/6e19c255cac6f038e0a55798f1797a3ac3834f4b.png";
import { TypeWriter } from "./TypeWriter";
import { useTheme } from "./ThemeProvider";
import { RESUME_B64 } from "../resumeData";

function downloadResume() {
  const byteChars = atob(RESUME_B64);
  const byteArr = new Uint8Array(byteChars.length);
  for (let i = 0; i < byteChars.length; i++) byteArr[i] = byteChars.charCodeAt(i);
  const blob = new Blob([byteArr], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Jayrald_Bonucan_Resume.pdf";
  a.click();
  URL.revokeObjectURL(url);
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
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1764258560300-2346b28b4e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kJTIwZGFyayUyMGJsdWUlMjBjeWJlcnxlbnwxfHx8fDE3NzAyOTAxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        
        {/* Animated Particles/Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
                IT Graduate & Developer
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Hello, I'm <br />
                <TypeWriter 
                  texts={[
                    "Web Developer",
                    "Graphic Designer",
                    "Video Editor",
                    "Jayrald Bonucan"
                  ]}
                  typingSpeed={100}
                  deletingSpeed={70}
                  pauseDuration={2000}
                />
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Recent BS Information Technology graduate with hands-on experience in web development, database management, IoT systems, and digital marketing. Based in Manila, Philippines.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button size="lg" onClick={() => scrollToSection("projects")} className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <Button size="lg" variant="secondary" onClick={downloadResume}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-primary/30 p-2">
                <div className="w-full h-full rounded-full overflow-hidden border border-primary/50 relative bg-background/50 backdrop-blur-sm">
                  <img 
                    src={currentProfileImage} 
                    alt="Jayrald Bonucan" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Floating Tech Icons Decor */}
              <div className="absolute -top-4 -right-4 p-3 bg-background border border-border rounded-xl shadow-xl animate-bounce duration-[3000ms]">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute bottom-10 -left-8 p-3 bg-background border border-border rounded-xl shadow-xl animate-bounce delay-700 duration-[4000ms]">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute top-1/2 -right-12 p-3 bg-background border border-border rounded-xl shadow-xl animate-bounce delay-500 duration-[3500ms]">
                <span className="text-2xl">⚡</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}