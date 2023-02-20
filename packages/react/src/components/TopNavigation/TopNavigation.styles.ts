import { css } from '@emotion/react'
import type { ColorTheme } from 'src/types/ColorTheme'

export const topNavigationStyles = (theme: ColorTheme) => css({
  borderBottom: `${theme.lines.sm} solid ${theme.colors.accentPrimary.value}`,
})

export const topNavigationWidthLimitStyles = (theme: ColorTheme, maxWidth: string) => css({
  padding: `${theme.spacing.xs} ${theme.spacing.gutter}`,
  width: maxWidth,
  maxWidth: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
})
