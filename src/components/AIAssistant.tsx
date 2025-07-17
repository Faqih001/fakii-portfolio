import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// @ts-ignore
import ModelClient from "@azure-rest/ai-inference";
// @ts-ignore
import { AzureKeyCredential } from "@azure/core-auth";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}

const AZURE_API_KEY = import.meta.env.VITE_AZURE_API_KEY;
const AZURE_ENDPOINT = import.meta.env.VITE_AZURE_ENDPOINT;
const AZURE_DEPLOYMENT = import.meta.env.VITE_AZURE_DEPLOYMENT || "grok-3";

export const AIAssistant = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m your AI assistant. How can I help you with your portfolio today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    try {
      if (AZURE_API_KEY && AZURE_ENDPOINT) {
        const client = new ModelClient(
          AZURE_ENDPOINT,
          new AzureKeyCredential(AZURE_API_KEY)
        );
        const systemMessage = {
          role: "system",
          content: "You are a helpful AI assistant for a personal portfolio website. Keep responses concise and friendly."
        };
        const apiMessages = [
          systemMessage,
          ...messages.map(msg => ({ role: msg.role, content: msg.content })),
          { role: "user", content: inputMessage }
        ];
        const response = await client.path("/chat/completions").post({
          body: {
            messages: apiMessages,
            max_tokens: 1000,
            temperature: 0.7,
            model: AZURE_DEPLOYMENT,
          }
        });
        let responseContent = '';
        if (response.status === "200") {
          responseContent = response.body.choices[0].message.content;
        } else {
          throw new Error("Failed to get response from Azure AI");
        }
        const assistantMessage: Message = {
          role: 'assistant',
          content: responseContent || "I'm sorry, I couldn't generate a response at this time.",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error('Azure AI service not available. Please check your API keys in the environment configuration.');
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I\'m having trouble connecting to the AI service. Please check your Azure API keys.',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-40 right-4 z-50 w-[95vw] max-w-md h-[65vh] max-h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 animate-scale-in">
          <Card className="h-full flex flex-col border-0 shadow-none">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-2xl p-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <div className="bg-white rounded-full p-1">
                    <Bot className="w-4 h-4 text-purple-600" />
                  </div>
                  AI Assistant
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
              <div className="flex-1 p-3 space-y-3 overflow-y-auto" style={{ maxHeight: "calc(100% - 68px)" }}>
                {messages.map((message, index) => (
                  <div key={index} className={`flex items-end gap-1.5 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${message.role === 'user' ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-200'}`}>
                      {message.role === 'user' ? (
                        <div className="text-[10px] text-white font-bold">You</div>
                      ) : (
                        <Bot className="w-3 h-3 text-purple-600" />
                      )}
                    </div>
                    <div className={`max-w-[76%] p-2.5 rounded-2xl ${message.role === 'user' ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                      {message.role === 'assistant' ? (
                        <div className="text-xs break-words">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>{message.content}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-xs break-words">{message.content}</p>
                      )}
                      <p className="text-[8px] opacity-70 mt-1 text-right">
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-end gap-1.5">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <Bot className="w-3 h-3 text-purple-600" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-2xl flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="p-3 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about this portfolio..."
                    className="flex-1 text-sm h-10 px-3"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={!inputMessage.trim() || isLoading}
                    size="icon"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full h-10 w-10 flex-shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-36 right-6 z-50 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Open AI Assistant"
      >
        <Bot className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      </button>
    </>
  );
};
