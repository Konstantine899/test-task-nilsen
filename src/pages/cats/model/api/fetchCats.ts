import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExtraArgument } from "app/providers/store-provider/config/store";
import { ICat } from "pages/cats/model/types/ICat";

export const fetchCats = createAsyncThunk<
  ICat[],
  void,
  { rejectValue: string; extra: ExtraArgument }
>("fetchCats", async (_, thunkAPI) => {
  try {
    const response = await thunkAPI.extra.get<ICat[]>(
      "/images/search?limit=10&breed_ids=beng"
    );
    return response.data;
  } catch (e) {
    console.log("error", e);
    thunkAPI.rejectWithValue(String(e));
  }
});
