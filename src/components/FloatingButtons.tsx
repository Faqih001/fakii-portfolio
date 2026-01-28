import { useState } from "react";
import { Bot } from "lucide-react";
import ChatBot from "./ChatBot";

const FloatingButtons = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="fixed z-50 right-6 bottom-6 flex flex-col items-end gap-3">
        {/* AI Chatbot Button */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center hover:scale-105 transition-all border-2 border-white relative group"
          aria-label="Open AI Chat Assistant"
        >
          <Bot className="w-7 h-7" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          <span className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Ask AI Assistant
          </span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/254741140250"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center hover:scale-105 transition-all border-2 border-white group relative"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="w-7 h-7 object-contain"
            onError={(e) => {
              // If image fails to load, replace with SVG fallback
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (!parent) return;
              const ns = "http://www.w3.org/2000/svg";
              const svg = document.createElementNS(ns, "svg");
              svg.setAttribute("viewBox", "0 0 24 24");
              svg.setAttribute("width", "28");
              svg.setAttribute("height", "28");
              svg.setAttribute("fill", "currentColor");
              const path1 = document.createElementNS(ns, "path");
              path1.setAttribute("d", "M20.52 3.48A11.76 11.76 0 0012 0C5.37 0 .08 5.29.08 11.92c0 2.1.55 4.16 1.6 5.98L0 24l6.28-1.64A11.9 11.9 0 0012 23.84c6.63 0 11.92-5.29 11.92-11.92 0-3.18-1.24-6.17-3.4-8.44z");
              const path2 = document.createElementNS(ns, "path");
              path2.setAttribute("d", "M17.3 14.2c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.65.15-.19.3-.74.97-.9 1.17-.16.2-.32.22-.6.08-1.64-.82-2.71-1.48-3.81-3.33-.28-.47.28-.44.8-1.46.09-.18.04-.34-.02-.48-.07-.13-.65-1.56-.89-2.14-.23-.56-.47-.48-.65-.49-.17-.01-.37-.01-.57-.01-.19 0-.5.07-.76.36-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43 3.45 1.5 3.45 1 4.07.93.62-.07 2.01-.82 2.29-1.62.28-.8.28-1.48.2-1.62-.08-.14-.27-.24-.57-.39z");
              svg.appendChild(path1);
              svg.appendChild(path2);
              parent.appendChild(svg);
            }}
          />
          <span className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Me
          </span>
        </a>
      </div>

      {/* Chatbot Modal */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default FloatingButtons;
