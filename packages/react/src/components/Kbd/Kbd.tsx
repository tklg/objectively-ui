import { forwardRef } from 'react'
import { kbdStyles } from 'src/components/Kbd/Kbd.styles'
import { KbdProps, KbdComponent } from 'src/components/Kbd/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Kbd'

export const Kbd = forwardRef<HTMLElement, KbdProps>(({
  size = 'md',
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    size,
  }, _className)

  return (
    <kbd
      ref={ref}
      {...props}
      className={className}
      css={kbdStyles(theme)}
    >
      {children}
    </kbd>
  )
}) as KbdComponent

if (process.env.NODE_ENV !== 'production') {
  Kbd.displayName = ELEMENT_NAME
}
