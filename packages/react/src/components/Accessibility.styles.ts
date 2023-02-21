import { ColorTheme } from 'src/types/ColorTheme'

export const focusOutlineStylesWithoutElement = (theme: ColorTheme, offset?: number) => ({
  outline: `2px solid ${theme.colors.focusOutline}`,
  outlineOffset: offset ?? 2,
  borderRadius: 3,
})

export const focusOutlineStyles = (theme: ColorTheme, offset?: number) => ({
  '&:focus-visible': focusOutlineStylesWithoutElement(theme, offset),
})

export const focusOutlineBeforeStyles = (theme: ColorTheme, offset?: number) => ({
  '&:focus-visible:before': {
    content: '\'\'',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    ...focusOutlineStylesWithoutElement(theme, offset),
  },
})
