import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/redreaming-angel-fansite-v2/',
  build: {
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
  },
})
