import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFavoriteSchema} from "../types/IFavoriteSchema";
import {ICat} from "pages/cats/model/types/ICat";

/**
 * Начальное состояние редюсера favoriteSlice.
 *
 * @constant {IFavoriteSchema} initialState
 * @property {ICat[]} favoriteCats - Массив избранных котиков, загружаемый из localStorage.
 */

const initialState: IFavoriteSchema = {
    favoriteCats: JSON.parse(localStorage.getItem("favoriteCats") || "[]"),
};

/**
 * Редюсер favoriteSlice управляет состоянием избранных котиков.
 *
 * @remarks
 * Состояние хранится как массив объектов ICat[], который синхронизируется с localStorage.
 * Доступны два действия: addFavorite (добавление котика в избранное) и removeFavorite (удаление котика из избранного).
 */

export const favoriteSlice = createSlice({
    name: "favorites", // Имя редюсера
    initialState, // Начальное состояние
    reducers: {
        /**
         * Добавляет котика в избранное, если его ещё нет в списке.
         *
         * @param state - Текущее состояние редюсера.
         * @param action - Объект действия с payload типа ICat.
         * @description
         * Проверяет, существует ли котик с таким ID в состоянии.
         * Если котика нет, он добавляется в список избранных и сохраняется в localStorage.
         */
        addFavorite: (state, action: PayloadAction<ICat>) => {
            const exist = state.favoriteCats.some(
                (cat) => cat.id === action.payload.id
            ); // Проверяем, есть ли котик в избранном
            if (!exist) {
                state.favoriteCats.push(action.payload); // Добавляем котика в избранное
                localStorage.setItem(
                    "favoriteCats",
                    JSON.stringify(state.favoriteCats)
                ); // Сохраняем обновлённый список в localStorage
            }
        },

        /**
         * Удаляет котика из избранного по его ID.
         *
         * @param state - Текущее состояние редюсера.
         * @param action - Объект действия с payload типа string (ID котика).
         * @description
         * Фильтрует массив избранных котиков, исключая котика с указанным ID,
         * и сохраняет обновлённый список в localStorage.
         */

        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoriteCats = state.favoriteCats.filter(
                (cat) => cat.id !== action.payload
            ); // Удаляем котика из избранного
            localStorage.setItem("favoriteCats", JSON.stringify(state.favoriteCats)); // Сохраняем обновлённый список в localStorage
        },
    },
});

// Экспорт действий и редюсера
export const {actions: favoriteAction} = favoriteSlice;
export const {reducer: favoriteReducer} = favoriteSlice;
