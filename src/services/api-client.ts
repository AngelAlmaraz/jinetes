import axios from "axios";

const api = axios.create({
    baseURL: "https://4nxi7wtmf2.execute-api.us-east-1.amazonaws.com/dev",
  });
  
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );
  
  export default api;