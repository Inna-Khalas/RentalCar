import { createSlice } from "@reduxjs/toolkit";
import type { Car } from "../types/types";
import { fetchCars } from "./operations";

interface CatalogValues {
  items: Car[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CatalogValues = {
  items: [],
  isLoading: false,
  error: null,
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
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default slice.reducer;
