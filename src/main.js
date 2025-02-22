import { createApp } from 'vue'
import { router } from "./router/index";
import App from './App.vue'

import 'element-plus/dist/index.css'

import './assets/css/base.css'
import './assets/css/normalize.css'
import './assets/css/tailwind.css';

import { vueErrorHandler } from "./utils/errorHandler";

const app = createApp(App)

app.use(router)
app.use(vueErrorHandler);
app.mount('#app')
