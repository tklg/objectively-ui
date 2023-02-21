import { css } from '@emotion/react'
import { focusOutlineStylesWithoutElement } from 'src/components/Accessibility.styles'
import { ColorTheme } from 'src/types/ColorTheme'
import { CommonSize } from 'src/types/props'

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
  backgroundColor: theme.colors.hover,
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

  'input:checked + &': {
    backgroundColor: theme.colors.accentPrimary.value,
  },

  'input:checked:disabled + &': {
    backgroundColor: theme.colors.accentPrimary.shadow,
  },
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
    backgroundColor: theme.colors.textDisabled,
  },
})

export const switchLabelStyles = (theme: ColorTheme, size: CommonSize) => css({
  display: 'inline-block',
  marginLeft: theme.spacing.xs,
  lineHeight: `calc(${theme.size[size]} * ${sizeFactor})`,
  fontSize: theme.typography.size[size],
})
