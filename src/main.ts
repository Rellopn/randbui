import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import './element-variables.scss'
import './style/reset.css'

const app = createApp(App)
app.use(ElementPlus).use(store).use(router).mount('#app')