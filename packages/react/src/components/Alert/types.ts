import { ForwardRefExoticComponent, ReactElement } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'
import { StatusColor } from 'src/types/props'

export interface AlertProps extends PropsWithChildrenAndClassName {
  severity?: StatusColor;
  title?: string;
  action?: ReactElement;
}
export type AlertComponent<P = AlertProps> = ForwardRefExoticComponent<P>
