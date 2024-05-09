import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MinhaPaginaView from '@/views/MinhaPaginaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/minha-pagina',
      name: 'minhaPagina',
      component: MinhaPaginaView
    }
  ]
})

export default router
