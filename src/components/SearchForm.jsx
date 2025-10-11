import React from "react";
import { motion } from "framer-motion";

// Formulario de filtros que dispara la consulta a la API.
export default function SearchForm({
  query,
  limit,
  onQueryChange,
  onLimitChange,
  onSubmit,
  loading,
}) {
  return (
    <motion.form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-4 rounded-3xl border-4 border-[#00FF9C]/20 bg-[#1B2735]/60 p-6 shadow-[0_0_25px_#00FF9C22] md:flex-row md:items-end"
    >
      <label className="flex flex-1 flex-col text-sm text-[#00FF9C]">
        Personaje
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Ej: Rick, Morty, Summer..."
          className="mt-1 rounded-2xl border-2 border-[#00FF9C]/30 bg-[#0C0C0C]/70 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#00FF9C]/70"
        />
      </label>
      <label className="flex flex-col text-sm text-[#00FF9C] md:w-32">
        Cantidad
        <input
          type="number"
          min="1"
          max="20"
          value={limit}
          onChange={(event) => onLimitChange(event.target.value)}
          className="mt-1 rounded-2xl border-2 border-[#00FF9C]/30 bg-[#0C0C0C]/70 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#00FF9C]/70"
        />
      </label>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={loading}
        className="h-[52px] w-full rounded-2xl bg-[#00FF9C] px-8 font-bold uppercase tracking-wide text-black shadow-[0_0_15px_#00FF9C88] transition disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {loading ? "Buscando..." : "Buscar"}
      </motion.button>
    </motion.form>
  );
}
