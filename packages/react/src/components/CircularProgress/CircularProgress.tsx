import { forwardRef } from 'react'
import { circularprogressStyles } from 'src/components/CircularProgress/CircularProgress.styles'
import { CircularProgressComponent, CircularProgressProps } from 'src/components/CircularProgress/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'CircularProgress'

export const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(({
  className: _className,
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, null, _className)

  return (
    <div
      ref={ref}
      {...props}
      className={className}
      css={circularprogressStyles(theme)}
    >

    </div>
  )
}) as CircularProgressComponent

if (process.env.NODE_ENV !== 'production') {
  CircularProgress.displayName = ELEMENT_NAME
}
