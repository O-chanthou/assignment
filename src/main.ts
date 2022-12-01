import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {createI18n} from 'vue-i18n'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6ujazCKH5n8PXJhAlad2fGB5EFiaamDQ",
  authDomain: "kidkid-tv.firebaseapp.com",
  projectId: "kidkid-tv",
  storageBucket: "kidkid-tv.appspot.com",
  messagingSenderId: "201639909697",
  appId: "1:201639909697:web:10658d12027b393373a9c0",
  measurementId: "G-5GNKQSQYPY"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

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
