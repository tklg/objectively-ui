import { ButtonHTMLAttributes, DetailedHTMLProps, ForwardRefExoticComponent } from 'react'
import { CommonColor, CommonSize } from 'src/types/props'

export interface ButtonBaseProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: CommonSize;
  color?: CommonColor;
  variant?: string;
}

export type ButtonBaseComponent<P = ButtonBaseProps> = ForwardRefExoticComponent<P>
