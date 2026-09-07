import { Mail, Facebook, Linkedin, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const socialLinks = [
    {
      name: "Facebook",
      value: "Visit Profile",
      icon: <Facebook className="h-6 w-6" />,
      href: "https://www.facebook.com/share/1BJWFJUfhT/",
    },
    {
      name: "LinkedIn",
      value: "Visit Profile",
      icon: <Linkedin className="h-6 w-6" />,
      href: "https://linkedin.com/in/jayrald-bonucan-41344839a",
    },
    {
      name: "Phone",
      value: "09213728542",
      icon: <Phone className="h-6 w-6" />,
      href: "tel:09213728542",
    },
    {
      name: "Email",
      value: "jaraldbigno@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      href: "mailto:jaraldbigno@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 container mx-auto px-4 md:px-6 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">
          Get In Touch
        </h2>

        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid sm:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {link.icon}
                </div>

                <div className="overflow-hidden">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>

                  <p className="text-sm text-muted-foreground truncate">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}