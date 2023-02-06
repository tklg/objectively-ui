import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const pageContentStyles = (theme: ColorTheme) => css({
  padding: `${theme.spacing.sm} ${theme.spacing.gutter}`,
  width: '100%',
  overflowY: 'auto',
})
