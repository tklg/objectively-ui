import { css } from '@emotion/react'
import { focusOutlineStylesWithoutElement } from 'src/components/Accessibility.styles'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const buttonStyles = (theme: ColorTheme) => css({
  position: 'relative',
  display: 'inline-block',
  borderWidth: 0,
  outlineOffset: 0,
  borderStyle: 'solid',
  borderColor: theme.colors.border,
  outlineColor: theme.colors.border,
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

  '&:focus': {
    outline: 'none',
  },

  '&:focus-visible:before': {
    content: '\'\'',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    ...focusOutlineStylesWithoutElement(theme),
  },

  [`&.${PROJECT_SHORTNAME}-Button-sizeSM`]: {
    minHeight: theme.size.sm,
  },
  [`&.${PROJECT_SHORTNAME}-Button-sizeLG`]: {
    minHeight: theme.size.lg,
  },
  [`&.${PROJECT_SHORTNAME}-Button-fullWidth`]: {
    display: 'block',
    width: '100%',
  },

  [`&.${PROJECT_SHORTNAME}-Button-variantLink`]: {
    borderColor: 'transparent',
    color: theme.colors.link,
  },

  [`&.${PROJECT_SHORTNAME}-Button-variantDefault`]: {
    borderWidth: theme.lines.sm,
    outlineOffset: theme.lines.sm,

    ...['Primary', 'Secondary', 'Info', 'Warning', 'Error', 'Success'].reduce((a, status) => {
      const key = status === 'Primary' || status === 'Secondary'
        ? (`accent${status}` as 'accentPrimary' | 'accentSecondary')
        : (`status${status}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
      return {
        ...a,
        [`&.${PROJECT_SHORTNAME}-Button-color${status}`]: {
          color: theme.colors[key].value,
          borderColor: theme.colors[key].value,
          outlineColor: theme.colors[key].value,

          '&:hover': {
            background: theme.colors.hover,
            borderColor: theme.colors[key].hover,
          },

          '&:active': {
            background: theme.colors.active,
            borderColor: theme.colors[key].active,
          },
        },
      }
    }, {}),
  },
  [`&.${PROJECT_SHORTNAME}-Button-variantText`]: {
    borderColor: 'transparent',

    ...['Primary', 'Secondary', 'Info', 'Warning', 'Error', 'Success'].reduce((a, status) => {
      const key = status === 'Primary' || status === 'Secondary'
        ? (`accent${status}` as 'accentPrimary' | 'accentSecondary')
        : (`status${status}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
      return {
        ...a,
        [`&.${PROJECT_SHORTNAME}-Button-color${status}`]: {
          color: theme.colors[key].value,
          outlineColor: theme.colors[key].value,

          '&:hover': {
            background: theme.colors.hover,
          },

          '&:active': {
            background: theme.colors.active,
          },
        },
      }
    }, {}),
  },
  [`&.${PROJECT_SHORTNAME}-Button-variantSolid`]: {
    background: theme.colors.border,
    color: theme.colors.textPrimary,
    borderColor: theme.colors.border,
    outlineColor: theme.colors.border,

    '&:hover': {
      background: theme.colors.hover,
      borderColor: theme.colors.hover,
    },

    '&:active': {
      background: theme.colors.active,
      borderColor: theme.colors.active,
    },

    ...['Primary', 'Secondary', 'Info', 'Warning', 'Error', 'Success'].reduce((a, status) => {
      const key = status === 'Primary' || status === 'Secondary'
        ? (`accent${status}` as 'accentPrimary' | 'accentSecondary')
        : (`status${status}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
      return {
        ...a,
        [`&.${PROJECT_SHORTNAME}-Button-color${status}`]: {
          background: theme.colors[key].value,
          color: theme.colors[key].contrastText,
          borderColor: theme.colors[key].value,
          outlineColor: theme.colors[key].value,

          '&:hover': {
            background: theme.colors[key].hover,
            borderColor: theme.colors[key].hover,
          },

          '&:active': {
            background: theme.colors[key].active,
            borderColor: theme.colors[key].active,
          },
        },
      }
    }, {}),
  },
})

export const buttonGlowStyles = (theme: ColorTheme) => css({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  outlineOffset: 'inherit',
  outline: `${theme.lines.lg} solid`,
  outlineColor: 'inherit',
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
