import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: () => 'plugin.js'
    },
    rollupOptions: {
      external: [
        /^\/packages\//
      ],
      output: {
        preserveModules: false
      }
    },
    minify: false,
    sourcemap: true
  }
});