import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_OIalWbPJ3RyJ5KCeUz3SfrgvPuJPz3CTxFWELO6hZtl7NJxPYOn8bI2IQ7JuZulM",
    "Content-Type": "application/json",
  },
});

export default api;
