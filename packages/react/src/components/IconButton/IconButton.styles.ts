import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { CommonSize } from 'src/types/props'

export const iconButtonStyles = (theme: ColorTheme, size: CommonSize) => css({
  width: theme.size[size],
  padding: 0,
})
