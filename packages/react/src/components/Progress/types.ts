import { ForwardRefExoticComponent } from 'react'
import { PropsWithClassName } from 'src/types/PropsWithClassName'
import { CommonColor } from 'src/types/props'

export interface ProgressProps extends PropsWithClassName {
  color?: CommonColor;
  indeterminate?: boolean;
  value?: number;
  withLabel?: boolean;
}
export type ProgressComponent<P = ProgressProps> = ForwardRefExoticComponent<P>
