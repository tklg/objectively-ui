import { ButtonHTMLAttributes, DetailedHTMLProps, ForwardRefExoticComponent, ReactNode } from 'react'
import { CommonSize } from 'src/types/sizes'

export type ButtonVariant = 'default' | 'solid' | 'text' | 'link'
export type ButtonColor = 'default' | 'primary' | 'info' | 'warning' | 'error' | 'success'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: CommonSize;
  fullWidth?: boolean;
  iconStart?: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
}

export type ButtonComponent<P = ButtonProps> = ForwardRefExoticComponent<P>
