import axios from "axios";

export const axiosNewsInstance = axios.create({
  baseURL: import.meta.env.NEWS_API,
});