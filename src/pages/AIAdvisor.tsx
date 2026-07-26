import { useState } from "react";
import ChatInterface from "../components/ai/ChatInterface";
import SuggestedPrompts from "../components/ai/SuggestedPrompts";
import RecommendationCards from "../components/ai/RecommendationCards";
import ConversationHistory from "../components/ai/ConversationHistory";
import type { Message } from "../types/dashboard.types";

const AIAdvisor = () => {
  const [history, setHistory] = useState<Message[][]>([]);
  const [pendingPrompt, setPendingPrompt] = useState<string>("");

  const handleNewChat = (messages: Message[]) => {
    setHistory((prev) => [...prev, messages]);
  };

  const handlePromptSelect = (prompt: string) => {
    setPendingPrompt(prompt);
  };

  return (
    <div className="p-8 max-w-[1400px]">
      <div className="mb-6">
        <h1 className="text-white text-2xl font-bold">AI Advisor</h1>
        <p className="text-[#8a9bb0] text-sm mt-1">
          Your intelligent financial co-pilot — ask anything about your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left — Chat + Prompts */}
        <div className="lg:col-span-2 flex flex-col">
          <ChatInterface
            onNewChat={handleNewChat}
            externalPrompt={pendingPrompt}
            onPromptHandled={() => setPendingPrompt("")}
          />
          <SuggestedPrompts onSelect={handlePromptSelect} />
        </div>

        {/* Right — Recommendations + History */}
        <div className="flex flex-col gap-5">
          <RecommendationCards />
          <ConversationHistory history={history} />
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;