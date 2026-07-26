import type { KPICardProps } from "../../types/dashboard.types";

const KPICard = ({
  title, value, change, changeType, icon, iconBg, iconColor,
}: KPICardProps) => {
  const changeColor =
    changeType === "positive" ? "text-emerald-400" :
    changeType === "negative" ? "text-red-400" : "text-[#8a9bb0]";
  const prefix =
    changeType === "positive" ? "↑ " :
    changeType === "negative" ? "↓ " : "";

  return (
    <div className="bg-[#0d1526] border border-[#1e2d42] rounded-2xl p-5 flex flex-col gap-4 hover:border-[#2a3d58] transition-all duration-200">
      <div className="flex items-center justify-between">
        <p className="text-[#8a9bb0] text-sm font-medium">{title}</p>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}>
          {icon}
        </div>
      </div>
      <div>
        <p className="text-white text-3xl font-bold tracking-tight">{value}</p>
        <p className={`text-xs mt-1.5 font-medium ${changeColor}`}>
          {prefix}{change}
        </p>
      </div>
    </div>
  );
};

export default KPICard;