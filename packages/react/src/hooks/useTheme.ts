import { useTheme as useEmotionTheme } from '@emotion/react'
import { useContext, useMemo } from 'react'
import { CssVarsContext } from 'src/providers/CssVarsProvider/CssVarsProvider'
import { ColorTheme } from 'src/types/ColorTheme'
import { isCommonColor } from 'src/utils/commonUtils'
import { capitalize } from 'src/utils/stringUtils'

export const useTheme = () => {
  return useEmotionTheme() as ColorTheme
}

export const useRawTheme = () => {
  const { theme } = useContext(CssVarsContext)
  return theme
}

export const useThemeColor = (commonColor: string) => {
  const rawTheme = useRawTheme()
  return useMemo(() => {
    if (isCommonColor(commonColor) && commonColor !== 'default') {
      const capitalized = capitalize(commonColor)
      const key = capitalized === 'Primary' || capitalized === 'Secondary'
        ? (`accent${capitalized}` as 'accentPrimary' | 'accentSecondary')
        : (`status${capitalized}` as 'statusInfo' | 'statusWarning' | 'statusError' | 'statusSuccess')
      return {
        value: rawTheme.colors[key].value,
        contrastText: rawTheme.colors[key].contrastText,
      }
    } else if (commonColor === 'default') {
      return {
        value: rawTheme.colors.textDisabled,
        contrastText: rawTheme.colors.textPrimary,
      }
    }
    return {
      value: commonColor,
      contrastText: rawTheme.colors.textPrimary,
    }
  }, [commonColor, rawTheme.colors])
}
