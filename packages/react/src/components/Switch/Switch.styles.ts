import { css } from '@emotion/react'
import { focusOutlineStylesWithoutElement } from 'src/components/Accessibility.styles'
import { ColorTheme } from 'src/types/ColorTheme'
import { CommonSize } from 'src/types/props'
import { PROJECT_SHORTNAME } from 'src/utils/constants'

const sizeFactor = 0.6
const widthFactor = 1.6

export const switchStyles = (theme: ColorTheme, size: CommonSize) => css({
  height: theme.size[size],
  display: 'flex',
  padding: `calc((${theme.size[size]} - (${theme.size[size]} * ${sizeFactor})) / 2) 0`,
})

export const switchTrackStyles = (theme: ColorTheme, size: CommonSize) => css({
  position: 'relative',
  display: 'inline-block',
  height: `calc(${theme.size[size]} * ${sizeFactor})`,
  width: `calc(${theme.size[size]} * ${sizeFactor * widthFactor})`,
  backgroundColor: theme.colors.active,
  borderRadius: theme.radii[size],
  cursor: 'pointer',
  outline: 'none',
  transition: [
    `background ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
  ].join(','),

  '&:focus-visible:before': {
    content: '\'\'',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    ...focusOutlineStylesWithoutElement(theme),
  },

  'input:disabled + &': {
    cursor: 'default',
  },

  ...['Primary', 'Secondary', 'Info', 'Warning', 'Error', 'Success'].reduce((a, status) => {
    const key = status === 'Primary' || status === 'Secondary'
      ? (`accent${status}` as 'accentPrimary' | 'accentSecondary')
      : (`status${status}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
    return {
      ...a,
      [`.${PROJECT_SHORTNAME}-Switch-color${status} input:checked + &`]: {
        backgroundColor: theme.colors[key].value,
      },
      [`.${PROJECT_SHORTNAME}-Switch-color${status} input:checked:disabled + &`]: {
        backgroundColor: theme.colors[key].shadow,
      },
    }
  }, {}),
})

export const switchHandleStyles = (theme: ColorTheme, size: CommonSize) => css({
  position: 'absolute',
  backgroundColor: theme.colors.accentPrimary.contrastText,
  height: `calc(${theme.size[size]} * ${sizeFactor} - ${theme.spacing.xxs} * 2)`,
  width: `calc(${theme.size[size]} * ${sizeFactor} - ${theme.spacing.xxs} * 2)`,
  borderRadius: `calc(${theme.radii[size]} - ${theme.spacing.xxs})`,
  top: theme.spacing.xxs,
  left: theme.spacing.xxs,
  transform: 'translateX(0)',
  transition: [
    `transform ${theme.transitions.duration.fast} ${theme.transitions.function.default}`,
  ].join(','),

  'input:checked + label > &': {
    transform: `translateX(calc(${theme.size[size]} * ${sizeFactor * widthFactor} - ${theme.size[size]} * ${sizeFactor}))`,
  },

  'input:disabled + label > &': {
    backgroundColor: theme.colors.mode === 'light' ? theme.colors.backgroundPrimary : theme.colors.textDisabled,
  },
})

export const switchLabelStyles = (theme: ColorTheme, size: CommonSize) => css({
  display: 'inline-block',
  marginLeft: theme.spacing.xs,
  lineHeight: `calc(${theme.size[size]} * ${sizeFactor})`,
  fontSize: theme.typography.size[size],
  userSelect: 'none',

  'input:disabled + label + &': {
    color: theme.colors.textDisabled,
  },
})
