import { forwardRef } from 'react'
import { progressBarStyles, progressContainerStyles, progressStyles } from 'src/components/Progress/Progress.styles'
import { ProgressComponent, ProgressProps } from 'src/components/Progress/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Progress'

const containerClassName = buildClassName(`${ELEMENT_NAME}Container`)
const barClassName = buildClassName(`${ELEMENT_NAME}Bar`)
const labelClassName = buildClassName(`${ELEMENT_NAME}Label`)

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(({
  className: _className,
  color = 'primary',
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
    withLabel,
  }, _className)

  const displayValue = Number(value?.toFixed(0))
  const determinateProgress = indeterminate ? undefined : { transform: `translateX(-${100 - value}%)` }

  return (
    <div
      ref={ref}
      className={containerClassName}
      css={progressContainerStyles(theme)}
    >
      <div
        {...props}
        className={className}
        css={progressStyles(theme)}
        role='progressbar'
        aria-valuemin={indeterminate ? undefined : 0}
        aria-valuemax={indeterminate ? undefined : 100}
        aria-valuenow={indeterminate ? undefined : displayValue}
      >
        <div
          className={barClassName}
          style={determinateProgress}
          css={progressBarStyles(theme)}
        />
      </div>
      {!indeterminate && withLabel && (
        <p className={labelClassName}>{displayValue}%</p>
      )}
    </div>
  )
}) as ProgressComponent

if (process.env.NODE_ENV !== 'production') {
  Progress.displayName = ELEMENT_NAME
}
