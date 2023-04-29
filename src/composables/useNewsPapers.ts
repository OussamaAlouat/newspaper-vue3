import { useNewsPaperStore } from './../stores/store';
import { useQuery } from "@tanstack/vue-query";
import type { AxiosResponse } from "axios";

import newsApi from "@/api/news.api";
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const loadNewsPapers = async():Promise<AxiosResponse> => {
  const data = await newsApi.getAllNewsPapers();
  console.log(data);
  return data;
}



const useNewspaper = () => {
  const store = useNewsPaperStore();
  const { news } = storeToRefs(store);

  const { data, isLoading } = useQuery(
    ['newsPaper'],
    () => loadNewsPapers()
  );

  watch(data, newsPapers => {
    if(newsPapers && newsPapers.data && newsPapers.data.data ) {
      const values = newsPapers.data.data;
      store.setNewsPapers(values)
    }
  });

  return {
    news,
    isLoading
  }
};

export default useNewspaper;