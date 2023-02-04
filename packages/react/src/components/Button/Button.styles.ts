import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const buttonStyles = (theme: ColorTheme) => css({
  position: 'relative',
  borderWidth: theme.lines.sm,
  borderStyle: 'solid',
  borderColor: 'transparent',
  padding: `0 ${theme.spacing.md}`,
  minHeight: theme.size.md,
  background: 'transparent',
  color: theme.colors.textPrimary,
  borderRadius: theme.radii.md,
  cursor: 'pointer',
  userSelect: 'none',
  transition: [
    `background ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
    `transform ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
  ].join(','),

  '&:hover': {
    background: theme.colors.hover,
  },

  '&:active': {
    background: theme.colors.active,
    transform: 'scale(0.97)',
  },

  [`&.${PROJECT_SHORTNAME}-Button-sizeSM`]: {
    minHeight: theme.size.sm,
  },
  [`&.${PROJECT_SHORTNAME}-Button-sizeLG`]: {
    minHeight: theme.size.lg,
  },
  [`&.${PROJECT_SHORTNAME}-Button-fullWidth`]: {
    display: 'block',
  },
  [`&.${PROJECT_SHORTNAME}-Button-variantPrimary`]: {
    background: theme.colors.accentPrimary.value,
    color: theme.colors.accentPrimary.contrastText,
    borderColor: theme.colors.accentPrimary.value,

    '&:hover': {
      background: theme.colors.accentPrimary.hover,
      borderColor: theme.colors.accentPrimary.hover,
    },

    '&:active': {
      background: theme.colors.accentPrimary.active,
      borderColor: theme.colors.accentPrimary.active,
    },
  },
  [`&.${PROJECT_SHORTNAME}-Button-variantText`]: {
  },
  [`&.${PROJECT_SHORTNAME}-Button-variantLink`]: {
  },
})

export const buttonGlowStyles = (theme: ColorTheme) => css({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  outlineOffset: theme.lines.sm,
  outline: `${theme.lines.lg} solid ${theme.colors.accentPrimary.value}`,
  borderRadius: 'inherit',

  animation: `${theme.transitions.duration.slow} ${theme.transitions.function.default} button-outline-fadeout`,
  animationFillMode: 'forwards',

  '@keyframes button-outline-fadeout': {
    from: {
      opacity: 1,
      outlineWidth: 0,
    },
    to: {
      opacity: 0,
      outlineWidth: `calc(${theme.lines.lg} * 1.75)`,
    },
  },
})
