import { forwardRef, useCallback, useState } from 'react'
import { buttonGlowStyles, buttonStyles } from 'src/components/Button/Button.styles'
import { ButtonComponent, ButtonProps } from 'src/components/Button/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Button'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  size = 'md',
  variant = 'default',
  color = 'default',
  fullWidth,
  onMouseDown,
  onMouseUp,
  className: _className,
  ...props
}, ref) => {
  const theme = useTheme()
  const [mouseUpGlow, setMouseUpGlow] = useState(false)

  const className = buildClassName(ELEMENT_NAME, {
    size: size.toUpperCase(),
    variant,
    fullWidth,
    color,
  }, _className)

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onMouseDown?.(e)
    setMouseUpGlow(false)
  }, [onMouseDown])

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onMouseUp?.(e)
    setMouseUpGlow(true)
  }, [onMouseUp])

  return (
    <button
      ref={ref}
      {...props}
      className={className}
      css={buttonStyles(theme)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {mouseUpGlow && <div css={buttonGlowStyles(theme)} />}
      <span>{children}</span>
    </button>
  )
}) as ButtonComponent

Button.displayName = ELEMENT_NAME
