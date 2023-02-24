import { Children, cloneElement, forwardRef, ReactElement } from 'react'
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
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    size,
    direction,
  }, _className)

  return (
    <div
      ref={ref}
      {...props}
      className={className}
      css={spaceBetweenStyles(theme, size)}
      data-spacebetween-direction={direction}
    >
      {Children.toArray(children).map((elem, i) => (
        typeof elem === 'object'
          ? cloneElement(elem as ReactElement, {
            key: i,
            'data-spacebetween-first': i === 0 || undefined,
          })
          : <span key={i} data-spacebetween-first={i === 0 || undefined}>{elem}</span>
      ))}
    </div>
  )
}) as SpaceBetweenComponent

if (process.env.NODE_ENV !== 'production') {
  SpaceBetween.displayName = ELEMENT_NAME
}
