import { ForwardRefExoticComponent, ReactNode } from 'react'
import { CommonColor, CommonSize } from 'src/types/props'

export interface UptimeBarData {
  color?: CommonColor | string;
  up?: boolean;
  tooltip?: ReactNode;
}

export interface UptimeProps {
  className?: string;
  size?: CommonSize;
  label?: string;
  bars: UptimeBarData[];
  startDate?: string;
  endDate?: string;
  square?: boolean;
  showUptimePercent?: boolean;
  formatUptimePercent?: (pct: number) => string;
}

export type UptimeComponent<P = UptimeProps> = ForwardRefExoticComponent<P>
