import React from "react";

const STATUS_COLORS = {
  Alive: "bg-[#00FF9C]",
  Dead: "bg-[#7B2CBF]",
};

// Etiqueta visual que resalta el estado de vida del personaje.
export default function StatusBadge({ status }) {
  const colorClass = STATUS_COLORS[status] ?? "bg-[#555]";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bangers text-black ${colorClass}`}
    >
      <span className="h-2 w-2 rounded-full bg-black/50" />
      {status || "Unknown"}
    </span>
  );
}
