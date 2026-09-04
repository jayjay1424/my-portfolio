import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Graphic Designer, Marketing Representative & Website Developer",
      department: "IT Department",
      company: "Jasy Travel and Tour",
      location: "Philippines",
      date: "February 2026 – July 2026",
      type: "Internship",
      bullets: [
        "Designed promotional materials, digital advertisements, flyers, and social media graphics using Canva.",
        "Developed and maintained the company website to improve online visibility and user experience.",
        "Assisted with website updates, content management, and digital asset organization.",
        "Supported digital marketing campaigns and branding initiatives.",
        "Coordinated with international clients and partner organizations during business events.",
        "Collaborated with IT and marketing teams to improve online engagement and marketing effectiveness.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">Experience</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-0.5">{exp.department}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full w-fit shrink-0">
                    {exp.type}
                  </span>
                </div>
                <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
