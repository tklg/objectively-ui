import { ReactNode } from 'react'
import { HtmlHeadingLevel } from 'src/types/headings'
import { PropsWithChildrenAndClassName } from 'src/types/PropsWithChildrenAndClassName'

export interface HeadingProps extends PropsWithChildrenAndClassName {
  level?: HtmlHeadingLevel;
  subheading?: string;
  action?: ReactNode;
}
