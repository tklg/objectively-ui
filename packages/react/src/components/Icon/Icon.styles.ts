import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const iconStyles = (theme: ColorTheme, size: number | string) => css({
  height: size,
  width: size,
  color: theme.colors.textSecondary,

  [`.${PROJECT_SHORTNAME}-ButtonBase-variantSolid &`]: {
    color: 'inherit',
  },

  [`&.${PROJECT_SHORTNAME}-Icon-colorDefault`]: {
    [`.${PROJECT_SHORTNAME}-IconButton-variantDefault:not(:disabled) &, .${PROJECT_SHORTNAME}-IconButton-variantText:not(:disabled) &`]: {
      color: theme.colors.textPrimary,
    },
  },

  ...['Primary', 'Secondary', 'Info', 'Warning', 'Error', 'Success'].reduce((a, status) => {
    const key = status === 'Primary' || status === 'Secondary'
      ? (`accent${status}` as 'accentPrimary' | 'accentSecondary')
      : (`status${status}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
    return {
      ...a,
      [`&.${PROJECT_SHORTNAME}-Icon-color${status}`]: {
        color: theme.colors[key].value,
      },
    }
  }, {}),
})
