import type { RootType } from "../store";

export const selectCars = (state: RootType) => state.catalog.items || [];
export const selectCatalog = (state: RootType) => state.catalog;
export const selectCar = (state: RootType) => state.catalog.car;
export const selectIsLoading = (state: RootType) => state.catalog.isLoading;
export const selectError = (state: RootType) => state.catalog.error;
