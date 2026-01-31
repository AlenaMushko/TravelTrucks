import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetCampersQuery } from "@/store/apis/camperAPI";
import {
  setTrucks,
  addTrucks,
  setCurrentPage,
} from "@/store/slices/catalogSlice";
import type { RootState, AppDispatch } from "@/store";
import type { CampersQueryParams } from "@/store/types/camper";

const ITEMS_PER_PAGE = 4;

export const useCatalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { trucks, currentPage, filters, searchId } = useSelector(
    (state: RootState) => state.catalog,
  );

  const queryParams: CampersQueryParams & { _searchId?: number } = {
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    _searchId: searchId,
  };

  if (filters.location && filters.location.trim()) {
    queryParams.location = filters.location;
  }

  if (filters.van) {
    queryParams.form = "van";
  } else if (filters.fullyIntegrated) {
    queryParams.form = "fullyIntegrated";
  } else if (filters.alcove) {
    queryParams.form = "alcove";
  }

  if (filters.AC) queryParams.AC = true;
  if (filters.bathroom) queryParams.bathroom = true;
  if (filters.kitchen) queryParams.kitchen = true;
  if (filters.TV) queryParams.TV = true;

  const { data, isLoading, isFetching, isError, error } = useGetCampersQuery(
    queryParams,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  useEffect(() => {
    if (data) {
      if (currentPage === 1) {
        dispatch(setTrucks(data));
      } else {
        dispatch(addTrucks(data));
      }
    }
  }, [data, currentPage, dispatch]);

  const handleLoadMore = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };

  const hasMore =
    data && trucks
      ? trucks.items.length < data.total && data.items.length === ITEMS_PER_PAGE
      : false;

  const showLoader = isLoading && currentPage === 1;

  return {
    trucks,
    filters,
    isLoading: showLoader,
    isFetching,
    isError,
    error,
    hasMore: hasMore || false,
    onLoadMore: handleLoadMore,
  };
};
