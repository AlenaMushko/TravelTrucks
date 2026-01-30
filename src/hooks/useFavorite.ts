import { useState, useCallback } from "react";

const FAVORITES_STORAGE_KEY = "travelTrucks_favorites";

const getFavoritesFromStorage = (): Set<string> => {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (stored) {
      const favorites = JSON.parse(stored);
      return new Set(Array.isArray(favorites) ? favorites : []);
    }
  } catch (error) {
    console.error("Error reading favorites from localStorage:", error);
  }
  return new Set<string>();
};

const saveFavoritesToStorage = (favorites: Set<string>): void => {
  try {
    localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(Array.from(favorites)),
    );
  } catch (error) {
    console.error("Error saving favorites to localStorage:", error);
  }
};

export const useFavorite = (truckId: string) => {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = getFavoritesFromStorage();
    return favorites.has(truckId);
  });

  const toggleFavorite = useCallback(() => {
    const favorites = getFavoritesFromStorage();
    const newIsFavorite = !isFavorite;

    if (newIsFavorite) {
      favorites.add(truckId);
    } else {
      favorites.delete(truckId);
    }

    saveFavoritesToStorage(favorites);
    setIsFavorite(newIsFavorite);
  }, [truckId, isFavorite]);

  return {
    isFavorite,
    toggleFavorite,
  };
};
