import { RootState } from "app/providers/store-provider/config/store";
import { createSelector } from "@reduxjs/toolkit";

export const favoritesIdsSelector = (state: RootState) =>
  state.favorite.favoriteIds;

export const isFavoriteSelector = (id: string) =>
  createSelector(favoritesIdsSelector, (state) => state.includes(id));
