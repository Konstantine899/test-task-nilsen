import { configureStore, ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "entities/counter";
import { catsReducer } from "pages/cats";
import api from "shared/config/api";

export function createReduxStore(initialState: StateSchema) {
  return configureStore<StateSchema>({
    reducer: { counter: counterReducer, cats: catsReducer },
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
  : StateSchema;

// Определяем AppDispatch на основе типа возвращаемого значения createReduxStore
export type AppDispatch = ThunkDispatch<RootState, undefined, UnknownAction>;

export type ExtraArgument = typeof api;
