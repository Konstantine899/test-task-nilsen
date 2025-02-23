import {configureStore} from "@reduxjs/toolkit";
import {IStateSchema} from "./IStateSchema";
import {catsReducer} from "pages/cats";
import api from "shared/config/api";
import {favoriteReducer} from "features/favorite";
import {AxiosInstance} from "axios";

/**
 * Создаёт Redux store с заданным начальным состоянием и настройками middleware.
 *
 * @function createReduxStore
 * @param {IStateSchema} initialState - Начальное состояние Redux store.
 *
 * @description
 * Эта функция создаёт Redux store с помощью configureStore из Redux Toolkit.
 * В store включены редюсеры для страницы котиков (`catsReducer`) и фичи "избранное" (`favoriteReducer`).
 * Также настраивается middleware для поддержки extraArgument (AxiosInstance) в Thunk'ах.
 */

export const createReduxStore = (initialState: IStateSchema) => {
    return configureStore({
        /**
         * Объект reducer, содержащий редюсеры для разных частей приложения.
         * @property {catsReducer} cats - Редюсер для управления состоянием страницы котиков.
         * @property {favoriteReducer} favorite - Редюсер для управления состоянием избранных котиков.
         */
        reducer: {cats: catsReducer, favorite: favoriteReducer},
        /**
         * Включение Redux DevTools только в режиме разработки.
         * @constant {boolean} __IS_DEV__ - Переменная окружения, указывающая на режим разработки.
         */
        devTools: __IS_DEV__,
        /**
         * Устанавливает начальное состояние store.
         * Если initialState не передан, будет использовано пустое состояние.
         */
        preloadedState: initialState,
        /**
         * Конфигурация middleware для store.
         * Добавляется поддержка extraArgument (AxiosInstance) для Thunk'ов.
         */
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {api}, // Передаём экземпляр API как extraArgument для Thunk'ов
                },
            }),
    });
};

/**
 * Интерфейс ExtraArgument определяет структуру данных, доступных через extraArgument в Thunk'ах.
 *
 * @interface ExtraArgument
 * @property {AxiosInstance} api - Экземпляр Axios для выполнения HTTP-запросов.
 */
export interface ExtraArgument {
    api: AxiosInstance;
}

/**
 * Тип RootState представляет глобальное состояние Redux store.
 *
 * @typealias {RootState}
 * @type {IStateSchema} - Глобальное состояние приложения.
 */
export type RootState = IStateSchema;

/**
 * Тип AppDispatch представляет диспатчер Redux store, созданный функцией createReduxStore.
 *
 * @typealias {AppDispatch}
 * @type {typeof createReduxStore['dispatch']} - Dispatch-функция, возвращаемая configureStore.
 */
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
