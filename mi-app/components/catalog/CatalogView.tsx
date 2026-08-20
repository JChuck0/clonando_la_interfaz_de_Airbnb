"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { cities } from "@/data/cities";
import { rooms } from "@/data/rooms";
import { useMockData } from "@/hooks/useMockData";
import { CatalogHeader } from "@/components/catalog/CatalogHeader";
import { CatalogHeaderMobile } from "@/components/catalog/CatalogHeaderMobile";
import { FilterPillsBar } from "@/components/catalog/FilterPillsBar";
import { RoomGrid } from "@/components/catalog/RoomGrid";
import { MapToggleMobile } from "@/components/catalog/MapToggleMobile";
import { FeaturedHotelsSection } from "@/components/catalog/FeaturedHotelsSection";
import { DateRange, Traveler } from "@/types";

const DynamicMapView = dynamic(() => import("@/components/catalog/MapView").then((mod) => mod.MapView), { ssr: false });

interface Props {
  citySlug?: string;
}

const initialTravelers: Traveler = { adults: 0, children: 0, babies: 0, pets: 0 };

export function CatalogView({ citySlug }: Props) {
  const activeCity = cities.find((city) => city.id === citySlug) ?? cities[0];
  const [query, setQuery] = useState(activeCity.name);
  const [dateRange, setDateRange] = useState<DateRange>({ checkIn: null, checkOut: null });
  const [travelers, setTravelers] = useState(initialTravelers);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [mobileMap, setMobileMap] = useState(false);

  const { data, loading } = useMockData(
    () => rooms.filter((room) => room.citySlug === activeCity.id),
    [activeCity.id],
  );

  const filteredRooms = useMemo(() => {
    if (!data) return [];
    return data.filter((room) => (activeFilters.includes("Hotel") ? room.isHotel : true));
  }, [activeFilters, data]);

  return (
    <main>
      <CatalogHeaderMobile summary={`${activeCity.name} · Añade fechas · Añade viajeros`} />
      <CatalogHeader
        cities={cities}
        query={query}
        dateRange={dateRange}
        travelers={travelers}
        onQueryChange={setQuery}
        onDateRangeChange={setDateRange}
        onTravelersChange={setTravelers}
      />
      <FilterPillsBar value={activeFilters} onChange={setActiveFilters} />
      {loading && <div className="m-4 h-80 animate-pulse rounded-2xl bg-gray-100" />}
      {!loading && (
        <div className="md:flex">
          <div className={`${mobileMap ? "hidden" : "block"} md:block md:w-1/2`}>
            <RoomGrid rooms={filteredRooms} query={query} />
            <FeaturedHotelsSection rooms={filteredRooms} />
          </div>
          <div className={`${mobileMap ? "fixed inset-0 top-16 z-20 block" : "hidden"} md:sticky md:top-0 md:block md:h-screen md:w-1/2`}>
            <DynamicMapView center={[activeCity.lat, activeCity.lng]} rooms={filteredRooms} className="h-full min-h-[60vh]" />
          </div>
        </div>
      )}
      <MapToggleMobile open={mobileMap} onToggle={() => setMobileMap((prev) => !prev)} />
    </main>
  );
}
