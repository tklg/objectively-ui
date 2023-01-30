import { ColorTheme } from 'src/types/colorscheme'
import { DeepPartial } from 'src/types/DeepPartial'

export const defaultLightColorTheme: ColorTheme = {
  colors: {
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#e2e2e2',

    accentPrimary: 'orange',
    accentSecondary: 'lime',

    textPrimary: '#222222',
    textSecondary: '#999999',
    textHint: '#aaaaaa',
    textDisabled: '#dddddd',

    divider: '#ededed',

    statusInfo: 'blue',
    statusSuccess: 'green',
    statusWarning: 'orange',
    statusError: 'red',
  },

  typography: {
    size: {
      h1: '2rem',
      h2: '1.424rem',
      h3: '1.266rem',
      h4: '1.125rem',
      h5: '0.889rem',
      h6: '0.79rem',

      xsmall: '0.79rem',
      small: '0.889rem',
      medium: '1rem',
      large: '1.125rem',
      xlarge: '1.266rem',
      xxlarge: '1.424rem',
    },
  },

  spacing: {
    none: 0,
    gutter: 24,

    xxs: 4,
    xs: 8,
    sm: 12,
    md: 20,
    lg: 32,
    xl: 48,
    xxl: 96,
  },
}

export const defaultDarkColorTheme: DeepPartial<ColorTheme> = {
  colors: {
    backgroundPrimary: '#111111',
    backgroundSecondary: '#444444',

    accentPrimary: 'orange',
    accentSecondary: 'lime',

    textPrimary: '#ffffff',
    textSecondary: '#cccccc',
    textHint: '#999999',
    textDisabled: '#777777',

    divider: '#4f4f4f',
  },
}
