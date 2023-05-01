import axios from "axios";

export const axiosNewsInstance = axios.create({
  baseURL: process.env.VUE_APP_VERSION,
});