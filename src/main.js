import './assets/main.scss';
import { registerScrollSpy } from 'vue3-scroll-spy';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
registerScrollSpy(app)

app.mount('#app')
