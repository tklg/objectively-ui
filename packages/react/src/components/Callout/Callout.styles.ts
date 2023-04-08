import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { commonColorKeys } from 'src/utils/commonUtils'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const calloutStyles = (theme: ColorTheme) => css({
  display: 'flex',
  color: theme.colors.textPrimary,
  backgroundColor: theme.colors.hover,
  borderTopRightRadius: theme.radii.sm,
  borderBottomRightRadius: theme.radii.sm,
  borderRadius: theme.radii.sm,
  // border: `${theme.lines.xs} solid ${theme.colors.border}`,
  borderLeft: `${theme.lines.md} solid ${theme.colors.border}`,
  width: '100%',

  ...commonColorKeys.reduce((a, item) => {
    return {
      ...a,
      [`&.${PROJECT_SHORTNAME}-Callout-color${item.propKey}`]: {
        borderColor: theme.colors[item.themeKey].value,
      },
    }
  }, {}),

  [`& .${PROJECT_SHORTNAME}-CalloutIcon`]: {
    width: theme.size.sm,
    padding: `calc(${theme.spacing.sm} - 1px) 0 0 ${theme.spacing.sm}`,
  },
  [`& .${PROJECT_SHORTNAME}-CalloutContent`]: {
    padding: `${theme.spacing.sm} ${theme.spacing.md} ${theme.spacing.sm} ${theme.spacing.sm}`,
  },
  [`&.${PROJECT_SHORTNAME}-Callout-withIcon .${PROJECT_SHORTNAME}-CalloutContent`]: {
    paddingLeft: theme.spacing.xxs,
  },
})
