"use client";

import DatePicker from "react-datepicker";
import { DateRange } from "@/types";

interface Props {
  value: DateRange;
  onChange: (next: DateRange) => void;
  mobile?: boolean;
}

export function FechasDropdown({ value, onChange, mobile }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-md">
      <DatePicker
        inline
        selectsRange
        monthsShown={mobile ? 1 : 2}
        startDate={value.checkIn}
        endDate={value.checkOut}
        onChange={(dates) => onChange({ checkIn: dates[0], checkOut: dates[1] })}
      />
    </div>
  );
}
