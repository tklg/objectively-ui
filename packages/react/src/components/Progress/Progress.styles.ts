import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'
import { commonColorKeys } from 'src/utils/commonUtils'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

export const progressContainerStyles = (theme: ColorTheme) => css({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  p: {
    minWidth: 35,
    margin: 0,
    marginLeft: theme.spacing.xs,
    color: theme.colors.textSecondary,
    fontSize: theme.typography.size.sm,
  },
})

export const progressStyles = (theme: ColorTheme) => css({
  flex: 1,
  height: theme.lines.md,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: `calc(${theme.lines.md} / 2)`,

  ...commonColorKeys.reduce((a, item) => {
    return {
      ...a,
      [`&.${PROJECT_SHORTNAME}-Progress-color${item.propKey}`]: {
        background: theme.colors[item.themeKey].shadow,
      },
    }
  }, {}),
})

export const progressBarStyles = (theme: ColorTheme) => css({
  height: theme.lines.md,
  position: 'absolute',
  willChange: 'transform',
  transform: 'translateX(0)',
  transformOrigin: 'left center',
  transition: `transform ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
  top: 0,
  left: 0,
  right: 0,

  ...commonColorKeys.reduce((a, item) => {
    return {
      ...a,
      [`.${PROJECT_SHORTNAME}-Progress-color${item.propKey} &`]: {
        background: theme.colors[item.themeKey].value,
      },
    }
  }, {}),

  [`.${PROJECT_SHORTNAME}-Progress-indeterminate &`]: {
    transition: 'none',
    animation: '1.5s linear 0s infinite normal none running progress',

    '@keyframes progress': {
      '0%': {
        transform: 'translateX(-20%) scaleX(20%)',
      },
      '60%': {
        transform: 'translateX(30%) scaleX(50%)',
      },
      '100%': {
        transform: 'translateX(100%) scaleX(40%)',
      },
    },
  },
})
