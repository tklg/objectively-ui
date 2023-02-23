import { forwardRef, useCallback, useState } from 'react'
import { buttonBaseGlowStyles, buttonBaseStyles } from 'src/components/Button/ButtonBase.styles'
import { ButtonBaseComponent, ButtonBaseProps } from 'src/components/Button/ButtonBase.types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'ButtonBase'

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(({
  children,
  size = 'md',
  color = 'default',
  variant,
  onMouseDown,
  onMouseUp,
  disabled,
  className: _className,
  ...props
}, ref) => {
  const theme = useTheme()
  const [mouseUpGlow, setMouseUpGlow] = useState(false)

  const className = buildClassName(ELEMENT_NAME, {
    size,
    color,
    variant,
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
      disabled={disabled}
      className={className}
      css={buttonBaseStyles(theme)}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {!disabled && mouseUpGlow && <div css={buttonBaseGlowStyles(theme)} />}
      {children}
    </button>
  )
}) as ButtonBaseComponent

ButtonBase.displayName = ELEMENT_NAME

if (process.env.NODE_ENV !== 'production') {
  ButtonBase.displayName = ELEMENT_NAME
}
