import { ReactNode } from 'react'
import { CommonColor, CommonSize } from 'src/types/props'

export interface UptimeTooltipData {
  date?: string;
  content?: ReactNode;
}

export interface UptimeBarData {
  color?: CommonColor | string;
  up?: boolean;
  tooltip?: UptimeTooltipData;
}

export interface UptimeProps {
  className?: string;
  size?: CommonSize;
  label?: string;
  bars: UptimeBarData[];
  startDate?: string;
  endDate?: string;
  rounded?: boolean;
  showUptimePercent?: boolean;
  formatUptimePercent?: (pct: number) => string;
}
