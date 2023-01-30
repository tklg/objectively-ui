import { useEffect } from 'react'
import { ColorTheme } from 'src/types/colorscheme'
import { DeepPartial } from 'src/types/DeepPartial'
import { hyphenate } from 'src/utils/stringUtils'

export const useInjectStyleElement = (theme: DeepPartial<ColorTheme>) => {
  useEffect(() => {
    const styleElem = document.createElement('style')
    if (theme) {
      const vars = createVars(theme)
      const css = Object.keys(vars).map(varName => `${varName}:${vars[varName]};`).join('')
      styleElem.innerText = `:root{${css}}`
      document.head.appendChild(styleElem)
    }
    return () => {
      styleElem.remove()
    }
  }, [theme])
}

export const useThemeCss = (theme: ColorTheme) => {
  return null
}

const createVars = (theme: DeepPartial<ColorTheme>): Record<string, string> => {
  const vars: Record<string, string> = {}

  const addKeysToVars = <T>(prefix: string, obj: T) => {
    for (const k in obj) {
      let value = obj[k] as string | number | object
      const hypenKey = hyphenate(k)
      if (typeof value === 'object') {
        addKeysToVars(`${prefix}-${hypenKey}`, value)
      } else {
        if (typeof value === 'number' && /(spacing|size)$/.test(prefix)) {
          value = `${value}px`
        }
        vars[`${prefix}-${hypenKey}`] = value.toString()
      }
    }
  }

  addKeysToVars('--LinUI', theme)

  return vars
}
