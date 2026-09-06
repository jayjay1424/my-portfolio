import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Database, Server, Globe, Layers, Cpu, Wrench, FileCode, Bot } from "lucide-react";

const HtmlLogo = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12">
    <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
    <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
    <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
    <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
  </svg>
);

const CssLogo = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12">
    <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"/>
    <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"/>
    <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/>
    <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/>
    <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/>
    <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"/>
  </svg>
);

const JavaScriptLogo = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12">
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
    <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12">
    <path fill="#FFD845" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zM122.923 48.998c-2.319-11.138-6.688-19.795-15.172-19.795H97V42.58c0 10.066-8.539 18.42-18.442 18.42H49.099c-8.303 0-14.999 7.077-14.999 15.543v27.663c0 7.912 6.882 12.574 14.999 14.811 9.717 2.68 19.052 3.162 29.159 0 6.717-2.1 14.999-6.337 14.999-14.811V94h-29V90h43.64c8.484 0 11.647-5.912 14.555-14.811 3.001-9.193 2.873-18.049 0-29.191zm-32.203 56.057c3.026 0 5.479 2.479 5.479 5.545 0 3.076-2.453 5.58-5.479 5.58-3.015 0-5.478-2.504-5.478-5.58 0-3.066 2.463-5.545 5.478-5.545z"/>
  </svg>
);

const MySQLLogo = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12">
    <path fill="#00618A" d="M2.001 90.458h4.108V74.235l6.36 14.143c.75 1.712 1.777 2.317 3.792 2.317s3.003-.605 3.753-2.317l6.36-14.143v16.223h4.108V74.262c0-1.58-.632-2.345-1.936-2.739-3.121-.974-5.215-.131-6.163 1.976l-6.241 13.958-6.043-13.959c-.909-2.106-3.042-2.949-6.163-1.976-1.304.395-1.936 1.159-1.936 2.739v16.197zm32.336-16.197c-4.107 0-5.51 1.212-5.51 4.774v9.75c0 3.562 1.403 4.775 5.51 4.775h8.225c4.107 0 5.51-1.213 5.51-4.775v-9.75c0-3.562-1.403-4.774-5.51-4.774h-8.225zm8.216 3.436v10.29c0 .553-.396.79-1.188.79h-6.04c-.792 0-1.188-.237-1.188-.79v-10.29c0-.553.396-.79 1.188-.79h6.04c.792 0 1.188.237 1.188.79zm23.285 13.058c4.108 0 5.51-1.213 5.51-4.775v-.552h-4.107v.434c0 .553-.396.79-1.188.79h-6.241c-.791 0-1.188-.237-1.188-.79v-3.6h12.723v-5.697c0-3.562-1.403-4.774-5.51-4.774h-7.037c-4.107 0-5.51 1.212-5.51 4.774v9.75c0 3.562 1.403 4.775 5.51 4.775h7.038v-.001zm-8.216-9.042v-3.205c0-.553.396-.79 1.188-.79h6.241c.792 0 1.188.237 1.188.79v3.205h-8.617zm23.086 4.697c0 .555-.396.791-1.188.791h-6.241c-.792 0-1.188-.236-1.188-.791v-10.29c0-.554.396-.791 1.188-.791h6.241c.792 0 1.188.237 1.188.791h4.108c0-3.562-1.403-4.775-5.51-4.775h-7.037c-4.108 0-5.51 1.213-5.51 4.775v9.75c0 3.562 1.402 4.775 5.51 4.775h7.037c4.107 0 5.51-1.213 5.51-4.775v-4.144h-4.108v4.684z"/>
    <path fill="#E48E00" d="M116.117 90.142c-.434-.633-.672-1.187-.672-2.053v-13.556c0-1.659.396-2.211 2.057-2.211h1.424c1.701 0 2.057.553 2.057 2.211v13.556c0 .866-.237 1.42-.672 2.053-.515.672-1.227 1.055-2.096 1.055-.869 0-1.621-.383-2.098-1.055zm9.012 3.079v-16.634c0-3.562-1.503-4.775-5.61-4.775h-3.118c-4.107 0-5.61 1.213-5.61 4.775v16.634h4.108v-1.055c.672.79 1.701 1.343 3.039 1.343h.118c1.305 0 2.333-.553 3.005-1.343v1.055h4.068z"/>
  </svg>
);

