import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const headerStyles = (theme: ColorTheme) => css({
})

export const headerTopHeadingStyles = (theme: ColorTheme) => css({
  margin: 0,
  color: theme.colors.textPrimary,
  fontSize: theme.typography.size.h1,
  fontWeight: 800,
})

export const headerSubHeadingStyles = (theme: ColorTheme) => css({
  margin: 0,
  fontWeight: 'normal',
  color: theme.colors.textSecondary,
  fontSize: theme.typography.size.h4,
})
