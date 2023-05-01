import axios from "axios";

export const axiosNewsInstance = axios.create({
  baseURL: 'http://localhost:3005/newspaper',
});