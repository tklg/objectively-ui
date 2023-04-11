import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface CircularProgressProps extends PropsWithChildrenAndClassName {
  foo?: string;
}
export type CircularProgressComponent<P = CircularProgressProps> = ForwardRefExoticComponent<P>
