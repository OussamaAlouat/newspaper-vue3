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
  const store = useNewsPaperStore();
  const { searchedNews } = storeToRefs(store);

  const searchByTitle = (title: string) => {
    store.setLoadingValue(true);
    loadNewsPaper(title).then((result) =>{
      if (result && result.data) {
        store.setSearchedNews(result.data);
        store.setLoadingValue(false);
      } else {
        // No data found
        store.setLoadingValue(false);
      }
    }).catch((err) => {
      // There are some error
      store.setLoadingValue(false);
    })
  }

  return {
    // Properties
    searchedNews,

    // Actions
    searchByTitle,
  }
};

export default useNewspaper;