import { createSlice } from "@reduxjs/toolkit";
import { defaultValue, type Car } from "../../types/cars-types";
import { fetchCars, fetchCarsDetails } from ".././cars/operations";

interface CatalogValues {
  items: Car[];
  car: Car;
  isLoading: boolean;
  error: string | null;
  page: number;
  limit: number;
  totalPages: number;
  totalCars: number;
}

const initialState: CatalogValues = {
  items: [],
  car: defaultValue,
  isLoading: false,
  error: null,
  page: 1,
  limit: 100,
  totalPages: 0,
  totalCars: 0,
};

const statusRejected = (state: CatalogValues, action) => {
  state.isLoading = false;
  state.error = action.payload as string;
};

const statusPending = (state: CatalogValues) => {
  state.isLoading = true;
  state.error = null;
};

export const slice = createSlice({
  name: "car",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, statusPending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.cars;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.totalCars = action.payload.totalCars;
      })
      .addCase(fetchCars.rejected, statusRejected)
      .addCase(fetchCarsDetails.pending, statusPending)
      .addCase(fetchCarsDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car = action.payload;
      })
      .addCase(fetchCarsDetails.rejected, statusRejected);
  },
});

export default slice.reducer;
