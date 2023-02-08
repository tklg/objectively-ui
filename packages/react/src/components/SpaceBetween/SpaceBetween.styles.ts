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
  '&[data-spacebetween-direction=horizontal] > *:not([data-spacebetween-first])': {
    marginLeft: theme.spacing[size],
  },
  '&[data-spacebetween-direction=vertical] > *:not([data-spacebetween-first])': {
    marginTop: theme.spacing[size],
  },
})
