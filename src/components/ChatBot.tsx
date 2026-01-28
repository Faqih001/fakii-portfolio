import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, Loader2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "assistant";
  content: string;
  thinking?: string;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Fakii's AI assistant. I can answer questions about his experience, projects, skills, and more. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const portfolioContext = `
You are an AI assistant for Fakii Mohammed's professional portfolio. Answer questions based on this information:

ABOUT FAKII MOHAMMED:
- Software/Full-stack Engineer with 4+ years of hands-on experience
 - Based in Nairobi, Kenya
- Phone: +254 741140250
- Email: fakiiahmad001@gmail.com
- GitHub: https://github.com/Faqih001
- LinkedIn: https://www.linkedin.com/in/fakii-mohammed-a96a84213/

CURRENT WORK:
- Freelance Full Stack Developer/Data Analyst (October 2025 - Present)
- UN-HABITAT - PLGS Communication/Full Stack Developer (July 2025 - October 2025)
- Argon Finance Full Stack Developer/IT Support (February 2025 - June 2025)
- USAID Systems Developer/IT Support (February 2024 - January 2025)

EDUCATION:
- Software Engineering - Power Learn Project (Jan 2025 - Sept 2025)
- Bachelors in Information Technology - Kabarak University (2018 - 2021)

KEY SKILLS:
Frontend: JavaScript, TypeScript, React, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS, Flutter
Backend: Node.js, Express.js, Python, PHP/Laravel, Firebase
Databases: PostgreSQL, MySQL, MongoDB, Firebase Firestore
AI & ML: TensorFlow, Scikit-learn, Prompt Engineering, Workflow Automation
Healthcare IT: DHIS2, OpenMRS, eCHIS, iHRIS, KenyaEMR
DevOps: Git, Docker, AWS, Firebase, GitHub Actions
Testing: Jest, Cypress, Postman

MAJOR PROJECTS:
1. MamaShub - Maternal Health Platform (MOH 216) - GitHub: https://github.com/Faqih001/mamashub-web
2. AliXe FinTech/Agri-Trading Platform - Best FinTech Innovation Award Winner
3. KenyaEMR / OpenMRS 3.x Integration - https://uat.kenyahmis.org/openmrs/spa/login
4. eCHIS - Community Health Information System
5. iHRIS Kenya - Health Workforce Management
6. DamuKE - National Blood Management - https://damuke.health.go.ke/
7. Medicare254 - Healthcare Platform - https://medicare254.vercel.app/
8. Agri-Senti WebApp - https://nakuru-agri-senti-webapp.vercel.app/landing
9. Project Management System - https://argon-pms.vercel.app/
10. Guriflex Real Estate - https://guriflex.co.ke/

CERTIFICATIONS:
- Certified ScrumMaster (CSM)
- Professional Scrum Master I (PSM I)
- Google UX Design Professional Certificate
- DHIS2 Academy Certificates
- WCAG Accessibility Training
- Microsoft Power BI Certified

EXPERTISE AREAS:
- Healthcare IT system integration and interoperability
- FinTech and financial inclusion applications
- AI-powered automation and data analytics
- Full-stack web and mobile development
- User-centered design and accessibility (WCAG 2.1 AA)
- Agile/Scrum project management

Answer questions professionally and accurately based on this context. If asked about something not in this context, politely mention that you can answer questions about Fakii's experience, projects, skills, education, and contact information.
`;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
      if (!apiKey) {
        throw new Error("Missing Gemini API key. Set VITE_GEMINI_API_KEY in your .env file.");
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-thinking-exp-01-21:generateContent?key=${apiKey}`,
        {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `${portfolioContext}\n\nUser question: ${userMessage}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", errorData);
        throw new Error(errorData.error?.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      
      let assistantMessage = "";
      let thinkingContent = "";

      if (data.candidates && data.candidates[0]?.content?.parts) {
        for (const part of data.candidates[0].content.parts) {
          if (part.thought) {
            thinkingContent += part.text || "";
          } else if (part.text) {
            assistantMessage += part.text;
          }
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: assistantMessage || "I apologize, but I couldn't generate a response. Please try again.",
          thinking: thinkingContent || undefined,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      const errMsg = (error as Error).message || "I'm sorry, I encountered an error. Please try again.";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errMsg,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end sm:p-4 p-0 pointer-events-none">
      <Card className="w-full sm:max-w-md sm:h-[600px] h-full sm:rounded-lg rounded-none flex flex-col shadow-2xl pointer-events-auto border-2 animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-primary text-primary-foreground">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bot className="w-8 h-8" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <h3 className="font-semibold">Fakii's AI Assistant</h3>
              <p className="text-xs opacity-90">Powered by Gemini AI</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-primary-foreground hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.role === "assistant" && message.thinking && (
                    <div className="mb-2 text-xs opacity-70 italic flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Thinking process applied</span>
                    </div>
                  )}
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl px-4 py-2 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t bg-background">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about Fakii's experience, projects, skills..."
              className="flex-1 px-4 py-3 sm:py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              size="sm"
              className="rounded-full sm:w-10 sm:h-10 w-12 h-12 p-0 flex-shrink-0"
            >
              <Send className="sm:w-4 sm:h-4 w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Ask about projects, skills, experience, or contact info
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ChatBot;
