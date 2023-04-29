import type { AxiosPromise } from "axios";
import { axiosNewsInstance  } from "@/plugins/newsAxiosInstance";

export default {
   getAllNewsPapers: (): AxiosPromise => {
    return axiosNewsInstance.get('/');
  }
}
