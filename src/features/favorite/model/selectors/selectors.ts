import { RootState } from "app/providers/store-provider/config/store";
import { createSelector } from "@reduxjs/toolkit";
import { ICat } from "pages/cats/model/types/ICat";

export const favoritesIdsSelector = (state: RootState) =>
  state.favorite.favoriteCats;

export const isFavoriteSelector = (cat: ICat) =>
  createSelector(favoritesIdsSelector, (state) =>
    state.some((favoriteCat) => favoriteCat.id === cat.id)
  );
