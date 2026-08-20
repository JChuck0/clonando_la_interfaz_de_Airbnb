"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Room } from "@/types";

interface Props {
  room: Room;
}

export function HotelCard({ room }: Props) {
  return (
    <Link href={`/rooms/${room.id}`} target="_blank" className="flex w-72 flex-col gap-2">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image src={room.images[0]} alt={room.title} fill className="object-cover" />
        <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-1 text-xs font-medium shadow">Hotel destacado</span>
      </div>
      <p className="text-sm font-semibold">{room.title}</p>
      <p className="text-sm text-green-700">{room.discountBadge}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold underline">{Math.round(room.pricePerNight * 2)} € total</span>
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-current" /> {room.rating}
        </span>
      </div>
    </Link>
  );
}
