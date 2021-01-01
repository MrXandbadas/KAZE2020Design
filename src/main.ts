import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/main"
import router from './router'
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css'

const fireBaseConfig = {
    apiKey: "AIzaSyAtWesQS9eMu02BidEkTrBfSzKXxPhb-io",
    authDomain: "kazewebsite.firebaseapp.com",
    projectId: "kazewebsite",
    storageBucket: "kazewebsite.appspot.com",
    messagingSenderId: "404447283239",
    appId: "1:404447283239:web:a7f4986b6de9f71102e602",
    measurementId: "G-FZ6WZ4T63X"
}

firebase.initializeApp(fireBaseConfig)

const myApp = createApp(App);

myApp.use(router).mount('#app')
