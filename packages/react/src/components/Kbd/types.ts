import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'
import { CommonSize } from 'src/types/props'

export interface KbdProps extends PropsWithChildrenAndClassName {
  size?: CommonSize;
}
export type KbdComponent<P = KbdProps> = ForwardRefExoticComponent<P>
