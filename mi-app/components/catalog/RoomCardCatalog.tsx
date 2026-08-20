"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Room } from "@/types";
import { useState } from "react";

interface Props {
  room: Room;
}

export function RoomCardCatalog({ room }: Props) {
  const [idx, setIdx] = useState(0);
  const [liked, setLiked] = useState(false);
  const next = () => setIdx((prev) => (prev + 1) % room.images.length);

  return (
    <Link href={`/rooms/${room.id}`} target="_blank" className="space-y-2">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image src={room.images[idx]} alt={room.title} fill className="object-cover" />
        <button
          className={`absolute right-2 top-2 rounded-full p-1.5 ${liked ? "bg-[#FF385C] text-white" : "bg-black/60 text-white"}`}
          onClick={(e) => {
            e.preventDefault();
            setLiked((prev) => !prev);
          }}
        >
          <Heart className="h-4 w-4" />
        </button>
        {room.badge && <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-1 text-xs font-medium shadow">{room.badge}</span>}
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
          {room.images.slice(0, 5).map((_, dot) => (
            <button
              key={dot}
              onClick={(e) => {
                e.preventDefault();
                setIdx(dot);
              }}
              className={`h-1.5 w-1.5 rounded-full ${dot === idx ? "bg-white" : "bg-white/60"}`}
            />
          ))}
          <button onClick={(e) => (e.preventDefault(), next())} className="sr-only">
            Siguiente
          </button>
        </div>
      </div>
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-semibold">{room.title}</p>
        <span className="flex shrink-0 items-center gap-1 text-sm">
          <Star className="h-3.5 w-3.5 fill-current" /> {room.rating}
        </span>
      </div>
      <p className="text-sm text-gray-500">{room.hostType}</p>
      <p className="text-sm text-gray-500">{room.availableDatesLabel}</p>
      <p className="text-sm text-gray-500">{room.bedInfo}</p>
      <p className="text-sm">
        {room.originalPricePerNight && <span className="mr-2 text-gray-400 line-through">{room.originalPricePerNight} €</span>}
        <span className="font-semibold underline">{Math.round(room.pricePerNight * 2)} € total</span>
      </p>
    </Link>
  );
}
