import { useMemo } from 'react'
import { ColorScheme, ColorTheme } from 'src/types/ColorTheme'
import { DeepPartial } from 'src/types/DeepPartial'
import { COLOR_SCHEME_DATA_ATTR, PROJECT_SHORTNAME } from 'src/utils/constants'
import { hyphenate } from 'src/utils/stringUtils'

export const useStyleElementVars = (theme: DeepPartial<ColorTheme>, withMode?: ColorScheme) => {
  return useMemo(() => {
    if (theme) {
      const { variables, replacedTheme } = createVars(theme)
      const css = Object.keys(variables).map(varName => `${varName}:${variables[varName]};`).join('')
      if (!withMode) {
        return { replacedTheme, style: `:root{${css}}` }
      } else {
        return { replacedTheme, style: `[${COLOR_SCHEME_DATA_ATTR}=${withMode}]{${css}}` }
      }
    }
    return { replacedTheme: theme, style: '' }
  }, [theme])
}

export const useThemeCss = (theme: ColorTheme) => {
  return null
}

const createVars = (theme: DeepPartial<ColorTheme>) => {
  type GenericObject = { [key: string]: string | number }
  const vars: Record<string, string> = {}
  const obj = JSON.parse(JSON.stringify(theme)) as GenericObject

  const addKeysToVars = (prefix: string, obj: GenericObject) => {
    for (const k in obj) {
      let value = obj[k] as string | number | object
      const hypenKey = hyphenate(k)
      if (typeof value === 'object') {
        addKeysToVars(`${prefix}-${hypenKey}`, value as GenericObject)
      } else {
        if (typeof value === 'number' && /(spacing|size|lines)$/.test(prefix)) {
          value = `${value}px`
        }
        if (k !== 'mode') {
          vars[`${prefix}-${hypenKey}`] = value.toString()
          obj[k] = `var(${prefix}-${hypenKey})`
        }
      }
    }
  }

  addKeysToVars(`--${PROJECT_SHORTNAME}`, obj)

  return {
    variables: vars,
    replacedTheme: obj as unknown as ColorTheme,
  }
}
