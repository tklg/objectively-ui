import { ButtonHTMLAttributes, DetailedHTMLProps, ForwardRefExoticComponent, ReactNode } from 'react'
import { CommonColor, CommonSize } from 'src/types/props'

export type ButtonVariant = 'default' | 'solid' | 'text' | 'link'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: CommonSize;
  fullWidth?: boolean;
  iconStart?: ReactNode;
  variant?: ButtonVariant;
  color?: CommonColor;
}

export type ButtonComponent<P = ButtonProps> = ForwardRefExoticComponent<P>
