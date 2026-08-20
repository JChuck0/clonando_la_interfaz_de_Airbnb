"use client";

import { Traveler } from "@/types";

const rows: { key: keyof Traveler; title: string; subtitle: string }[] = [
  { key: "adults", title: "Adultos", subtitle: "13 años o más" },
  { key: "children", title: "Niños", subtitle: "De 2 a 12 años" },
  { key: "babies", title: "Bebés", subtitle: "Menores de 2 años" },
  { key: "pets", title: "Mascotas", subtitle: "Viajas con mascota" },
];

interface Props {
  value: Traveler;
  onChange: (next: Traveler) => void;
}

export function ViajerosDropdown({ value, onChange }: Props) {
  const increment = (key: keyof Traveler) => onChange({ ...value, [key]: value[key] + 1 });
  const decrement = (key: keyof Traveler) => onChange({ ...value, [key]: Math.max(0, value[key] - 1) });

  return (
    <div className="space-y-3 rounded-2xl border bg-white p-4 shadow-md">
      {rows.map((row) => (
        <div key={row.key} className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">{row.title}</p>
            <p className="text-xs text-gray-500">{row.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="h-8 w-8 rounded-full border" onClick={() => decrement(row.key)}>
              -
            </button>
            <span className="min-w-4 text-center text-sm">{value[row.key]}</span>
            <button className="h-8 w-8 rounded-full border" onClick={() => increment(row.key)}>
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
