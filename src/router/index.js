import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Guide from '../views/Guide.vue'
import Components from '../views/Components.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    }
  ]
})

export default router