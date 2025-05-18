/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";
import { type Car, type CarsFilterParams } from "../../types/cars-types";
import { fetchBrands, fetchCars, fetchCarsDetails } from ".././cars/operations";

interface CatalogValues {
  items: Car[];
  car: Car | null;
  brands: [];
  isLoading: boolean;
  error: string | null;
  page: number;
  limit: number;
  totalPages: number;
  totalCars: number;
  filters: CarsFilterParams;
}

const initialState: CatalogValues = {
  items: [],
  car: null,
  brands: [],
  isLoading: false,
  error: null,
  page: 1,
  limit: 10,
  totalPages: 0,
  totalCars: 0,
  filters: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
};

const statusRejected = (state: CatalogValues, action: any) => {
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
  reducers: {
    brand: (state, action) => {
      state.filters.brand = action.payload;
      state.page = 1;
      state.items = [];
    },
    rentalPrice: (state, action) => {
      state.filters.rentalPrice = action.payload;
      state.page = 1;
      state.items = [];
    },
    minMileage: (state, action) => {
      state.filters.minMileage = action.payload;
      state.page = 1;
      state.items = [];
    },
    maxMileage: (state, action) => {
      state.filters.maxMileage = action.payload;
      state.page = 1;
      state.items = [];
    },
    setPage: (state, action) => {
      state.page = +action.payload;
    },
    resetItems: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, statusPending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.page = Number(action.payload.page);
        state.totalPages = Number(action.payload.totalPages);
        state.totalCars = Number(action.payload.totalCars);

        if (state.page === 1) {
          state.items = action.payload.cars;
        } else {
          state.items = [...state.items, ...action.payload.cars];
        }
      })
      .addCase(fetchCars.rejected, statusRejected)
      .addCase(fetchCarsDetails.pending, statusPending)
      .addCase(fetchCarsDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.car = action.payload;
      })
      .addCase(fetchCarsDetails.rejected, statusRejected)
      .addCase(fetchBrands.pending, statusPending)
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBrands.rejected, statusRejected);
  },
});
export const {
  brand,
  rentalPrice,
  minMileage,
  maxMileage,
  setPage,
  resetItems,
} = slice.actions;

export default slice.reducer;
