import { RootState } from "app/providers/store-provider/config/store";
import { createSelector } from "@reduxjs/toolkit";

const getCatsState = (state: RootState) => state.cats;

export const getCats = createSelector(
  getCatsState,
  (getCatsState) => getCatsState.cats
);

export const getCatsLoading = createSelector(
  getCatsState,
  (catsState) => catsState.isLoading
);

export const getCatsError = createSelector(
  getCatsState,
  (catsState) => catsState.error
);

export const getCatsHasMore = createSelector(
  getCatsState,
  (catsState) => catsState.hasMore
);

export const getCatsPage = createSelector(
  getCatsState,
  (catsState) => catsState.page
);
