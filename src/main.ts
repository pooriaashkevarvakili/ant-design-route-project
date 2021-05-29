import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.ts";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./assets/tailwind.css";
import "./assets/style.css"



createApp(App).use(Antd).use(store).use(router).mount('#app')


