import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AIAdvisor from "./pages/AIAdvisor";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ai-advisor" element={<AIAdvisor />} />
    </Routes>
  );
};

export default App;