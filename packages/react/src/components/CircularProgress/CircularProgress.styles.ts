import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { commonColorKeys, commonSizeKeys } from 'src/utils/commonUtils'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const circularProgressStyles = (theme: ColorTheme) => css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ...commonSizeKeys.reduce((a, item) => {
    const res = {
      height: theme.size[item.themeKey],
      width: theme.size[item.themeKey],
    } as {
      height: number | string;
      width: number | string;
      p?: object;
    }
    if (item.themeKey === 'sm') {
      res.p = { transform: 'scale(0.7)' }
    }
    return {
      ...a,
      [`&.${PROJECT_SHORTNAME}-CircularProgress-size${item.propKey}`]: res,
    }
  }, {}),

  p: {
    margin: 0,
    color: theme.colors.textSecondary,
    fontSize: theme.typography.size.xs,
  },
})

export const circularProgressBarStyles = (theme: ColorTheme) => css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transform: 'rotate(-90deg)',

  ...commonColorKeys.reduce((a, item) => {
    return {
      ...a,
      [`.${PROJECT_SHORTNAME}-CircularProgress-color${item.propKey} &`]: {
        color: theme.colors[item.themeKey].value,
      },
    }
  }, {}),

  [`.${PROJECT_SHORTNAME}-CircularProgress-indeterminate &`]: {
    transform: 'none',
    animation: '2s linear 0s infinite normal none running circle-progress-rotate',

    '@keyframes circle-progress-rotate': {
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  },
})

export const circularProgressBarCircleStyles = (theme: ColorTheme) => css({
  strokeWidth: theme.lines.md,
  stroke: 'currentColor',
  strokeLinecap: 'round',
  transition: `stroke-dasharray ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,

  [`.${PROJECT_SHORTNAME}-CircularProgress-indeterminate &`]: {
    transition: 'none',
    animation: 'circle-progress-dash 1.5s ease-in-out infinite',

    '@keyframes circle-progress-dash': {
      '0%': {
        strokeDasharray: '1, 150',
        strokeDashoffset: 0,
      },
      '50%': {
        strokeDasharray: '90, 150',
        strokeDashoffset: -35,
      },
      '100%': {
        strokeDasharray: '90, 150',
        strokeDashoffset: -124,
      },
    },
  },
})
