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
  mode: 'light',
  setMode: () => null,
})

export const CssVarsProvider: FC<CssVarsProviderProps> = ({
  mode: overrideMode,
  theme = defaultLightColorTheme,
  darkTheme = defaultDarkColorTheme,
  children,
}) => {
  const [osMode, setOsMode] = useState<ColorScheme>(overrideMode ?? (matcher.matches ? 'dark' : 'light'))
  const [mode, setMode] = useState<ColorScheme | null>(overrideMode ?? (localStorage.getItem(COLOR_SCHEME_STORAGE_KEY) as ColorScheme) ?? null)

  const completeLightTheme = useCompleteColorTheme(theme, defaultLightColorTheme)
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
  }), [effectiveColorScheme, setColorTheme])

  return (
    <CssVarsContext.Provider value={value}>
      <ThemeProvider theme={themeWithMode}>
        <Global
          styles={css(lightThemeVars, darkThemeVars)}
        />
        {children}
      </ThemeProvider>
    </CssVarsContext.Provider>
  )
}
