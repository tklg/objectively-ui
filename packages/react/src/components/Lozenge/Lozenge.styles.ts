import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { fadeColor } from 'src/utils/colorUtils'
import { commonColorKeys, commonSizeKeys, px } from 'src/utils/commonUtils'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const lozengeStyles = (theme: ColorTheme) => css({
  border: `${px(theme.lines.xs)} solid ${theme.colors.textPrimary}`,
  padding: `0 ${px(theme.spacing.sm)}`,
  backgroundColor: theme.colors.hover,

  ...commonColorKeys.reduce((a, item) => {
    return {
      ...a,
      [`&.${PROJECT_SHORTNAME}-Lozenge-color${item.propKey}`]: {
        color: theme.colors[item.themeKey].value,
        borderColor: theme.colors[item.themeKey].value,
        backgroundColor: fadeColor(theme.colors[item.themeKey].value, 0.9),
      },
    }
  }, {}),

  ...commonSizeKeys.reduce((a, item) => {
    return {
      ...a,
      [`&.${PROJECT_SHORTNAME}-Lozenge-size${item.propKey}`]: {
        height: `calc(${px(theme.size[item.themeKey])} / 2)`,
        lineHeight: `calc(${px(theme.size[item.themeKey])} / 2)`,
        fontSize: px(theme.typography.size[item.themeKey]),
        borderRadius: `calc(${px(theme.size[item.themeKey])} / 4)`,
      },
    }
  }, {}),
})
