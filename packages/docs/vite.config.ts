import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      'src': path.join(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
  ],
  clearScreen: true,
  optimizeDeps: {
    disabled: 'build',
  },
  server: {
    port: 3000,
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    // minify: false,
    // target: 'esnext',
    rollupOptions: {
      output: {
        compact: true,
        generatedCode: 'es2015',
        // sourcemapExcludeSources: true,
        dir: 'dist',
        // preserveModules: true,
        inlineDynamicImports: false,
      },
      // external: isExternal,
    },
  },
})
