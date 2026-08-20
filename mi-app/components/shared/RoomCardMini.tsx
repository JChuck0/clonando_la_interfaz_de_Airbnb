"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Room } from "@/types";

interface Props {
  room: Room;
}

export function RoomCardMini({ room }: Props) {
  const [liked, setLiked] = useState(false);
  const showBadge = Boolean(room.badge);
  return (
    <Link href={`/rooms/${room.id}`} target="_blank" className="flex flex-col w-full min-w-64">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <Image src={room.images[0]} alt={room.title} fill className="object-cover" />
        {showBadge && (
          <span className="absolute top-2 left-2 rounded-full bg-white px-2 py-1 text-xs font-medium shadow">
            {room.badge}
          </span>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setLiked((prev) => !prev);
          }}
          className={`absolute top-2 ${showBadge ? "right-2" : "left-2"} rounded-full p-1.5 ${
            liked ? "bg-[#FF385C] text-white" : "bg-black/60 text-white"
          }`}
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <p className="mt-2 text-sm font-semibold">{room.title}</p>
      <p className="text-sm text-gray-500">
        {room.availableDatesLabel} · {room.hostType}
      </p>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold underline">{room.pricePerNight.toFixed(2)} € / noche</span>
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-current" /> {room.rating}
        </span>
      </div>
    </Link>
  );
}
