import React from "react";
import { motion } from "framer-motion";

// Placeholder animado que se muestra mientras cargan los datos.
export default function SkeletonCard() {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="rounded-3xl border-4 border-[#00FF9C]/20 bg-[#1B2735]/30 shadow-[0_0_20px_#00FF9C33]"
    >
      <div className="h-40 w-full bg-[#00FF9C]/10" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-2/3 rounded bg-[#00FF9C]/10" />
        <div className="h-3 w-1/2 rounded bg-[#00FF9C]/10" />
        <div className="h-3 w-1/4 rounded bg-[#00FF9C]/10" />
      </div>
    </motion.div>
  );
}
