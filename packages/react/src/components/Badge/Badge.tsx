import { forwardRef, useMemo, useState } from 'react'
import { badgeContainerStyles, badgeStyles } from 'src/components/Badge/Badge.styles'
import { BadgeComponent, BadgeProps } from 'src/components/Badge/types'
import { useTheme } from 'src/hooks'
import { useThemeColor } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'
import { mergeRefs } from 'src/utils/mergeRefs'

const ELEMENT_NAME = 'Badge'

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(({
  children,
  className: _className,
  fit = 'circle',
  placement = 'top-right',
  color = 'info',
  dot = false,
  showZero = false,
  value,
  ...props
}, ref) => {
  const theme = useTheme()
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const containerClassName = buildClassName(ELEMENT_NAME + 'Container')
  const className = buildClassName(ELEMENT_NAME, {
    fit,
    placement,
    color,
    dot,
    showZero,
  }, _className)

  const { value: backgroundColor, contrastText: textColor } = useThemeColor(color)

  const size = dot ? 10 : 20

  const position = useMemo(() => {
    if (fit === 'square') {
      const offset = size / 2
      switch (placement) {
      case 'top-right': return { top: -offset, right: -offset }
      case 'top-left': return { top: -offset, left: -offset }
      case 'bottom-left': return { bottom: -offset, left: -offset }
      case 'bottom-right': return { bottom: -offset, right: -offset }
      }
    } else {
      const rect = containerRef?.getBoundingClientRect()
      const radius = (Math.min(rect?.height ?? 0, rect?.width ?? 0) / 2)
      const rads = Math.PI / 4
      const offset = radius - (radius * Math.sin(rads)) - ((size / 2) * Math.sin(rads)) - 1
      switch (placement) {
      case 'top-right': return { top: offset, right: offset }
      case 'top-left': return { top: offset, left: offset }
      case 'bottom-left': return { bottom: offset, left: offset }
      case 'bottom-right': return { bottom: offset, right: offset }
      }
    }
  }, [containerRef, fit, placement, size])

  const show = showZero || (value !== 0 && value !== '0')

  return (
    <div {...props} ref={mergeRefs(ref, setContainerRef)} className={containerClassName} css={badgeContainerStyles}>
      {children}
      {show && (
        <span className={className} css={badgeStyles(theme, size, backgroundColor, textColor)} style={position}>
          {dot ? null : value}
        </span>
      )}
    </div>
  )
}) as BadgeComponent

if (process.env.NODE_ENV !== 'production') {
  Badge.displayName = ELEMENT_NAME
}
