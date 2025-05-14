import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CarsResponse, Params } from "../types/types.js";
import { URL } from "../api/api.ts";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (params: Params, thunkApi) => {
    try {
      const { data } = await URL.get<CarsResponse>("/cars", { params });
      return data;
    } catch (
      error: any // як мені правильно типізувати помилку?
    ) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
