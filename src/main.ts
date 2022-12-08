import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n  from './shared/utils/i18n';
import './assets/main.css'

const app = createApp(App)

// state 
app.use(createPinia())

// router
app.use(router)

// lang
app.use(i18n)

app.mount('#app')
