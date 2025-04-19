// store/index.js
import { API } from "@/features/API/API";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(API.middleware),
});
