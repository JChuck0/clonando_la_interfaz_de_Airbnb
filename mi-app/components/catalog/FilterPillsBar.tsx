"use client";

import { SlidersHorizontal } from "lucide-react";

const filters = [
  "Hotel",
  "Llegada autónoma",
  "Reserva inmediata",
  "Aparcamiento gratuito",
  "Wifi",
  "Aire acondicionado",
  "Admite mascotas",
  "TV",
  "1 baño o más",
  "Lavadora",
];

interface Props {
  value: string[];
  onChange: (filters: string[]) => void;
}

export function FilterPillsBar({ value, onChange }: Props) {
  const toggle = (label: string) =>
    onChange(value.includes(label) ? value.filter((item) => item !== label) : [...value, label]);

  return (
    <div className="flex gap-2 overflow-x-auto border-b px-4 py-3">
      <button className="flex items-center gap-1 rounded-full border px-3 py-2 text-sm">
        <SlidersHorizontal className="h-4 w-4" /> Filtros
      </button>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => toggle(filter)}
          className={`whitespace-nowrap rounded-full border px-3 py-2 text-sm ${
            value.includes(filter) ? "border-black bg-gray-100 font-medium" : ""
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
