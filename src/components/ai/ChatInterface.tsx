import { useState } from "react";
import { Bot, Send } from "lucide-react";
import type { Message } from "../../types/dashboard.types";

const mockAIResponses: Record<string, string> = {
  "Am I making a profit this month?":
    "Yes! Your net profit this month is ₦1.35M — a 14% increase from last month. Revenue is at ₦4.8M while total expenses are ₦3.45M. You're in a strong position.",
  "Which customers owe me money?":
    "You have 7 pending invoices totalling ₦1.25M outstanding. The largest is from Safi Tech Ltd at ₦780,000, which has been overdue for 12 days. I recommend following up today.",
  "Can I afford to hire someone?":
    "Based on your cash available (₦8.3M) and healthy profit margins, you can comfortably support 1-2 new hires. Assuming an average salary of ₦200,000/month, your cash runway remains strong.",
  "Why are my expenses increasing?":
    "Your total expenses grew by 12% this month. The main drivers are: Fuel & Transport (+18%), Salaries (+8%), and Software subscriptions (+5%). Fuel costs are worth reviewing.",
  "What should I focus on today?":
    "Three priorities for today: 1) Follow up with Safi Tech Ltd on the overdue ₦780,000 invoice. 2) Review fuel expense policy — costs are up 18%. 3) Review the 4 other overdue invoices before end of day.",
  "Is my business financially healthy?":
    "Your Business Health Score is 91/100 — Excellent! Strong revenue growth, healthy cash reserves, and improving profit margins. The only area to watch is outstanding invoices.",
};

const getTime = () =>
  new Date().toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit" });

interface ChatInterfaceProps {
  onNewChat: (messages: Message[]) => void;
  externalPrompt?: string;
  onPromptHandled?: () => void;
}

const ChatInterface = ({ onNewChat, externalPrompt, onPromptHandled }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I'm your CFO.ai financial co-pilot. Ask me anything about your business — revenue, expenses, invoices, cash flow, or what to focus on today.",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMsg: Message = {
      id: Date.now(),
      sender: "user",
      text: messageText,
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    if (onPromptHandled) onPromptHandled();

    setTimeout(() => {
      const response =
        mockAIResponses[messageText] ||
        "Based on your current financial data, your business is performing well. Revenue is up 14%, cash flow is healthy, and your business health score is 91/100. Is there a specific area you'd like me to dig into?";

      const aiMsg: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: response,
        time: getTime(),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 1200);
  };

  // Handle external prompt from SuggestedPrompts
  useState(() => {
    if (externalPrompt) handleSend(externalPrompt);
  });

  const handleNewChat = () => {
    if (messages.length > 1) onNewChat(messages);
    setMessages([{
      id: 1,
      sender: "ai",
      text: "Hello! I'm your CFO.ai financial co-pilot. Ask me anything about your business.",
      time: getTime(),
    }]);
  };

  return (
    <div className="bg-[#0d1526] border border-[#1e2d42] rounded-2xl flex flex-col" style={{ height: "600px" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#1e2d42]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-yellow-400/10 flex items-center justify-center">
            <Bot size={16} className="text-yellow-400" />
          </div>
          <div>
            <p className="text-white text-sm font-semibold">CFO.ai Assistant</p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-emerald-400 text-xs">Online</p>
            </div>
          </div>
        </div>
        <button
          onClick={handleNewChat}
          className="text-[#8a9bb0] text-xs border border-[#1e2d42] px-3 py-1.5 rounded-lg hover:bg-[#1e2d42] hover:text-white transition-all"
        >
          New Chat
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-bold ${
              msg.sender === "ai"
                ? "bg-yellow-400/10 text-yellow-400"
                : "bg-blue-400/10 text-blue-400"
            }`}>
              {msg.sender === "ai" ? <Bot size={15} /> : "F"}
            </div>
            <div className={`max-w-[75%] flex flex-col gap-1 ${msg.sender === "user" ? "items-end" : "items-start"}`}>
              <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.sender === "ai"
                  ? "bg-[#1a2535] text-[#c0d0e0] rounded-tl-sm"
                  : "bg-blue-600 text-white rounded-tr-sm"
              }`}>
                {msg.text}
              </div>
              <span className="text-[#4a5a6a] text-[10px] px-1">{msg.time}</span>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-xl bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
              <Bot size={15} className="text-yellow-400" />
            </div>
            <div className="bg-[#1a2535] px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#8a9bb0] animate-bounce [animation-delay:-0.3s]" />
              <div className="w-2 h-2 rounded-full bg-[#8a9bb0] animate-bounce [animation-delay:-0.15s]" />
              <div className="w-2 h-2 rounded-full bg-[#8a9bb0] animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="px-5 py-4 border-t border-[#1e2d42]">
        <div className="flex items-center gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask about your finances..."
            className="flex-1 bg-[#060d17] border border-[#1e2d42] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[#4a5a6a] focus:outline-none focus:border-yellow-400/40 transition-colors"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="w-10 h-10 rounded-xl bg-yellow-400 hover:bg-yellow-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all flex-shrink-0"
          >
            <Send size={15} className="text-[#060d17]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;