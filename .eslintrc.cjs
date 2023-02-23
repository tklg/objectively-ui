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
    'unused-imports',
  ],
  'rules': {
    'react/no-unknown-property': ['error', { 'ignore': ['css']}],
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-tag-spacing': 'warn',
    'react/jsx-first-prop-new-line': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': [ 'error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'semi': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': 'warn',
    'comma-dangle': ['warn', 'always-multiline'],
    'space-before-function-paren': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always', {
      objectsInObjects: false,
      arraysInObjects: false,
    }],
    'semi-spacing': 'warn',
    'comma-spacing': ['warn', {
      before: false,
      after: true,
    }],
    'key-spacing': ['warn'],
    'keyword-spacing': ['warn'],
    'no-multi-spaces': ['warn'],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' },
    ],
  },
}
