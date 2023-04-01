import { FC, forwardRef, useMemo } from 'react'
import { Tooltip } from 'src/components/Tooltip'
import { UptimeBarData, UptimeComponent, UptimeProps } from 'src/components/Uptime/types'
import { uptimeFooterStyles, uptimeLabelStyles, uptimeStyles } from 'src/components/Uptime/Uptime.styles'
import { useSizeAsPx } from 'src/hooks/useFontSize'
import { useRawTheme, useTheme, useThemeColor } from 'src/hooks/useTheme'
import { buildClassName } from 'src/utils/buildClassName'

const ELEMENT_NAME = 'Uptime'
const VIEW_WIDTH = 1000

export const Uptime = forwardRef<HTMLDivElement, UptimeProps>(({
  className: _className,
  size = 'md',
  label,
  bars = [],
  startDate,
  endDate,
  square = false,
  showUptimePercent = false,
  formatUptimePercent = (pct) => (pct * 100).toFixed(2) + '% uptime',
}, ref) => {
  const theme = useTheme()
  const rawTheme = useRawTheme()
  const className = buildClassName(ELEMENT_NAME, {
    size,
    square,
    showUptimePercent,
    withStartDate: Boolean(startDate),
    withEndDate: Boolean(endDate),
  }, _className)
  const labelClassName = buildClassName(`${ELEMENT_NAME}Label`)

  const spacing = useSizeAsPx(undefined, rawTheme.spacing.xxs)
  const height = useSizeAsPx(undefined, rawTheme.size[size])

  const barWidth = useMemo(() => {
    return Math.max(1, (VIEW_WIDTH - (spacing * (bars.length - 1))) / bars.length)
  }, [spacing, bars.length])

  const radius = square ? 0 : barWidth / 2

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
      <div css={uptimeFooterStyles(theme)}>
        <span data-start-date>{startDate}</span>
        {showUptimePercent && <span>{formatUptimePercent(uptimePercent)}</span>}
        <span data-end-date>{endDate}</span>
      </div>
    </div>
  )
}) as UptimeComponent

const UptimeBar: FC<UptimeBarData & {
  height: number;
  width: number;
  radius: number;
  x: number;
}> = ({
  height,
  width,
  color = '',
  radius,
  x,
  tooltip,
}) => {
  const { value: backgroundColor } = useThemeColor(color || 'default')

  const rect = (
    <rect
      height={height}
      width={width}
      x={x}
      y={0}
      fill={backgroundColor}
      rx={radius}
      tabIndex={-1}
    />
  )

  if (tooltip) {
    return (
      <Tooltip title={tooltip} arrow>
        {rect}
      </Tooltip>
    )
  }

  return rect
}

if (process.env.NODE_ENV !== 'production') {
  Uptime.displayName = ELEMENT_NAME
}
