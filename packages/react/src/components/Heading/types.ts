import { ForwardRefExoticComponent, ReactNode } from 'react'
import { HtmlHeadingLevel } from 'src/types/headings'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface HeadingProps extends PropsWithChildrenAndClassName {
  ref?: React.RefObject<HTMLDivElement>;
  level?: HtmlHeadingLevel;
  size?: HtmlHeadingLevel;
  subheading?: string;
  action?: ReactNode;
}

export type HeadingComponent<P = HeadingProps> = ForwardRefExoticComponent<P>
