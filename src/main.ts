import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import InlineSvg from 'vue-inline-svg'

const app = createApp(App)
const pinia = createPinia()

app.component('inline-svg', InlineSvg)
app.use(pinia)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})

