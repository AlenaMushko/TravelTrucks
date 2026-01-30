export const API_ROUTES = {
  CAMPERS: {
    GET_ALL: "/campers",
    GET_BY_ID: (id: string) => `/campers/${id}`,
  },
} as const;
