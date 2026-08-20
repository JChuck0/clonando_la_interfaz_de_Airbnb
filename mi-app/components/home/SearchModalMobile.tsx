"use client";

import { ArrowLeft } from "lucide-react";
import { City, DateRange, Traveler } from "@/types";
import { DestinoDropdown } from "@/components/home/DestinoDropdown";
import { FechasDropdown } from "@/components/home/FechasDropdown";
import { ViajerosDropdown } from "@/components/home/ViajerosDropdown";

interface Props {
  open: boolean;
  cities: City[];
  query: string;
  dateRange: DateRange;
  travelers: Traveler;
  onClose: () => void;
  onQueryChange: (query: string) => void;
  onDateRangeChange: (range: DateRange) => void;
  onTravelersChange: (travelers: Traveler) => void;
}

export function SearchModalMobile(props: Props) {
  if (!props.open) return null;
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-white p-4 md:hidden">
      <button onClick={props.onClose} className="mb-3 rounded-full border p-2">
        <ArrowLeft className="h-5 w-5" />
      </button>
      <DestinoDropdown
        cities={props.cities}
        value={props.query}
        onSelect={(city) => props.onQueryChange(city.name)}
      />
      <div className="mt-4">
        <FechasDropdown value={props.dateRange} onChange={props.onDateRangeChange} mobile />
      </div>
      <div className="mt-4">
        <ViajerosDropdown value={props.travelers} onChange={props.onTravelersChange} />
      </div>
    </div>
  );
}
