import { forwardRef } from 'react'
import { useAppLayout } from 'src/components/AppLayout/useAppLayout'
import { topNavigationStyles, topNavigationWidthLimitStyles } from 'src/components/TopNavigation/TopNavigation.styles'
import { TopNavigationProps } from 'src/components/TopNavigation/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'TopNavigation'

export const TopNavigation = forwardRef<HTMLElement, TopNavigationProps>(({
  children,
  className: _className,
  compact,
}, ref) => {
  const theme = useTheme()
  const { maxWidth } = useAppLayout()
  const className = buildClassName(ELEMENT_NAME, {
    compact,
  }, _className)

  return (
    <header
      ref={ref}
      className={className}
      css={topNavigationStyles(theme)}
    >
      <div css={topNavigationWidthLimitStyles(theme, maxWidth)}>
        {children}
      </div>
    </header>
  )
})

if (process.env.NODE_ENV !== 'production') {
  TopNavigation.displayName = ELEMENT_NAME
}
