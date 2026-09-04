import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Jayrald's AI assistant. I can help you learn more about his skills, projects, and experience. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // Skills related
    if (message.includes("skill") || message.includes("technology") || message.includes("what can you do")) {
      return "Jayrald has expertise in:\n\n🖥️ Languages: Python (Flask, Django), JavaScript, PHP, HTML5, CSS, Node.js, Bootstrap\n🌐 Web Dev: Full-Stack, Responsive Design, RESTful API, CRUD Apps\n💾 Databases: MySQL, SQL, MongoDB\n⚡ IoT: ESP32, Sensor Integration, Hardware Prototyping\n🛠️ Tools: GitHub, VS Code, Figma, Canva, N8N, MS Office\n\nWhat specific skill would you like to know more about?";
    }

    // Projects related
    if (message.includes("project") || message.includes("portfolio")) {
      return "Jayrald has worked on several impressive projects:\n\n🗑️ Hybrid-Powered Smart Trash Bin (Capstone) - IoT waste management with ESP32, Flask, MySQL, auto-lid, fullness detection, and web dashboard\n🪟 Smart Weather-Triggered Window System (Mini Capstone) - IoT window automation with sensor integration and web dashboard\n💼 Portfolio Website - Built with React, TypeScript, and Tailwind CSS\n\nCheck the Projects section for full details!";
    }

    // Experience related
    if (message.includes("experience") || message.includes("internship") || message.includes("job") || message.includes("work")) {
      return "Jayrald completed an internship at Jasy Travel and Tour (IT Department) from February to July 2026, where he:\n\n✅ Designed promotional materials, flyers, and social media graphics using Canva\n✅ Developed and maintained the company website\n✅ Assisted with content management and digital asset organization\n✅ Supported digital marketing campaigns and branding\n✅ Coordinated with international clients during business events\n✅ Collaborated with IT and marketing teams\n\nHe served as Graphic Designer, Marketing Representative & Website Developer.";
    }

    // Contact related
    if (message.includes("contact") || message.includes("email") || message.includes("phone") || message.includes("reach")) {
      return "You can reach Jayrald through:\n\n📧 Email: jaraldbigno@gmail.com\n📱 Phone: 0921 372 8542\n\nFeel free to contact him for collaborations, projects, or job opportunities!";
    }

    // Education related
    if (message.includes("education") || message.includes("graduate") || message.includes("degree") || message.includes("study") || message.includes("school")) {
      return "Jayrald's educational background:\n\n🎓 BS Information Technology — City of Malabon University (2022–2026)\n🏫 Humanities & Social Sciences / K to 12 — Tinajeros National High School (2020–2022)\n\nHe recently graduated and is ready for entry-level IT, software development, web development, technical support, or QA roles!";
    }

    // Location related
    if (message.includes("location") || message.includes("where") || message.includes("philippines") || message.includes("manila")) {
      return "Jayrald is based in Manila, Philippines 🇵🇭\n\nHe is available for both local and remote opportunities!";
    }

    // Graphic Design
    if (message.includes("design") || message.includes("graphic") || message.includes("canva")) {
      return "Jayrald is skilled in graphic design using Canva and Figma! During his internship at Jasy Travel and Tour, he designed promotional materials, digital advertisements, flyers, and social media graphics.\n\nCheck out his Gallery section to see his creative work!";
    }

    // IoT Projects
    if (message.includes("iot") || message.includes("hardware") || message.includes("smart") || message.includes("esp32")) {
      return "Jayrald has hands-on IoT experience:\n\n🗑️ Smart Trash Bin — ESP32, Python Flask, MySQL, auto-lid & fullness detection, hybrid solar power system, real-time web dashboard\n🪟 Smart Window System — ESP32, weather sensor integration, automated window control, web-based monitoring dashboard\n\nBoth projects followed SDLC practices and included team collaboration!";
    }

    // Hire/Availability
    if (message.includes("hire") || message.includes("available") || message.includes("freelance") || message.includes("opportunit")) {
      return "Jayrald is actively seeking entry-level opportunities in:\n\n💼 IT / Software Development\n🌐 Web Development\n🛠️ Technical Support\n🔍 Quality Assurance (QA)\n\nUse the Contact section to reach out — he is available for both full-time roles and freelance projects!";
    }

    // Resume
    if (message.includes("resume") || message.includes("cv") || message.includes("download")) {
      return "You can download Jayrald's resume directly from the Resume section on this website. It covers his full professional summary, technical skills, work experience at Jasy Travel and Tour, IoT projects, and education!";
    }

    // Python/Flask/Django
    if (message.includes("python") || message.includes("flask") || message.includes("django")) {
      return "Python is one of Jayrald's primary programming languages. He uses it with the Flask and Django frameworks to build IoT-backed web dashboards and full-stack applications — including both his capstone and mini capstone projects!";
    }

    // N8N / AI Automation
    if (message.includes("n8n") || message.includes("automation") || message.includes("ai tool")) {
      return "Jayrald works with N8N for workflow automation and AI automation tools to improve productivity and build smarter integrations. It reflects his interest in combining traditional development with modern AI-driven workflows!";
    }

    // Default responses
    const defaultResponses = [
      "That's a great question! You can explore more about Jayrald's work in the Projects, Skills, or Experience sections. What would you like to know specifically?",
      "I'm here to help! Try asking me about Jayrald's skills, projects, experience, or how to contact him.",
      "Interesting! Feel free to ask me about:\n• Skills & Technologies\n• Projects & Portfolio\n• Work Experience\n• Contact Information\n• Education Background",
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your projects",
    "How can I contact you?",
    "What's your experience?",
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-14 w-14 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 group relative"
            >
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></span>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Jayrald's AI Assistant</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-white/20 text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user"
                        ? "bg-primary"
                        : "bg-gradient-to-br from-blue-500 to-blue-600"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-card border border-border rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === "user"
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></span>
                      <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce delay-100"></span>
                      <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce delay-200"></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 border-t border-border bg-background/50">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full transition-colors border border-border"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border bg-background">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-muted border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  size="sm"
                  className="h-10 w-10 rounded-full p-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
