import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const buttonStyles = (theme: ColorTheme) => css({
  [`&.${PROJECT_SHORTNAME}-Button-fullWidth`]: {
    display: 'flex',
    width: '100%',
  },

  [`&.${PROJECT_SHORTNAME}-Button-variantLink`]: {
    borderColor: 'transparent',
    color: theme.colors.link,
  },

  [`&.${PROJECT_SHORTNAME}-Button-iconStart`]: {
    paddingLeft: theme.spacing.sm,

    span: {
      marginLeft: theme.spacing.xs,
    },
  },

  [`&.${PROJECT_SHORTNAME}-Button-iconEnd`]: {
    paddingRight: theme.spacing.sm,

    span: {
      marginRight: theme.spacing.xs,
    },
  },
})
