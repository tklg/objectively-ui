import { ReactElement, cloneElement, forwardRef, isValidElement, useMemo } from 'react'
import { calloutStyles } from 'src/components/Callout/Callout.styles'
import { CalloutProps, CalloutComponent } from 'src/components/Callout/types'
import { Icon } from 'src/components/Icon'
import { IconProps } from 'src/components/Icon/types'
import { useRawTheme, useTheme } from 'src/hooks/useTheme'
import { StatusColor } from 'src/types/props'
import { buildClassName } from 'src/utils/buildClassName'
import { isStatusColor } from 'src/utils/commonUtils'

const ELEMENT_NAME = 'Callout'
const ICON_PATHS: Record<StatusColor, string> = {
  info: 'M11 7V9H13V7H11M14 17V15H13V11H10V13H11V15H10V17H14M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z',
  warning: 'M12,2L1,21H23M12,6L19.53,19H4.47M11,10V14H13V10M11,16V18H13V16',
  error: 'M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z',
  success: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
}

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(({
  color = 'primary',
  icon,
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useTheme()
  const rawTheme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, {
    color,
    withIcon: Boolean(icon),
  }, _className)
  const iconClassName = buildClassName(`${ELEMENT_NAME}Icon`)
  const contentClassName = buildClassName(`${ELEMENT_NAME}Content`)

  const iconComponent = useMemo(() => {
    if (typeof icon === 'boolean' && isStatusColor(color)) {
      const iconPath = ICON_PATHS[color]
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
      css={calloutStyles(theme, rawTheme)}
    >
      {Boolean(icon) && <div className={iconClassName}>{iconComponent}</div>}
      <div className={contentClassName}>{children}</div>
    </div>
  )
}) as CalloutComponent

if (process.env.NODE_ENV !== 'production') {
  Callout.displayName = ELEMENT_NAME
}
