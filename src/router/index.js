import { createRouter, createWebHistory } from 'vue-router'
import Calcularor from '@/pages/Calculator.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: Calcularor,
    }
  ],
})

export default router
