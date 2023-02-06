import { forwardRef } from 'react'
import { pageContentStyles } from 'src/components/PageContent/PageContent.styles'
import { PageContentComponent, PageContentProps } from 'src/components/PageContent/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'PageContent'

export const PageContent = forwardRef<HTMLDivElement, PageContentProps>(({
  children,
  className: _className,
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)
  return (
    <div
      ref={ref}
      className={className}
      css={pageContentStyles(theme)}
    >
      {children}
    </div>
  )
}) as PageContentComponent

if (process.env.NODE_ENV !== 'production') {
  PageContent.displayName = ELEMENT_NAME
}
