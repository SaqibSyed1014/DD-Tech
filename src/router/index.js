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
      path: '/template-three',
      name: 'template-three',
      component: () => import('../views/TemplateThree.vue')
    },
    {
      path: '/template-four',
      name: 'template-four',
      component: () => import('../views/TemplateFour.vue')
    },
    {
      path: '/template-five',
      name: 'template-five',
      component: () => import('../views/TemplateFive.vue')
    },
    {
      path: '/template-six',
      name: 'template-six',
      component: () => import('../views/TemplateSix.vue')
    }
  ]
})

export default router
