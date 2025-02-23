import {RootState} from "app/providers/store-provider/config/store";
import {createSelector} from "@reduxjs/toolkit";
import {ICat} from "pages/cats/model/types/ICat";

/**
 * Селектор для получения массива ID избранных котиков из состояния Redux.
 *
 * @function favoritesIdsSelector
 * @param {RootState} state - Глобальное состояние приложения.
 * @returns {ICat[]} Массив объектов ICat[], представляющих избранные котики.
 *
 * @description
 * Этот селектор извлекает список избранных котиков (`favoriteCats`) из состояния Redux.
 */

export const favoritesIdsSelector = (state: RootState): ICat[] =>
  state.favorite.favoriteCats;

/**
 * Селектор для проверки, находится ли конкретный котик в избранном.
 *
 * @function isFavoriteSelector
 * @param {ICat} cat - Объект котика для проверки.
 * @returns {(state: RootState) => boolean} Функция-селектор, которая возвращает true,
 * если котик находится в избранном, иначе false.
 *
 * @description
 * Этот селектор создаёт производный селектор с помощью `createSelector` из Redux Toolkit.
 * Он проверяет, содержит ли массив избранных котиков (`favoriteCats`) объект с указанным ID (`cat.id`).
 */

export const isFavoriteSelector = (cat: ICat): (state: RootState) => boolean =>
  createSelector(favoritesIdsSelector, (state) =>
    state.some((favoriteCat) => favoriteCat.id === cat.id)
  );
