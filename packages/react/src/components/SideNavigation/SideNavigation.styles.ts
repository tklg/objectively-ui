import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const sideNavigationStyles = (theme: ColorTheme) => css({
  width: 260,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  [`&.${PROJECT_SHORTNAME}-SideNavigation-sideLeft`]: {
    borderRight: `${theme.lines.xs} solid ${theme.colors.border}`,
  },
  [`&.${PROJECT_SHORTNAME}-SideNavigation-sideRight`]: {
    borderLeft: `${theme.lines.xs} solid ${theme.colors.border}`,
  },
})
