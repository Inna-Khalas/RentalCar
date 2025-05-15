import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CarsResponse, CarsParams, Car } from "../../types/cars-types.js";
import { RENTAL_CAR_API } from "../../api/api.ts";

export const fetchCars = createAsyncThunk(
  "/cars/fetchAll",
  async (params: CarsParams, thunkApi) => {
    try {
      const { data } = await RENTAL_CAR_API.get<CarsResponse>("/cars", {
        params,
      });
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarsDetails = createAsyncThunk(
  "/cars/id",
  async (id, thunkApi) => {
    try {
      const { data } = await RENTAL_CAR_API.get<Car>(`/cars/${id}`);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
