import { useNewsPaperStore } from './../stores/store';
import { useQuery } from "@tanstack/vue-query";
import type { AxiosResponse } from "axios";

import newsApi from "@/api/news.api";
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const loadNewsPaper = async(title: string):Promise<AxiosResponse> => {
  const data = await newsApi.getNewsByTitle(title);
  return data;
}

const useNewspaper = () => {
  console.log('Me llama')
  const store = useNewsPaperStore();
  const { searchedNews } = storeToRefs(store);
  const isLoading = ref<boolean>(false);

  const searchByTitle = (title: string) => {
    loadNewsPaper(title).then((result) =>{
      if (result && result.data) {
        store.setSearchedNews(result.data);
        isLoading.value = false;
      }
    });
  }

  return {
    // Properties
    searchedNews,
    isLoading,
    // Actions
    searchByTitle,
  }
};

export default useNewspaper;