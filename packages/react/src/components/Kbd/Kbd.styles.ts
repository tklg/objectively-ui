import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const kbdStyles = (theme: ColorTheme) => css({
  fontFamily: theme.typography.fontFamily.monospace,
  color: theme.colors.textPrimary,
  background: theme.colors.backgroundDisabled,
  border: `${theme.lines.xs} solid ${theme.colors.border}`,
  borderRadius: `calc(${theme.radii.sm} / 2)`,
  boxShadow: `0 2px 1px ${theme.colors.border}`,
  padding: `2px ${theme.spacing.xs}`,
})
