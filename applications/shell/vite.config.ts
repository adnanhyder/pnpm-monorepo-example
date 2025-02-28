import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nightwatchPlugin from 'vite-plugin-nightwatch'
import VueDevTools from 'vite-plugin-vue-devtools'
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    nightwatchPlugin(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'boost-app1': isProduction
      ? path.resolve(__dirname, 'assets/boost-app1.mjs')
      : path.resolve(__dirname, '../app1/src')      
    }
  },
  build: {
    rollupOptions: {
      external: isProduction ? ['boost-app1'] : []
    }
  }
})
