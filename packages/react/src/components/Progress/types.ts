import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface ProgressProps extends PropsWithChildrenAndClassName {
  foo?: string;
}
export type ProgressComponent<P = ProgressProps> = ForwardRefExoticComponent<P>
