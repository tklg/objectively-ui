import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { fadeColor } from 'src/utils/colorUtils'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const tableStyles = (theme: ColorTheme) => css({
  display: 'table',
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  border: `${theme.lines.xs} solid ${theme.colors.border}`,
})

export const tableHeadStyles = (theme: ColorTheme) => css({
  display: 'table-header-group',
  verticalAlign: 'middle',
  borderColor: 'inherit',

  [`& .${PROJECT_SHORTNAME}-TableCell`]: {
    fontWeight: theme.typography.fontWeight.bolder,
    // borderBottom: `${theme.lines.xs} solid ${theme.colors.border}`,
    background: theme.colors.hover,
    padding: theme.spacing.sm,

    [`.${PROJECT_SHORTNAME}-Table-compact &`]: {
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    },
  },
})

export const tableBodyStyles = (theme: ColorTheme) => css({
  display: 'table-row-group',
  verticalAlign: 'middle',
  borderColor: 'inherit',
})

export const tableRowStyles = (theme: ColorTheme) => css({
  display: 'table-row',
  verticalAlign: 'inherit',
  borderColor: 'inherit',
})

export const tableCellStyles = (theme: ColorTheme, rawTheme: ColorTheme) => css({
  display: 'table-cell',
  verticalAlign: 'inherit',
  padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
  textAlign: 'start',
  fontWeight: theme.typography.fontWeight.normal,

  [`.${PROJECT_SHORTNAME}-Table-compact &`]: {
    padding: `${theme.spacing.xxs} ${theme.spacing.sm}`,
  },

  [`.${PROJECT_SHORTNAME}-Table-striped .${PROJECT_SHORTNAME}-TableRow:nth-of-type(even) &`]: {
    background: fadeColor(rawTheme.colors.hover, 0.5),
  },
})

export const tableFootStyles = (theme: ColorTheme) => css({
  display: 'table-footer-group',
  verticalAlign: 'middle',
  borderColor: 'inherit',

  [`& .${PROJECT_SHORTNAME}-TableCell`]: {
    fontWeight: theme.typography.fontWeight.bold,
    borderTop: `${theme.lines.xs} solid ${theme.colors.hover}`,

    [`.${PROJECT_SHORTNAME}-Table-compact &`]: {
      padding: `${theme.spacing.xxs} ${theme.spacing.sm}`,
    },
  },
})
