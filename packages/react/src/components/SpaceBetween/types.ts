import { ForwardRefExoticComponent, ReactElement } from 'react'
import { CommonSize } from 'src/types/props'

export interface SpaceBetweenProps {
  children: ReactElement | ReactElement[];
  className?: string;
  direction?: 'horizontal' | 'vertical';
  size?: CommonSize;
}

export type SpaceBetweenComponent<P = SpaceBetweenProps> = ForwardRefExoticComponent<P>
