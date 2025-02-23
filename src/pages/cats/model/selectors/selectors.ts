import {RootState} from "app/providers/store-provider";
import {createSelector} from "@reduxjs/toolkit";

/**
 * Базовый селектор для получения состояния cats из RootState.
 *
 * @param state - Глобальное состояние приложения.
 * @returns Состояние cats.
 */

const getCatsState = (state: RootState) => state.cats;

/**
 * Получает список котиков из состояния.
 *
 * @returns Массив объектов ICat[].
 */
export const getCats = createSelector(
  getCatsState,
  (getCatsState) => getCatsState.cats
);

/**
 * Получает флаг загрузки из состояния.
 *
 * @returns boolean — true, если данные загружаются.
 */

export const getCatsLoading = createSelector(
  getCatsState,
  (catsState) => catsState.isLoading
);

/**
 * Получает сообщение об ошибке из состояния.
 *
 * @returns string | null — сообщение об ошибке или null, если ошибок нет.
 */

export const getCatsError = createSelector(
  getCatsState,
  (catsState) => catsState.error
);

/**
 * Получает флаг наличия дополнительных данных из состояния.
 *
 * @returns boolean — true, если есть ещё данные для загрузки.
 */

export const getCatsHasMore = createSelector(
  getCatsState,
  (catsState) => catsState.hasMore
);

/**
 * Получает текущую страницу пагинации из состояния.
 *
 * @returns number — номер текущей страницы.
 */

export const getCatsPage = createSelector(
  getCatsState,
  (catsState) => catsState.page || 1
);
