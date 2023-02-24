import { forwardRef } from 'react'
import { inputContainerStyles, inputInputStyles } from 'src/components/Input/Input.styles'
import { InputProps } from 'src/components/Input/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'


const ELEMENT_NAME = 'Input'

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  iconStart,
  iconEnd,
  size = 'md',
  fullWidth,
  value,
  disabled,
  className: _className,
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    iconStart: Boolean(iconStart),
    iconEnd: Boolean(iconEnd),
    size,
    fullWidth,
    disabled,
    hasValue: value !== undefined && value !== null,
  }, _className)

  return (
    <div
      ref={ref}
      className={className}
      css={inputContainerStyles(theme)}
    >
      <input
        css={inputInputStyles(theme)}
        aria-label={label}
        value={value}
        disabled={disabled}
        {...props}
      />
    </div>
  )
})

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = ELEMENT_NAME
}
