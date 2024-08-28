import axios from "axios";

const BASE_URL = process.env.API_URL_DEV;
const apiClient = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
