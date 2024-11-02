import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://6543c49601b5e279de20edcb.mockapi.io/",
  headers: {
    "Content-Type": "application/json",
  },
});
