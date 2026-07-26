import { Sparkles, ChevronRight } from "lucide-react";
import aiInsights from "../../../ai-insights.json";

interface AIDailyBriefProps {
  onOpenAdvisor: () => void;
}

const AIDailyBrief = ({ onOpenAdvisor }: AIDailyBriefProps) => (
  <div className="bg-[#0d1526] border border-[#1e2d42] rounded-2xl p-6 flex flex-col h-full">
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-yellow-400/10 flex items-center justify-center">
          <Sparkles size={16} className="text-yellow-400" />
        </div>
        <div>
          <p className="text-white text-sm font-semibold">AI Daily Brief</p>
          <p className="text-[#8a9bb0] text-xs">CFO.ai Intelligence</p>
        </div>
      </div>
      <span className="text-[#8a9bb0] text-xs">
        {new Date().toLocaleDateString("en-NG", {
          weekday: "short", day: "numeric", month: "short",
        })}
      </span>
    </div>

    <div className="bg-[#060d17] border border-[#1e2d42] rounded-xl p-4 mb-4">
      <p className="text-[#a0b4c8] text-sm leading-relaxed">
        Good morning, <span className="text-white font-semibold">Ade</span>.
        Yesterday you generated{" "}
        <span className="text-yellow-400 font-semibold">₦450,000</span> in
        revenue. Profit increased by{" "}
        <span className="text-emerald-400 font-semibold">8%</span>. Five
        invoices remain unpaid.
      </p>
    </div>

    <div className="space-y-2 flex-1">
      {aiInsights.slice(0, 3).map((insight, i) => (
        <div
          key={i}
          className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[#1a2535] transition-colors cursor-pointer group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-1.5" />
          <p className="text-[#a0b4c8] text-sm flex-1">
            <span className="text-white font-semibold">{insight.title}: </span>
            {insight.message}
          </p>
          <ChevronRight
            size={14}
            className="text-[#3a4a5a] group-hover:text-yellow-400 flex-shrink-0 mt-0.5 transition-colors"
          />
        </div>
      ))}
    </div>

    <button
      onClick={onOpenAdvisor}
      className="mt-4 w-full py-2.5 rounded-xl border border-yellow-400/20 text-yellow-400 text-xs font-medium hover:bg-yellow-400/5 transition-colors flex items-center justify-center gap-2"
    >
      <Sparkles size={13} />
      Open full AI Advisor
    </button>
  </div>
);

export default AIDailyBrief;