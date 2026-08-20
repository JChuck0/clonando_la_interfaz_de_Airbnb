"use client";

import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  summary: string;
}

export function CatalogHeaderMobile({ summary }: Props) {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b bg-white p-4 md:hidden">
      <button className="rounded-full border p-2" onClick={() => router.back()}>
        <ArrowLeft className="h-5 w-5" />
      </button>
      <div className="flex-1 rounded-full border px-4 py-2 text-sm">{summary}</div>
      <button className="rounded-full border p-2">
        <SlidersHorizontal className="h-5 w-5" />
      </button>
    </header>
  );
}
