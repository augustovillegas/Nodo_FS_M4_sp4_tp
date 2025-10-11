import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/bangers";

import CharacterCard from "./components/CharacterCard";
import EmptyState from "./components/EmptyState";
import FavoritesPanel from "./components/FavoritesPanel";
import SearchForm from "./components/SearchForm";
import SkeletonCard from "./components/SkeletonCard";
import { useFavorites } from "./hooks/useFavorites";

// Normaliza la cantidad pedida a un rango valido.
const clampLimit = (value) => Math.min(20, Math.max(1, Number(value) || 8));

// Pantalla principal que articula busquedas, resultados y favoritos.
export default function App() {
  // Estado central para filtros, ciclo de carga y paneles.
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [characters, setCharacters] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const { favorites, favoriteIds, toggleFavorite } = useFavorites();

  // Consulta principal usando Axios para estandarizar errores y cumplir la consigna.
  const handleSearch = async ({ showToastOnSuccess = true } = {}) => {
    setLoading(true);
    setError("");

    try {
      const amount = clampLimit(limit);
      const url = new URL("https://rickandmortyapi.com/api/character");

      if (query.trim()) {
        url.searchParams.set("name", query.trim());
      }

      const { data } = await axios.get(url.toString());
      const list = Array.isArray(data.results)
        ? data.results.slice(0, amount)
        : [];

      setCharacters(list);
      if (showToastOnSuccess) {
        toast.success(`Listo, ${list.length} personaje(s) cargados.`);
      }
    } catch (err) {
      const message =
        err.response?.status === 404
          ? "No se encontraron personajes."
          : "Error al consultar la API.";

      setCharacters([]);
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Precarga resultados iniciales al montar la vista.
  useEffect(() => {
    handleSearch({ showToastOnSuccess: false });
  }, []);

  const limitToRender = clampLimit(limit);

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#0C0C0C] font-bangers text-white"
      style={{
        background:
          "radial-gradient(circle at center, #00FF9C22 0%, #1B2735 40%, #0C0C0C 90%)",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00FF9C33,#00000000_60%)]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
        {/* Seccion: cabecera descriptiva */}
        <header className="space-y-4 text-center">
          <h1 className="text-5xl text-[#00FF9C] drop-shadow-[0_0_15px_#00FF9C88] md:text-6xl">
            Rick & Morty
          </h1>
          <p className="text-lg text-[#F7FF00] drop-shadow-[0_0_10px_#F7FF0055]">
            Busca personajes interdimensionales y guardalos en tus favoritos.
          </p>
        </header>

        {/* Seccion: filtros y accion de busqueda */}
        <SearchForm
          query={query}
          limit={limit}
          loading={loading}
          onQueryChange={setQuery}
          onLimitChange={setLimit}
          onSubmit={handleSearch}
        />

        {/* Seccion: retroalimentacion de errores */}
        {error && (
          <div className="rounded-3xl border-4 border-[#7B2CBF]/50 bg-[#7B2CBF]/20 px-6 py-4 text-[#F7FF00]">
            {error}
          </div>
        )}

        {/* Seccion: resultados principal */}
        {loading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: limitToRender }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : characters.length > 0 ? (
          <motion.section
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                isFavorite={favoriteIds.has(character.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </motion.section>
        ) : (
          <EmptyState />
        )}

        {/* Seccion: favoritos persistidos */}
        <AnimatePresence>
          {showFavorites && (
            <FavoritesPanel
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onClose={() => setShowFavorites(false)}
            />
          )}
        </AnimatePresence>

      </div>
      {/* Acceso rapido a favoritos */}
      {!showFavorites && (
        <motion.button
          whileHover={{ x: -6 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowFavorites(true)}
          className="fixed top-1/2 right-0 z-30 flex -translate-y-1/2 items-center gap-3 rounded-l-full border-2 border-[#7B2CBF]/60 bg-[#1B2735]/95 px-5 py-3 font-bold tracking-wide text-[#F7FF00] shadow-[0_0_20px_#7B2CBF88] backdrop-blur-md"
        >
          Ver favoritos ({favorites.length})
        </motion.button>
      )}

      <footer className="border-t border-[#00FF9C]/20 py-6 text-center text-[#00FF9C]/70">
        <p>Hecho con portales, React y mucho caos interdimensional Wubba Lubba Dub-Dub!</p>
      </footer>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}



