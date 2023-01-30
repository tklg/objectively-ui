import { InputHTMLAttributes, DetailedHTMLProps, forwardRef, ReactNode } from 'react'
import { buildClassName } from 'src/utils/buildClassName'

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  iconStart?: ReactNode;
}

const ELEMENT_NAME = 'Input'

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  ...props
}, ref) => {
  const className = buildClassName(ELEMENT_NAME, {})

  return (
    <input
      ref={ref}
      {...props}
      className={className}
    >

    </input>
  )
})

Input.displayName = ELEMENT_NAME
