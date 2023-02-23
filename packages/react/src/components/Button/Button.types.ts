import { ForwardRefExoticComponent, ReactNode } from 'react'
import { ButtonBaseProps } from 'src/components/Button/ButtonBase.types'

export type ButtonVariant = 'default' | 'solid' | 'text' | 'link'

export interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  variant?: ButtonVariant;
}

export type ButtonComponent<P = ButtonProps> = ForwardRefExoticComponent<P>
