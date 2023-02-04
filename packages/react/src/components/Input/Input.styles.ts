import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const inputContainerStyles = (theme: ColorTheme) => css({
  position: 'relative',
  display: 'inline-block',
  borderWidth: theme.lines.xs,
  borderStyle: 'solid',
  borderColor: theme.colors.border,
  borderRadius: theme.radii.md,
  height: theme.size.md,
  transition: [
    `border-color ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
    `box-shadow ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
  ].join(','),

  [`&.${PROJECT_SHORTNAME}-Input-SM`]: {
    height: theme.size.sm,
  },
  [`&.${PROJECT_SHORTNAME}-Input-LG`]: {
    height: theme.size.lg,
  },
  [`&.${PROJECT_SHORTNAME}-Input-fullWidth`]: {
    display: 'block',
    width: '100%',
  },
  [`&.${PROJECT_SHORTNAME}-Input-disabled`]: {
    display: 'block',
    width: '100%',
    background: theme.colors.hover,
  },

  '&:focus-within': {
    borderColor: theme.colors.accentPrimary.value,
    boxShadow: `0 0 4px 2px ${theme.colors.accentPrimary.shadow}`,

    // '&:focus-visible': {
    //   '&:before': {
    //     content: '""',
    //     height: '100%',
    //     width: '100%',
    //     top: 0,
    //     left: 0,
    //     position: 'absolute',
    //     borderRadius: 3,
    //     outline: `${theme.lines.sm} solid ${theme.colors.accentPrimary.value}`,
    //     outlineOffset: 4,
    //   },
    // },
  },
})

export const inputInputStyles = (theme: ColorTheme) => css({
  border: 'none',
  padding: 0,
  background: 'transparent',
  height: '100%',
  width: '100%',
  outline: 'none',
  textIndent: theme.spacing.sm,
  color: theme.colors.textPrimary,

  '&::placeholder': {
    color: theme.colors.textHint,
  },
  '&:disabled': {
    color: theme.colors.textDisabled,
  },
})
