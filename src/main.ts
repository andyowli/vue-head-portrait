import { createApp } from 'vue'
import './styles/reset.css'
import './styles/home.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.mount('#app')
