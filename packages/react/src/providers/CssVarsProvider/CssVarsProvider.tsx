import { css, Global, ThemeProvider } from '@emotion/react'
import { createContext, FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useCompleteColorTheme } from 'src/providers/CssVarsProvider/useCompleteTheme'
import { useStyleElementVars } from 'src/providers/CssVarsProvider/useInjectStyleElement'
import { ColorScheme } from 'src/types/ColorTheme'
import { COLOR_SCHEME_DATA_ATTR, COLOR_SCHEME_STORAGE_KEY } from 'src/utils/constants'
import { defaultDarkColorTheme, defaultLightColorTheme } from 'src/utils/defaultColorTheme'
import { CssVarsContextProps, CssVarsProviderProps } from './types'

const matcher = window.matchMedia('(prefers-color-scheme: dark)')

export const CssVarsContext = createContext<CssVarsContextProps>({
  mode: ColorScheme.Light,
  setMode: () => null,
})

export const CssVarsProvider: FC<CssVarsProviderProps> = ({
  mode: overrideMode,
  theme = defaultLightColorTheme,
  darkTheme = defaultDarkColorTheme,
  children,
}) => {
  const [osMode, setOsMode] = useState(overrideMode ?? (matcher.matches ? ColorScheme.Dark : ColorScheme.Light))
  const [mode, setMode] = useState<ColorScheme | null>(overrideMode ?? (localStorage.getItem(COLOR_SCHEME_STORAGE_KEY) as ColorScheme) ?? null)

  const completeLightTheme = useCompleteColorTheme(theme, defaultLightColorTheme)
  const { style: lightThemeVars, replacedTheme: themeWithCssVars } = useStyleElementVars(completeLightTheme, ColorScheme.Light, true)
  const { style: darkThemeVars } = useStyleElementVars(darkTheme, ColorScheme.Dark, false)

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setOsMode(e.matches ? ColorScheme.Dark : ColorScheme.Light)
    }
    if (!overrideMode) {
      matcher.addEventListener('change', handleChange)
    }
    return () => matcher.removeEventListener('change', handleChange)
  }, [])

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
  }), [effectiveColorScheme, setColorTheme])

  return (
    <CssVarsContext.Provider value={value}>
      <ThemeProvider theme={themeWithCssVars}>
        <Global
          styles={css(lightThemeVars, darkThemeVars)}
        />
        {children}
      </ThemeProvider>
    </CssVarsContext.Provider>
  )
}
