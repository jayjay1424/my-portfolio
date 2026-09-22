import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Github, Layers, ExternalLink, Video } from "lucide-react";
import { CapstoneShowcase } from "./CapstoneShowcase";
import { SmartWindowShowcase } from "./SmartWindowShowcase";
import { PortfolioShowcase } from "./PortfolioShowcase";
import { DungeonLegendsShowcase } from "./DungeonLegendsShowcase";
import { DungeonLegendsModal } from "./DungeonLegendsModal";
import { JobTrackerShowcase } from "./JobTrackerShowcase";

type ProjectCategory = "all" | "web" | "game" | "iot";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [isDungeonModalOpen, setIsDungeonModalOpen] = useState(false);

  const projects = [
    {
      id: "job-tracker",
      category: "web" as ProjectCategory,
      title: "Job Tracker: Career Pipeline & Analytics OS",
      label: "Full-Stack Web Application",
      badgeColor: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
      description: "A full-stack career management system designed to streamline the job hunt. Features an interactive Kanban pipeline (Wishlist, Applied, Interview, Offer, Rejected), smart job URL auto-fill parsing, real-time submission analytics (velocity charts, response rates, distribution donuts), and follow-up deadline reminders.",
      tags: ["React", "TypeScript", "Tailwind CSS", "RESTful API", "Data Analytics", "Kanban Board", "Vercel"],
      image: "",
      links: {
        github: "https://github.com/jayjay1424/Job-Tracker",
        live: "https://job-tracker-frontend-rose-three.vercel.app/login"
      },
      hasShowcase: true,
      showcaseType: "job-tracker"
    },
    {
      id: "dungeon",
      category: "game" as ProjectCategory,
      title: "Dungeon Legends: 2D Pixel RPG Web Game",
      label: "Full-Stack Web App · 75% Complete (Playable)",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      description: "A real-time 2D pixel-art Action-RPG web application built with Next.js 16, React 19, TypeScript, and HTML5 Canvas API running at a locked 60 FPS. Features combo sword attacks, FSM enemy AI behaviors, friendly villager NPCs with combat support, deep RPG equipment & stats progression, Supabase cloud sync, and spatial sound via Web Audio API.",
      tags: ["Next.js 16", "React 19", "TypeScript", "HTML5 Canvas", "Supabase", "Web Audio API", "Vercel"],
      image: "",
      links: {
        github: "https://github.com/jayjay1424/dungeon-legends",
        live: "https://dungeon-legends-psi.vercel.app/login"
      },
      hasShowcase: true,
      showcaseType: "dungeon"
    },
    {
      id: "capstone",
      category: "iot" as ProjectCategory,
      title: "Hybrid-Powered Smart Trash Bin with Auto-Lid, Fullness Detection, and Notification System",
      label: "Capstone Project",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description: "An IoT-enabled waste management system featuring automated lid control, real-time fullness tracking, ultrasonic sensors, solar energy integration, and a responsive web administration dashboard for real-time facility monitoring.",
      tags: ["ESP32", "Python (Flask)", "MySQL", "HTML", "CSS", "JavaScript", "IoT", "SDLC"],
      image: "https://images.unsplash.com/photo-1647486146201-838817bfc739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGlvdCUyMGRldmljZSUyMHRyYXNoJTIwYmluJTIwcmVjeWNsaW5nfGVufDF8fHx8MTc3MDI5MDEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      links: {
        github: "https://github.com/jayjay1424/smart-trash-bin"
      },
      hasShowcase: true,
      showcaseType: "capstone"
    },
    {
      id: "window",
      category: "iot" as ProjectCategory,
      title: "Smart Weather-Triggered Classroom Window System",
      label: "Mini Capstone Project",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      description: "A PHP and MySQL smart classroom window automation demonstration with weather sensor triggers, real-time environment monitoring, automated actuator control, alert systems, and an administrative control panel.",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "Dashboard"],
      image: "https://images.unsplash.com/photo-1635625203639-b793c70ba6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBzbWFydCUyMHdpbmRvdyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMjkwMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      links: {
        github: "https://github.com/jayjay1424/smart_window_system"
      },
      hasShowcase: true,
      showcaseType: "window"
    },
    {
      id: "portfolio",
      category: "web" as ProjectCategory,
      title: "Modern Interactive Portfolio Website",
      label: "Personal Project",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      description: "A responsive personal portfolio built with React 19, TypeScript, Tailwind CSS, and Motion. Features smooth page transitions, active scroll tracking, light/dark theme switcher, AI chatbot assistant, interactive media showcases, and component modals.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
      image: "https://images.unsplash.com/photo-1744555270794-6d378b9e7cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzZXR1cCUyMG1vbml0b3IlMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDI5MDEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      links: {
        github: "https://github.com/jayjay1424/my-porfolio"
      },
      hasShowcase: true,
      showcaseType: "portfolio"
    }
  ];

  const filterCategories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web", label: "Web Applications", count: projects.filter(p => p.category === "web").length },
    { id: "iot", label: "IoT & Hardware", count: projects.filter(p => p.category === "iot").length },
    { id: "game", label: "Interactive Web Game", count: projects.filter(p => p.category === "game").length },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-muted/20 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 text-xs font-semibold tracking-wide rounded-full bg-primary/10 border border-primary/20 text-primary">
            <Layers className="h-3.5 w-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-3 text-foreground">
            Engineering & Software Projects
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Demonstrating full-stack web systems, real-time Canvas architecture, IoT hardware integrations, and modern cloud databases.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as ProjectCategory)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/25"
                    : "bg-background/80 hover:bg-muted border-border/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Balanced Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/70 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group bg-card/80 backdrop-blur-sm">
                  {/* Media / Showcase Top Area */}
                  <div className={project.hasShowcase ? "p-3 pb-0" : "relative h-52 overflow-hidden"}>
                    {project.showcaseType === "job-tracker" ? (
                      <JobTrackerShowcase />
                    ) : project.showcaseType === "dungeon" ? (
                      <DungeonLegendsShowcase />
                    ) : project.showcaseType === "capstone" ? (
                      <CapstoneShowcase />
                    ) : project.showcaseType === "portfolio" ? (
                      <PortfolioShowcase />
                    ) : project.hasShowcase ? (
                      <SmartWindowShowcase />
                    ) : (
                      <div className="relative h-52 overflow-hidden rounded-t-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      </div>
                    )}
                  </div>

                  <CardHeader className="pt-4 pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${project.badgeColor}`}>
                        {project.label}
                      </span>
                    </div>
                    <CardTitle className="text-base sm:text-lg leading-snug font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 pb-4">
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[11px] px-2 py-0.5 font-normal bg-muted/60 hover:bg-muted">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex flex-wrap gap-2 pt-2 border-t border-border/40 bg-muted/10">
                    {/* Dungeon Legends specialized footer */}
                    {project.showcaseType === "dungeon" ? (
                      <>
                        <Button
                          size="sm"
                          className="flex-1 min-w-[120px] bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-sm shadow-amber-500/20 rounded-lg"
                          asChild
                        >
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1.5" />
                            Play Online
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="flex-1 min-w-[120px] rounded-lg"
                          onClick={() => setIsDungeonModalOpen(true)}
                        >
                          <Video className="w-4 h-4 mr-1.5 text-amber-500" />
                          Video & Systems
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-lg hover:bg-primary/10 hover:text-primary"
                          asChild
                        >
                          <a href={project.links.github} target="_blank" rel="noopener noreferrer" title="View Source Code">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </>
                    ) : (
                      <>
                        {project.links.live && (
                          <Button
                            size="sm"
                            className="flex-1 min-w-[120px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg shadow-sm"
                            asChild
                          >
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-1.5" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.links.github && (
                          <Button
                            size="sm"
                            variant="outline"
                            className={`rounded-lg hover:bg-primary/10 hover:text-primary hover:border-primary/40 ${
                              project.links.live ? "flex-1 min-w-[110px]" : "w-full"
                            }`}
                            asChild
                          >
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-1.5" />
                              Source Code
                            </a>
                          </Button>
                        )}
                      </>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Global Dungeon Legends Modal trigger from the footer button */}
      {isDungeonModalOpen && (
        <DungeonLegendsModal onClose={() => setIsDungeonModalOpen(false)} />
      )}
    </section>
  );
}
