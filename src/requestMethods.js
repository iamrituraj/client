import axios from "axios";

const BASE_URL = "https://api.riturajrajput.repl.co/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
