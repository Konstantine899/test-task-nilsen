import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCats} from "pages/cats/model/api/fetchCats";

import {ICatsSchema} from "pages/cats/model/types/ICatsSchema";
import {ICat} from "pages/cats/model/types/ICat";

/**
 * Начальное состояние редюсера catsSlice.
 */

const initialState: ICatsSchema = {
    cats: [],
    isLoading: false,
    error: null,
    page: 1,
    hasMore: true,
    limit: 10,
    breed_ids: 'beng'
};

export const catsSlice = createSlice({
    name: "catsSlice", // Имя редюсера
    initialState,
    reducers: {
        /**
         * Обновляет номер текущей страницы.
         *
         * @param state - Текущее состояние.
         * @param action - Действие с новым номером страницы.
         */
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchCats.pending, (state) => {
                /**
                 * Устанавливает флаг загрузки и очищает ошибку при начале запроса.
                 */
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCats.fulfilled, (state, action: PayloadAction<ICat[]>) => {
                /**
                 * Обрабатывает успешный результат запроса.
                 * Добавляет новые данные в массив cats и обновляет hasMore.
                 */
                state.isLoading = false;
                state.error = null;
                if (action.payload.length > 0) {
                    state.cats = [...state.cats, ...action.payload]; // Добавляем новые данные
                } else {
                    state.hasMore = false; // если новых данных нет
                }
            })
            .addCase(fetchCats.rejected, (state, action: any) => {
                /**
                 * Обрабатывает ошибку запроса.
                 * Устанавливает флаг загрузки в false и сохраняет сообщение об ошибке.
                 */
                state.isLoading = false;
                state.error = action.payload || "Произошла ошибка";
            })
});

// Экспортируем действия и редюсер
export const {actions: catsAction} = catsSlice;
export const {reducer: catsReducer} = catsSlice;
