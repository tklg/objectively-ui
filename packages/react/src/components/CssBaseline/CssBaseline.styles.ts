import { css } from '@emotion/react'
import { ColorTheme } from 'src/types/ColorTheme'

/**
 * Styles from normalize.css and material-ui CssBaseline, and some extra baseline stuff.
 * normalize.css https://github.com/necolas/normalize.css
 * material-ui https://github.com/mui/material-ui/blob/1912b736abd2114e9779e194c0242b301c4ce807/packages/mui-material/src/CssBaseline/CssBaseline.js
 */
export const baselineStyles = (theme: ColorTheme) => css({
  '*, *::before, *::after': {
    boxSizing: 'inherit',
  },
  '::-webkit-scrollbar': {
    width: 10,
    height: 10,
  },
  '::-webkit-scrollbar-track': {
    background: theme.colors.backgroundPrimary,
  },
  '::-webkit-scrollbar-thumb': {
    background: theme.colors.textHint,
    border: `2px solid ${theme.colors.backgroundPrimary}`,
    borderRadius: 5,
  },
  html: {
    lineHeight: 1.15,
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    boxSizing: 'border-box',
    webkitTextSizeAdjust: '100%',
    colorTheme: theme.colors.mode,
    height: '100%',
  },
  body: {
    margin: 0,
    color: theme.colors.textPrimary,
    fontSize: theme.typography.size.md,
    fontFamily: theme.typography.fontFamily.body,
    backgroundColor: theme.colors.backgroundPrimary,
    height: '100%',
    '@media print': {
      backgroundColor: 'white',
    },
    '&::backdrop': {
      backgroundColor: theme.colors.backgroundPrimary,
    },
  },
  main: {
    display: 'block',
  },
  h1: {
    fontSize: theme.typography.size.h1,
    fontWeight: theme.typography.fontWeight.bolder,
    fontFamily: theme.typography.fontFamily.heading,
    margin: `${theme.spacing.sm}px 0`,
  },
  h2: {
    fontSize: theme.typography.size.h2,
    fontWeight: theme.typography.fontWeight.bold,
    fontFamily: theme.typography.fontFamily.heading,
    margin: `${theme.spacing.xs}px 0`,
  },
  h3: {
    fontSize: theme.typography.size.h3,
    fontWeight: theme.typography.fontWeight.bold,
    fontFamily: theme.typography.fontFamily.heading,
    margin: `${theme.spacing.xs}px 0`,
  },
  h4: {
    fontSize: theme.typography.size.h4,
    fontWeight: theme.typography.fontWeight.normal,
    fontFamily: theme.typography.fontFamily.heading,
    margin: `${theme.spacing.xs}px 0`,
  },
  h5: {
    fontSize: theme.typography.size.h5,
    fontWeight: theme.typography.fontWeight.normal,
    fontFamily: theme.typography.fontFamily.heading,
    margin: 0,
  },
  h6: {
    fontSize: theme.typography.size.h6,
    fontWeight: theme.typography.fontWeight.normal,
    fontFamily: theme.typography.fontFamily.heading,
    margin: 0,
  },
  hr: {
    height: 0,
    overflow: 'visible',
  },
  pre: {
    fontFamily: 'monospace, monospace', // double monospace is intentional: https://github.com/necolas/normalize.css#pre-code-kbd-samp
    fontSize: theme.typography.size.md,
  },
  a: {
    backgroundColor: 'transparent',
  },
  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: ['underline', 'underline dotted'],
  },
  'b, strong': {
    fontWeight: 'bolder',
  },
  'code, kbd, samp': {
    fontFamily: 'monospace, monospace', // double monospace is intentional: https://github.com/necolas/normalize.css#pre-code-kbd-samp
    fontSize: theme.typography.size.md,
  },
  small: {
    fontSize: '80%',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  img: {
    borderStyle: 'none',
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
  },
  'button, input': {
    overflow: 'visible',
  },
  'button, select': {
    textTransform: 'none',
  },
  'button, [type=button], [type=reset], [type=submit]': {
    WebkitAppearance: 'button',
  },
  'button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner': {
    borderStyle: 'none',
    padding: 0,
  },
  'button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring': {
    outline: '1px dotted ButtonText',
  },
  fieldset: {
    padding: '0.35em 0.75em 0.625em',
  },
  legend: {
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  textarea: {
    overflow: 'auto',
  },
  '[type=checkbox], [type=radio]': {
    padding: 0,
  },
  '[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '[type=search]': {
    WebkitAppearance: 'textfield',
    outlineOffset: -2,
  },
  '[type=search]::-webkit-search-decoration': {
    WebkitAppearance: 'none',
  },
  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },
  details: {
    display: 'block',
  },
  summary: {
    display: 'list-item',
  },
  'template, [hidden]': {
    display: 'none',
  },

  /* Theme colors */
  'h1, h2, h3, h4, h5, h6, p': {
    color: theme.colors.textPrimary,
  },
})
