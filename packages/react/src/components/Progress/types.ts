import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'
import { CommonColor } from 'src/types/props'

export interface ProgressProps extends PropsWithChildrenAndClassName {
  color?: CommonColor;
  indeterminate?: boolean;
  value?: number;
  withLabel?: boolean;
}
export type ProgressComponent<P = ProgressProps> = ForwardRefExoticComponent<P>
