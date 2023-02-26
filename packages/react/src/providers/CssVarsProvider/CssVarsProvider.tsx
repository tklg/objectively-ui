import { CacheProvider, css, Global, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useCompleteColorTheme } from 'src/providers/CssVarsProvider/useCompleteTheme'
import { useStyleElementVars } from 'src/providers/CssVarsProvider/useStyleElementVars'
import { ColorScheme } from 'src/types/ColorTheme'
import { COLOR_SCHEME_DATA_ATTR, COLOR_SCHEME_STORAGE_KEY, PROJECT_SHORTNAME } from 'src/utils/constants'
import { defaultDarkColorTheme, defaultLightColorTheme } from 'src/utils/defaultColorTheme'
import { CssVarsContextProps, CssVarsProviderProps } from './types'

const head = document.querySelector('head')
const emotionInsertionPoint = document.createElement('meta')
emotionInsertionPoint.setAttribute('name', 'emotion-insertion-point')
emotionInsertionPoint.setAttribute('content', '')
head?.prepend(emotionInsertionPoint)

const matcher = window.matchMedia('(prefers-color-scheme: dark)')

// https://github.com/emotion-js/emotion/issues/2790
const emotionCache = createCache({
  key: PROJECT_SHORTNAME.toLowerCase(),
  insertionPoint: emotionInsertionPoint,
})

export const CssVarsContext = createContext<CssVarsContextProps>({
  mode: 'light',
  setMode: () => null,
  theme: defaultLightColorTheme,
})

export const CssVarsProvider: FC<CssVarsProviderProps> = ({
  mode: overrideMode,
  theme = defaultLightColorTheme,
  darkTheme = defaultDarkColorTheme,
  children,
}) => {
  const [osMode, setOsMode] = useState<ColorScheme>(overrideMode ?? (matcher.matches ? 'dark' : 'light'))
  const [mode, setMode] = useState<ColorScheme | null>((localStorage.getItem(COLOR_SCHEME_STORAGE_KEY) as ColorScheme) ?? overrideMode)

  const completeLightTheme = useCompleteColorTheme(theme, defaultLightColorTheme)
  const _completeDarkThemePartial = useCompleteColorTheme(defaultDarkColorTheme, completeLightTheme)
  const completeDarkTheme = useCompleteColorTheme(darkTheme, _completeDarkThemePartial)

  const { style: lightThemeVars, replacedTheme: themeWithCssVars } = useStyleElementVars(completeLightTheme, 'light', true)
  const { style: darkThemeVars } = useStyleElementVars(darkTheme, 'dark', false)
  const themeWithMode = useMemo(() => {
    return {
      ...themeWithCssVars,
      colors: {
        ...themeWithCssVars.colors,
        mode,
      },
    }
  }, [themeWithCssVars, mode])

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setOsMode(e.matches ? 'dark' : 'light')
    }
    if (!overrideMode) {
      matcher.addEventListener('change', handleChange)
    }
    return () => matcher.removeEventListener('change', handleChange)
  }, [overrideMode])

  const setColorTheme = useCallback((colorScheme: ColorScheme) => {
    if (colorScheme === osMode) {
      localStorage.removeItem(COLOR_SCHEME_STORAGE_KEY)
      setMode(null)
    } else {
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, colorScheme)
      setMode(colorScheme)
    }
  }, [osMode])

  const effectiveColorScheme = mode ?? osMode

  useEffect(() => {
    document.documentElement.setAttribute(COLOR_SCHEME_DATA_ATTR, effectiveColorScheme)
  }, [effectiveColorScheme])

  const value = useMemo(() => ({
    mode: effectiveColorScheme,
    setMode: setColorTheme,
    theme: effectiveColorScheme === 'dark' ? completeDarkTheme : completeLightTheme,
  }), [completeDarkTheme, completeLightTheme, effectiveColorScheme, setColorTheme])

  return (
    <CssVarsContext.Provider value={value}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={themeWithMode}>
          <Global
            styles={css(lightThemeVars, darkThemeVars)}
          />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </CssVarsContext.Provider>
  )
}
