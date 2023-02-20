import { ReactNode } from 'react'

export interface AppLayoutProps {
  className?: string;
  leftNavigation?: ReactNode;
  rightNavigation?: ReactNode;
  content?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  fullWidth?: boolean;
  maxWidth?: string | number;
}

export interface AppLayoutContextProps {
  maxWidth: string;
}
