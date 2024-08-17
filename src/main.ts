import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import InlineSvg from 'vue-inline-svg'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

const app = createApp(App)
const pinia = createPinia()

app.component('inline-svg', InlineSvg)
app.use(pinia)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})

