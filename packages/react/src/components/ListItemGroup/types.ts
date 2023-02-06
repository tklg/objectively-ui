import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export type ListItemGroupProps = PropsWithChildrenAndClassName & {
  ref?: React.RefObject<HTMLLIElement>;
  subheading: string;
}

export type ListItemGroupComponent<P = ListItemGroupProps> = ForwardRefExoticComponent<P>
