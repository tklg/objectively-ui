import { forwardRef, useRef } from 'react'
import { iconStyles } from 'src/components/Icon/Icon.styles'
import { IconProps } from 'src/components/Icon/types'
import { useTheme } from 'src/hooks'
import { useSizeAsPx } from 'src/hooks/useFontSize'
import { useRawTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'
import { mergeRefs } from 'src/utils/mergeRefs'

const ELEMENT_NAME = 'Icon'
const scaleFactor = 0.6

export const Icon = forwardRef<SVGSVGElement, IconProps>(({
  title,
  path,
  className: _className,
  size = 'md',
  color = 'default',
  viewBoxSize = 24,
}, externalRef) => {
  const theme = useTheme()
  const rawTheme = useRawTheme()
  const ref = useRef<SVGSVGElement>()
  const pxSize = useSizeAsPx(ref.current, typeof size === 'number' ? size : rawTheme.size[size])
  const className = buildClassName(ELEMENT_NAME, {
    size: typeof size === 'number' ? 'custom' : size,
    color,
  }, _className)

  const effectiveSize = typeof size === 'number'
    ? size
    : scaleFactor * pxSize

  return (
    <svg
      ref={mergeRefs(ref, externalRef)}
      role={title ? 'img' : 'presentation'}
      className={className}
      css={iconStyles(theme, effectiveSize)}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      xmlns='http://www.w3.org/2000/svg'
    >
      {title && <title>{title}</title>}
      <path d={path} style={{ fill: 'currentcolor' }} />
    </svg>
  )
})

if (process.env.NODE_ENV !== 'production') {
  Icon.displayName = ELEMENT_NAME
}
