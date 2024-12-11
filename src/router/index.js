import { createRouter, createWebHistory } from 'vue-router'
import Calcularor from '@/pages/Calculator.vue';

const router = createRouter({
  history: createWebHistory('/Text-to-number-math-app/'),
  routes: [
    {
      path: '/',
      name: 'calculator',
      component: Calcularor,
    }
  ],
})

export default router
