import { configureStore } from "@reduxjs/toolkit";
import { CamperAPI } from "./apis/camperAPI";
import catalogReducer from "./slices/catalogSlice";

export const store = configureStore({
  reducer: {
    [CamperAPI.reducerPath]: CamperAPI.reducer,
    catalog: catalogReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(CamperAPI.middleware),
  devTools: import.meta.env.DEV,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { API_ROUTES } from "./apiRoutes";
export * from "./slices/catalogSlice";
export * from "./hooks";
