import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key": __API_KEY__,
    "Content-Type": "application/json",
  },
});

export default api;
