import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import type { NewsPaper } from '@/interfaces/newsPaper';

export const useNewsPaperStore = defineStore('news', () => {
  const news = ref<NewsPaper[]>([]);
  const searchedNews = ref<NewsPaper[]>([]);

  const setNewsPapers= (data: NewsPaper[]) => {
    news.value = data;
  }

  const setSearchedNews = (data: NewsPaper[]) => {
    searchedNews.value = data;
  }

  return { 
    // Properties
    news,
    searchedNews,

    // Getters

    // Actions
    setNewsPapers,
    setSearchedNews,
   }
})
