import { CommonColor, CommonSize } from 'src/types/props'

export interface IconProps {
  title?: string;
  path: string;
  className?: string;
  size?: number | CommonSize;
  color?: CommonColor;
  viewBoxSize?: number;
}
