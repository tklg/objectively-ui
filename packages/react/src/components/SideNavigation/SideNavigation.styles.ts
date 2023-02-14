import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const sideNavigationStyles = (theme: ColorTheme) => css({
  width: 260,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',

  /* [`&.${PROJECT_SHORTNAME}-SideNavigation-sideLeft`]: {
    borderRight: `${theme.lines.xs} solid ${theme.colors.border}`,
  },
  [`&.${PROJECT_SHORTNAME}-SideNavigation-sideRight`]: {
    borderLeft: `${theme.lines.xs} solid ${theme.colors.border}`,
  }, */
})
