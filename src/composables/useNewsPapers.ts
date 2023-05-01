import { storeToRefs } from 'pinia';
import { computed, watch } from 'vue';
import type { AxiosResponse } from "axios";

import type { NewsPaper } from './../interfaces/newsPaper';
import { useNewsPaperStore } from './../stores/store';
import newsApi from "@/api/news.api";


const loadNewsPapers = async():Promise<AxiosResponse> => {
  const data = await newsApi.getAllNewsPapers();
  return data;
}

const useNewspapers = () => {
  //store reference
  const store = useNewsPaperStore();
  const { news, isLoading, searchAll } = storeToRefs(store);

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
        store.resetNewsArray();
        store.setLoadingValue(false);
      }
    }).catch((err) => {
      store.setLoadingValue(false);
      store.resetNewsArray();
      console.log(err);
    })
  };

  watch(searchAll, (newValue: boolean) => {
    if(newValue) {
      getAllNewsPapers();
    } else {
      store.setNewsPapers([]);
    }
  })

  return {
    // Properties
    news,
    isLoading,
    totalNews: computed<number>(() => news.value.length),
    searchAll,

    // Actions
    getAllNewsPapers,
  }
};

export default useNewspapers;