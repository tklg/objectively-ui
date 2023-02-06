import { css } from '@emotion/react'
import { focusOutlineStylesWithoutElement } from 'src/components/Accessibility.styles'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const listItemStyles = (theme: ColorTheme) => css({
  padding: 0,
  height: theme.size.md,
  lineHeight: theme.size.md,
  color: theme.colors.textPrimary,

  [`&.${PROJECT_SHORTNAME}-ListItem-divided`]: {
    '&:not(:first-of-type)': {
      borderTop: `${theme.lines.xs} solid ${theme.colors.divider}`,
    },
  },

  [`&.${PROJECT_SHORTNAME}-ListItem-compact`]: {
    height: theme.size.sm,
    lineHeight: theme.size.sm,
  },
})

export const listItemButtonStyles = (theme: ColorTheme) => css({
  display: 'block',
  border: 'none',
  height: '100%',
  width: '100%',
  textAlign: 'left',
  background: 'transparent',
  padding: 0,
  margin: 0,
  color: theme.colors.textPrimary,
  cursor: 'pointer',

  '&:focus-visible': {
    outline: 'none',
  },
})

export const listItemContentStyles = (theme: ColorTheme) => css({
  padding: `0 ${theme.spacing.md}`,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: [
    `background ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
  ].join(','),

  '&:hover': {
    background: theme.colors.hover,
  },
  '&:active': {
    background: theme.colors.accentPrimary.shadow,
  },
  'button:focus-visible &': focusOutlineStylesWithoutElement(theme),

  '&[data-selected=true]': {
    background: theme.colors.accentPrimary.value,
    color: theme.colors.accentPrimary.contrastText,

    '&:hover': {
      background: theme.colors.accentPrimary.hover,
    },
    '&:active': {
      background: theme.colors.accentPrimary.active,
    },
  },

  [`.${PROJECT_SHORTNAME}-ListItem-joined &`]: {
    margin: `2px ${theme.spacing.xxs}`,
    borderRadius: theme.radii.sm,
    width: `calc(100% - (${theme.spacing.xxs} * 2))`,
    height: 'calc(100% - 4px)',
    padding: `0 calc(${theme.spacing.md} - ${theme.spacing.xxs})`,
  },
})

export const listItemTextStyles = (theme: ColorTheme) => css({
  display: 'block',
})

export const listItemSubtextStyles = (theme: ColorTheme) => css({
  display: 'block',
  fontSize: theme.typography.size.xs,
  marginTop: -2,
  color: theme.colors.textSecondary,

  '[data-selected=true] &': {
    color: theme.colors.accentPrimary.contrastTextSecondary,
  },
  [`.${PROJECT_SHORTNAME}-ListItem-compact &`]: {
    marginTop: -4,
  },
})
