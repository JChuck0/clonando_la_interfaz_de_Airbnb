"use client";

import { ArrowLeft, Heart, Share } from "lucide-react";
import { useRouter } from "next/navigation";

export function RoomHeaderMobile() {
  const router = useRouter();
  return (
    <header className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between p-4 md:hidden">
      <button onClick={() => router.back()} className="rounded-full bg-white/90 p-2">
        <ArrowLeft className="h-5 w-5" />
      </button>
      <div className="flex gap-2">
        <button className="rounded-full bg-white/90 p-2">
          <Share className="h-5 w-5" />
        </button>
        <button className="rounded-full bg-white/90 p-2">
          <Heart className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
