import { FC, forwardRef, useMemo } from 'react'
import { UptimeBarData, UptimeProps } from 'src/components/Uptime/types'
import { uptimeLabelStyles, uptimeStyles } from 'src/components/Uptime/Uptime.styles'
import { useSizeAsPx } from 'src/hooks/useFontSize'
import { useRawTheme, useTheme } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'
import { capitalize } from 'src/utils/stringUtils'

const ELEMENT_NAME = 'Uptime'
const VIEW_WIDTH = 1000

export const Uptime = forwardRef<HTMLDivElement, UptimeProps>(({
  className: _className,
  size = 'md',
  label,
  bars = [],
  startDate,
  endDate,
  rounded = false,
  showUptimePercent = false,
  formatUptimePercent = (pct) => (pct * 100).toFixed(2) + '%',
}, ref) => {
  const theme = useTheme()
  const rawTheme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, {
    size,
  }, _className)
  const labelClassName = buildClassName(`${ELEMENT_NAME}Label`)

  const spacing = useSizeAsPx(undefined, rawTheme.spacing.xxs)
  const height = useSizeAsPx(undefined, rawTheme.size[size])

  const barWidth = useMemo(() => {
    return Math.max(1, (VIEW_WIDTH - (spacing * (bars.length - 1))) / bars.length)
  }, [spacing, bars.length])

  const radius = rounded ? barWidth / 2 : 0

  const uptimePercent = useMemo(() => {
    return showUptimePercent ? (bars.filter(bar => bar.up).length / bars.length) : 0
  }, [bars, showUptimePercent])

  // TODO: Start sampling every n bars if there are too many to display them all

  return (
    <div ref={ref} css={uptimeStyles(theme)} className={className}>
      {label && <span css={uptimeLabelStyles(theme)} className={labelClassName}>{label}</span>}
      <svg
        height={height}
        viewBox={`0 0 ${VIEW_WIDTH} ${height}`}
        preserveAspectRatio='none'
      >
        {bars.map((bar, i) => (
          <UptimeBar
            key={i}
            height={height}
            width={barWidth}
            radius={radius}
            x={(barWidth + spacing) * i}
            {...bar}
          />
        ))}
      </svg>
      {showUptimePercent && <span>{formatUptimePercent(uptimePercent)}</span>}
    </div>
  )
})

const UptimeBar: FC<UptimeBarData & {
  height: number;
  width: number;
  radius: number;
  x: number;
}> = ({
  height,
  width,
  color: _color = '',
  radius,
  x,
  tooltip,
}) => {
  const rawTheme = useRawTheme()
  const color = useMemo(() => {
    if (THEME_COLORS.includes(_color)) {
      const capitalized = capitalize(_color)
      const key = capitalized === 'Primary' || capitalized === 'Secondary'
        ? (`accent${capitalized}` as 'accentPrimary' | 'accentSecondary')
        : (`status${capitalized}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
      return rawTheme.colors[key].value
    }
    return _color || rawTheme.colors.textDisabled
  }, [_color, rawTheme.colors])

  return (
    <rect
      height={height}
      width={width}
      x={x}
      y={0}
      fill={color}
      rx={radius}
    />
  )
}

const THEME_COLORS = ['primary', 'secondary', 'info', 'warning', 'error', 'success']

if (process.env.NODE_ENV !== 'production') {
  Uptime.displayName = ELEMENT_NAME
}
