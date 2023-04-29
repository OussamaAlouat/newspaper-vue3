import { useNewsPaperStore } from './../stores/store';
import { useQuery } from "@tanstack/vue-query";
import type { AxiosResponse } from "axios";

import newsApi from "@/api/news.api";
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const loadNewsPapers = async():Promise<AxiosResponse> => {
  const data = await newsApi.getAllNewsPapers();
  return data;
}

const useNewspapers = () => {
  //store reference
  const store = useNewsPaperStore();
  const { news, searchedNews, isLoading } = storeToRefs(store);

  // Variables to control flux

  // Actions
  const getAllNewsPapers = () => {
    store.setLoadingValue(true);
    loadNewsPapers().then((response: AxiosResponse) => {
      if(response && response.data && response.data.data ) {
        const values = response.data.data;
        store.setNewsPapers(values);
        store.setLoadingValue(false);
      }
    }).catch((err) => {
      console.log(err);
    })
  };


  return {
    // Properties
    news,
    isLoading,
    searchedNews,

    // Actions
    getAllNewsPapers,
  }
};

export default useNewspapers;