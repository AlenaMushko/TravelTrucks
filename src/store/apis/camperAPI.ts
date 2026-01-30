import { createApi } from "@reduxjs/toolkit/query/react";

import { API_ROUTES } from "../apiRoutes";
import { baseQuery } from "../baseQuery";
import type {
  Camper,
  CampersQueryParams,
  CampersResponse,
} from "../types/camper";

export const CamperAPI = createApi({
  reducerPath: "CamperAPI",
  baseQuery: baseQuery,
  tagTypes: ["CamperList", "CamperItem"],
  endpoints: (builder) => ({
    getCampers: builder.query<CampersResponse, CampersQueryParams>({
      query: (params) => {
        const searchParams = new URLSearchParams();

        if (params) {
          if (params.location && params.location.trim()) {
            searchParams.append("location", params.location);
          }
          if (params.form && params.form.trim()) {
            searchParams.append("form", params.form);
          }
          if (params.AC === true) {
            searchParams.append("AC", "true");
          }
          if (params.bathroom === true) {
            searchParams.append("bathroom", "true");
          }
          if (params.kitchen === true) {
            searchParams.append("kitchen", "true");
          }
          if (params.TV === true) {
            searchParams.append("TV", "true");
          }
          if (params.radio === true) {
            searchParams.append("radio", "true");
          }
          if (params.refrigerator === true) {
            searchParams.append("refrigerator", "true");
          }
          if (params.microwave === true) {
            searchParams.append("microwave", "true");
          }
          if (params.gas === true) {
            searchParams.append("gas", "true");
          }
          if (params.water === true) {
            searchParams.append("water", "true");
          }
          if (params.page !== undefined) {
            searchParams.append("page", String(params.page));
          }
          if (params.limit !== undefined) {
            searchParams.append("limit", String(params.limit));
          }
        }

        const queryString = searchParams.toString();
        return {
          url: `${API_ROUTES.CAMPERS.GET_ALL}${queryString ? `?${queryString}` : ""}`,
          method: "GET",
        };
      },
      providesTags: ["CamperList"],
    }),

    getCamperById: builder.query<Camper, { id: string }>({
      query: ({ id }) => ({
        url: API_ROUTES.CAMPERS.GET_BY_ID(id),
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "CamperItem", id }],
    }),
  }),
});

export const {
  useGetCampersQuery,
  useGetCamperByIdQuery,
  useLazyGetCampersQuery,
} = CamperAPI;
