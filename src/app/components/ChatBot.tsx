import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  ExternalLink,
  RotateCcw,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

interface ActionButton {
  label: string;
  url?: string;
  action?: "open_form";
  variant?: "primary" | "secondary" | "outline";
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  actions?: ActionButton[];
}

const CALLMEBOT_API_KEY = "tz5x8DCNBpocVkWN";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessengerForm, setShowMessengerForm] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderContact, setSenderContact] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [isSendingToMessenger, setIsSendingToMessenger] = useState(false);

  const initialBotMessage: Message = {
    id: "init",
    text: "Hi! I'm Jayrald's AI Assistant. I can answer questions about his Full-Stack Web apps, interactive projects, and tech stack.\n\nYou can also leave a direct message for Jayrald right here!",
    sender: "bot",
    timestamp: new Date(),
    actions: [
      {
        label: "Send Message to Jayrald",
        action: "open_form",
        variant: "primary",
      },
    ],
  };

  const [messages, setMessages] = useState<Message[]>([initialBotMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showMessengerForm]);

  const handleSendToMessenger = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!senderName.trim() || !senderMessage.trim()) return;

    setIsSendingToMessenger(true);

    const formattedText = `🔔 New Message from Portfolio Chatbot!\n👤 Name: ${senderName.trim()}\n📱 Contact: ${senderContact.trim() || "Not provided"}\n💬 Message: ${senderMessage.trim()}`;

    try {
      const url = `https://api.callmebot.com/facebook/send.php?apikey=${CALLMEBOT_API_KEY}&text=${encodeURIComponent(formattedText)}`;
      await fetch(url, { mode: "no-cors" });

      const confirmMessage: Message = {
        id: Date.now().toString(),
        text: `✅ Message sent directly to Jayrald!\n\nThank you, ${senderName}! Jayrald has received your message on his phone and will reply to ${senderContact || "your contact details"} shortly.`,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, confirmMessage]);
      setShowMessengerForm(false);
      setSenderName("");
      setSenderContact("");
      setSenderMessage("");
    } catch (err) {
      console.error("Failed to send Messenger alert", err);
    } finally {
      setIsSendingToMessenger(false);
    }
  };

  const getBotResponse = (userMessage: string): { text: string; actions?: ActionButton[] } => {
    const message = userMessage.toLowerCase();

    // Direct message / Contact
    if (
      message.includes("messenger") ||
      message.includes("leave a message") ||
      message.includes("send message") ||
      message.includes("contact") ||
      message.includes("hire") ||
      message.includes("human") ||
      message.includes("reach") ||
      message.includes("talk to jayrald")
    ) {
      return {
        text: "You can send a message directly to Jayrald right here! It will immediately ping his phone:\n\nClick the button below to submit a quick message.",
        actions: [
          {
            label: "Send Message to Jayrald",
            action: "open_form",
            variant: "primary",
          },
        ],
      };
    }

    // Job Tracker
    if (
      message.includes("job tracker") ||
      message.includes("job-tracker") ||
      message.includes("career") ||
      message.includes("kanban") ||
      message.includes("pipeline")
    ) {
      return {
        text: "💼 Job Tracker: Career Pipeline & Analytics OS\n\nA full-stack web application designed to streamline job applications.\n\n✨ Core Highlights:\n• Dynamic Kanban pipeline (Wishlist, Applied, Interview, Offer, Rejected)\n• Smart Job URL auto-fill & posting analyzer\n• Visual pipeline analytics (response rates, velocity charts, stage distribution)\n• Deadline reminders & follow-up management\n• Built with React, TypeScript, and Tailwind CSS",
        actions: [
          {
            label: "Open Live App",
            url: "https://job-tracker-frontend-rose-three.vercel.app/login",
            variant: "primary",
          },
          {
            label: "GitHub Repository",
            url: "https://github.com/jayjay1424/Job-Tracker",
            variant: "outline",
          },
        ],
      };
    }

    // Dungeon Legends
    if (
      message.includes("dungeon") ||
      message.includes("game") ||
      message.includes("rpg") ||
      message.includes("canvas") ||
      message.includes("pixel")
    ) {
      return {
        text: "🗡️ Dungeon Legends: 2D Pixel RPG Web Game (75% Complete · Playable Beta)\n\nA real-time Action-RPG web application running in the browser at a locked 60 FPS.\n\n✨ Engineering Highlights:\n• Real-time combat combo system & 8-direction movement\n• Finite State Machine (FSM) monster AI & boss encounter patterns\n• Autonomous friendly NPC villagers and village defense\n• Deep RPG stats, equipment slots, and inventory system\n• Supabase cloud sync & database authentication\n• Spatial sound engine via HTML5 Web Audio API\n• Built with Next.js 16, React 19, TypeScript & Canvas API",
        actions: [
          {
            label: "Play Live Beta",
            url: "https://dungeon-legends-psi.vercel.app/login",
            variant: "primary",
          },
          {
            label: "GitHub Repository",
            url: "https://github.com/jayjay1424/dungeon-legends",
            variant: "outline",
          },
        ],
      };
    }

    // Projects list
    if (message.includes("project") || message.includes("portfolio")) {
      return {
        text: "Jayrald has engineered several impressive software and web projects:\n\n1. 💼 Job Tracker OS — Full-stack career pipeline with smart URL parser & visual analytics\n2. 🗡️ Dungeon Legends (75% Complete) — 60 FPS Canvas RPG web app with Next.js 16, React 19 & Supabase\n3. 🗑️ Smart Trash Bin (Capstone) — IoT waste management with ESP32, Flask, MySQL & live dashboard\n4. 🪟 Smart Window System — IoT environmental automation with sensors and PHP dashboard\n5. 🌐 Modern Portfolio — Built with React, TypeScript, and Motion animations",
        actions: [
          {
            label: "View Job Tracker",
            url: "https://job-tracker-frontend-rose-three.vercel.app/login",
            variant: "secondary",
          },
          {
            label: "Play Dungeon Legends",
            url: "https://dungeon-legends-psi.vercel.app/login",
            variant: "secondary",
          },
        ],
      };
    }

    // Skills related
    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("stack") ||
      message.includes("what can you do")
    ) {
      return {
        text: "Jayrald specializes in Full-Stack Web Development & Modern Web Systems:\n\n🌐 Frontend & UI: React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Motion\n💾 Backend & Databases: Node.js, Python (Flask, Django), PHP, PostgreSQL, Supabase, MySQL, MongoDB, RESTful APIs\n🎮 Interactive Web: HTML5 Canvas API, 60 FPS Game Loop, Web Audio API, State Machines\n⚡ Hardware & IoT: ESP32, Sensor Integration, Microcontrollers\n🛠️ Tools & Cloud: Git, GitHub, Vercel, VS Code, Figma, Canva, N8N Automation",
        actions: [
          {
            label: "Send Message to Jayrald",
            action: "open_form",
            variant: "primary",
          },
        ],
      };
    }

    // Experience related
    if (
      message.includes("experience") ||
      message.includes("internship") ||
      message.includes("job") ||
      message.includes("work")
    ) {
      return {
        text: "Jayrald completed an IT Department internship at Jasy Travel and Tour (February – July 2026):\n\n✅ Developed and maintained the company website\n✅ Designed promotional materials and social media digital marketing assets using Canva & Figma\n✅ Assisted with database management and digital asset organization\n✅ Supported digital marketing campaigns and branding\n✅ Coordinated with international clients during business events\n\nHe served as Website Developer, Graphic Designer & Marketing Representative.",
      };
    }

    // Education related
    if (
      message.includes("education") ||
      message.includes("graduate") ||
      message.includes("degree") ||
      message.includes("study") ||
      message.includes("school") ||
      message.includes("college")
    ) {
      return {
        text: "Jayrald's educational background:\n\n🎓 Bachelor of Science in Information Technology (BSIT)\nCity of Malabon University (2022–2026)\nSpecialized in Web Engineering, Database Systems, IoT Systems, and Digital Solutions.\n\n🏫 Humanities and Social Sciences / K-12\nTinajeros National High School (2020–2022)",
      };
    }

    // Resume related
    if (message.includes("resume") || message.includes("cv") || message.includes("download")) {
      return {
        text: "You can download Jayrald's official resume right from this portfolio, covering his full technical skill set, university degree, internship, and software projects.",
        actions: [
          {
            label: "Download Resume (PDF)",
            url: "/Jayrald_Bonucan_Resume.pdf",
            variant: "primary",
          },
          {
            label: "Send Message to Jayrald",
            action: "open_form",
            variant: "secondary",
          },
        ],
      };
    }

    // Default response
    return {
      text: "Thanks for asking! I can provide details on Jayrald's full-stack web applications, technical skill set, internship experience, or send a message directly to his phone.\n\nWhat would you like to explore?",
      actions: [
        {
          label: "Job Tracker OS",
          url: "https://job-tracker-frontend-rose-three.vercel.app/login",
          variant: "secondary",
        },
        {
          label: "Dungeon Legends Beta",
          url: "https://dungeon-legends-psi.vercel.app/login",
          variant: "secondary",
        },
        {
          label: "Send Message to Jayrald",
          action: "open_form",
          variant: "primary",
        },
      ],
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getBotResponse(userText);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseData.text,
        sender: "bot",
        timestamp: new Date(),
        actions: responseData.actions,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question: string) => {
    if (question.includes("Send Message") || question.includes("Message")) {
      setShowMessengerForm(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getBotResponse(question);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseData.text,
        sender: "bot",
        timestamp: new Date(),
        actions: responseData.actions,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 500);
  };

  const handleResetChat = () => {
    setMessages([initialBotMessage]);
    setShowMessengerForm(false);
  };

  const quickQuestions = [
    "Send Message to Jayrald",
    "Job Tracker Project",
    "Dungeon Legends Beta",
    "Full-Stack Skills",
    "Download Resume",
    "Education Background",
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              aria-label="Open AI Assistant"
              className="h-14 w-14 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 group relative bg-primary text-primary-foreground"
            >
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-emerald-500 rounded-full border-2 border-background animate-pulse" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[420px] h-[640px] max-h-[88vh] bg-background border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 p-3.5 px-4 flex items-center justify-between text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base leading-tight">Jayrald's AI Assistant</h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-white/80">
                    <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span>Online · Ready to Help</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Direct Message Button */}
                <button
                  type="button"
                  onClick={() => setShowMessengerForm(true)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-semibold shadow-sm transition-transform hover:scale-105"
                  title="Send message to Jayrald"
                >
                  <Send className="h-3 w-3" />
                  <span>Message</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetChat}
                  aria-label="Restart chat"
                  className="h-8 w-8 rounded-full hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  title="Restart conversation"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="h-8 w-8 rounded-full hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="h-3.5 w-3.5" />
                    ) : (
                      <Bot className="h-3.5 w-3.5" />
                    )}
                  </div>

                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 shadow-sm ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                        : "bg-card border border-border/80 rounded-tl-sm text-foreground"
                    }`}
                  >
                    <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">
                      {message.text}
                    </p>

                    {/* Action buttons inside message bubble */}
                    {message.actions && message.actions.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-border/40 flex flex-wrap gap-2">
                        {message.actions.map((act) => {
                          if (act.action === "open_form") {
                            return (
                              <button
                                key={act.label}
                                type="button"
                                onClick={() => setShowMessengerForm(true)}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold shadow-sm transition-all hover:scale-105"
                              >
                                <Send className="h-3.5 w-3.5" />
                                <span>{act.label}</span>
                              </button>
                            );
                          }

                          return (
                            <a
                              key={act.label}
                              href={act.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105 border ${
                                act.variant === "primary"
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "bg-muted/80 hover:bg-muted text-foreground border-border"
                              }`}
                            >
                              <span>{act.label}</span>
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          );
                        })}
                      </div>
                    )}

                    <p
                      className={`text-[10px] mt-1.5 ${
                        message.sender === "user"
                          ? "text-primary-foreground/70 text-right"
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
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2"
                >
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 text-white">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="bg-card border border-border/80 rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm">
                    <div className="flex gap-1 items-center h-4">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce" />
                      <span className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 bg-primary rounded-full animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Inline Direct Message Notification Form */}
              {showMessengerForm && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="p-3.5 bg-card border-2 border-primary/40 rounded-2xl shadow-xl space-y-2.5 text-foreground"
                >
                  <div className="flex items-center justify-between pb-1.5 border-b border-border/60">
                    <span className="text-xs font-bold text-primary flex items-center gap-1.5">
                      <Send className="h-3.5 w-3.5 text-primary" />
                      Send a Message to Jayrald
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowMessengerForm(false)}
                      className="text-muted-foreground hover:text-foreground p-1 rounded-full hover:bg-muted"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <form onSubmit={handleSendToMessenger} className="space-y-2">
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Your Name (e.g. John Doe)"
                      className="w-full px-3 py-1.5 text-xs bg-muted/60 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <input
                      type="text"
                      value={senderContact}
                      onChange={(e) => setSenderContact(e.target.value)}
                      placeholder="Your Email or Phone (so Jayrald can reply)"
                      className="w-full px-3 py-1.5 text-xs bg-muted/60 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <textarea
                      required
                      rows={3}
                      value={senderMessage}
                      onChange={(e) => setSenderMessage(e.target.value)}
                      placeholder="Type your message for Jayrald..."
                      className="w-full px-3 py-1.5 text-xs bg-muted/60 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                    <Button
                      type="submit"
                      disabled={isSendingToMessenger || !senderName.trim() || !senderMessage.trim()}
                      size="sm"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs py-2 rounded-lg shadow-md flex items-center justify-center gap-1.5"
                    >
                      {isSendingToMessenger ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3 w-3" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-3 py-2 border-t border-border/60 bg-background/90 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-1.5">
                <Sparkles className="h-3 w-3 text-primary" />
                <span>Quick prompts:</span>
              </div>
              <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleQuickQuestion(q)}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors border border-border/60 whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <div className="p-3 border-t border-border bg-background">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about projects, skills, or leave a message..."
                  className="flex-1 px-3.5 py-2 bg-muted/60 border border-border/80 rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  size="sm"
                  aria-label="Send message"
                  className="h-9 w-9 rounded-full p-0 flex-shrink-0 bg-primary text-primary-foreground shadow-sm"
                >
                  <Send className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
