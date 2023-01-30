import { createContext, FC, useMemo, useState } from 'react'
import { defaultDarkColorTheme, defaultLightColorTheme } from 'src/providers/CssVarsProvider/defaultColorTheme'
import { useCompleteColorTheme } from 'src/providers/CssVarsProvider/useCompleteTheme'
import { useInjectStyleElement } from 'src/providers/CssVarsProvider/useInjectStyleElement'
import { ColorScheme } from 'src/types/colorscheme'
import { CssVarsContextProps, CssVarsProviderProps } from './types'

export const CssVarsContext = createContext<CssVarsContextProps>({
  mode: ColorScheme.Light,
  setMode: () => null,
  theme: defaultLightColorTheme,
  darkTheme: defaultLightColorTheme,
})

export const CssVarsProvider: FC<CssVarsProviderProps> = ({
  initialMode = ColorScheme.Light,
  theme = defaultLightColorTheme,
  darkTheme = defaultDarkColorTheme,
  children,
}) => {
  const completeLightTheme = useCompleteColorTheme(theme, defaultLightColorTheme)
  const completeDarkTheme = useCompleteColorTheme(darkTheme, completeLightTheme)

  useInjectStyleElement(completeLightTheme)
  useInjectStyleElement(darkTheme)

  const [mode, setMode] = useState(initialMode)

  const value = useMemo(() => ({
    mode,
    setMode,
    theme: completeLightTheme,
    darkTheme: completeDarkTheme,
  }), [mode, completeLightTheme, completeDarkTheme])

  return (
    <CssVarsContext.Provider value={value}>
      {children}
    </CssVarsContext.Provider>
  )
}
