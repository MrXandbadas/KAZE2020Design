import { createApp } from 'vue'
import App from './App.vue'

import "./assets/styles/main.css";
import "./assets/styles/components/header.css";
import "./assets/styles/components/footer.css";



import router from './router'

createApp(App).use(router).mount('#app')
