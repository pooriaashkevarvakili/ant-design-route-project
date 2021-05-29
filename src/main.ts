import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./assets/tailwind.css";
import "./assets/style.css"
import { install } from '@icon-park/vue/es/all';

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Antd)
install(app, 'i');
app.mount('#app')


