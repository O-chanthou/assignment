import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createI18n} from 'vue-i18n'

import App from './App.vue'
import router from './router'

// import FileSelector main css
import 'vue-file-selector/dist/main.css';

// import the FileSelector plugin
import FileSelector from 'vue-file-selector';

import './assets/main.css'

const i18n = createI18n({
    locale: "en",
    messages: {
        en: {
            lang: "English"
        },
        km: {
            lang: "ខ្មែរ"
        }
    }
})

const app = createApp(App)

// state 
app.use(createPinia())

// router
app.use(router)

// lang
app.use(i18n)

// file selector
app.use(FileSelector)

app.mount('#app')
