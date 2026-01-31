import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CampersResponse } from "../types/camper";
import type { FiltersState } from "../types/filters";

interface CatalogState {
  trucks: CampersResponse | null;
  currentPage: number;
  filters: FiltersState;
  searchId: number;
}

const initialState: CatalogState = {
  trucks: null,
  currentPage: 1,
  filters: {
    location: "",
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    van: false,
    fullyIntegrated: false,
    alcove: false,
  },
  searchId: 0,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setTrucks: (state, action: PayloadAction<CampersResponse>) => {
      state.trucks = action.payload;
    },
    addTrucks: (state, action: PayloadAction<CampersResponse>) => {
      if (!state.trucks) {
        state.trucks = action.payload;
        return;
      }
      const existingIds = new Set(state.trucks.items.map((truck) => truck.id));
      const newItems = action.payload.items.filter(
        (truck) => !existingIds.has(truck.id),
      );
      state.trucks = {
        items: [...state.trucks.items, ...newItems],
        total: action.payload.total,
      };
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    resetCatalog: (state) => {
      state.trucks = null;
      state.currentPage = 1;
    },
    setFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1;
      state.trucks = null;
      state.searchId = Date.now();
    },
    resetFilters: (state) => {
      state.filters = initialState.filters;
      state.currentPage = 1;
      state.trucks = null;
      state.searchId = Date.now();
    },
  },
});

export const {
  setTrucks,
  addTrucks,
  setCurrentPage,
  resetCatalog,
  setFilters,
  resetFilters,
} = catalogSlice.actions;

export default catalogSlice.reducer;
