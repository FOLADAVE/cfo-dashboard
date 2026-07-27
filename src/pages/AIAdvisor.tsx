import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatInterface from "../components/ai/ChatInterface";
import SuggestedPrompts from "../components/ai/SuggestedPrompts";
import RecommendationCards from "../components/ai/RecommendationCards";
import ConversationHistory from "../components/ai/ConversationHistory";
import type { Message } from "../types/dashboard.types";

const AIAdvisor = () => {
  const [history, setHistory] = useState<Message[][]>([]);
  const [pendingPrompt, setPendingPrompt] = useState<string>("");
  const navigate = useNavigate();

  const handleNewChat = (messages: Message[]) => {
    setHistory((prev) => [...prev, messages]);
  };

  const handlePromptSelect = (prompt: string) => {
    setPendingPrompt(prompt);
  };

  return (
    <div className="min-h-screen bg-[#060d17]">
      <div className="p-8 max-w-[1400px]">

        {/* Back button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 text-[#8a9bb0] hover:text-white text-sm mb-6 transition-colors"
        >
          ← Back to Dashboard
        </button>

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-white text-2xl font-bold">AI Advisor</h1>
          <p className="text-[#8a9bb0] text-sm mt-1">
            Your intelligent financial co-pilot — ask anything about your business.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col">
            <ChatInterface
              onNewChat={handleNewChat}
              externalPrompt={pendingPrompt}
              onPromptHandled={() => setPendingPrompt("")}
            />
            <SuggestedPrompts onSelect={handlePromptSelect} />
          </div>
          <div className="flex flex-col gap-5">
            <RecommendationCards />
            <ConversationHistory history={history} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIAdvisor;