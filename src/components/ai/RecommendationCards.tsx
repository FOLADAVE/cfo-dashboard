import { TrendingUp, AlertTriangle, Zap, Shield } from "lucide-react";
import { Sparkles } from "lucide-react";

const cards = [
  {
    icon: <TrendingUp size={18} />,
    title: "Revenue Opportunity",
    message: "3 customers haven't purchased in 60 days. A targeted follow-up could recover ₦450,000.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: <AlertTriangle size={18} />,
    title: "Invoice Risk",
    message: "Safi Tech Ltd invoice is 12 days overdue. Escalate to avoid bad debt.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  {
    icon: <Zap size={18} />,
    title: "Cash Flow Tip",
    message: "You have enough liquidity to invest ₦2M without affecting operations.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: <Shield size={18} />,
    title: "Expense Alert",
    message: "Fuel expenses rose 18% this month. Consider reviewing your transport policy.",
    color: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/20",
  },
];

const RecommendationCards = () => (
  <div className="bg-[#0d1526] border border-[#1e2d42] rounded-2xl p-5">
    <div className="flex items-center gap-2 mb-4">
      <Sparkles size={15} className="text-yellow-400" />
      <p className="text-white text-sm font-semibold">AI Recommendations</p>
    </div>
    <div className="space-y-3">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`p-3.5 rounded-xl border ${card.border} ${card.bg} cursor-pointer hover:opacity-80 transition-opacity`}
        >
          <div className="flex items-start gap-3">
            <div className={`flex-shrink-0 mt-0.5 ${card.color}`}>{card.icon}</div>
            <div>
              <p className={`text-xs font-semibold mb-1 ${card.color}`}>{card.title}</p>
              <p className="text-[#8a9bb0] text-xs leading-relaxed">{card.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecommendationCards;