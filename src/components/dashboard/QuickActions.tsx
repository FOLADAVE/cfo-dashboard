import { FilePlus, PlusCircle, BarChart2, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const actions = [
  {
    label: "Create Invoice",
    icon: <FilePlus size={20} />,
    route: "/invoices",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    hover: "hover:border-yellow-400/30",
  },
  {
    label: "Add Expense",
    icon: <PlusCircle size={20} />,
    route: "/expenses",
    color: "text-red-400",
    bg: "bg-red-400/10",
    hover: "hover:border-red-400/30",
  },
  {
    label: "Generate Report",
    icon: <BarChart2 size={20} />,
    route: "/reports",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    hover: "hover:border-blue-400/30",
  },
  {
    label: "View Customers",
    icon: <UserCircle size={20} />,
    route: "/customers",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    hover: "hover:border-emerald-400/30",
  },
];

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p className="text-white text-sm font-semibold mb-3">Quick Actions</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((a, i) => (
          <button
            key={i}
            onClick={() => navigate(a.route)}
            className={`flex flex-col items-center justify-center gap-3 py-7 rounded-2xl bg-[#0d1526] border border-[#1e2d42] ${a.hover} transition-all duration-200 group`}
          >
            <div className={`p-3 rounded-xl ${a.bg} ${a.color} group-hover:scale-110 transition-transform duration-200`}>
              {a.icon}
            </div>
            <span className="text-[#8a9bb0] text-xs font-medium group-hover:text-white transition-colors">
              {a.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;