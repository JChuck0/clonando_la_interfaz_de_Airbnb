"use client";

import { SearchCategory } from "@/types";

interface Props {
  value: SearchCategory;
  onChange: (category: SearchCategory) => void;
}

const categories: SearchCategory[] = ["Todo", "Alojamientos", "Experiencias", "Servicios"];

export function CategoryPillsMobile({ value, onChange }: Props) {
  return (
    <div className="mt-3 flex gap-2 overflow-x-auto px-4 md:hidden">
      {categories.map((category) => (
        <button
          key={category}
          className={`whitespace-nowrap rounded-full border px-3 py-2 text-sm ${
            value === category ? "border-black bg-gray-100 font-medium" : "text-gray-600"
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
