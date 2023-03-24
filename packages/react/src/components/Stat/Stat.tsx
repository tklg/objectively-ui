import { forwardRef } from 'react'
import { statStyles } from 'src/components/Stat/Stat.styles'
import { StatComponent, StatProps } from 'src/components/Stat/types'
import { useRawTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Stat'

export const Stat = forwardRef<HTMLDListElement, StatProps>(({
  size = 'md',
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, {
    size,
  }, _className)
  return (
    <dl ref={ref} {...props} className={className} css={statStyles(theme)}>
      {children}
    </dl>
  )
}) as StatComponent

if (process.env.NODE_ENV !== 'production') {
  Stat.displayName = ELEMENT_NAME
}
