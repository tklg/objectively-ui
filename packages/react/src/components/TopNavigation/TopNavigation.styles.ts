import { css } from '@emotion/react'
import type { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const topNavigationStyles = (theme: ColorTheme) => css({
  borderBottom: `${theme.lines.sm} solid ${theme.colors.accentPrimary.value}`,
  minHeight: theme.size.lg,
})

export const topNavigationWidthLimitStyles = (theme: ColorTheme, maxWidth: string) => css({
  width: maxWidth,
  maxWidth: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
})

export const topNavigationContentStyles = (theme: ColorTheme) => css({
  padding: `${theme.spacing.xs} ${theme.spacing.gutter}`,
  flex: 1,

  [`.${PROJECT_SHORTNAME}-TopNavigation-withIcon &`]: {
    padding: `${theme.spacing.xs} ${theme.spacing.gutter} ${theme.spacing.xs} ${theme.spacing.sm}`,
  },
})

export const topNavigationIconStyles = (theme: ColorTheme) => css({
  height: theme.size.md,
  width: theme.size.md,
  margin: `${theme.spacing.xs} 0 ${theme.spacing.xs} ${theme.spacing.xs}`,
  objectFit: 'cover',
})
