import axios from "axios";

const expServer = axios.create({
  baseURL: "http://localhost:3000", // Express 서버 주소
});

expServer.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default expServer;
