import { Heart, Shield } from "lucide-react";
import dashboardData from "../../../dashboard.json";

const healthMetrics = [
  { label: "Revenue Growth", value: 92, color: "bg-emerald-400" },
  { label: "Cash Flow", value: 88, color: "bg-blue-400" },
  { label: "Profit Margin", value: 85, color: "bg-violet-400" },
  { label: "Invoice Recovery", value: 74, color: "bg-yellow-400" },
  { label: "Expense Control", value: 79, color: "bg-orange-400" },
];

const BusinessHealthScore = () => {
  const score = dashboardData.businessHealth;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-[#0d1526] border border-[#1e2d42] rounded-2xl p-6">
      <div className="flex items-center gap-2.5 mb-6">
        <div className="w-9 h-9 rounded-xl bg-emerald-400/10 flex items-center justify-center">
          <Heart size={16} className="text-emerald-400" />
        </div>
        <div>
          <p className="text-white text-sm font-semibold">Business Health Score</p>
          <p className="text-[#8a9bb0] text-xs">Overall performance rating</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Circular progress */}
        <div className="relative flex-shrink-0">
          <svg width="140" height="140" className="-rotate-90">
            <circle
              cx="70" cy="70" r="54"
              fill="none" stroke="#1e2d42" strokeWidth="10"
            />
            <circle
              cx="70" cy="70" r="54"
              fill="none" stroke="#34d399" strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white text-3xl font-bold">{score}</span>
            <span className="text-[#8a9bb0] text-xs">out of 100</span>
          </div>
        </div>

        {/* Metric bars */}
        <div className="flex-1 w-full space-y-3">
          {healthMetrics.map((metric, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[#8a9bb0] text-xs">{metric.label}</span>
                <span className="text-white text-xs font-semibold">{metric.value}%</span>
              </div>
              <div className="h-1.5 bg-[#1e2d42] rounded-full overflow-hidden">
                <div
                  className={`h-full ${metric.color} rounded-full transition-all duration-700`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Status badge */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
            <Shield size={28} className="text-emerald-400" />
          </div>
          <span className="text-emerald-400 text-sm font-semibold">Excellent</span>
          <span className="text-[#8a9bb0] text-xs text-center">
            Your business is in great shape
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusinessHealthScore;