import {ICat} from "pages/cats/model/types/ICat";

/**
 * Схема состояния для страницы "Котики".
 *
 * @interface ICatsSchema
 * @property {ICat[]} cats - Массив объектов котиков.
 * @property {boolean} isLoading - Флаг загрузки данных.
 * @property {null | string} error - Сообщение об ошибке или null, если ошибки нет.
 * @property {number} page - Текущая страница пагинации.
 * @property {boolean} hasMore - Есть ли ещё данные для загрузки.
 */

export interface ICatsSchema {
    cats: ICat[];
    isLoading: boolean;
    error: string | null;
    page: number;
    hasMore: boolean;
    limit: number,
    breed_ids: string
}
