import { MessageCircle, MessageSquare } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed z-50 right-6 bottom-6 flex flex-col items-end gap-4">
      {/* Chatbot Button */}
      <button
        className="bg-primary text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center hover:scale-105 transition-all border-2 border-white"
        aria-label="Open Chatbot"
        onClick={() => alert('Chatbot coming soon!')}
      >
        <MessageCircle className="w-7 h-7" />
      </button>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254741140250"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center hover:scale-105 transition-all border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};

export default FloatingButtons;
