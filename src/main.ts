import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'

import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()

  app.use(pinia)

  return {
    app
  }
}