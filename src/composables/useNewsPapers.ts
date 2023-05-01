import { useNewsPaperStore } from './../stores/store';
import type { AxiosResponse } from "axios";

import newsApi from "@/api/news.api";
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const loadNewsPapers = async():Promise<AxiosResponse> => {
  const data = await newsApi.getAllNewsPapers();
  return data;
}

const useNewspapers = () => {
  //store reference
  const store = useNewsPaperStore();
  const { news, isLoading } = storeToRefs(store);

  // Actions
  const getAllNewsPapers = () => {
    store.setLoadingValue(true);
    loadNewsPapers().then((response: AxiosResponse) => {
      if(response && response.data && response.data.data ) {
        const values = response.data.data;
        store.setNewsPapers(values);
        store.setLoadingValue(false);
      } else {
        // No data found
        store.setNewsPapers([]);
        store.setLoadingValue(false);
      }
    }).catch((err) => {
      store.setLoadingValue(false);
      store.setNewsPapers([]);
      console.log(err);
    })
  };


  return {
    // Properties
    news,
    isLoading,
    totalNews: computed<number>(() => news.value.length),

    // Actions
    getAllNewsPapers,
  }
};

export default useNewspapers;