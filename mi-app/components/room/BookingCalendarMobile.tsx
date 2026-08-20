"use client";

import DatePicker from "react-datepicker";
import { DateRange } from "@/types";

interface Props {
  city: string;
  dateRange: DateRange;
  nights: number;
  onDateRangeChange: (range: DateRange) => void;
}

export function BookingCalendarMobile({ city, dateRange, nights, onDateRangeChange }: Props) {
  return (
    <section className="space-y-3 border-b py-6 md:hidden">
      <h3 className="text-lg font-semibold">{nights} noches en {city}</h3>
      <p className="text-sm text-gray-500">
        {dateRange.checkIn && dateRange.checkOut ? "Fechas seleccionadas" : "Selecciona entrada y salida"}
      </p>
      <DatePicker
        inline
        selectsRange
        startDate={dateRange.checkIn}
        endDate={dateRange.checkOut}
        onChange={(dates) => onDateRangeChange({ checkIn: dates[0], checkOut: dates[1] })}
      />
    </section>
  );
}
