import { ForwardRefExoticComponent } from 'react'
import { CommonColor, CommonSize } from 'src/types/props'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface LozengeProps extends PropsWithChildrenAndClassName {
  color?: CommonColor;
  size?: CommonSize;
}

export type LozengeComponent<P = LozengeProps> = ForwardRefExoticComponent<P>
