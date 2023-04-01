import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'
import { CommonColor } from 'src/types/props'

export interface CalloutProps extends PropsWithChildrenAndClassName {
  color?: CommonColor;
}
export type CalloutComponent<P = CalloutProps> = ForwardRefExoticComponent<P>
