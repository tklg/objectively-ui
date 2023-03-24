import { ForwardRefExoticComponent } from 'react'
import { CommonColor, CommonSize } from 'src/types/props'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'
import { PropsWithClassName } from 'src/types/PropsWithClassName'

export interface StatProps extends PropsWithChildrenAndClassName {
  size: CommonSize;
}
export type StatComponent<P = StatProps> = ForwardRefExoticComponent<P>

export type StatNumberProps = PropsWithChildrenAndClassName
export type StatNumberComponent<P = StatNumberProps> = ForwardRefExoticComponent<P>

export type StatLabelProps = PropsWithChildrenAndClassName
export type StatLabelComponent<P = StatLabelProps> = ForwardRefExoticComponent<P>

export type StatDetailProps = PropsWithChildrenAndClassName
export type StatDetailComponent<P = StatDetailProps> = ForwardRefExoticComponent<P>

export interface StatArrowProps extends PropsWithClassName {
  direction?: 'up' | 'down';
  color?: Extract<CommonColor, 'success' | 'error'>;
  label?: string;
}
export type StatArrowComponent<P = StatArrowProps> = ForwardRefExoticComponent<P>
