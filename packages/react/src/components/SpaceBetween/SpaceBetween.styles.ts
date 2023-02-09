import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { CommonSize } from 'src/types/sizes'

export const spaceBetweenStyles = (theme: ColorTheme, size: CommonSize) => css({
  display: 'inline-flex',

  '&[data-spacebetween-direction=horizontal]': {
    flexDirection: 'row',
  },
  '&[data-spacebetween-direction=vertical]': {
    flexDirection: 'column',
  },
  '&[data-spacebetween-direction=horizontal] > *:not([data-spacebetween-first=true])': {
    marginLeft: theme.spacing[size],
  },
  '&[data-spacebetween-direction=vertical] > *:not([data-spacebetween-first=true])': {
    marginTop: theme.spacing[size],
  },
})
