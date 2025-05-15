import { configureStore } from "@reduxjs/toolkit";
import catalogReducer from "./cars/slice";

const store = configureStore({
  reducer: {
    catalog: catalogReducer,
  },
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
