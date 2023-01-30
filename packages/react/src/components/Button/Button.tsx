import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, ReactNode } from 'react'
import { CommonSize } from 'src/types/sizes'
import { buildClassName } from 'src/utils/buildClassName'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  size?: CommonSize;
  iconStart?: ReactNode;
}

const ELEMENT_NAME = 'Button'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  size,
  ...props
}, ref) => {
  const className = buildClassName(ELEMENT_NAME, {
    size,
  })

  return (
    <button
      ref={ref}
      {...props}
      className={className}
    >

    </button>
  )
})

Button.displayName = ELEMENT_NAME
