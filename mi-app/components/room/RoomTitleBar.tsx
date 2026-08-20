"use client";

import { Heart, Share } from "lucide-react";

interface Props {
  title: string;
}

export function RoomTitleBar({ title }: Props) {
  return (
    <div className="hidden items-center justify-between py-6 md:flex">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex gap-4 text-sm font-medium">
        <button className="flex items-center gap-1 underline">
          <Share className="h-4 w-4" /> Compartir
        </button>
        <button className="flex items-center gap-1 underline">
          <Heart className="h-4 w-4" /> Guardar
        </button>
      </div>
    </div>
  );
}
