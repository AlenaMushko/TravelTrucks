import { CONFIG } from "@/config";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { startLoading, stopLoading } from "./slices/loadingSlice";

const baseApiQuery = fetchBaseQuery({
  baseUrl: CONFIG.API_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    return headers;
  },
});

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  api.dispatch(startLoading());

  try {
    return await baseApiQuery(args, api, extraOptions);
  } catch (error) {
    throw error;
  } finally {
    api.dispatch(stopLoading());
  }
};
