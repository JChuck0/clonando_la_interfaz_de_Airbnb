"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { findRoomById } from "@/data/rooms";
import { useMockData } from "@/hooks/useMockData";
import { DateRange, Traveler } from "@/types";
import { RoomHeaderDesktop } from "@/components/room/RoomHeaderDesktop";
import { RoomHeaderMobile } from "@/components/room/RoomHeaderMobile";
import { PhotoCarouselMobile } from "@/components/room/PhotoCarouselMobile";
import { RoomTitleBar } from "@/components/room/RoomTitleBar";
import { PhotoGridDesktop } from "@/components/room/PhotoGridDesktop";
import { RoomInfoSummary } from "@/components/room/RoomInfoSummary";
import { HostCard } from "@/components/room/HostCard";
import { HighlightsList } from "@/components/room/HighlightsList";
import { DescriptionBlock } from "@/components/room/DescriptionBlock";
import { AmenitiesList } from "@/components/room/AmenitiesList";
import { BookingCard } from "@/components/room/BookingCard";
import { BookingCalendarMobile } from "@/components/room/BookingCalendarMobile";
import { StickyFooterMobile } from "@/components/room/StickyFooterMobile";
import { ReviewsSummary } from "@/components/room/ReviewsSummary";

const DynamicLocationMap = dynamic(() => import("@/components/room/LocationMap").then((mod) => mod.LocationMap), {
  ssr: false,
});

interface Props {
  id: string;
}

const initialTravelers: Traveler = { adults: 0, children: 0, babies: 0, pets: 0 };

export function RoomView({ id }: Props) {
  const [dateRange, setDateRange] = useState<DateRange>({ checkIn: null, checkOut: null });
  const [travelers, setTravelers] = useState<Traveler>(initialTravelers);
  const { data: room, loading } = useMockData(() => findRoomById(id), [id]);

  const nights = useMemo(() => {
    if (!dateRange.checkIn || !dateRange.checkOut) return 2;
    return Math.round((dateRange.checkOut.getTime() - dateRange.checkIn.getTime()) / (1000 * 60 * 60 * 24));
  }, [dateRange.checkIn, dateRange.checkOut]);

  if (loading) return <div className="m-6 h-80 animate-pulse rounded-2xl bg-gray-100" />;
  if (!room) return <div className="p-6">Alojamiento no encontrado.</div>;
  const total = nights * room.pricePerNight;

  return (
    <main className="pb-24 md:pb-0">
      <RoomHeaderDesktop />
      <div className="relative">
        <RoomHeaderMobile />
        <PhotoCarouselMobile images={room.images} />
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <RoomTitleBar title={room.title} />
        <PhotoGridDesktop images={room.images} />
        <div className="mt-6 md:grid md:grid-cols-[1fr_380px] md:gap-10">
          <div>
            <RoomInfoSummary room={room} />
            <HostCard host={room.host} />
            <HighlightsList highlights={room.highlights} />
            <DescriptionBlock text={room.description} />
            <AmenitiesList amenities={room.amenities} totalAmenitiesCount={room.totalAmenitiesCount} />
            <BookingCalendarMobile
              city={room.citySlug}
              dateRange={dateRange}
              nights={nights}
              onDateRangeChange={setDateRange}
            />
            <section className="space-y-3 py-6">
              <h3 className="text-lg font-semibold">Dónde vas a estar</h3>
              <DynamicLocationMap lat={room.lat} lng={room.lng} />
            </section>
            <ReviewsSummary rating={room.rating} reviewsCount={room.reviewsCount} />
          </div>
          <BookingCard
            room={room}
            dateRange={dateRange}
            travelers={travelers}
            total={total}
            nights={nights}
            onDateRangeChange={setDateRange}
            onTravelersChange={setTravelers}
          />
        </div>
      </div>
      <StickyFooterMobile total={total} dateRange={dateRange} />
    </main>
  );
}
