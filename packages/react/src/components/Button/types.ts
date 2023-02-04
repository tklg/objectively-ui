import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import { CommonSize } from 'src/types/sizes'

export type ButtonVariant = 'default' | 'primary' | 'text' | 'link';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: CommonSize;
  fullWidth?: boolean;
  iconStart?: ReactNode;
  variant?: ButtonVariant;
  danger?: boolean;
}
