import { NamedExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export type ListItemProps = PropsWithChildrenAndClassName & {
  description?: string;
  selected?: boolean;
} & ({
  button: true;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} | {
  button?: false;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
})

export type ListItemComponent<P = object> = NamedExoticComponent<P>
