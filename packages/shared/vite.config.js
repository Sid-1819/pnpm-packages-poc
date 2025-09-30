import { defineConfig } from 'vite';
import { resolve } from 'path';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      formats: ['es'],
      fileName: () => 'index.js'
    },
    rollupOptions: {
      // Don't externalize solid-js - bundle it
      external: [],
      output: {
        preserveModules: false
      }
    },
    minify: false,
    sourcemap: true
  }
});