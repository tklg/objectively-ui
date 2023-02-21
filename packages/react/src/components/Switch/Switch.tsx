import { forwardRef, useId } from 'react'
import { switchHandleStyles, switchLabelStyles, switchStyles, switchTrackStyles } from 'src/components/Switch/Switch.styles'
import { SwitchProps } from 'src/components/Switch/types'
import { useTheme } from 'src/hooks'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Switch'

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  inputRef,
  label,
  checked,
  onChange,
  className: _className,
  id: _id,
  readOnly,
  disabled,
  size = 'md',
  color = 'primary',
  ...props
}, ref) => {
  const fallbackId = useId()
  const theme = useTheme()
  const id = _id || fallbackId
  const className = buildClassName(ELEMENT_NAME, {
    readOnly,
    disabled,
    size,
    color,
  }, _className)
  const trackClassName = buildClassName(`${ELEMENT_NAME}Track`)
  const handleClassName = buildClassName(`${ELEMENT_NAME}Handle`)
  const labelClassName = buildClassName(`${ELEMENT_NAME}Label`)

  return (
    <div
      className={className}
      css={switchStyles(theme, size)}
      ref={ref}
    >
      <input
        ref={inputRef}
        {...props}
        checked={checked}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        type='checkbox'
        hidden
        aria-hidden
        id={id}
      />
      <label
        className={trackClassName}
        css={switchTrackStyles(theme, size)}
        role='switch'
        aria-checked={checked ?? 'false'}
        tabIndex={0}
        htmlFor={id}
      >
        <div className={handleClassName} css={switchHandleStyles(theme, size)} />
      </label>
      {label && (
        <label htmlFor={id} className={labelClassName} css={switchLabelStyles(theme, size)}>{label}</label>
      )}
    </div>
  )
})

if (process.env.NODE_ENV !== 'production') {
  Switch.displayName = ELEMENT_NAME
}
