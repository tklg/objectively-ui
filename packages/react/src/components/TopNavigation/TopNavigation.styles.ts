import { css } from '@emotion/react'
import type { ColorTheme } from 'src/types/ColorTheme'

export const topNavigationStyles = (theme: ColorTheme) => css({
  borderBottom: `${theme.lines.sm} solid ${theme.colors.border}`,
  padding: `${theme.spacing.xs} ${theme.spacing.gutter}`,
})
