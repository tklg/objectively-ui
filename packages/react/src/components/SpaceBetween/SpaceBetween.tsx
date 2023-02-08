import { Children, cloneElement, forwardRef } from 'react'
import { spaceBetweenStyles } from 'src/components/SpaceBetween/SpaceBetween.styles'
import { SpaceBetweenComponent, SpaceBetweenProps } from 'src/components/SpaceBetween/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'SpaceBetween'

export const SpaceBetween = forwardRef<HTMLDivElement, SpaceBetweenProps>(({
  children,
  direction = 'horizontal',
  size = 'sm',
  className: _className,
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    size,
    direction,
  }, _className)

  return (
    <div
      ref={ref}
      className={className}
      css={spaceBetweenStyles(theme, size)}
      data-spacebetween-direction={direction}
    >
      {Children.map(children, (elem, i) => (
        cloneElement(elem, {
          'data-spacebetween-first': i === 0,
        })
      ))}
    </div>
  )
}) as SpaceBetweenComponent

if (process.env.NODE_ENV !== 'production') {
  SpaceBetween.displayName = ELEMENT_NAME
}
