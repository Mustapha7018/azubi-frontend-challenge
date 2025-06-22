import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // Add specific alias for assets to make paths from data.json work
      './assets/': fileURLToPath(new URL('./public/assets/', import.meta.url)),
    },
  },
  // Configure asset handling
  build: {
    assetsInlineLimit: 0, // Disable inlining assets as base64
    // Ensure asset paths are correctly generated
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  // Set public directory - make sure this is correctly set
  publicDir: 'public',
  base: '/',
  server: {
    // Use the same origin during development
    origin: 'http://localhost:5173',
    // Hot module replacement
    hmr: true,
    // Watch for file changes - including in public directory
    watch: {
      usePolling: true,
    },
    // Force specific port
    port: 5173,
  },
})
