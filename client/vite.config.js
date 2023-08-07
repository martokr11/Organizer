import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { patch } from '../server/router/router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: "127.0.0.1",
    proxy: {
      '/~': {
        target: 'https://127.0.0.1:1313',
        rewrite: path => path.replace(/^\/~/, ''),
      }
    }
  }
})
