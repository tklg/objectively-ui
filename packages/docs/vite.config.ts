import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import mdx from '@mdx-js/rollup'

const GENERATE_SOURCEMAPS = Boolean(process.env.GENERATE_SOURCEMAPS)

export default defineConfig({
  resolve: {
    alias: {
      'src': path.join(__dirname, 'src'),
    },
  },
  plugins: [
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/react',
      }),
    },
    react(),
    splitVendorChunkPlugin(),
  ],
  clearScreen: true,
  optimizeDeps: {
    // disabled: 'build',
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    // cssCodeSplit: true,
    sourcemap: GENERATE_SOURCEMAPS,
    minify: false,
    // target: 'esnext',
    rollupOptions: {
      output: {
        compact: true,
        // sourcemapExcludeSources: true,
        dir: 'dist',
        // inlineDynamicImports: false,
      },
      // external: isExternal,
    },
  },
})
