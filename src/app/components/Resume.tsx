import { Button } from "./ui/button";
import { FileText, Download } from "lucide-react";
import { motion } from "motion/react";
import { RESUME_B64 } from "../resumeData";
import resumePreview from "../../imports/Bonucan_Jayrald_Resume.pdf.png";

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

function viewResume() {
  const byteChars = atob(RESUME_B64);
  const byteArr = new Uint8Array(byteChars.length);
  for (let i = 0; i < byteChars.length; i++) byteArr[i] = byteChars.charCodeAt(i);
  const blob = new Blob([byteArr], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank", "noopener,noreferrer");
  setTimeout(() => URL.revokeObjectURL(url), 60000);
}

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={viewResume}
              className="order-1 lg:order-none cursor-pointer group relative shrink-0"
              title="Click to view resume"
            >
              <div className="relative overflow-hidden rounded-xl border-2 border-border group-hover:border-primary shadow-xl group-hover:shadow-primary/20 transition-all duration-300 w-48 md:w-56">
                <img
                  src={resumePreview}
                  alt="Resume Preview"
                  className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
                    <Download className="w-8 h-8" />
                    <span className="text-sm font-semibold">Click to View</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary font-semibold">
                <FileText className="w-5 h-5" />
                <span>Resume</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight mt-4">Ready to collaborate?</h2>
              <p className="text-muted-foreground max-w-xl text-lg mt-4 mx-auto lg:mx-0">
                Recent BS Information Technology graduate open to entry-level IT, Software Development, Web Development, Technical Support, or QA roles. Download my full resume below.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6">
                <Button size="lg" className="gap-2" onClick={downloadResume}>
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href="#contact">Hire Me Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
