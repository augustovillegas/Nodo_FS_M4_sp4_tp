import React from "react";
import { motion } from "framer-motion";

// Mensaje decorativo cuando no hay resultados listados.
export default function EmptyState() {
  return (
    <motion.div
      className="mt-12 flex flex-col items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="h-40 w-40 rounded-full bg-gradient-to-tr from-[#00FF9C] to-[#7B2CBF] blur-2xl opacity-30"
      />
      <h2 className="mt-4 font-bangers text-2xl text-[#F7FF00] drop-shadow-[0_0_10px_#00FF9C]">
        Abre el portal y busca un personaje!
      </h2>
    </motion.div>
  );
}
