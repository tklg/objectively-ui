import { ReactElement } from 'react'

export interface BadgeProps {
  children: ReactElement;
  className?: string;
  fit?: 'square' | 'circle';
  value?: string | number;
  placement?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
}
