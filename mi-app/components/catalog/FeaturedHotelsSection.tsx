"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Room } from "@/types";
import { HotelCard } from "@/components/catalog/HotelCard";
import { useMemo, useRef, useState } from "react";

interface Props {
  rooms: Room[];
}

export function FeaturedHotelsSection({ rooms }: Props) {
  const hotels = useMemo(() => rooms.filter((room) => room.isHotel).slice(0, 5), [rooms]);
  const [page, setPage] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  const move = (dir: number) => {
    setPage((prev) => Math.min(Math.max(prev + dir, 1), Math.max(hotels.length, 1)));
    ref.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  if (!hotels.length) return null;
  return (
    <section className="space-y-4 border-t px-4 py-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Hoteles destacados</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm">{page}/{hotels.length}</span>
          <button className="rounded-full border p-2" onClick={() => move(-1)}>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="rounded-full border p-2" onClick={() => move(1)}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-500">Opciones con descuento y servicios premium para tu escapada.</p>
      <div ref={ref} className="flex gap-4 overflow-x-auto pb-2">
        {hotels.map((room) => (
          <HotelCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
}
