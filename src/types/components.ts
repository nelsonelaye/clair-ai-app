import {
  StockInfoResponseInterface,
  InvestorTypeInterface,
  StockInfoInterface,
} from "./stocks";

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export interface DownloadReportProps {
  data?: any;
  isLoading?: boolean;
}

export interface AnalysisTableProps {
  data: StockInfoResponseInterface;
  investorType: InvestorTypeInterface;
}

export interface StockInsightsModalProps {
  stock: StockInfoInterface;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  investorType: InvestorTypeInterface;
}
