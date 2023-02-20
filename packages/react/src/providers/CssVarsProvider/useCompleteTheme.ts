import { useMemo } from 'react'
import { ColorTheme } from 'src/types/ColorTheme'
import { DeepPartial } from 'src/types/DeepPartial'
import { darkenColor, isLightColor, lightenColor, fadeColor, tintColor } from 'src/utils/colorUtils'
import { deepClone } from 'src/utils/deepClone'
import { deepFreeze } from 'src/utils/deepFreeze'
import { deepMerge } from 'src/utils/deepMerge'

export const useCompleteColorTheme = (theme: DeepPartial<ColorTheme>, baseTheme: ColorTheme): ColorTheme => {
  return useMemo(() => deepFreeze(
    populateHoverColors(
      (theme === baseTheme ? theme : deepMerge(baseTheme, theme)) as ColorTheme,
    ),
  ), [theme, baseTheme])
}

const populateHoverColors = (theme: ColorTheme): ColorTheme => {
  const clone = deepClone(theme)
  populateHoverColorsInner(clone.colors as Record<string, string | object>)
  return clone
}

const populateHoverColorsInner = (obj: Record<string, string | object>) => {
  for (const k in obj) {
    const item = obj[k]
    if (typeof item === 'object') {
      // If this is a color with contrastText and no hover, add the hover color
      if ('value' in item && 'contrastText' in item) {
        const value = item.value as string
        const contrastText = item.contrastText as string

        if (value && !('hover' in item)) {
          // @ts-expect-error This is adding [hover] to the color group if its not there already
          item.hover = isLightColor(value) ? darkenColor(value, 1) : lightenColor(value, 1)
        }
        if (value && !('active' in item)) {
          // @ts-expect-error This is adding [active] to the color group if its not there already
          item.active = isLightColor(value) ? lightenColor(value, 1) : darkenColor(value, 1)
        }
        if (value && !('shadow' in item)) {
          // @ts-expect-error This is adding [shadow] to the color group if its not there already
          item.shadow = fadeColor(value)
        }
        if (value && contrastText && !('contrastTextSecondary' in item)) {
          // @ts-expect-error This is adding [contrastTextSecondary] to the color group if its not there already
          item.contrastTextSecondary = tintColor(contrastText, value)
        }
        if (!('contrastTextDisabled' in item)) {
          // @ts-expect-error This is adding [contrastTextDisabled] to the color group if its not there already
          item.contrastTextDisabled = ''
        }
      } else {
        populateHoverColorsInner(item as Record<string, string | object>)
      }
    }
  }
}
