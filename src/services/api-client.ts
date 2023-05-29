import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[]
}

const axiosInstance = axios.create({
    baseURL: "https://4nxi7wtmf2.execute-api.us-east-1.amazonaws.com/dev",
  });

  
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );

  class APIClient<T> {
    endpoint: string

    constructor(endpoint: string){
      this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
      return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
    }

    get = (id: string) => {
      return axiosInstance
      .get<T>(this.endpoint + '?id=' + id)
      .then(res => res.data
      );
    }
  }
  
  export default APIClient;