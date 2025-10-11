import React from "react";
import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";

// Sidebar lateral para navegar y gestionar los favoritos guardados.
export default function FavoritesPanel({ favorites, onToggleFavorite, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button
        type="button"
        aria-label="Cerrar favoritos"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="relative z-10 ml-auto flex h-full w-full max-w-md flex-col gap-4 overflow-hidden border-l-4 border-[#00FF9C]/40 bg-[#0C0C0C]/95 p-6 shadow-[0_0_25px_#00FF9C55] backdrop-blur-md"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-[#F7FF00]">Favoritos</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#00FF9C]/40 px-3 py-1 text-sm text-[#00FF9C] hover:bg-[#00FF9C]/10"
          >
            Cerrar
          </button>
        </div>

        <div className="h-px bg-[#00FF9C]/30" />

        {favorites.length === 0 ? (
          <p className="text-[#00FF9C]/60">Sin personajes guardados.</p>
        ) : (
          <div className="flex-1 overflow-y-auto pr-2">
            <div className="space-y-4">
              {favorites.map((character) => (
                <motion.div
                  key={character.id}
                  whileHover={{ scale: 1.01 }}
                  className="flex gap-3 rounded-2xl border-2 border-[#00FF9C]/30 bg-[#1B2735]/80 p-3"
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-[#F7FF00]">{character.name}</h3>
                      <StatusBadge status={character.status} />
                    </div>
                    <p className="text-xs text-[#00FF9C]/70">
                      Especie: {character.species} · Origen:{" "}
                      {character.origin?.name || "Unknown"}
                    </p>
                    <button
                      type="button"
                      onClick={() => onToggleFavorite(character)}
                      className="mt-auto w-full rounded-lg border border-[#00FF9C]/40 py-1 text-sm text-[#00FF9C] hover:bg-[#00FF9C]/20"
                    >
                      Quitar
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.aside>
    </motion.div>
  );
}
