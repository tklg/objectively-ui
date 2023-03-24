import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const statStyles = (theme: ColorTheme) => css({
  color: theme.colors.textPrimary,
  margin: 0,
})

export const statNumberStyles = (theme: ColorTheme) => css({
  display: 'block',
  margin: 0,
  fontWeight: theme.typography.fontWeight.bold,
  fontSize: theme.typography.size.h1,

  [`.${PROJECT_SHORTNAME}-Stat-sizeSm &`]: {
    fontSize: theme.typography.size.h2,
  },
  [`.${PROJECT_SHORTNAME}-Stat-sizeLg &`]: {
    fontSize: `calc(${theme.typography.size.h1} * 1.2)`,
  },
})

export const statLabelStyles = (theme: ColorTheme) => css({
  display: 'block',
  margin: 0,
  fontSize: theme.typography.size.md,
  marginBottom: theme.spacing.xxs,

  [`.${PROJECT_SHORTNAME}-Stat-sizeSm &`]: {
    fontSize: theme.typography.size.sm,
  },
  [`.${PROJECT_SHORTNAME}-Stat-sizeLg &`]: {
    fontSize: theme.typography.size.lg,
  },
})

export const statDetailStyles = (theme: ColorTheme) => css({
  display: 'block',
  margin: 0,
  marginBottom: theme.spacing.xs,
  color: theme.colors.textSecondary,
  fontSize: theme.typography.size.md,

  [`.${PROJECT_SHORTNAME}-Stat-sizeSm &`]: {
    fontSize: theme.typography.size.sm,
  },
  [`.${PROJECT_SHORTNAME}-Stat-sizeLg &`]: {
    fontSize: theme.typography.size.lg,
  },
})

export const statArrowStyles = (theme: ColorTheme) => css({
  display: 'inline-block',
  height: theme.typography.size.md,
  width: theme.typography.size.md,
  marginInlineEnd: theme.spacing.xxs,
  verticalAlign: 'middle',

  [`&.${PROJECT_SHORTNAME}-StatArrow-colorSuccess`]: {
    color: theme.colors.statusSuccess.value,
  },

  [`&.${PROJECT_SHORTNAME}-StatArrow-colorError`]: {
    color: theme.colors.statusError.value,
  },
})
