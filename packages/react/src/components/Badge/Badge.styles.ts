import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const badgeContainerStyles = css({
  position: 'relative',
})

export const badgeStyles = (theme: ColorTheme, size: number, backgroundColor: string, textColor: string) => css({
  position: 'absolute',
  height: size,
  minWidth: size,
  background: backgroundColor,
  color: textColor,
  borderRadius: size / 2,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: theme.typography.size.xs,
  padding: `0 ${theme.spacing.xxs}`,
  pointerEvents: 'none',
})
