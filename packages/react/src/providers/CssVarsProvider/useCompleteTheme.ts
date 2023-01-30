import { useMemo } from 'react'
import { ColorTheme } from 'src/types/colorscheme'
import { DeepPartial } from 'src/types/DeepPartial'
import { deepMerge } from 'src/utils/deepMerge'

export const useCompleteColorTheme = (theme: DeepPartial<ColorTheme>, baseTheme: ColorTheme): ColorTheme => {
  return useMemo(() => deepMerge(baseTheme, theme), [theme, baseTheme]) as ColorTheme
}
