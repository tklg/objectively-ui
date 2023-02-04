import { NamedExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface ListItemProps extends PropsWithChildrenAndClassName {
  description?: string;
  selected?: boolean;
  button?: boolean;
}

export type ListItemComponent<P = object> = NamedExoticComponent<P>
