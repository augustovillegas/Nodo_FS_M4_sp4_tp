import React from "react";
import { motion } from "framer-motion";
import HeartButton from "./HeartButton";
import StatusBadge from "./StatusBadge";

// Tarjeta individual dentro del listado principal de personajes.
export default function CharacterCard({ character, isFavorite, onToggleFavorite }) {
  return (
    <motion.article
      layout
      whileHover={{ scale: 1.05, rotate: -1 }}
      className="relative overflow-hidden rounded-3xl border-4 border-[#00FF9C]/20 bg-[#1B2735]/80 p-4 shadow-[0_0_30px_#00FF9C33]"
    >
      <img
        src={character.image}
        alt={character.name}
        className="h-48 w-full rounded-2xl border-2 border-[#F7FF00]/30 object-cover"
      />
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg text-[#F7FF00] drop-shadow-[0_0_10px_#F7FF0055]">
          {character.name}
        </h3>
        <StatusBadge status={character.status} />
      </div>
      <p className="mt-1 text-xs text-[#00FF9C]/80">Especie: {character.species}</p>
      <p className="text-xs text-[#00FF9C]/80">
        Origen: {character.origin?.name || "Unknown"}
      </p>
      <div className="absolute right-3 top-3">
        <HeartButton active={isFavorite} onClick={() => onToggleFavorite(character)} />
      </div>
    </motion.article>
  );
}
