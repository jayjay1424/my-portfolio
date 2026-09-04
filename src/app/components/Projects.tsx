import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Hybrid-Powered Smart Trash Bin with Auto-Lid, Fullness Detection, and Notification System",
      label: "Capstone Project",
      description: "Developed an IoT-enabled smart waste management system with automated lid operation and waste-level detection through integrated sensors. Built a responsive web-based administration dashboard for real-time monitoring and notification management. Designed a hybrid power system utilizing solar energy, rechargeable batteries, and manual charging.",
      tags: ["ESP32", "Python (Flask)", "MySQL", "HTML", "CSS", "JavaScript", "IoT", "SDLC"],
      image: "https://images.unsplash.com/photo-1647486146201-838817bfc739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGlvdCUyMGRldmljZSUyMHRyYXNoJTIwYmluJTIwcmVjeWNsaW5nfGVufDF8fHx8MTc3MDI5MDEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      links: { demo: "#", github: "#" }
    },
    {
      title: "Smart Weather-Triggered Classroom Window System",
      label: "Mini Capstone Project",
      description: "Developed an IoT-enabled smart window system using ESP32, Python (Flask), MySQL, HTML, CSS, and JavaScript. Built a responsive web-based administration dashboard for real-time monitoring. Implemented automated window control through rain and weather sensor integration following SDLC practices.",
      tags: ["ESP32", "Python (Flask)", "MySQL", "HTML", "CSS", "JavaScript", "IoT", "Sensor Integration"],
      image: "https://images.unsplash.com/photo-1635625203639-b793c70ba6c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjBzbWFydCUyMHdpbmRvdyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwMjkwMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      links: { demo: "#", github: "#" }
    },
    {
      title: "Portfolio Website",
      label: "Personal Project",
      description: "A responsive personal portfolio website built with modern technologies to showcase projects and skills. Features smooth animations, dark/light mode toggle, AI chatbot assistant, and an interactive gallery.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Motion"],
      image: "https://images.unsplash.com/photo-1744555270794-6d378b9e7cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzZXR1cCUyMG1vbml0b3IlMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDI5MDEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      links: { demo: "#", github: "#" }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in IoT, Web Development, and System Integration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full">
                    {project.label}
                  </span>
                </div>
                <CardHeader>
                  <CardTitle className="text-base leading-snug">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 pt-0">
                  <Button size="sm" variant="outline" className="w-full" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="w-full" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
