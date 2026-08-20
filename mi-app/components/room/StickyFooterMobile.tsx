"use client";

import { DateRange } from "@/types";

interface Props {
  total: number;
  dateRange: DateRange;
}

export function StickyFooterMobile({ total, dateRange }: Props) {
  const rangeLabel =
    dateRange.checkIn && dateRange.checkOut
      ? `${dateRange.checkIn.toLocaleDateString()} - ${dateRange.checkOut.toLocaleDateString()}`
      : "Añade fechas";
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t bg-white p-4 md:hidden">
      <div>
        <p className="font-semibold">{total.toFixed(2)} € total</p>
        <p className="text-xs text-gray-500">{rangeLabel}</p>
      </div>
      <button
        className="rounded-lg bg-[#FF385C] px-4 py-2 text-white disabled:opacity-70"
        onClick={() => alert("Reserva no disponible todavía")}
      >
        Reservar
      </button>
    </footer>
  );
}
