import { forwardRef } from 'react'
import { screenreaderOnlyStyles } from 'src/components/ScreenreaderOnly/ScreenreaderOnly.styles'
import { ScreenreaderOnlyComponent, ScreenreaderOnlyProps } from 'src/components/ScreenreaderOnly/types'

const ELEMENT_NAME = 'ScreenreaderOnly'

export const ScreenreaderOnly = forwardRef<HTMLSpanElement, ScreenreaderOnlyProps>(({
  children,
}, ref) => {
  return (
    <span ref={ref} css={screenreaderOnlyStyles}>
      {children}
    </span>
  )
}) as ScreenreaderOnlyComponent

if (process.env.NODE_ENV !== 'production') {
  ScreenreaderOnly.displayName = ELEMENT_NAME
}
