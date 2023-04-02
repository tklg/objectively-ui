import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { fadeColor } from 'src/utils/colorUtils'
import { commonColorKeys } from 'src/utils/commonUtils'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const alertStyles = (theme: ColorTheme, rawTheme: ColorTheme) => css({
  display: 'flex',
  color: theme.colors.textPrimary,
  backgroundColor: theme.colors.hover,
  borderTopRightRadius: theme.radii.sm,
  borderBottomRightRadius: theme.radii.sm,
  borderRadius: theme.radii.sm,
  border: `${theme.lines.xs} solid ${theme.colors.border}`,
  width: '100%',

  ...commonColorKeys.reduce((a, item) => {
    return {
      ...a,
      [`&.${PROJECT_SHORTNAME}-Alert-severity${item.propKey}`]: {
        borderColor: theme.colors[item.themeKey].value,
        backgroundColor: fadeColor(rawTheme.colors[item.themeKey].value, 0.8),
      },
    }
  }, {}),

  [`& .${PROJECT_SHORTNAME}-AlertIcon`]: {
    width: theme.size.sm,
    padding: `calc(${theme.spacing.sm} - 1px) 0 0 ${theme.spacing.sm}`,
  },
  [`& .${PROJECT_SHORTNAME}-AlertTitle`]: {
    display: 'block',
    padding: `0 ${theme.spacing.md} ${theme.spacing.xxs} ${theme.spacing.xxs}`,
    fontWeight: theme.typography.fontWeight.bolder,
  },
  [`& .${PROJECT_SHORTNAME}-AlertContent`]: {
    padding: `0 ${theme.spacing.md} 0 ${theme.spacing.xxs}`,
  },
  [`& .${PROJECT_SHORTNAME}-AlertAction`]: {
    padding: `${theme.spacing.xxs} ${theme.spacing.md} ${theme.spacing.xxs} 0`,
  },
})

export const alertContentContainerStyles = (theme: ColorTheme) => css({
  flex: 1,
  padding: `${theme.spacing.sm} 0`,
})
