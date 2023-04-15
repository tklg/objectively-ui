import { ChangeEvent, forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react'
import { switchHandleStyles, switchLabelStyles, switchStyles, switchTrackStyles } from 'src/components/Switch/Switch.styles'
import { SwitchComponent, SwitchProps } from 'src/components/Switch/types'
import { useTheme } from 'src/hooks'
import { useKeyboardEvents } from 'src/hooks/useKeyboardEvents'
import { buildClassName } from 'src/utils/buildClassName'
import { KEYS } from 'src/utils/keys'
import { mergeRefs } from 'src/utils/mergeRefs'

const ELEMENT_NAME = 'Switch'

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  inputRef: externalInputRef,
  label,
  checked,
  defaultChecked = false,
  onChange,
  className: _className,
  id: _id,
  readOnly,
  disabled,
  size = 'md',
  color = 'primary',
  inputProps = {},
  ...props
}, ref) => {
  const fallbackId = useId()
  const theme = useTheme()
  const inputRef = useRef<HTMLInputElement>()
  const id = _id || fallbackId
  const [internalChecked, setInternalChecked] = useState(checked ?? defaultChecked)
  const internalCheckedRef = useRef(checked ?? defaultChecked)
  const className = buildClassName(ELEMENT_NAME, {
    readOnly,
    disabled,
    size,
    color,
  }, _className)
  const trackClassName = buildClassName(`${ELEMENT_NAME}Track`)
  const handleClassName = buildClassName(`${ELEMENT_NAME}Handle`)
  const labelClassName = buildClassName(`${ELEMENT_NAME}Label`)

  useEffect(() => {
    if (checked !== undefined && checked !== internalCheckedRef.current) {
      setInternalChecked(checked)
    }
  }, [checked])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newState = e.target.checked
    internalCheckedRef.current = newState
    setInternalChecked(newState)
    onChange?.(e, newState)
  }, [onChange])

  const handleKeydown = useCallback(() => {
    inputRef.current?.click()
  }, [])

  const keyboardProps = useKeyboardEvents([KEYS.Space, KEYS.Enter], handleKeydown, 'keydown')

  return (
    <div
      {...props}
      className={className}
      css={switchStyles(theme, size)}
      ref={ref}
    >
      <input
        ref={mergeRefs(inputRef, externalInputRef)}
        {...inputProps}
        checked={internalChecked}
        onChange={handleChange}
        readOnly={readOnly}
        disabled={disabled}
        type='checkbox'
        hidden
        tabIndex={-1}
        aria-hidden
        id={id}
      />
      <label
        className={trackClassName}
        css={switchTrackStyles(theme, size)}
        role='switch'
        aria-checked={internalChecked ?? 'false'}
        tabIndex={disabled ? -1 : 0}
        htmlFor={id}
        {...keyboardProps}
      >
        <div className={handleClassName} css={switchHandleStyles(theme, size)} />
      </label>
      {label && (
        <label htmlFor={id} className={labelClassName} css={switchLabelStyles(theme, size)}>{label}</label>
      )}
    </div>
  )
}) as SwitchComponent

if (process.env.NODE_ENV !== 'production') {
  Switch.displayName = ELEMENT_NAME
}
