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

/**
 * Хук для роботи з каталогом кемперів
 * Містить всю логіку завантаження даних, пагінації та фільтрації
 */
export const useCatalog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { trucks, currentPage, filters } = useSelector(
    (state: RootState) => state.catalog,
  );

  // Формуємо параметри запиту, виключаючи неактивні фільтри
  const queryParams: CampersQueryParams = {
    page: currentPage,
    limit: ITEMS_PER_PAGE,
  };

  // Додаємо тільки активні фільтри
  if (filters.location && filters.location.trim()) {
    queryParams.location = filters.location;
  }
  if (filters.form && filters.form.trim()) {
    queryParams.form = filters.form;
  }
  if (filters.AC) queryParams.AC = true;
  if (filters.bathroom) queryParams.bathroom = true;
  if (filters.kitchen) queryParams.kitchen = true;
  if (filters.TV) queryParams.TV = true;
  if (filters.radio) queryParams.radio = true;
  if (filters.refrigerator) queryParams.refrigerator = true;
  if (filters.microwave) queryParams.microwave = true;
  if (filters.gas) queryParams.gas = true;
  if (filters.water) queryParams.water = true;

  const { data, isLoading, isFetching } = useGetCampersQuery(queryParams);

  // Оновлюємо список кемперів при отриманні нових даних
  useEffect(() => {
    if (data) {
      if (currentPage === 1) {
        // Перше завантаження - замінюємо весь список
        dispatch(setTrucks(data));
      } else {
        // Додаємо нові кемпери до існуючих
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

  return {
    trucks,
    filters,
    isLoading: isLoading && currentPage === 1,
    isFetching,
    hasMore: hasMore || false,
    onLoadMore: handleLoadMore,
  };
};
