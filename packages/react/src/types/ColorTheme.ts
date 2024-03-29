export type ColorScheme = 'light' | 'dark'

interface ColorWithContrasts {
  value: string;
  contrastText: string;
  contrastTextSecondary?: string;
  contrastTextDisabled?: string;
  hover?: string;
  active?: string;
  shadow?: string;
}

export interface ColorTheme {
  colors: {
    mode: ColorScheme;

    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundDisabled: string;

    hover: string;
    active: string;

    accentPrimary: ColorWithContrasts;
    accentSecondary: ColorWithContrasts;

    link: string;

    focusOutline: string;

    textPrimary: string;
    textSecondary: string;
    textHint: string;
    textDisabled: string;

    border: string;
    divider: string;

    statusInfo: ColorWithContrasts;
    statusSuccess: ColorWithContrasts;
    statusWarning: ColorWithContrasts;
    statusError: ColorWithContrasts;

    special: {
      codeText: string;
      codeBackground: string;
    };
  };
  typography: {
    size: {
      h1: number | string;
      h2: number | string;
      h3: number | string;
      h4: number | string;
      h5: number | string;
      h6: number | string;

      xs: number | string;
      sm: number | string;
      md: number | string;
      lg: number | string;
      xl: number | string;
      xxl: number | string;
    };
    fontWeight: {
      lighter: number;
      light: number;
      normal: number;
      bold: number;
      bolder: number;
    };
    fontFamily: {
      heading: string;
      body: string;
      monospace: string;
    };
  };
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
  };
  lines: {
    xs: number | string;
    sm: number | string;
    md: number | string;
    lg: number | string;
    xl: number | string;
  };
  size: {
    sm: number | string;
    md: number | string;
    lg: number | string;
  };
  radii: {
    sm: number | string;
    md: number | string;
    lg: number | string;
  };
  transitions: {
    duration: {
      fast: number;
      normal: number;
      slow: number;
    };
    function: {
      default: string;
    };
  };
}
