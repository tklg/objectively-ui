import { forwardRef } from 'react'
import { lozengeStyles } from 'src/components/Lozenge/Lozenge.styles'
import { LozengeComponent, LozengeProps } from 'src/components/Lozenge/types'
import { useRawTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Lozenge'

export const Lozenge = forwardRef<HTMLSpanElement, LozengeProps>(({
  color = 'default',
  size = 'md',
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, {
    color,
    size,
  }, _className)
  return (
    <span ref={ref} {...props} className={className} css={lozengeStyles(theme)}>
      {children}
    </span>
  )
}) as LozengeComponent

if (process.env.NODE_ENV !== 'production') {
  Lozenge.displayName = ELEMENT_NAME
}
