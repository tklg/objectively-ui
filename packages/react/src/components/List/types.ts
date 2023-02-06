import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface ListProps extends PropsWithChildrenAndClassName {
  ref?: React.RefObject<HTMLUListElement>;
  compact?: boolean;
  divided?: boolean;
  noPadding?: boolean;
}

export interface ListContextProps {
  compact: boolean;
  divided: boolean;
}

export type ListComponent<P = ListProps> = ForwardRefExoticComponent<P>
