import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const uptimeStyles = (theme: ColorTheme) => css({
  svg: {
    width: '100%',

    rect: {
      outline: 'none',
    },
  },
})

export const uptimeLabelStyles = (theme: ColorTheme) => css({
  display: 'inline-block',
  marginBottom: theme.spacing.xxs,
  color: theme.colors.textPrimary,
})

export const uptimeFooterStyles = (theme: ColorTheme) => css({
  display: 'flex',
  color: theme.colors.textSecondary,
  fontSize: theme.typography.size.sm,

  span: {

    display: 'inline-block',
    flex: 1,
    textAlign: 'center',

    '&[data-start-date]': {
      textAlign: 'left',
    },
    '&[data-end-date]': {
      textAlign: 'right',
    },
  },
})
