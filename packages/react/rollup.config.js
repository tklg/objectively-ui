import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import cjs from 'rollup-plugin-cjs-es'

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  console.info('Building for production')
}

/** @type {import('rollup').OutputOptions} */
const outputOptions = {
  name: 'ObjUI',
  compact: true,
  sourcemapExcludeSources: true,
  preserveModules: true,
  preserveModulesRoot: 'src',
  inlineDynamicImports: false,
  exports: 'named',
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
}

/** @type {import('rollup').RollupOptions[]} */
const options = [
  {
    input: './src/index.ts',
    output: [
      {
        format: 'cjs',
        dir: './dist/cjs',
        ...outputOptions,
      },
      {
        format: 'esm',
        dir: './dist/esm',
        ...outputOptions,
      },
    ],
    plugins: [
      peerDepsExternal(),
      typescript({
        useTsconfigDeclarationDir: true,
        check: isProd,
      }),
      cjs({
        nested: true,
      }),
      resolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      babel({
        babelHelpers: 'runtime', // 'bundled'
        exclude: '**/node_modules/**',
        extensions: ['.js', '.ts', '.tsx'],
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      dts(),
    ],
  },
]

export default options
