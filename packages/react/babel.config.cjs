module.exports = {
  presets: [
    ['@babel/env', { modules: false, targets: { node: 'current' } }],
    '@babel/typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { useESModules: true }],
    '@emotion/babel-plugin',
  ],
}
