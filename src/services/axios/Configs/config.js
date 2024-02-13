import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://energetic-tutu-seal.cyclic.app",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

export default apiRequest;

apiRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === "ERR_NETWORK" || error.code === "ECONNABORTED") {
      throw new Error("خطا در اتصال به سرور");
    }

    console.log("Error", error);
    return Promise.reject(error);
  }
);