const ArduinoLogo = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12">
    <path fill="#00979D" d="M107.72 52.04L85.77 30.09c-11.75-11.75-30.85-11.75-42.6 0L21.22 52.04c-11.75 11.75-11.75 30.85 0 42.6l21.95 21.95c11.75 11.75 30.85 11.75 42.6 0l21.95-21.95c11.75-11.75 11.75-30.85 0-42.6zM50 77.5V65H40v-2h10V50.5h2V63h10v2H52v12.5h-2zm40.5-12v2h-25v-2h25z"/>
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12">
    <path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"/>
    <path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"/>
    <path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"/>
    <path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/>
    <path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"/>
  </svg>
);

const TextLogo = ({ text, color = "currentColor", bg = "transparent" }: { text: string; color?: string; bg?: string }) => (
  <div
    className="w-12 h-12 flex items-center justify-center font-bold text-sm rounded-lg border-2"
    style={{ borderColor: color, color: color, backgroundColor: bg }}
  >
    {text}
  </div>
);

const PhpLogo = () => (
  <svg viewBox="0 0 128 128" className="w-12 h-12">
    <path fill="#6181B6" d="M64 33.039c-33.989 0-61.537 13.981-61.537 31.234S30.011 95.507 64 95.507s61.537-13.981 61.537-31.234S97.989 33.039 64 33.039zm-15.558 45.703l2.349-11.941H38.697l-2.467 11.941H27.16l6.592-33.008h9.07l-2.349 11.42h12.094l2.349-11.42h9.07l-6.592 33.008h-9.07zm46.281 0h-8.707l.511-2.793c-1.874 2.066-4.415 3.27-7.427 3.27-6.155 0-10.254-4.928-10.254-12.24 0-8.794 5.269-15.698 12.525-15.698 3.134 0 5.429 1.124 6.917 3.43l2.349-11.941h8.707l-4.621 36.892v-.92zm-11.489-6.39c3.622 0 6.154-3.268 6.154-7.904 0-3.022-1.741-4.918-4.427-4.918-3.622 0-6.155 3.268-6.155 7.904 0 3.022 1.742 4.918 4.428 4.918zm35.462 6.39h-8.707l.511-2.793c-1.874 2.066-4.415 3.27-7.427 3.27-6.155 0-10.254-4.928-10.254-12.24 0-8.794 5.269-15.698 12.525-15.698 3.134 0 5.429 1.124 6.917 3.43l.487-2.953h8.707l-2.759 26.984zm-11.489-6.39c3.622 0 6.154-3.268 6.154-7.904 0-3.022-1.741-4.918-4.427-4.918-3.622 0-6.155 3.268-6.155 7.904 0 3.022 1.742 4.918 4.428 4.918z"/>
  </svg>
);

