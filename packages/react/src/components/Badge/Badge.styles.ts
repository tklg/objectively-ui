import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const badgeContainerStyles = (theme: ColorTheme) => css({
  position: 'relative',
})

export const badgeStyles = (theme: ColorTheme) => css({
  position: 'absolute',
})
