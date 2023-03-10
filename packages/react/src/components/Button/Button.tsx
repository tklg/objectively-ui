import { forwardRef } from 'react'
import { buttonStyles } from 'src/components/Button/Button.styles'
import { ButtonComponent, ButtonProps } from 'src/components/Button/Button.types'
import { ButtonBase } from 'src/components/Button/ButtonBase'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Button'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  size = 'md',
  variant = 'default',
  color = 'default',
  fullWidth,
  iconStart,
  iconEnd,
  className: _className,
  ...props
}, ref) => {
  const theme = useTheme()

  const className = buildClassName(ELEMENT_NAME, {
    size,
    variant,
    fullWidth,
    color,
    iconStart: Boolean(iconStart),
    iconEnd: Boolean(iconEnd),
  }, _className)

  return (
    <ButtonBase
      ref={ref}
      {...props}
      className={className}
      css={buttonStyles(theme)}
      size={size}
      color={color}
      variant={variant}
    >
      {iconStart}
      <span>{children}</span>
      {iconEnd}
    </ButtonBase>
  )
}) as ButtonComponent

Button.displayName = ELEMENT_NAME

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = ELEMENT_NAME
}
