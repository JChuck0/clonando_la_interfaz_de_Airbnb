"use client";

import { useState } from "react";

interface Props {
  text: string;
}

export function DescriptionBlock({ text }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="space-y-3 border-b py-6">
      <p className={`text-sm text-gray-700 ${expanded ? "" : "line-clamp-3"}`}>{text}</p>
      <button className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium" onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? "Mostrar menos" : "Mostrar más"}
      </button>
    </section>
  );
}
