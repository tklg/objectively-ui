import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface TopNavigationProps extends PropsWithChildrenAndClassName {
  compact?: boolean;
  icon?: string;
}

export type TopNavigationComponent<P = TopNavigationProps> = ForwardRefExoticComponent<P>
