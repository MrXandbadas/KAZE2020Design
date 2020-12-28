import { createApp } from 'vue'
import App from './App.vue'
import 'vue-lazy/dist/vue-lazy.css'

import "./assets/styles/main.css";
import "./assets/styles/components/footer.css";
import "./assets/styles/components/header.css";

import router from './router'


createApp(App)
.use(router)
.mount('#app')
