import { forwardRef } from 'react'
import { topNavigationStyles } from 'src/components/TopNavigation/TopNavigation.styles'
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
  const className = buildClassName(ELEMENT_NAME, {
    compact,
  }, _className)

  return (
    <header
      ref={ref}
      className={className}
      css={topNavigationStyles(theme)}
    >
      {children}
    </header>
  )
})

TopNavigation.displayName = ELEMENT_NAME