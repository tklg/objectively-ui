import { NamedExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface ListProps extends PropsWithChildrenAndClassName {
  compact?: boolean;
  divided?: boolean;
  noPadding?: boolean;
}

export interface ListContextProps {
  compact: boolean;
  divided: boolean;
}

export type ListComponent<P = object> = NamedExoticComponent<P>
