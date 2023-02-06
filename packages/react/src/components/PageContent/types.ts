import { ForwardRefExoticComponent } from 'react'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface PageContentProps extends PropsWithChildrenAndClassName {
  ref?: React.RefObject<HTMLDivElement>;
}

export type PageContentComponent<P = PageContentProps> = ForwardRefExoticComponent<P>
