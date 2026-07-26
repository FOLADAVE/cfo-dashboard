import { Bell, AlertTriangle, CheckCircle, Info, ChevronRight } from "lucide-react";
import notifications from "../../../notifications.json";

const notifConfig = {
  warning: {
    icon: <AlertTriangle size={14} className="text-yellow-400" />,
    border: "border-l-yellow-400",
    bg: "bg-yellow-400/5",
  },
  success: {
    icon: <CheckCircle size={14} className="text-emerald-400" />,
    border: "border-l-emerald-400",
    bg: "bg-emerald-400/5",
  },
  info: {
    icon: <Info size={14} className="text-blue-400" />,
    border: "border-l-blue-400",
    bg: "bg-blue-400/5",
  },
};

const NotificationPreview = () => (
  <div className="bg-[#0d1526] border border-[#1e2d42] rounded-2xl p-6 flex flex-col h-full">
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2.5">
        <div className="relative">
          <Bell size={15} className="text-[#8a9bb0]" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-yellow-400 rounded-full" />
        </div>
        <p className="text-white text-sm font-semibold">Notifications</p>
      </div>
      <button className="text-yellow-400 text-xs flex items-center gap-1 hover:underline">
        View all <ChevronRight size={11} />
      </button>
    </div>

    <div className="space-y-3 flex-1">
      {notifications.map((n, i) => {
        const c = notifConfig[n.type as keyof typeof notifConfig];
        return (
          <div
            key={i}
            className={`flex items-start gap-3 p-3.5 rounded-xl border-l-2 ${c.border} ${c.bg} hover:opacity-80 transition-opacity cursor-pointer`}
          >
            <div className="flex-shrink-0 mt-0.5">{c.icon}</div>
            <div>
              <p className="text-white text-xs font-semibold">{n.title}</p>
              <p className="text-[#8a9bb0] text-xs mt-0.5 leading-relaxed">{n.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default NotificationPreview;