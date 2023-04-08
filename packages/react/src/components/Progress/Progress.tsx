import { forwardRef } from 'react'
import { progressStyles } from 'src/components/Progress/Progress.styles'
import { ProgressComponent, ProgressProps } from 'src/components/Progress/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Progress'

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(({
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
      css={progressStyles(theme)}
    >

    </div>
  )
}) as ProgressComponent

if (process.env.NODE_ENV !== 'production') {
  Progress.displayName = ELEMENT_NAME
}
