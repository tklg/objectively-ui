import { ForwardRefExoticComponent, ReactElement } from 'react'
import { CommonColor } from 'src/types/props'

export interface BadgeProps {
  children: ReactElement;
  className?: string;
  fit?: 'square' | 'circle';
  value?: string | number;
  placement?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
  color?: CommonColor;
}

export type BadgeComponent<P = BadgeProps> = ForwardRefExoticComponent<P>
