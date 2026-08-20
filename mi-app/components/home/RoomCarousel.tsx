"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Room } from "@/types";
import { RoomCardMini } from "@/components/shared/RoomCardMini";
import { useRef } from "react";

interface Props {
  rooms: Room[];
}

export function RoomCarousel({ rooms }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => ref.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  return (
    <div className="relative">
      <div ref={ref} className="flex gap-4 overflow-x-auto pb-2">
        {rooms.map((room) => (
          <RoomCardMini key={room.id} room={room} />
        ))}
      </div>
      <div className="absolute right-2 top-2 hidden gap-2 md:flex">
        <button className="rounded-full bg-white p-2 shadow" onClick={() => scrollBy(-1)}>
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button className="rounded-full bg-white p-2 shadow" onClick={() => scrollBy(1)}>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
