import { forwardRef } from 'react'
import { circularProgressBarCircleStyles, circularProgressBarStyles, circularProgressStyles } from 'src/components/CircularProgress/CircularProgress.styles'
import { CircularProgressComponent, CircularProgressProps } from 'src/components/CircularProgress/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'CircularProgress'

const barClassName = buildClassName(`${ELEMENT_NAME}Bar`)
const labelClassName = buildClassName(`${ELEMENT_NAME}Label`)

export const CircularProgress = forwardRef<HTMLDivElement, CircularProgressProps>(({
  className: _className,
  color = 'primary',
  size = 'md',
  indeterminate = false,
  withLabel,
  value = 0,
  ...props
}, ref) => {
  if (process.env.NODE_ENV !== 'production') {
    if (value < 0 || value > 100) {
      console.warn(`[${ELEMENT_NAME}]`, 'Value must be between 0 - 100')
    }
  }

  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    indeterminate,
    color,
    size,
    withLabel,
  }, _className)

  const displayValue = Number(value?.toFixed(0))
  const determinateProgress = indeterminate ? undefined : { strokeDasharray: `${value * (2 * Math.PI * 20) / 100}, ${(2 * Math.PI * 20)}` }

  return (
    <div
      {...props}
      ref={ref}
      className={className}
      css={circularProgressStyles(theme)}
      role='progressbar'
      aria-valuemin={indeterminate ? undefined : 0}
      aria-valuemax={indeterminate ? undefined : 100}
      aria-valuenow={indeterminate ? undefined : displayValue}
    >
      <svg
        className={barClassName}
        css={circularProgressBarStyles(theme)}
        viewBox='0 0 50 50'
      >
        <circle
          cx='25'
          cy='25'
          r='20'
          fill='none'
          style={determinateProgress}
          css={circularProgressBarCircleStyles(theme)}
        />
      </svg>
      {!indeterminate && withLabel && (
        <p className={labelClassName}>{displayValue}%</p>
      )}
    </div>
  )
}) as CircularProgressComponent

if (process.env.NODE_ENV !== 'production') {
  CircularProgress.displayName = ELEMENT_NAME
}
