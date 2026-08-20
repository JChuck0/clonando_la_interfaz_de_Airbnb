"use client";

import { Search } from "lucide-react";

interface Props {
  onOpen: () => void;
}

export function SearchButtonMobile({ onOpen }: Props) {
  return (
    <button
      onClick={onOpen}
      className="mx-4 mt-4 flex items-center gap-3 rounded-full border bg-white px-4 py-3 shadow md:hidden"
    >
      <Search className="h-5 w-5" />
      <div className="text-left">
        <p className="text-sm font-semibold">Empieza a buscar</p>
        <p className="text-xs text-gray-500">Cualquier lugar · Cualquier fecha</p>
      </div>
    </button>
  );
}
