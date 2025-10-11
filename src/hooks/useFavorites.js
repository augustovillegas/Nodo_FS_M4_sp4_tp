import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

const STORAGE_KEY = "rm-favorites";

// Maneja persistencia y toggles de favoritos centralizando la notificación.
export function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const favoriteIds = useMemo(
    () => new Set(favorites.map((item) => item.id)),
    [favorites],
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (character) => {
    const isFavorite = favoriteIds.has(character.id);

    setFavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((item) => item.id !== character.id)
        : [character, ...prevFavorites],
    );

    toast(isFavorite ? "Eliminado de favoritos" : "Agregado a favoritos");
  };

  return { favorites, favoriteIds, toggleFavorite };
}
