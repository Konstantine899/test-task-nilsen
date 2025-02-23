import axios from "axios";

/**
 * Экземпляр Axios для взаимодействия с TheCatAPI.
 *
 * @constant
 * @type {AxiosInstance}
 * @default
 * @example
 * api.get('/images/search').then(response => console.log(response.data));
 */

const api = axios.create({
  /**
   * Базовый URL для всех запросов.
   */
  baseURL: "https://api.thecatapi.com/v1",
  /**
   * Заголовки для каждого запроса.
   */
  headers: {
    /**
     * API-ключ для аутентификации.
     */
    "x-api-key": __API_KEY__,
    "Content-Type": "application/json",
  },
});

export default api;
