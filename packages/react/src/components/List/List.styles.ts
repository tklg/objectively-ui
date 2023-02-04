import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const listStyles = (theme: ColorTheme) => css({
  listStyle: 'none',
  margin: 0,
  padding: `${theme.spacing.sm} 0`,

  [`&.${PROJECT_SHORTNAME}-List-noPadding`]: {
    padding: 0,
  },
})
