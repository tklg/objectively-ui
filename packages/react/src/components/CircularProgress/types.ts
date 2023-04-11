import { ForwardRefExoticComponent } from 'react'
import { PropsWithClassName } from 'src/types/PropsWithClassName'
import { CommonColor, CommonSize } from 'src/types/props'

export interface CircularProgressProps extends PropsWithClassName {
  color?: CommonColor;
  size?: CommonSize;
  indeterminate?: boolean;
  value?: number;
  withLabel?: boolean;
}
export type CircularProgressComponent<P = CircularProgressProps> = ForwardRefExoticComponent<P>
