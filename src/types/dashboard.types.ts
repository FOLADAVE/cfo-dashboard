export interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

export interface AIInsight {
  title: string;
  message: string;
}

export interface Notification {
  type: "warning" | "success" | "info";
  title: string;
  message: string;
}

export interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
  time: string;
}

export interface RecommendationCard {
  icon: React.ReactNode;
  title: string;
  message: string;
  color: string;
  bg: string;
  border: string;
}

export interface HealthMetric {
  label: string;
  value: number;
  color: string;
}