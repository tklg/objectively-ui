import { PropsWithChildren } from 'react'
import { ColorScheme, ColorTheme } from 'src/types/colorscheme'
import { DeepPartial } from 'src/types/DeepPartial'

export interface CssVarsContextProps {
  mode: ColorScheme;
  setMode: (mode: ColorScheme) => void;
  theme: ColorTheme;
  darkTheme: ColorTheme;
}

export interface CssVarsProviderProps extends PropsWithChildren {
  /**
   * The initial color scheme. Defaults to `ColorScheme.Light`
   */
  initialMode?: ColorScheme;
  /**
   * The light color theme.
   */
  theme?: DeepPartial<ColorTheme>;
  /**
   * The dark color theme. Overridees parts of the light theme.
   */
  darkTheme?: DeepPartial<ColorTheme>;
}
