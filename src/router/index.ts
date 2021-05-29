import { createRouter, createWebHistory } from 'vue-router'
import News from '../pages/News.vue'
import Home from "../pages/Home.vue";

const routes = [
    {
        path: '/',
        name: 'Index',

    },
    {
        path: '/home',
        name: "Home",
        component: Home

    },
    {
        path: '/news',
        name: 'news',
        component: News,

    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
