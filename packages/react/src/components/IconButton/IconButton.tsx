import { forwardRef } from 'react'
import { ButtonBase } from 'src/components/Button/ButtonBase'
import { iconButtonStyles } from 'src/components/IconButton/IconButton.styles'
import { IconButtonComponent, IconButtonProps } from 'src/components/IconButton/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'IconButton'

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  size = 'md',
  variant = 'default',
  color = 'default',
  icon,
  className: _className,
  ...props
}, ref) => {
  const theme = useTheme()

  const className = buildClassName(ELEMENT_NAME, {
    size,
    variant,
    color,
  }, _className)

  return (
    <ButtonBase
      ref={ref}
      {...props}
      className={className}
      css={iconButtonStyles(theme, size)}
      size={size}
      color={color}
      variant={variant}
    >
      {icon}
    </ButtonBase>
  )
}) as IconButtonComponent

IconButton.displayName = ELEMENT_NAME

if (process.env.NODE_ENV !== 'production') {
  IconButton.displayName = ELEMENT_NAME
}
