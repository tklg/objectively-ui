import { useMemo } from 'react'
import { ColorScheme, ColorTheme } from 'src/types/ColorTheme'
import { DeepPartial } from 'src/types/DeepPartial'
import { COLOR_SCHEME_DATA_ATTR, PROJECT_SHORTNAME } from 'src/utils/constants'
import { deepClone } from 'src/utils/deepClone'
import { hyphenate } from 'src/utils/stringUtils'

export const useStyleElementVars = (theme: DeepPartial<ColorTheme>, withMode: ColorScheme, root: boolean) => {
  return useMemo(() => {
    if (theme) {
      const { variables, replacedTheme } = createVars(theme)
      const css = Object.keys(variables).map(varName => `${varName}:${variables[varName]};`).join('')
      if (root) {
        return { replacedTheme, style: `:root,[${COLOR_SCHEME_DATA_ATTR}=${withMode}]{${css}}` }
      } else {
        return { replacedTheme, style: `[${COLOR_SCHEME_DATA_ATTR}=${withMode}]{${css}}` }
      }
    }
    return { replacedTheme: theme, style: '' }
  }, [theme])
}

const createVars = (theme: DeepPartial<ColorTheme>) => {
  type GenericObject = { [key: string]: string | number }
  const vars: Record<string, string> = {}
  const obj = deepClone(theme) as GenericObject

  const addKeysToVars = (prefix: string, obj: GenericObject) => {
    for (const k in obj) {
      let value = obj[k] as string | number | object
      const hypenKey = hyphenate(k)
      if (typeof value === 'object') {
        addKeysToVars(`${prefix}-${hypenKey}`, value as GenericObject)
      } else {
        if (typeof value === 'number')
          if (/(spacing|size|lines|radii)$/.test(prefix)) {
            value = `${value}px`
          } else if (/(duration)$/.test(prefix)) {
            value = `${value}s` // Seconds
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
