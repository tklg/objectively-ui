import { ColorTheme } from 'src/types/ColorTheme'
import { DeepPartial } from 'src/types/DeepPartial'

export const defaultLightColorTheme: ColorTheme = {
  colors: {
    mode: 'light',

    backgroundPrimary: '#f0f0f0',
    backgroundSecondary: '#fefefe',

    hover: 'rgba(0,0,0,.12)',
    active: 'rgba(0,0,0,.3)',

    accentPrimary: {
      value: '#246e45',
      contrastText: 'white',
    },
    accentSecondary: {
      value: 'gray',
      contrastText: 'white',
    },

    textPrimary: '#222222',
    textSecondary: '#999999',
    textHint: '#aaaaaa',
    textDisabled: '#dddddd',

    border: '#cccccc',
    divider: '#ededed',

    statusInfo: {
      value: 'blue',
      contrastText: 'white',
    },
    statusSuccess: {
      value: 'green',
      contrastText: 'white',
    },
    statusWarning: {
      value: 'orange',
      contrastText: 'black',
    },
    statusError: {
      value: 'red',
      contrastText: 'white',
    },
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
    fontWeight: {
      lighter: 100,
      light: 300,
      normal: 400,
      bold: 600,
      bolder: 800,
    },
    fontFamily: {
      body: '\'Public Sans\', sans-serif',
      heading: '\'Public Sans\', sans-serif',
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

  lines: {
    xs: 1,
    sm: 2,
    md: 4,
    lg: 6,
    xl: 8,
  },

  size: {
    sm: 30,
    md: 40,
    lg: 50,
  },

  radii: {
    sm: 4,
    md: 8,
    lg: 12,
  },

  transitions: {
    duration: {
      fast: .15,
      normal: .3,
      slow: .8,
    },
    function: {
      default: 'cubic-bezier(0.23, 0.54, 0.19, 0.99)',
    },
  },
}

export const defaultDarkColorTheme: DeepPartial<ColorTheme> = {
  colors: {
    mode: 'dark',

    backgroundPrimary: '#111111',
    backgroundSecondary: '#444444',

    hover: 'rgba(255,255,255,.3)',
    active: 'rgba(255,255,255,.4)',

    accentPrimary: {
      value: 'teal',
      contrastText: 'white',
    },
    accentSecondary: {
      value: 'orange',
      contrastText: 'white',
    },

    textPrimary: '#ffffff',
    textSecondary: '#cccccc',
    textHint: '#999999',
    textDisabled: '#777777',

    border: '#5f5f5f',
    divider: '#4f4f4f',
  },
}
