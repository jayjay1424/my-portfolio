import { motion } from "motion/react";
import {
  Bot,
  Braces,
  Code2,
  Cpu,
  Database,
  Gamepad2,
  Laptop,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  { title: "Web Development", icon: Laptop, skills: ["Full-Stack Web Development", "Frontend Engineering", "Backend Development", "Responsive Web Design", "RESTful API Integration", "SPA & SSR Architecture"] },
  { title: "Frameworks & Libraries", icon: Code2, skills: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "Bootstrap", "Framer Motion", "Flask", "Django"] },
  { title: "Programming Languages", icon: Braces, skills: ["JavaScript", "TypeScript", "Python", "PHP", "HTML5", "CSS3", "SQL"] },
  { title: "Database & Backend", icon: Database, skills: ["PostgreSQL", "Supabase", "MySQL", "MongoDB", "REST APIs", "CRUD Operations", "Authentication Systems"] },
  { title: "Development & Cloud Tools", icon: Wrench, skills: ["Git", "GitHub", "Vercel", "Visual Studio Code", "Figma", "Canva"] },
  { title: "Interactive Web & Canvas", icon: Gamepad2, skills: ["HTML5 Canvas API", "Real-Time 60 FPS Loop", "Web Audio API", "Finite State Machines", "Collision Systems", "Interactive Graphics"] },
  { title: "AI & Automation Tools", icon: Bot, skills: ["AI-Assisted Development", "Antigravity", "ChatGPT", "Claude", "GitHub Copilot"] },
  { title: "Hardware & IoT Systems", icon: Cpu, skills: ["ESP32 Development", "IoT System Integration", "Embedded Sensors", "Hardware Prototyping"] },
  { title: "Productivity Tools", icon: Laptop, skills: ["Microsoft Office Suite", "Word", "Excel", "PowerPoint"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">My Skills</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I use to build practical, user-focused solutions.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
        {skillGroups.map(({ title, icon: Icon, skills }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2" aria-label={title}>
              {skills.map((skill) => (
                <li key={skill} className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
