import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
      '~stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '~styles': fileURLToPath(new URL('./src/styles', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "~styles/_variables.scss";`
      }
    }
  },
})
