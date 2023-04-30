import { createRouter, createWebHistory } from 'vue-router';

import NewsPaperList from '@/views/NewsPaperList.vue';
import NewsPaperDetail from '@/views/NewsPaperDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'NewsPaper',
      component: NewsPaperList
    },
    {
      path: '/:id',
      name: 'NewsPaperDetail',
      component: NewsPaperDetail
    }
  ]
})

export default router
