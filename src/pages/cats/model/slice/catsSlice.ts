import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cat, fetchCats } from "pages/cats/model/api/fetchCats";

import { CatsSchema } from "pages/cats/model/types/CatsSchema";

const initialState: CatsSchema = {
  cats: [],
  isLoading: false,
  error: null,
};

export const catsSlice = createSlice({
  name: "catsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchCats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCats.fulfilled, (state, action: PayloadAction<Cat[]>) => {
        state.isLoading = false;
        state.cats = action.payload;
        state.error = null;
      })
      .addCase(
        fetchCats.rejected,
        (state, action: PayloadAction<string | null>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { actions: catsAction } = catsSlice;
export const { reducer: catsReducer } = catsSlice;
