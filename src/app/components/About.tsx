import { motion } from "motion/react";
import { GraduationCap, Briefcase, Target, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "City of Malabon University | Malabon City",
      year: "2022 – 2026",
      description: "Focused on Software Development, IoT Systems, Database Management, and Digital Marketing."
    },
    {
      degree: "Humanities and Social Sciences / K to 12",
      school: "Tinajeros National High School",
      year: "2020 – 2022",
      description: ""
    }
  ];

  const interests = [
    "Web Development",
    "IoT Systems",
    "Graphic Design",
    "Video Editing",
    "System Integration"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">About Me</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Recent Bachelor of Science in Information Technology graduate based in Manila, Philippines, with hands-on experience in web development, database management, IoT systems, and digital marketing.
              </p>
              <p>
                Skilled in developing responsive web applications using Python, JavaScript, PHP, MySQL, HTML, and CSS. Completed an internship involving website management, graphic design, and digital marketing support at Jasy Travel and Tour.
              </p>
              <p>
                Eager to contribute technical expertise, problem-solving abilities, and a strong learning mindset in an entry-level IT, Software Development, Web Development, Technical Support, or QA role.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="text-primary h-5 w-5" />
                Interests & Passions
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span key={item} className="px-3 py-1 bg-background border border-border rounded-full text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary h-5 w-5" />
                Education
              </h3>
              <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                    {edu.description && <p className="text-muted-foreground">{edu.description}</p>}
                  </CardContent>
                </Card>
              ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="text-primary h-5 w-5" />
                Career Goals
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    To contribute technical expertise in an entry-level IT, Software Development, Web Development, Technical Support, or QA role — applying full-stack development, IoT integration, and digital marketing skills to drive meaningful impact.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
