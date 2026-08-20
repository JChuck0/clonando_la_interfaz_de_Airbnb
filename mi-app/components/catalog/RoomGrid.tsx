"use client";

import { Room } from "@/types";
import { RoomCardCatalog } from "@/components/catalog/RoomCardCatalog";

interface Props {
  rooms: Room[];
  query: string;
}

export function RoomGrid({ rooms, query }: Props) {
  const visibleRooms = rooms.filter((room) =>
    `${room.title} ${room.citySlug}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
      {visibleRooms.map((room) => (
        <RoomCardCatalog key={room.id} room={room} />
      ))}
    </section>
  );
}
