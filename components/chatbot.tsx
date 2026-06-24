"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    initialMessages: [
      {
        id: "welcome-msg",
        role: "assistant",
        content: "Hi, I'm Earl's AI assistant. Ask me anything!",
      },
    ],
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-foreground/5">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-foreground" />
              <span className="font-semibold text-sm">Earl's Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground/60 hover:text-foreground transition-colors p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "flex gap-3 text-sm",
                  m.role === "user" ? "flex-row-reverse" : "flex-row"
                )}
              >
                <div
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border",
                    m.role === "user"
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-foreground border-border"
                  )}
                >
                  {m.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-4 py-2",
                    m.role === "user"
                      ? "bg-foreground text-background"
                      : "bg-foreground/5 text-foreground border border-border"
                  )}
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 text-sm flex-row">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border bg-background text-foreground border-border">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="max-w-[75%] rounded-2xl px-4 py-2 bg-foreground/5 text-foreground border border-border flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border bg-background">
            <form onSubmit={handleSubmit} className="flex items-center gap-2 relative">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask me anything..."
                className="flex-1 bg-foreground/5 border border-border rounded-full pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-foreground/30 transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input?.trim() || isLoading}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 bg-foreground text-background rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "flex items-center justify-center w-14 h-14 rounded-full bg-foreground text-background shadow-lg hover:scale-105 transition-transform duration-200",
          isOpen && "rotate-90 scale-0 opacity-0 absolute"
        )}
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
