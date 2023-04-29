import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import type { NewsPaper } from '@/interfaces/newsPaper';

export const useNewsPaperStore = defineStore('news', () => {
  const news = ref<NewsPaper[]>([]);
  const searchedNews = ref<NewsPaper[]>([]);
  const isLoading = ref<boolean>(false);

  const setNewsPapers= (data: NewsPaper[]) => {
    news.value = data;
  }

  const setSearchedNews = (data: NewsPaper[]) => {
    searchedNews.value = data;
  }

  const setLoadingValue = (value: boolean) => {
    isLoading.value = value;
  };

  return { 
    // Properties
    news,
    searchedNews,
    isLoading,

    // Getters

    // Actions
    setNewsPapers,
    setSearchedNews,
    setLoadingValue
   }
})
