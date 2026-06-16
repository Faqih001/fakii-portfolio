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
            className="w-8 h-8 object-cover rounded-full"
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
