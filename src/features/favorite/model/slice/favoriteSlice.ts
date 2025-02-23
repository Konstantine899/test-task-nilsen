import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFavoriteSchema} from "features/favorite/model/types/IFavoriteSchema";
import {ICat} from "pages/cats/model/types/ICat";

const initialState: IFavoriteSchema = {
    favoriteCats: JSON.parse(localStorage.getItem("favoriteCats") || "[]"),
};

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<ICat>) => {
            const exist = state.favoriteCats.some(
                (cat) => cat.id === action.payload.id
            );
            if (!exist) {
                state.favoriteCats.push(action.payload);
                localStorage.setItem(
                    "favoriteCats",
                    JSON.stringify(state.favoriteCats)
                );
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoriteCats = state.favoriteCats.filter(
                (cat) => cat.id !== action.payload
            );
            localStorage.setItem("favoriteCats", JSON.stringify(state.favoriteCats));
        },
    },
});

export const {actions: favoriteAction} = favoriteSlice;
export const {reducer: favoriteReducer} = favoriteSlice;
