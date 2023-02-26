import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const uptimeStyles = (theme: ColorTheme) => css({
  svg: {
    width: '100%',
  },
})

export const uptimeLabelStyles = (theme: ColorTheme) => css({
  display: 'inline-block',
  marginBottom: theme.spacing.xxs,
  color: theme.colors.textPrimary,
})
