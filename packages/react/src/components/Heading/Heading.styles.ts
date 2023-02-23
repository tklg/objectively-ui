import { css } from '@emotion/react'
import type { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const headingStyles = (theme: ColorTheme) => css({
  width: '100%',
  display: 'flex',
})

export const headingContainerStyles = (theme: ColorTheme) => css({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
})

export const headingTopHeadingStyles = (theme: ColorTheme) => css({
  margin: 0,
  color: theme.colors.textPrimary,
  fontWeight: theme.typography.fontWeight.bolder,

  [`.${PROJECT_SHORTNAME}-Heading-sizeH1 &`]: {
    fontSize: theme.typography.size.h1,
  },
  [`.${PROJECT_SHORTNAME}-Heading-sizeH2 &`]: {
    fontSize: theme.typography.size.h2,
  },
  [`.${PROJECT_SHORTNAME}-Heading-sizeH3 &`]: {
    fontSize: theme.typography.size.h3,
  },
  [`.${PROJECT_SHORTNAME}-Heading-sizeH4 &`]: {
    fontSize: theme.typography.size.h4,
  },
  [`.${PROJECT_SHORTNAME}-Heading-sizeH5 &`]: {
    fontSize: theme.typography.size.h5,
  },
  [`.${PROJECT_SHORTNAME}-Heading-sizeH6 &`]: {
    fontSize: theme.typography.size.h6,
  },
})

export const headingSubHeadingStyles = (theme: ColorTheme) => css({
  margin: 0,
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.textSecondary,
  fontSize: theme.typography.size.h4,

  [`.${PROJECT_SHORTNAME}-Heading-sizeH1 &`]: {
    fontSize: theme.typography.size.h4,
  },
  [`.${PROJECT_SHORTNAME}-Heading-sizeH2 &`]: {
    fontSize: theme.typography.size.h5,
  },
  [`.${PROJECT_SHORTNAME}-Heading-sizeH3 &, .${PROJECT_SHORTNAME}-Heading-sizeH4 &, .${PROJECT_SHORTNAME}-Heading-sizeH5 &, .${PROJECT_SHORTNAME}-Heading-sizeH6 &`]: {
    fontSize: theme.typography.size.h6,
  },
})

export const headingActionStyles = (theme: ColorTheme) => css({
  marginLeft: theme.spacing.gutter,
  display: 'flex',
  alignItems: 'center',
})
