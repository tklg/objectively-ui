import { forwardRef } from 'react'
import { TopNavigationProps } from 'src/components/TopNavigation/types'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'TopNavigation'

export const TopNavigation = forwardRef<HTMLElement, TopNavigationProps>(({
  children,
  className: _className,
  compact,
}, ref) => {
  const className = buildClassName(ELEMENT_NAME, {
    compact,
  }, _className)

  return (
    <header
      ref={ref}
      className={className}
    >
      {children}
    </header>
  )
})

TopNavigation.displayName = ELEMENT_NAME
