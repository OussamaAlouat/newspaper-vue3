import type { AxiosPromise } from "axios";
import { axiosNewsInstance  } from "@/plugins/newsAxiosInstance";

export default {
   getAllNewsPapers: (): AxiosPromise => {
    return axiosNewsInstance.get('/all');
  },

  getNewsByTitle: (title: string):AxiosPromise => {
    return axiosNewsInstance.get(`/?title=${title}`);
  },

  getNewsById: (id: string) => {
    return axiosNewsInstance.get(`/id/${id}`);
  }
}
