import { forwardRef } from 'react'
import { sideNavigationStyles } from 'src/components/SideNavigation/SideNavigation.styles'
import { SideNavigationProps } from 'src/components/SideNavigation/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'SideNavigation'

export const SideNavigation = forwardRef<HTMLElement, SideNavigationProps>(({
  children,
  side = 'left',
  className: _className,
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    side,
  }, _className)

  return (
    <nav className={className} ref={ref} css={sideNavigationStyles(theme)}>
      {children}
    </nav>
  )
})

SideNavigation.displayName = ELEMENT_NAME
