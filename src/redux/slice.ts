import { createSlice } from "@reduxjs/toolkit";
import type { Car } from "../types/types";
import { fetchCars } from "./operations";

interface CatalogValues {
  items: Car[];
  isLoading: boolean;
  error: string | null;
  page: number;
  limit: number;
  totalPages: number;
  totalCars: number;
}

const initialState: CatalogValues = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 100,
  totalPages: 0,
  totalCars: 0,
};

export const slice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.cars;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalCars = action.payload.totalCars;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default slice.reducer;
