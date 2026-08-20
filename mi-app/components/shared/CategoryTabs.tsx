"use client";

import { Bell, Globe, Home, PartyPopper } from "lucide-react";
import { ComponentType } from "react";
import { SearchCategory } from "@/types";

const tabs: { label: SearchCategory; icon: ComponentType<{ className?: string }> }[] = [
  { label: "Todo", icon: Globe },
  { label: "Alojamientos", icon: Home },
  { label: "Experiencias", icon: PartyPopper },
  { label: "Servicios", icon: Bell },
];

interface Props {
  value: SearchCategory;
  onChange: (category: SearchCategory) => void;
}

export function CategoryTabs({ value, onChange }: Props) {
  return (
    <div className="flex flex-row gap-6 md:gap-8">
      {tabs.map(({ label, icon: Icon }) => (
        <button
          key={label}
          onClick={() => onChange(label)}
          className={`flex flex-col items-center pb-2 ${
            value === label ? "border-b-2 border-black font-semibold" : "text-gray-500"
          }`}
        >
          <Icon className="w-6 h-6" />
          <span className="text-sm">{label}</span>
        </button>
      ))}
    </div>
  );
}
