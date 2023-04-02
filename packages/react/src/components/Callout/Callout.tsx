import { ReactElement, cloneElement, forwardRef, isValidElement, useMemo } from 'react'
import { calloutStyles } from 'src/components/Callout/Callout.styles'
import { CalloutProps, CalloutComponent } from 'src/components/Callout/types'
import { Icon } from 'src/components/Icon'
import { IconProps } from 'src/components/Icon/types'
import { useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'
import { isStatusColor } from 'src/utils/commonUtils'
import { STATUS_ICON_PATHS } from 'src/utils/constants'

const ELEMENT_NAME = 'Callout'

const iconClassName = buildClassName(`${ELEMENT_NAME}Icon`)
const contentClassName = buildClassName(`${ELEMENT_NAME}Content`)

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(({
  color = 'primary',
  icon,
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useTheme()
  const className = buildClassName(ELEMENT_NAME, {
    color,
    withIcon: Boolean(icon),
  }, _className)

  const iconComponent = useMemo(() => {
    if (typeof icon === 'boolean' && isStatusColor(color)) {
      const iconPath = STATUS_ICON_PATHS[color]
      return <Icon path={iconPath} color={color} size='sm' />
    } else if (isValidElement(icon)) {
      return cloneElement(icon as ReactElement<IconProps>, {
        size: 'sm',
      })
    }
    return icon
  }, [icon, color])

  return (
    <div
      ref={ref}
      {...props}
      className={className}
      css={calloutStyles(theme)}
    >
      {Boolean(icon) && <div className={iconClassName}>{iconComponent}</div>}
      <div className={contentClassName}>{children}</div>
    </div>
  )
}) as CalloutComponent

if (process.env.NODE_ENV !== 'production') {
  Callout.displayName = ELEMENT_NAME
}
