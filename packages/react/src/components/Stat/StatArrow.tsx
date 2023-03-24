import { forwardRef } from 'react'
import { Icon } from 'src/components/Icon'
import { ScreenreaderOnly } from 'src/components/ScreenreaderOnly'
import { statArrowStyles } from 'src/components/Stat/Stat.styles'
import { StatArrowComponent, StatArrowProps } from 'src/components/Stat/types'
import { useRawTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'StatArrow'

export const StatArrow = forwardRef<SVGSVGElement, StatArrowProps>(({
  direction = 'up',
  color = 'success',
  label = direction === 'up' ? 'Increased by' : 'Decreased by',
  className: _className,
  ...props
}, ref) => {
  const theme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, {
    direction,
    color,
  }, _className)
  const path = direction === 'up'
    ? 'M 12,6 23,18 1,18 Z'
    : 'M 1,6 23,6 12,18 Z'

  return (
    <>
      <ScreenreaderOnly>{label}</ScreenreaderOnly>
      <Icon
        path={path}
        ref={ref}
        size='sm'
        {...props}
        className={className}
        css={statArrowStyles(theme)}
      />
    </>
  )
}) as StatArrowComponent

if (process.env.NODE_ENV !== 'production') {
  StatArrow.displayName = ELEMENT_NAME
}
