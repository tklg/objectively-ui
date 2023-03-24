import { forwardRef } from 'react'
import { statNumberStyles } from 'src/components/Stat/Stat.styles'
import { StatNumberComponent, StatNumberProps } from 'src/components/Stat/types'
import { useRawTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'StatNumber'

export const StatNumber = forwardRef<HTMLElement, StatNumberProps>(({
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)
  return (
    <dd ref={ref} {...props} className={className} css={statNumberStyles(theme)}>
      {children}
    </dd>
  )
}) as StatNumberComponent

if (process.env.NODE_ENV !== 'production') {
  StatNumber.displayName = ELEMENT_NAME
}
