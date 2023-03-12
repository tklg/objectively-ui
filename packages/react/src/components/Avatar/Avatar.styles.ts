import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const avatarStyles = (theme: ColorTheme, color: string, textColor: string) => css({
  borderRadius: '50%',
  height: theme.size.md,
  width: theme.size.md,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: color,
  color: textColor,
  userSelect: 'none',
  overflow: 'hidden',

  [`&.${PROJECT_SHORTNAME}-Avatar-sizeSm`]: {
    height: theme.size.sm,
    width: theme.size.sm,
  },

  [`&.${PROJECT_SHORTNAME}-Avatar-sizeLg`]: {
    height: theme.size.lg,
    width: theme.size.lg,
  },

  'img': {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
  },
})
