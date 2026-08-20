import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { City, Room } from "@/types";
import { RoomCarousel } from "@/components/home/RoomCarousel";

interface Props {
  city: City;
  rooms: Room[];
}

export function CitySection({ city, rooms }: Props) {
  return (
    <section className="space-y-3 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{city.name}</h2>
        <Link href={`/catalog?city=${city.id}`} className="flex items-center gap-1 text-sm font-medium">
          Ver ciudad <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      <RoomCarousel rooms={rooms} />
    </section>
  );
}
