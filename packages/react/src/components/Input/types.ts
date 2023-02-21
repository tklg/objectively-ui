import { DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react'
import { CommonSize } from 'src/types/props'

export interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
  label?: string;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  size?: CommonSize;
  fullWidth?: boolean;
}
