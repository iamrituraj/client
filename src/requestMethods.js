import axios from "axios";

const BASE_URL = "https://f-kart-api.onrender.com/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
