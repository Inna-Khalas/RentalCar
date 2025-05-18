/* eslint-disable */

import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CarsResponse, CarsParams, Car } from "../../types/cars-types.js";
import { RentalCarApi } from "../../api/api.ts";

export const fetchCars = createAsyncThunk(
  "/cars/fetchAll",
  async (params: CarsParams, thunkApi) => {
    try {
      const { data } = await RentalCarApi.get<CarsResponse>("/cars", {
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
  async (id: string, thunkApi) => {
    try {
      const { data } = await RentalCarApi.get<Car>(`/cars/${id}`);

      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchBrands = createAsyncThunk(
  "/cars/brands",
  async (_, thunkApi) => {
    try {
      const { data } = await RentalCarApi.get("/brands");

      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
