import path from 'node:path'
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

// const isExternal = (id) => !id.startsWith('.') && !id.startsWith('src/') && !path.isAbsolute(id)

/** @type {import('rollup').OutputOptions} */
const outputOptions = {
  name: 'ObjUI',
  compact: true,
  generatedCode: 'es2015',
  sourcemapExcludeSources: true,
  preserveModules: true,
  preserveModulesRoot: 'src',
  inlineDynamicImports: false,
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
    // external: isExternal,
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.ts', '.tsx'],
      }),
      commonjs(),
      typescript({
        useTsconfigDeclarationDir: true,
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
