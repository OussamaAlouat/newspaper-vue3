import { ref } from 'vue';
import { defineStore } from 'pinia';

import type { NewsPaper } from '@/interfaces/newsPaper';

export const useNewsPaperStore = defineStore('news', () => {
  const news = ref<NewsPaper[]>([]);
  const isLoading = ref<boolean>(false);

  const setNewsPapers= (data: NewsPaper[]):void => {
    news.value = formatDatesOfdNews(data);
  }

  const formatDatesOfdNews = (data: NewsPaper[]): NewsPaper[] => {
    for(const news of data) {
      news.creation_date = new Date(news.creation_date).toLocaleDateString();
    }

    return data;
  }

  const setLoadingValue = (value: boolean):void => {
    isLoading.value = value;
  };

  return { 
    // Properties
    news,
    isLoading,

    // Getters

    // Actions
    setNewsPapers,
    setLoadingValue
   }
})
