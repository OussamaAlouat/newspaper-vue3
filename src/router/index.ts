import { createRouter, createWebHistory } from 'vue-router'
import NewsPaperList from '@/views/NewsPaperList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'NewsPaper',
      component: NewsPaperList
    }
  ]
})

export default router
