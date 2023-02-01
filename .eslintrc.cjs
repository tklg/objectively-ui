// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  'rules': {
    'react/no-unknown-property': ['error', { 'ignore': ['css'] }],
    'react/jsx-closing-bracket-location': 'warn',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': [ 'error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': ['error', 'never'],
    'comma-dangle': ['warn', 'always-multiline'],
    'space-before-function-paren': ['warn', 'always'],
    'semi-spacing': 'warn',
    'comma-spacing': ['warn', {
      before: false,
      after: true,
    }],
    'keyword-spacing': 'warn',
    'no-multi-spaces': ['warn'],
  },
}
