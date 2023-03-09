import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const tooltipStyles = (theme: ColorTheme, open: boolean) => css({
  background: theme.colors.backgroundSecondary,
  color: theme.colors.textPrimary,
  padding: theme.spacing.xs,
  fontSize: theme.typography.size.sm,
  borderRadius: theme.radii.sm,
  display: open ? 'block' : 'none',
})

export const tooltipArrowStyles = css({
  position: 'absolute',
  width: 8,
  height: 8,
  background: 'inherit',
  visibility: 'hidden',

  '&::before': {
    position: 'absolute',
    width: 8,
    height: 8,
    background: 'inherit',
    visibility: 'visible',
    content: '\'\'',
    transform: 'rotate(45deg)',
  },

  '[data-popper-placement^=top] > &': {
    bottom: -4,
  },
  '[data-popper-placement^=bottom] > &': {
    top: -4,
  },
  '[data-popper-placement^=left] > &': {
    right: -4,
  },
  '[data-popper-placement^=right] > &': {
    left: -4,
  },
})
