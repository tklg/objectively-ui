import { forwardRef } from 'react'
import { alertContentContainerStyles, alertStyles } from 'src/components/Alert/Alert.styles'
import { AlertComponent, AlertProps } from 'src/components/Alert/types'
import { Icon } from 'src/components/Icon'
import { useRawTheme, useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'
import { STATUS_ICON_PATHS } from 'src/utils/constants'

const ELEMENT_NAME = 'Alert'

const iconClassName = buildClassName(`${ELEMENT_NAME}Icon`)
const titleClassName = buildClassName(`${ELEMENT_NAME}Title`)
const contentClassName = buildClassName(`${ELEMENT_NAME}Content`)
const actionClassName = buildClassName(`${ELEMENT_NAME}Action`)

export const Alert = forwardRef<HTMLDivElement, AlertProps>(({
  severity = 'info',
  title,
  action,
  className: _className,
  children,
  ...props
}, ref) => {
  const theme = useTheme()
  const rawTheme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, {
    severity,
    withTitle: Boolean(title),
    withAction: Boolean(action),
  }, _className)
  const iconPath = STATUS_ICON_PATHS[severity]

  return (
    <div
      ref={ref}
      {...props}
      className={className}
      css={alertStyles(theme, rawTheme)}
    >
      <div className={iconClassName}>
        <Icon path={iconPath} color={severity} size='sm' />
      </div>
      <div css={alertContentContainerStyles(theme)}>
        {title && <strong className={titleClassName}>{title}</strong>}
        <div className={contentClassName}>{children}</div>
      </div>
      {action && (
        <div className={actionClassName}>
          {action}
        </div>
      )}
    </div>
  )
}) as AlertComponent

if (process.env.NODE_ENV !== 'production') {
  Alert.displayName = ELEMENT_NAME
}
