import { DollarSign, Users, Wallet, FileText, Activity } from "lucide-react";
import KPICard from "./KPICard";
import dashboardData from "../../../dashboard.json";

const formatNaira = (value: number): string => {
  if (value >= 1_000_000) return `₦${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `₦${(value / 1_000).toFixed(0)}K`;
  return `₦${value.toLocaleString()}`;
};

const KPICards = () => {
  const cards = [
    {
      title: "Monthly Revenue",
      value: formatNaira(dashboardData.revenue),
      change: `+${dashboardData.profitGrowth}% from last month`,
      changeType: "positive" as const,
      icon: <DollarSign size={17} />,
      iconBg: "bg-emerald-400/10",
      iconColor: "text-emerald-400",
    },
    {
      title: "Active Customers",
      value: `${dashboardData.customers}`,
      change: "Total registered",
      changeType: "neutral" as const,
      icon: <Users size={17} />,
      iconBg: "bg-violet-400/10",
      iconColor: "text-violet-400",
    },
    {
      title: "Cash Available",
      value: formatNaira(dashboardData.cashAvailable),
      change: "Healthy position",
      changeType: "positive" as const,
      icon: <Wallet size={17} />,
      iconBg: "bg-orange-400/10",
      iconColor: "text-orange-400",
    },
    {
      title: "Pending Invoices",
      value: `${dashboardData.pendingInvoices}`,
      change: `${formatNaira(dashboardData.outstandingInvoices)} outstanding`,
      changeType: "negative" as const,
      icon: <FileText size={17} />,
      iconBg: "bg-red-400/10",
      iconColor: "text-red-400",
    },
    {
      title: "Business Health",
      value: `${dashboardData.businessHealth}/100`,
      change: "Excellent performance",
      changeType: "positive" as const,
      icon: <Activity size={17} />,
      iconBg: "bg-blue-400/10",
      iconColor: "text-blue-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {cards.map((card, i) => (
        <KPICard key={i} {...card} />
      ))}
    </div>
  );
};

export default KPICards;