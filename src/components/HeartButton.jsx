import React from "react";
import { motion } from "framer-motion";

// Botón animado para marcar o quitar favoritos.
export default function HeartButton({ active, onClick }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      onClick={onClick}
      className={`rounded-full border-2 border-[#F7FF00]/40 p-2 shadow-lg transition-all ${
        active
          ? "bg-[#F7FF00]/40 text-[#F7FF00]"
          : "bg-[#00FF9C]/20 text-[#00FF9C] hover:bg-[#00FF9C]/40"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M11.645 20.91a.75.75 0 0 0 .71 0c1.604-.853 6.895-3.948 8.365-8.608a5.438 5.438 0 0 0-2.119-6.154c-2.273-1.544-5.324-.787-6.956 1.325-1.632-2.112-4.683-2.869-6.956-1.325a5.438 5.438 0 0 0-2.12 6.154c1.47 4.66 6.761 7.755 8.366 8.608Z"
          clipRule="evenodd"
        />
      </svg>
    </motion.button>
  );
}
