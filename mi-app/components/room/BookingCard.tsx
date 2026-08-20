"use client";

import DatePicker from "react-datepicker";
import { DateRange, Room, Traveler } from "@/types";
import { ViajerosDropdown } from "@/components/home/ViajerosDropdown";

interface Props {
  room: Room;
  dateRange: DateRange;
  travelers: Traveler;
  total: number;
  nights: number;
  onDateRangeChange: (range: DateRange) => void;
  onTravelersChange: (travelers: Traveler) => void;
}

export function BookingCard({ room, dateRange, travelers, total, nights, onDateRangeChange, onTravelersChange }: Props) {
  return (
    <aside className="sticky top-24 hidden rounded-2xl border p-5 shadow-sm md:block">
      {room.discountBadge && <p className="mb-3 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">{room.discountBadge}</p>}
      <p className="text-2xl font-semibold">{total.toFixed(2)} € en total</p>
      <p className="mb-4 text-sm text-gray-500">{dateRange.checkIn ? `${nights} noches` : room.availableDatesLabel}</p>
      <div className="grid grid-cols-2 rounded-lg border text-xs font-semibold">
        <div className="border-r p-2">
          <p>LLEGADA</p>
          <DatePicker
            selected={dateRange.checkIn}
            onChange={(checkIn: Date | null) => onDateRangeChange({ ...dateRange, checkIn })}
            className="w-full text-sm font-normal"
            placeholderText="Añade fecha"
          />
        </div>
        <div className="p-2">
          <p>SALIDA</p>
          <DatePicker
            selected={dateRange.checkOut}
            onChange={(checkOut: Date | null) => onDateRangeChange({ ...dateRange, checkOut })}
            className="w-full text-sm font-normal"
            placeholderText="Añade fecha"
          />
        </div>
      </div>
      <div className="mt-4">
        <ViajerosDropdown value={travelers} onChange={onTravelersChange} />
      </div>
      <button className="mt-4 w-full rounded-lg bg-[#FF385C] px-4 py-3 font-semibold text-white hover:bg-[#E31C5F]">
        Reservar
      </button>
    </aside>
  );
}
