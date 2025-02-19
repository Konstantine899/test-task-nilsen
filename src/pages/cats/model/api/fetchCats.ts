import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Cat {
  id: number;
}

export const fetchCats = createAsyncThunk<Cat[], void, { rejectValue: string }>(
  "fetchCats",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Cat[]>(
        "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_OIalWbPJ3RyJ5KCeUz3SfrgvPuJPz3CTxFWELO6hZtl7NJxPYOn8bI2IQ7JuZulM"
      );
      return response.data;
    } catch (e) {
      console.log("error", e);
      thunkAPI.rejectWithValue(String(e));
    }
  }
);