function SkillCard({ skill, index }: { skill: { name: string; logo: ReactNode }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="group hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer h-full">
        <CardContent className="pt-6 pb-6 flex flex-col items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center justify-center"
          >
            {skill.logo}
          </motion.div>
          <p className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
            {skill.name}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  const programmingSkills = [
    { name: "HTML5", logo: <HtmlLogo /> },
    { name: "CSS", logo: <CssLogo /> },
    { name: "JavaScript", logo: <JavaScriptLogo /> },
    { name: "React", logo: <TextLogo text="R" color="#61DAFB" /> },
    { name: "TypeScript", logo: <TextLogo text="TS" color="#3178C6" /> },
    { name: "Motion", logo: <TextLogo text="M" color="#F43F5E" /> },
    { name: "Python", logo: <PythonLogo /> },
    { name: "PHP", logo: <TextLogo text="PHP" color="#777BB4" /> },
    { name: "Node.js", logo: <Server className="w-12 h-12 text-green-600" /> },
    { name: "Bootstrap", logo: <TextLogo text="BS" color="#7952B3" /> },
  ];

  const webDevSkills = [
    { name: "Full-Stack Dev", logo: <Layers className="w-12 h-12 text-primary" /> },
    { name: "Responsive Design", logo: <Globe className="w-12 h-12 text-blue-500" /> },
    { name: "RESTful API", logo: <FileCode className="w-12 h-12 text-orange-500" /> },
    { name: "CRUD Apps", logo: <Database className="w-12 h-12 text-teal-500" /> },
  ];

  const databaseSkills = [
    { name: "MySQL", logo: <TextLogo text="SQL" color="#00758F" /> },
    { name: "SQL", logo: <Database className="w-12 h-12 text-blue-500" /> },
    { name: "MongoDB", logo: <TextLogo text="MDB" color="#4DB33D" /> },
  ];

  const iotSkills = [
    { name: "ESP32", logo: <ArduinoLogo /> },
    { name: "IoT Development", logo: <Cpu className="w-12 h-12 text-teal-400" /> },
    { name: "Sensor Integration", logo: <Wrench className="w-12 h-12 text-yellow-500" /> },
    { name: "HW Prototyping", logo: <TextLogo text="HW" color="#FF6B35" /> },
  ];

  const tools = [
    { name: "GitHub", icon: <TextLogo text="GH" color="#ffffff" bg="#24292e" /> },
    { name: "VS Code", icon: <TextLogo text="VS" color="#007ACC" /> },
    { name: "Figma", icon: <FigmaLogo /> },
    { name: "Canva", icon: <TextLogo text="CV" color="#00C4CC" /> },
    { name: "N8N", icon: <Bot className="w-12 h-12 text-orange-400" /> },
    { name: "AI Automation", icon: <Bot className="w-12 h-12 text-purple-400" /> },
    { name: "MS Office Suite", icon: <TextLogo text="MS" color="#D83B01" /> },
  ];

  const professionalSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Team Collaboration",
    "Communication",
    "Adaptability",
    "Continuous Learning",
    "Time Management",
    "Attention to Detail",
    "SDLC",
  ];

  return (
    <section id="skills" className="py-20 container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">My Skills</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my technical proficiency and development tools.
        </p>
      </motion.div>

      <Tabs defaultValue="programming" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 h-auto gap-1">
          <TabsTrigger value="programming">Languages</TabsTrigger>
          <TabsTrigger value="database">Database & IoT</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="professional">Professional</TabsTrigger>
        </TabsList>

        <TabsContent value="programming">
          <div className="space-y-12">
            <div>
              <p className="text-sm text-muted-foreground mb-6 text-center">Programming Languages & Frameworks</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-6">
                {programmingSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-6 text-center">Web Development</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6 max-w-4xl mx-auto">
                {webDevSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="database">
          <div className="space-y-10">
            <div>
              <p className="text-sm text-muted-foreground mb-6 text-center">Database Management</p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                {databaseSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="group hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer h-full">
                      <CardContent className="pt-6 pb-6 flex flex-col items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {skill.logo}
                        </motion.div>
                        <p className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-6 text-center">Hardware & IoT</p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                {iotSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="group hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer h-full">
                      <CardContent className="pt-6 pb-6 flex flex-col items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {skill.logo}
                        </motion.div>
                        <p className="text-xs md:text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tools">
          <p className="text-sm text-muted-foreground mb-6 text-center">Tools & Technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="pt-8 pb-8 flex flex-col items-center justify-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tool.icon}
                    </motion.div>
                    <h3 className="font-semibold text-center text-sm group-hover:text-primary transition-colors">
                      {tool.name}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="professional">
          <p className="text-sm text-muted-foreground mb-6 text-center">Professional & Soft Skills</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="group hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer">
                  <CardContent className="pt-6 pb-6 flex items-center justify-center">
                    <p className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                      {skill}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
