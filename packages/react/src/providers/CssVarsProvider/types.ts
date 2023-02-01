import { PropsWithChildren } from 'react'
import { ColorScheme, ColorTheme } from 'src/types/ColorTheme'
import { DeepPartial } from 'src/types/DeepPartial'

export interface CssVarsContextProps {
  mode: ColorScheme;
  setMode: (mode: ColorScheme) => void;
}

export interface CssVarsProviderProps extends PropsWithChildren {
  /**
   * The color scheme. Overrides system preference.
   */
  mode?: ColorScheme;
  /**
   * The light color theme.
   */
  theme?: DeepPartial<ColorTheme>;
  /**
   * The dark color theme. Overridees parts of the light theme.
   */
  darkTheme?: DeepPartial<ColorTheme>;
}
