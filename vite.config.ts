import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      './assets/': fileURLToPath(new URL('./public/assets/', import.meta.url)),
    },
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  publicDir: 'public',
  base: '/',
  server: {
    origin: 'http://localhost:5173',
    hmr: true,
    watch: {
      usePolling: true,
    },
    // Force specific port
    port: 5173,
  },
})
