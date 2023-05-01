import { useNewsPaperStore } from './../stores/store';
import type { AxiosResponse } from "axios";

import newsApi from "@/api/news.api";
import { storeToRefs } from 'pinia';

const loadNewsPaper = async(title: string):Promise<AxiosResponse> => {
  const data = await newsApi.getNewsByTitle(title);
  return data;
}

const useNewspaper = () => {
  const store = useNewsPaperStore();
  const {  news } = storeToRefs(store);

  const searchByTitle = (title: string) => {
    store.setLoadingValue(true);
    loadNewsPaper(title).then((result) =>{
      if (result && result.data) {
        store.setNewsPapers(result.data);
        store.setLoadingValue(false);
      } else {
        // No data found
        store.setNewsPapers([]);
        store.setLoadingValue(false);
      }
    }).catch((err) => {
      // There are some error
      store.setNewsPapers([]);
      store.setLoadingValue(false);
    })
  }

  return {
    // Properties
    news,

    // Actions
    searchByTitle,
  }
};

export default useNewspaper;