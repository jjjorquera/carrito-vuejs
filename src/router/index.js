import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HomeView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //* http://localhost:5173/
    { path: '/', name:'Home', component: HomeView},
    //* http://localhost:5173/Login
    { path: '/', name:'Login', component: LoginView },
  ]
})

export default router
