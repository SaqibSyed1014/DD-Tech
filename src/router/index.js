import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/template-two',
      name: 'template-two',
      component: () => import('../views/TemplateTwo.vue')
    },
    {
      path: '/template-four',
      name: 'template-four',
      component: () => import('../views/TemplateFour.vue')
    }
  ]
})

export default router
