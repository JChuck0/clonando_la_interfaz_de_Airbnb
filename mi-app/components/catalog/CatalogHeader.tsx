"use client";

import { Search } from "lucide-react";
import { City, DateRange, Traveler } from "@/types";
import { DestinoDropdown } from "@/components/home/DestinoDropdown";
import { FechasDropdown } from "@/components/home/FechasDropdown";
import { ViajerosDropdown } from "@/components/home/ViajerosDropdown";
import { useState } from "react";

type Panel = "none" | "destino" | "fechas" | "viajeros";

interface Props {
  cities: City[];
  query: string;
  dateRange: DateRange;
  travelers: Traveler;
  onQueryChange: (query: string) => void;
  onDateRangeChange: (range: DateRange) => void;
  onTravelersChange: (travelers: Traveler) => void;
}

export function CatalogHeader(props: Props) {
  const [panel, setPanel] = useState<Panel>("none");
  return (
    <header className="relative hidden border-b bg-white md:block">
      <div className="mx-auto grid max-w-5xl grid-cols-[1fr_1fr_1fr_auto] items-center gap-2 rounded-full border p-2 my-4 shadow">
        <button className="rounded-full px-4 py-3 text-left hover:bg-gray-50" onClick={() => setPanel("destino")}>
          <p className="text-xs font-semibold">Destino</p>
          <p className="text-sm text-gray-500">{props.query || "Ciudad"}</p>
        </button>
        <button className="rounded-full px-4 py-3 text-left hover:bg-gray-50" onClick={() => setPanel("fechas")}>
          <p className="text-xs font-semibold">Fechas</p>
          <p className="text-sm text-gray-500">Añade fechas</p>
        </button>
        <button className="rounded-full px-4 py-3 text-left hover:bg-gray-50" onClick={() => setPanel("viajeros")}>
          <p className="text-xs font-semibold">Viajeros</p>
          <p className="text-sm text-gray-500">Añade viajeros</p>
        </button>
        <button className="mr-1 rounded-full bg-[#FF385C] p-3 text-white hover:bg-[#E31C5F]">
          <Search className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute left-10 right-10 z-20">
        {panel === "destino" && (
          <DestinoDropdown
            cities={props.cities}
            value={props.query}
            onSelect={(city) => props.onQueryChange(city.name)}
            closeOnSelect
            onClose={() => setPanel("none")}
          />
        )}
        {panel === "fechas" && <FechasDropdown value={props.dateRange} onChange={props.onDateRangeChange} />}
        {panel === "viajeros" && <ViajerosDropdown value={props.travelers} onChange={props.onTravelersChange} />}
      </div>
    </header>
  );
}
