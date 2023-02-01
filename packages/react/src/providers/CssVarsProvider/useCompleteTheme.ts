import { useMemo } from 'react'
import { ColorTheme } from 'src/types/ColorTheme'
import { DeepPartial } from 'src/types/DeepPartial'
import { deepMerge } from 'src/utils/deepMerge'

export const useCompleteColorTheme = (theme: DeepPartial<ColorTheme>, baseTheme: ColorTheme): ColorTheme => {
  return useMemo(() => theme === baseTheme ? theme : deepMerge(baseTheme, theme), [theme, baseTheme]) as ColorTheme
}
