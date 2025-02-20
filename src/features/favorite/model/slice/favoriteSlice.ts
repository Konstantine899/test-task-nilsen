import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFavoriteSchema } from "features/favorite/model/types/IFavoriteSchema";

const initialState: IFavoriteSchema = {
  favoriteIds: JSON.parse(localStorage.getItem("favoriteCats")) || [],
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      if (!state.favoriteIds.includes(action.payload)) {
        state.favoriteIds.push(action.payload);
        localStorage.setItem("favoriteCats", JSON.stringify(state.favoriteIds));
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteIds = state.favoriteIds.filter(
        (id) => id !== action.payload
      );
      localStorage.setItem("favoriteCats", JSON.stringify(state.favoriteIds));
    },
  },
});

export const { actions: favoriteAction } = favoriteSlice;
export const { reducer: favoriteReducer } = favoriteSlice;
