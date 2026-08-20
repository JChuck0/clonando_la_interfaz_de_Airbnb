"use client";

import { Amenity } from "@/types";
import { IconFromName } from "@/components/shared/IconFromName";
import { useState } from "react";

interface Props {
  amenities: Amenity[];
  totalAmenitiesCount: number;
}

export function AmenitiesList({ amenities, totalAmenitiesCount }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? amenities : amenities.slice(0, 6);
  return (
    <section className="space-y-4 border-b py-6">
      <h3 className="text-lg font-semibold">¿Qué ofrece este lugar?</h3>
      <div className="space-y-3">
        {visible.map((amenity) => (
          <div key={amenity.label} className={`flex items-center gap-3 ${amenity.available ? "" : "text-gray-400 line-through"}`}>
            <IconFromName name={amenity.icon} className={`h-5 w-5 ${amenity.available ? "" : "text-gray-400"}`} />
            <span>{amenity.label}</span>
          </div>
        ))}
      </div>
      <button className="rounded-lg border px-4 py-2 text-sm font-medium" onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? "Mostrar menos" : `Mostrar las ${totalAmenitiesCount} comodidades`}
      </button>
    </section>
  );
}
