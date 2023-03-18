import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/predict',
      name: 'predict',
      component: () => import('../views/prediction.vue')
    },
    {
      path: '/performance',
      name: 'performance',
      component: () => import('../views/performance.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    }
  ]
})

export default router
