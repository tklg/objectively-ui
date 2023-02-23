import { ColorTheme } from 'src/types/ColorTheme'
import { DeepPartial } from 'src/types/DeepPartial'

export const defaultLightColorTheme: ColorTheme = {
  colors: {
    mode: 'light',

    backgroundPrimary: '#f0f0f0',
    backgroundSecondary: '#ffffff',
    backgroundDisabled: '#dddddd',

    hover: 'rgba(0,0,0,.08)',
    active: 'rgba(0,0,0,.18)',

    accentPrimary: {
      // value: '#3d815b',
      value: '#1e88b1',
      contrastText: 'white',

      // value: 'linear-gradient(30deg, rgba(0,14,75,1) 0%, rgba(9,94,121,1) 30%, rgba(0,190,118,1) 100%)',
    },
    accentSecondary: {
      value: '#d535ac',
      contrastText: 'white',
    },

    link: '#32a9ef',

    focusOutline: '#2c80ff',

    textPrimary: '#222222',
    textSecondary: '#888888',
    textHint: '#aaaaaa',
    textDisabled: '#b7b7b7',

    border: '#cccccc',
    divider: '#dddddd',

    statusInfo: {
      value: '#618ddd',
      contrastText: 'white',
    },
    statusSuccess: {
      value: '#71a95f',
      contrastText: 'white',
    },
    statusWarning: {
      value: '#ff8d2b',
      contrastText: 'black',
    },
    statusError: {
      value: '#f55e4f',
      contrastText: 'white',
    },

    special: {
      codeText: '#d535ac',
      codeBackground: '#e9e9e9',
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

      xs: '0.79rem',
      sm: '0.889rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.266rem',
      xxl: '1.424rem',
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
    sm: 34,
    md: 46,
    lg: 56,
  },

  radii: {
    sm: 17,
    md: 23,
    lg: 28,
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

    backgroundPrimary: '#22242c',
    backgroundSecondary: '#444444',
    backgroundDisabled: '#222222',

    hover: 'rgba(200,220,255,.12)',
    active: 'rgba(255,255,255,.3)',

    link: '#32a9ef',

    textPrimary: '#ffffff',
    textSecondary: '#a3b0c3',
    textHint: '#748399',
    textDisabled: '#8d8d8d',

    border: '#535b68',
    divider: '#33373e',

    special: {
      codeBackground: '#33373e',
    },
  },
}
