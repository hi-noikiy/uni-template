import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint2'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
  plugins: [
    uni(),
    eslint({ lintInWorker: true }),
    stylelint({ lintInWorker: true })
  ],
  server: {
    port: 8080
  }
})
