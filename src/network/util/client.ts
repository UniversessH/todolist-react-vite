// import { toastSth } from "@/App";
import { Toast } from "@douyinfe/semi-ui";
import axios, { AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "http://120.76.142.160:8801",
  timeout: 10000,
});

client.interceptors.request.use(
  (config) => {
    const token: string | null = localStorage.getItem("token");
    if (config.headers && token) config.headers.token = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error.response);
    // toastSth("error", error.response.data.message, { theme: "colored" });
    Toast.error({ content: error.response.data.message, duration: 3 });
    return Promise.reject(error);
  }
);

export default client;
