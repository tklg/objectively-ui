import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export type ListItemProps = PropsWithChildrenAndClassName & {
  ref?: React.RefObject<HTMLLIElement>;
  description?: string;
  selected?: boolean;
} & ({
  button: true;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
} | {
  button?: false;
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
})

export type ListItemComponent<P = ListItemProps> = ForwardRefExoticComponent<P>
