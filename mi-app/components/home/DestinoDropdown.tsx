"use client";

import { City } from "@/types";
import Image from "next/image";
import { useMemo, useState } from "react";

interface Props {
  cities: City[];
  value: string;
  onSelect: (city: City) => void;
  closeOnSelect?: boolean;
  onClose?: () => void;
}

export function DestinoDropdown({ cities, value, onSelect, closeOnSelect, onClose }: Props) {
  const [query, setQuery] = useState(value);

  const filtered = useMemo(() => {
    if (query === "") return cities;
    return cities.filter((city) => city.name.toLowerCase().includes(query.toLowerCase()));
  }, [cities, query]);

  return (
    <div className="space-y-2 rounded-2xl border bg-white p-4 shadow-md">
      <input
        className="w-full rounded-lg border px-3 py-2 text-sm"
        value={query}
        placeholder="Busca una ciudad"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="flex max-h-64 flex-col gap-2 overflow-y-auto">
        {filtered.length ? (
          filtered.map((city) => (
            <button
              key={city.id}
              className="flex items-center gap-3 rounded-lg p-2 text-left hover:bg-gray-50"
              onClick={() => {
                onSelect(city);
                if (closeOnSelect) onClose?.();
              }}
            >
              <Image src={city.image} alt={city.name} width={44} height={44} className="rounded-md object-cover" />
              <div>
                <p className="text-sm font-medium">{city.name}</p>
                <p className="text-xs text-gray-500">{city.reason}</p>
              </div>
            </button>
          ))
        ) : (
          <p className="px-2 py-4 text-sm text-gray-500">No hay resultados</p>
        )}
      </div>
    </div>
  );
}
