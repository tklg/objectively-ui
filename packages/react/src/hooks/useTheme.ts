import { useTheme as useEmotionTheme } from '@emotion/react'
import { useContext } from 'react'
import { CssVarsContext } from 'src/providers/CssVarsProvider/CssVarsProvider'
import { ColorTheme } from 'src/types/ColorTheme'

export const useTheme = () => {
  return useEmotionTheme() as ColorTheme
}

export const useRawTheme = () => {
  const { theme } = useContext(CssVarsContext)
  return theme
}
