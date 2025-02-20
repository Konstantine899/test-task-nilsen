import { configureStore, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { IStateSchema } from "./IStateSchema";
import { catsReducer } from "pages/cats";
import api from "shared/config/api";

export function createReduxStore(initialState: IStateSchema) {
  return configureStore<IStateSchema>({
    reducer: { cats: catsReducer },
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: api } }),
  });
}

export type RootState = ReturnType<typeof createReduxStore> extends {
  getState: () => infer S;
}
  ? S
  : IStateSchema;

// Определяем AppDispatch на основе типа возвращаемого значения createReduxStore
export type AppDispatch = ThunkDispatch<RootState, undefined, UnknownAction>;

export type ExtraArgument = typeof api;
