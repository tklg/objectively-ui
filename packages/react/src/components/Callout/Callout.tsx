import { forwardRef } from 'react'
import { calloutStyles } from 'src/components/Callout/Callout.styles'
import { CalloutProps, CalloutComponent } from 'src/components/Callout/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Callout'

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(({
  color = 'default',
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    color,
  }, _className)

  return (
    <div
      ref={ref}
      {...props}
      className={className}
      css={calloutStyles(theme)}
    >
      {children}
    </div>
  )
}) as CalloutComponent

if (process.env.NODE_ENV !== 'production') {
  Callout.displayName = ELEMENT_NAME
}
