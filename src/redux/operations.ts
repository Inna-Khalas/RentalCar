import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Car, Params } from "../types/types.js";
import { URL } from "../api/api.ts";

export const fetchCars = createAsyncThunk(
  "cars/fetchAll",
  async (params: Params, thunkApi) => {
    try {
      const { data } = await URL.get<Car[]>("/cars", { params });
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
