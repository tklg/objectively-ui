import { forwardRef } from 'react'
import { useAppLayout } from 'src/components/AppLayout/useAppLayout'
import { topNavigationContentStyles, topNavigationIconStyles, topNavigationStyles, topNavigationWidthLimitStyles } from 'src/components/TopNavigation/TopNavigation.styles'
import { TopNavigationComponent, TopNavigationProps } from 'src/components/TopNavigation/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'TopNavigation'

const iconClassName = buildClassName(`${ELEMENT_NAME}Icon`)

export const TopNavigation = forwardRef<HTMLElement, TopNavigationProps>(({
  children,
  className: _className,
  compact,
  icon,
  ...props
}, ref) => {
  const theme = useTheme()
  const { maxWidth } = useAppLayout()
  const className = buildClassName(ELEMENT_NAME, {
    compact,
    withIcon: Boolean(icon),
  }, _className)

  return (
    <header
      {...props}
      ref={ref}
      className={className}
      css={topNavigationStyles(theme)}
    >
      <div css={topNavigationWidthLimitStyles(theme, maxWidth)}>
        {icon && (
          <img
            src={icon}
            alt='Icon'
            className={iconClassName}
            css={topNavigationIconStyles(theme)}
          />
        )}
        <div css={topNavigationContentStyles(theme)}>
          {children}
        </div>
      </div>
    </header>
  )
}) as TopNavigationComponent

if (process.env.NODE_ENV !== 'production') {
  TopNavigation.displayName = ELEMENT_NAME
}
