import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface SideNavigationProps extends PropsWithChildrenAndClassName {
  collapsable?: boolean;
  side?: 'left' | 'right';
}
