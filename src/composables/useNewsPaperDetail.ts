import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import type { AxiosPromise } from 'axios';

import  newsApi  from '@/api/news.api';
import type { NewsPaper } from './../interfaces/newsPaper';
import { useNewsPaperStore } from '@/stores/store';

const getNewsPaperById = (id: string): AxiosPromise => {
  return newsApi.getNewsById(id);
}

const useNewsPapeDetail = (id: string) => {
  const store = useNewsPaperStore();
  const { news, isLoading } = storeToRefs(store);
  const newsPaper = ref<NewsPaper | null>(null);

  // set the is loading a true
  store.setLoadingValue(true);
  const finded = news.value.find((elem: NewsPaper) => elem._id === id);

  if (finded) {
    store.setLoadingValue(false);
    newsPaper.value = finded;
  } else {
    getNewsPaperById(id).then((resp) => {
      if(resp.data) {
        newsPaper.value = resp.data;
      } else {
        newsPaper.value = null;
      }

      store.setLoadingValue(false);
    }).catch((err) => {
      store.setLoadingValue(false);
      newsPaper.value = null;;
    })
  }

  return {
    // Properties
    newsPaper,
    isLoading
  }
};

export default useNewsPapeDetail;