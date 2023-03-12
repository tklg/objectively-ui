import { CommonColor, CommonSize } from 'src/types/props'

export interface AvatarProps {
  size?: CommonSize;
  src?: string;
  name?: string;
  initials?: string;
  className?: string;
  color?: CommonColor | 'auto';
}
