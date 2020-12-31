import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/main"
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

const fireBaseConfig

const myApp = createApp(App);

myApp.use(router).mount('#app')
