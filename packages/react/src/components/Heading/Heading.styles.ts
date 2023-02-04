import { css } from '@emotion/react'
import type { ColorTheme } from 'src/types/ColorTheme'

export const headingStyles = (theme: ColorTheme) => css({
  display: 'flex',
})

export const headingContainerStyles = (theme: ColorTheme) => css({
  flex: 1,
})

export const headingTopHeadingStyles = (theme: ColorTheme) => css({
  margin: 0,
  color: theme.colors.textPrimary,
  fontSize: theme.typography.size.h1,
  fontWeight: theme.typography.fontWeight.bolder,
})

export const headingSubHeadingStyles = (theme: ColorTheme) => css({
  margin: 0,
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.textSecondary,
  fontSize: theme.typography.size.h4,
})

export const headingActionStyles = (theme: ColorTheme) => css({
  marginLeft: theme.spacing.gutter,
  display: 'flex',
  alignItems: 'center',
})
