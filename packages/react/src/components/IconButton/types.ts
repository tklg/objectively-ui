import { ForwardRefExoticComponent, ReactNode } from 'react'
import { ButtonBaseProps } from 'src/components/Button/ButtonBase.types'

export type IconButtonVariant = 'default' | 'solid' | 'text'

export interface IconButtonProps extends Omit<ButtonBaseProps, 'children'> {
  icon?: ReactNode;
  variant?: IconButtonVariant;
}

export type IconButtonComponent<P = IconButtonProps> = ForwardRefExoticComponent<P>
