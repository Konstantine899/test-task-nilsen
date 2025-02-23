import {configureStore} from "@reduxjs/toolkit";
import {IStateSchema} from "./IStateSchema";
import {catsReducer} from "pages/cats";
import api from "shared/config/api";
import {favoriteReducer} from "features/favorite";
import {AxiosInstance} from "axios";


export const createReduxStore = (initialState: IStateSchema) => {
    return configureStore({
        reducer: { cats: catsReducer, favorite: favoriteReducer },
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: { api } ,
                },
            }),
    });
};

export interface ExtraArgument {
    api: AxiosInstance;
}
export type RootState = IStateSchema;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
