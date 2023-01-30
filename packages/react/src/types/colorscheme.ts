export enum ColorScheme {
  Light = 'light',
  Dark = 'dark'
}

export interface ColorTheme {
  colors: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    accentPrimary: string;
    accentSecondary: string;

    textPrimary: string;
    textSecondary: string;
    textHint: string;
    textDisabled: string;

    divider: string;

    statusInfo: string;
    statusSuccess: string;
    statusWarning: string;
    statusError: string;
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
  }
}
