import { useTheme as useEmotionTheme } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

export const useTheme = () => {
  return useEmotionTheme() as ColorTheme
}
