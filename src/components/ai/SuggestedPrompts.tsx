import { MessageSquare } from "lucide-react";

const prompts = [
  "Am I making a profit this month?",
  "Which customers owe me money?",
  "Can I afford to hire someone?",
  "Why are my expenses increasing?",
  "What should I focus on today?",
  "Is my business financially healthy?",
];

interface SuggestedPromptsProps {
  onSelect: (prompt: string) => void;
}

const SuggestedPrompts = ({ onSelect }: SuggestedPromptsProps) => (
  <div className="mt-4">
    <p className="text-[#8a9bb0] text-xs font-medium mb-3">Suggested questions</p>
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt, i) => (
        <button
          key={i}
          onClick={() => onSelect(prompt)}
          className="flex items-center gap-1.5 text-xs text-[#8a9bb0] border border-[#1e2d42] px-3 py-1.5 rounded-full hover:bg-[#1e2d42] hover:text-white hover:border-[#2a3d58] transition-all"
        >
          <MessageSquare size={11} />
          {prompt}
        </button>
      ))}
    </div>
  </div>
);

export default SuggestedPrompts;