import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageView from '@/views/PageView.vue'
import CatalogView from '@/views/CatalogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/carts/:id',
      name: 'carts',
      component:PageView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component:CatalogView,
    },
  ],
})

export default router
