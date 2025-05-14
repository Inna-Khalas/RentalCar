import type { RootType } from "../redux/store";

export const selectCars = (state: RootType) => state.catalog.items || [];
export const selectCatalog = (state: RootType) => state.catalog;
