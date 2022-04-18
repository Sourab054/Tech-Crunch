import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tech-crunch.herokuapp.com/api",
});
