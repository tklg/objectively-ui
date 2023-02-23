import { css } from '@emotion/react'
import { focusOutlineStylesWithoutElement } from 'src/components/Accessibility.styles'
import { ColorTheme } from 'src/types/ColorTheme'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const buttonBaseStyles = (theme: ColorTheme) => css({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 0,
  outlineOffset: 0,
  borderStyle: 'solid',
  borderColor: theme.colors.border,
  outlineColor: theme.colors.border,
  padding: `0 ${theme.spacing.md}`,
  minHeight: theme.size.md,
  borderRadius: theme.radii.md,
  background: 'transparent',
  color: theme.colors.textPrimary,
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  transition: [
    `background ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
    `transform ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
  ].join(','),

  '&:hover:not(:disabled)': {
    background: theme.colors.hover,
  },

  '&:active:not(:disabled)': {
    background: theme.colors.active,
    transform: 'scale(0.97)',
  },

  '&:disabled': {
    cursor: 'default',
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

  [`&.${PROJECT_SHORTNAME}-ButtonBase-sizeSm`]: {
    minHeight: theme.size.sm,
    borderRadius: theme.radii.sm,
  },
  [`&.${PROJECT_SHORTNAME}-ButtonBase-sizeLg`]: {
    minHeight: theme.size.lg,
    borderRadius: theme.radii.lg,
  },

  [`&.${PROJECT_SHORTNAME}-ButtonBase-variantDefault`]: {
    borderWidth: theme.lines.sm,
    outlineOffset: theme.lines.sm,
    '&:disabled': {
      color: `${theme.colors.textDisabled} !important`,
    },

    ...['Primary', 'Secondary', 'Info', 'Warning', 'Error', 'Success'].reduce((a, status) => {
      const key = status === 'Primary' || status === 'Secondary'
        ? (`accent${status}` as 'accentPrimary' | 'accentSecondary')
        : (`status${status}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
      return {
        ...a,

        [`&.${PROJECT_SHORTNAME}-ButtonBase-color${status}`]: {
          color: theme.colors[key].value,
          borderColor: theme.colors[key].value,
          outlineColor: theme.colors[key].value,

          '&:hover:not(:disabled)': {
            background: theme.colors.hover,
            borderColor: theme.colors[key].hover,
          },

          '&:active:not(:disabled)': {
            background: theme.colors.active,
            borderColor: theme.colors[key].active,
          },

          '&:disabled': {
            background: theme.colors.backgroundDisabled,
            borderColor: theme.colors[key].shadow,
          },
        },
      }
    }, {}),
  },
  [`&.${PROJECT_SHORTNAME}-ButtonBase-variantText`]: {
    borderColor: 'transparent',

    '&:disabled': {
      color: theme.colors.textDisabled,
    },

    ...['Primary', 'Secondary', 'Info', 'Warning', 'Error', 'Success'].reduce((a, status) => {
      const key = status === 'Primary' || status === 'Secondary'
        ? (`accent${status}` as 'accentPrimary' | 'accentSecondary')
        : (`status${status}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
      return {
        ...a,

        [`&.${PROJECT_SHORTNAME}-ButtonBase-color${status}`]: {
          color: theme.colors[key].value,
          outlineColor: theme.colors[key].value,

          '&:hover:not(:disabled)': {
            background: theme.colors.hover,
          },

          '&:active:not(:disabled)': {
            background: theme.colors.active,
          },

          '&:disabled': {
            borderColor: theme.colors[key].shadow,
            color: theme.colors[key].shadow,
          },
        },
      }
    }, {}),
  },
  [`&.${PROJECT_SHORTNAME}-ButtonBase-variantSolid`]: {
    background: theme.colors.border,
    color: theme.colors.textPrimary,
    borderColor: theme.colors.border,
    outlineColor: theme.colors.border,

    '&:hover:not(:disabled)': {
      background: theme.colors.hover,
      borderColor: theme.colors.hover,
    },

    '&:active:not(:disabled)': {
      background: theme.colors.active,
      borderColor: theme.colors.active,
    },

    '&:disabled': {
      color: theme.colors.textDisabled,
    },

    ...['Primary', 'Secondary', 'Info', 'Warning', 'Error', 'Success'].reduce((a, status) => {
      const key = status === 'Primary' || status === 'Secondary'
        ? (`accent${status}` as 'accentPrimary' | 'accentSecondary')
        : (`status${status}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
      return {
        ...a,

        [`&.${PROJECT_SHORTNAME}-ButtonBase-color${status}`]: {
          background: theme.colors[key].value,
          color: theme.colors[key].contrastText,
          borderColor: theme.colors[key].value,
          outlineColor: theme.colors[key].value,

          '&:hover:not(:disabled)': {
            background: theme.colors[key].hover,
            borderColor: theme.colors[key].hover,
          },

          '&:active:not(:disabled)': {
            background: theme.colors[key].active,
            borderColor: theme.colors[key].active,
          },

          '&:disabled': {
            background: theme.colors[key].shadow,
            borderColor: theme.colors[key].shadow,
            color: theme.colors[key].contrastTextDisabled,
          },
        },
      }
    }, {}),
  },
})

export const buttonBaseGlowStyles = (theme: ColorTheme) => css({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  outlineOffset: 'inherit',
  outline: `${theme.lines.lg} solid`,
  outlineColor: 'inherit',
  borderRadius: 'inherit',
  pointerEvents: 'none',

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
