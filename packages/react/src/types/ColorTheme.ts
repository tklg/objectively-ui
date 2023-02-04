export enum ColorScheme {
  Light = 'light',
  Dark = 'dark'
}

interface ColorWithContrasts {
  value: string;
  contrastText: string;
}

export interface ColorTheme {
  colors: {
    mode: ColorScheme,

    backgroundPrimary: string;
    backgroundSecondary: string;

    accentPrimary: string | ColorWithContrasts;
    accentSecondary: string | ColorWithContrasts;

    textPrimary: string;
    textSecondary: string;
    textHint: string;
    textDisabled: string;

    border: string;
    divider: string;

    statusInfo: string | ColorWithContrasts;
    statusSuccess: string | ColorWithContrasts;
    statusWarning: string | ColorWithContrasts;
    statusError: string | ColorWithContrasts;
  },
  typography: {
    size: {
      h1: number | string;
      h2: number | string;
      h3: number | string;
      h4: number | string;
      h5: number | string;
      h6: number | string;

      xsmall: number | string;
      small: number | string;
      medium: number | string;
      large: number | string;
      xlarge: number | string;
      xxlarge: number | string;
    },
    fontWeight: {
      lighter: number;
      light: number;
      normal: number;
      bold: number;
      bolder: number;
    },
    fontFamily: {
      heading: string;
      body: string;
    }
  },
  spacing: {
    none: 0;
    gutter: number | string;
    xxs: number | string;
    xs: number | string;
    sm: number | string;
    md: number | string;
    lg: number | string;
    xl: number | string;
    xxl: number | string;
  },
  lines: {
    xs: number | string;
    sm: number | string;
    md: number | string;
    lg: number | string;
    xl: number | string;
  },
}
