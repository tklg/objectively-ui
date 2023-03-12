import { cloneElement, forwardRef, useRef } from 'react'
import { badgeContainerStyles, badgeStyles } from 'src/components/Badge/Badge.styles'
import { BadgeProps } from 'src/components/Badge/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Badge'

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(({
  children,
  className: _className,
  fit = 'circle',
  placement = 'top-right',
  value,
}, ref) => {
  const theme = useTheme()
  const elemRef = useRef()
  const containerClassName = buildClassName(ELEMENT_NAME + 'Container')
  const className = buildClassName(ELEMENT_NAME, {
    fit,
    placement,
    withValue: value !== undefined,
  }, _className)

  const child = cloneElement(children, {
    ref: elemRef,
  })

  return (
    <div ref={ref} className={containerClassName} css={badgeContainerStyles(theme)}>
      {child}
      <span className={className} css={badgeStyles(theme)}>
        {value}
      </span>
    </div>
  )
})

if (process.env.NODE_ENV !== 'production') {
  Badge.displayName = ELEMENT_NAME
}
