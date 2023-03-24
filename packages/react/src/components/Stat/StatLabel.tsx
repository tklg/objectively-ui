import { forwardRef } from 'react'
import { statLabelStyles } from 'src/components/Stat/Stat.styles'
import { StatLabelComponent, StatLabelProps } from 'src/components/Stat/types'
import { useRawTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'StatLabel'

export const StatLabel = forwardRef<HTMLElement, StatLabelProps>(({
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)
  return (
    <dt ref={ref} {...props} className={className} css={statLabelStyles(theme)}>
      {children}
    </dt>
  )
}) as StatLabelComponent

if (process.env.NODE_ENV !== 'production') {
  StatLabel.displayName = ELEMENT_NAME
}
