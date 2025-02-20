import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "app/providers/store-provider/config/store";

export interface Cat {
  id: number;
}

export const fetchCats = createAsyncThunk<
  Cat[],
  void,
  { rejectValue: string; extra: ExtraArgument }
>("fetchCats", async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.get<Cat[]>(
      "/images/search?limit=10&breed_ids=beng"
    );
    return response.data;
  } catch (e) {
    console.log("error", e);
    thunkAPI.rejectWithValue(String(e));
  }
});
