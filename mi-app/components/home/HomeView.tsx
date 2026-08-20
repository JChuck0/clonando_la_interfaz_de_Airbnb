"use client";

import { useMemo, useState } from "react";
import { cities } from "@/data/cities";
import { rooms } from "@/data/rooms";
import { useMockData } from "@/hooks/useMockData";
import { SearchFilters } from "@/types";
import { NavbarDesktop } from "@/components/home/NavbarDesktop";
import { SearchBarDesktop } from "@/components/home/SearchBarDesktop";
import { SearchButtonMobile } from "@/components/home/SearchButtonMobile";
import { SearchModalMobile } from "@/components/home/SearchModalMobile";
import { CategoryPillsMobile } from "@/components/home/CategoryPillsMobile";
import { CitySection } from "@/components/home/CitySection";
import { BottomNavMobile } from "@/components/shared/BottomNavMobile";
import { Footer } from "@/components/shared/Footer";

const initialFilters: SearchFilters = {
  query: "",
  category: "Todo",
  dateRange: { checkIn: null, checkOut: null },
  travelers: { adults: 0, children: 0, babies: 0, pets: 0 },
};

export function HomeView() {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data, loading } = useMockData(() => ({ cities, rooms }), []);

  const roomsByCity = useMemo(() => {
    if (!data) return new Map<string, typeof rooms>();
    return new Map(data.cities.map((city) => [city.id, data.rooms.filter((room) => room.citySlug === city.id)]));
  }, [data]);

  return (
    <main className="pb-24 md:pb-0">
      <NavbarDesktop category={filters.category} onCategoryChange={(category) => setFilters((prev) => ({ ...prev, category }))} />
      <SearchBarDesktop
        cities={cities}
        query={filters.query}
        dateRange={filters.dateRange}
        travelers={filters.travelers}
        onQueryChange={(query) => setFilters((prev) => ({ ...prev, query }))}
        onDateRangeChange={(dateRange) => setFilters((prev) => ({ ...prev, dateRange }))}
        onTravelersChange={(travelers) => setFilters((prev) => ({ ...prev, travelers }))}
      />
      <SearchButtonMobile onOpen={() => setMobileOpen(true)} />
      <CategoryPillsMobile value={filters.category} onChange={(category) => setFilters((prev) => ({ ...prev, category }))} />
      <SearchModalMobile
        open={mobileOpen}
        cities={cities}
        query={filters.query}
        dateRange={filters.dateRange}
        travelers={filters.travelers}
        onClose={() => setMobileOpen(false)}
        onQueryChange={(query) => setFilters((prev) => ({ ...prev, query }))}
        onDateRangeChange={(dateRange) => setFilters((prev) => ({ ...prev, dateRange }))}
        onTravelersChange={(travelers) => setFilters((prev) => ({ ...prev, travelers }))}
      />
      <div className="mx-auto mt-6 flex max-w-6xl flex-col gap-10">
        {loading &&
          Array.from({ length: 3 }, (_, i) => <div key={i} className="mx-4 h-64 animate-pulse rounded-2xl bg-gray-100" />)}
        {!loading &&
          data?.cities.map((city) => <CitySection key={city.id} city={city} rooms={roomsByCity.get(city.id)?.slice(0, 6) ?? []} />)}
      </div>
      <Footer />
      <BottomNavMobile />
    </main>
  );
}
