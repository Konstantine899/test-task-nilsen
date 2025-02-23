import {createAsyncThunk} from "@reduxjs/toolkit";
import {ExtraArgument, RootState,} from "app/providers/store-provider/config/store";
import {ICat} from "pages/cats/model/types/ICat";

export const fetchCats = createAsyncThunk<
    ICat[],
    void,
    { rejectValue: string; extra: ExtraArgument; state: RootState }
>("fetchCats", async (_, thunkAPI) => {
    const {cats} = thunkAPI.getState();
    const page = cats.page;
    try {
        const response = await thunkAPI.extra.api.get<ICat[]>(
            `/images/search?limit=10&page=${page}&breed_ids=beng`
        );
        return response.data;
    } catch (error: any) {
        const message =
            error.response?.data?.message || error.message || "Unknown error";
        return thunkAPI.rejectWithValue(message);
    }
});
