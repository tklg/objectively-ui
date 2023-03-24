import { forwardRef } from 'react'
import { statDetailStyles } from 'src/components/Stat/Stat.styles'
import { StatDetailComponent, StatDetailProps } from 'src/components/Stat/types'
import { useRawTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'StatDetail'

export const StatDetail = forwardRef<HTMLElement, StatDetailProps>(({
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)
  return (
    <dd ref={ref} {...props} className={className} css={statDetailStyles(theme)}>
      {children}
    </dd>
  )
}) as StatDetailComponent

if (process.env.NODE_ENV !== 'production') {
  StatDetail.displayName = ELEMENT_NAME
}
