import { useNavigate } from "react-router-dom";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import KPICards from "../components/dashboard/KPICards";
import AIDailyBrief from "../components/dashboard/AIDailyBrief";
import NotificationPreview from "../components/dashboard/NotificationPreview";
import BusinessHealthScore from "../components/dashboard/BusinessHealthScore";
import QuickActions from "../components/dashboard/QuickActions";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#060d17]">
      <div className="p-8 space-y-8 max-w-[1400px]">
        <WelcomeBanner />
        <KPICards />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#060d17]">
          <div className="lg:col-span-2">
            <AIDailyBrief onOpenAdvisor={() => navigate("/ai-advisor")} />
          </div>
          <NotificationPreview />
        </div>
        <BusinessHealthScore />
        <QuickActions />
      </div>
    </div>
  );
};

export default Dashboard;