import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const listItemGroupStyles = (theme: ColorTheme) => css({
  padding: 0,
  margin: 0,
})

export const listItemGroupInnerListStyles = (theme: ColorTheme) => css({
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

export const listItemGroupSubheadingStyles = (theme: ColorTheme) => css({
  padding: `${theme.spacing.md} calc(${theme.spacing.md} / 2) ${theme.spacing.xs} calc(${theme.spacing.md} / 2)`,
  margin: `0 calc(${theme.spacing.md} / 2)`,
  color: theme.colors.textSecondary,
  borderBottom: `${theme.lines.xs} solid ${theme.colors.divider}`,
  fontWeight: theme.typography.fontWeight.bold,
  fontSize: theme.typography.size.sm,

  ['ul li:first-of-type ul &']: {
    paddingTop: 0,
  },
})
