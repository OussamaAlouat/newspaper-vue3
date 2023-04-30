import { useNewsPaperStore } from './../stores/store';
import type { AxiosResponse } from "axios";

import newsApi from "@/api/news.api";
import { storeToRefs } from 'pinia';

const loadNewsPapers = async():Promise<AxiosResponse> => {
  const data = await newsApi.getAllNewsPapers();
  return data;
}

const useNewspapers = () => {
  //store reference
  const store = useNewsPaperStore();
  const { news, searchedNews, isLoading } = storeToRefs(store);

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
        store.setLoadingValue(false);
      }
    }).catch((err) => {
      store.setLoadingValue(false);
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