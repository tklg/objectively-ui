import { ReactElement, ReactNode } from 'react'

export interface TooltipProps {
  children: ReactElement;
  title: ReactNode;
  // All placements supported by Popperjs
  placement?: 'top' | 'right' | 'bottom' | 'left' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end' | 'auto' | 'auto-start' | 'auto-end';
  arrow?: boolean;
  open?: boolean;
  className?: string;
}
