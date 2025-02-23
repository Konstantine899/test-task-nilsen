import {createAsyncThunk} from "@reduxjs/toolkit";
import {ExtraArgument, RootState} from "app/providers/store-provider";
import {ICat} from "pages/cats/model/types/ICat";

/**
 * Асинхронное действие для загрузки списка котиков из API.
 *
 * @function fetchCats
 * @type {AsyncThunk<ICat[], void, { rejectValue: string; extra: ExtraArgument; state: RootState }>}
 *
 * @description
 * Этот Thunk выполняет запрос к API для получения списка котиков на основе текущего состояния Redux.
 * Параметры запроса (`page`, `limit`, `breed_ids`) извлекаются из состояния `cats` в Redux.
 * Если запрос выполнен успешно, возвращается массив объектов ICat[].
 * Если произошла ошибка, возвращается строка с сообщением об ошибке через `rejectWithValue`.
 *
 * @param {void} _ - Второй аргумент не используется (пустой).
 * @param {ThunkAPI} thunkAPI - Объект, содержащий методы и данные для работы с Thunk'ом.
 *
 * @returns {Promise<ICat[]> | Promise<string>} - Массив объектов ICat[] при успешном запросе или строка с ошибкой при неудаче.
 */

export const fetchCats = createAsyncThunk<
    ICat[], // Тип успешного результата
    void, // Тип аргумента (нет входных данных)
    { rejectValue: string; extra: ExtraArgument; state: RootState } // Дополнительные параметры Thunk'а
>("fetchCats", async (_, thunkAPI) => {
    /**
     * Извлекаем текущее состояние cats из Redux.
     * @constant {ICatsSchema} catsState - Состояние cats.
     * @property {number} page - Номер текущей страницы пагинации.
     * @property {number} limit - Лимит элементов на странице.
     * @property {string} breed_ids - ID породы для фильтрации.
     */
    const {cats} = thunkAPI.getState();
    const page:number = cats.page; // Текущая страница пагинации
    const limit:number = cats.limit; // Лимит элементов на странице
    const breed_ids: string = cats.breed_ids // ID породы для фильтрации
    try {
        /**
         * Выполняем GET-запрос к API для получения списка котиков.
         * @constant {ICat[]} response.data - Ответ от сервера с массивом котиков.
         */
        const response = await thunkAPI.extra.api.get<ICat[]>(
            `/images/search`,
            {
                params: {
                    limit,
                    page,
                    breed_ids
                }
            }
        );
        /**
         * Возвращаем данные из ответа сервера.
         * @returns {ICat[]} - Массив объектов ICat[].
         */
        return response.data;
    } catch (error: any) {
        /**
         * Обрабатываем ошибку запроса.
         * Если ошибка содержит детальное сообщение из API (error.response?.data?.message),
         * используем его. В противном случае используем error.message или дефолтное значение "Unknown error".
         *
         * @constant {string} message - Сообщение об ошибке.
         * @returns {string} - Строка с сообщением об ошибке через rejectWithValue.
         */
        const message =
            error.response?.data?.message || error.message || "Unknown error";
        return thunkAPI.rejectWithValue(message);
    }
});
