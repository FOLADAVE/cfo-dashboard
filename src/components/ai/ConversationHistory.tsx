import { MessageSquare } from "lucide-react";
import type { Message } from "../../types/dashboard.types";

interface ConversationHistoryProps {
  history: Message[][];
}

const ConversationHistory = ({ history }: ConversationHistoryProps) => (
  <div className="bg-[#0d1526] border border-[#1e2d42] rounded-2xl p-5">
    <p className="text-white text-sm font-semibold mb-4">Conversation History</p>
    {history.length === 0 ? (
      <div className="text-center py-6">
        <MessageSquare size={24} className="text-[#2a3d58] mx-auto mb-2" />
        <p className="text-[#4a5a6a] text-xs">No previous conversations yet</p>
      </div>
    ) : (
      <div className="space-y-2">
        {history.map((conv, i) => {
          const firstUserMsg = conv.find((m) => m.sender === "user");
          return (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#1a2535] cursor-pointer transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-[#1e2d42] flex items-center justify-center flex-shrink-0">
                <MessageSquare size={12} className="text-[#8a9bb0]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#8a9bb0] text-xs truncate group-hover:text-white transition-colors">
                  {firstUserMsg?.text || "Chat session"}
                </p>
                <p className="text-[#4a5a6a] text-[10px] mt-0.5">
                  {conv.length - 1} messages
                </p>
              </div>
            </div>
          );
        })}
      </div>
    )}
  </div>
);

export default ConversationHistory;