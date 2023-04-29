import { axiosNewsInstance  } from "@/plugins/newsAxiosInstance";
import type { AxiosPromise } from "axios";

const getAllNewsPapers = (): AxiosPromise => {
  return axiosNewsInstance.get('/');
}

export {
  getAllNewsPapers
};