import { useQuery } from "@tanstack/vue-query";
import type { AxiosResponse } from "axios";

import newsApi from "@/api/news.api";

const loadNewsPapers = async():Promise<AxiosResponse> => {
  const data = await newsApi.getAllNewsPapers();
  console.log(data);
  return data;
}

const useNewspaper = () => {
  const { data, isLoading } = useQuery(
    ['newsPaper'],
    () => loadNewsPapers(),
  );

  return {
    news: data,
    isLoading
  }
};

export default useNewspaper;