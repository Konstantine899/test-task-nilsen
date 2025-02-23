import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchCats} from "pages/cats/model/api/fetchCats";

import {ICatsSchema} from "pages/cats/model/types/ICatsSchema";
import {ICat} from "pages/cats/model/types/ICat";

const initialState: ICatsSchema = {
  cats: [],
  isLoading: false,
  error: null,
  page: 1,
  hasMore: true,
};

export const catsSlice = createSlice({
  name: "catsSlice",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCats.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCats.fulfilled, (state, action: PayloadAction<ICat[]>) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.length > 0) {
          state.cats = [...state.cats, ...action.payload];
        } else {
          state.hasMore = false; // если новых данных нет
        }
      })
        .addCase(fetchCats.rejected, (state, action: any) => {
            state.isLoading = false;
            state.error = action.payload || "Произошла ошибка";
        })
});

export const { actions: catsAction } = catsSlice;
export const { reducer: catsReducer } = catsSlice;
