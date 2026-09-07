import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Mail, Facebook, Linkedin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('visitor_my_portfolio');
  }, []);
  const socialLinks = [
    { name: "Facebook", value: "Visit Profile", icon: <Facebook className="h-6 w-6" />, href: "https://www.facebook.com/share/1BJWFJUfhT/" },
    { name: "LinkedIn", value: "Visit Profile", icon: <Linkedin className="h-6 w-6" />, href: "https://linkedin.com/in/jayrald-bonucan-41344839a" },
    { name: "Phone", value: "09213728542", icon: <Phone className="h-6 w-6" />, href: "tel:09213728542" },
    { name: "Email", value: "jaraldbigno@gmail.com", icon: <Mail className="h-6 w-6" />, href: "mailto:jaraldbigno@gmail.com" },
  ];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      // Send email via EmailJS
      const response = await emailjs.sendForm(
        'service_hyy9cgk', // EmailJS Service ID
        'template_8dk4sgk', // EmailJS Template ID
        form,
        'visitor_my_portfolio' // EmailJS Public Key
      );

      console.log('EmailJS Success:', response);
      setFormStatus("success");
      form.reset();
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error: any) {
      console.error('EmailJS Error Details:', {
        message: error?.text || error?.message || 'Unknown error',
        status: error?.status,
        error: error
      });
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 container mx-auto px-4 md:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-primary">Get In Touch</h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
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
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{link.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          <Card className="mt-8 border-border bg-card/80">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-2">Send me a message</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Your message will be delivered to jaraldbigno@gmail.com.
              </p>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium">
                    Name
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                  <label className="space-y-2 text-sm font-medium">
                    Email
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-border bg-background px-3 py-2 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                </div>
                <label className="block space-y-2 text-sm font-medium">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-y rounded-md border border-border bg-background px-3 py-2 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <Button type="submit" className="gap-2" disabled={isSubmitting}>
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
                {formStatus === "success" && (
                  <p className="text-sm text-green-600" role="status">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-sm text-destructive" role="alert">
                    ❌ Something went wrong. Please email jaraldbigno@gmail.com directly.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
