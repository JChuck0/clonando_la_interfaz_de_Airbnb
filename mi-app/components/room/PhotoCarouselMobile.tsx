"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  images: string[];
}

export function PhotoCarouselMobile({ images }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <section className="relative md:hidden">
      <button className="absolute left-2 top-1/2 z-10 rounded-full bg-black/50 px-2 py-1 text-white" onClick={() => setIndex((prev) => (prev ? prev - 1 : images.length - 1))}>
        ‹
      </button>
      <div className="relative h-72">
        <Image src={images[index]} alt={`Foto ${index + 1}`} fill className="object-cover" />
      </div>
      <button className="absolute right-2 top-1/2 z-10 rounded-full bg-black/50 px-2 py-1 text-white" onClick={() => setIndex((prev) => (prev + 1) % images.length)}>
        ›
      </button>
      <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
        {index + 1} / {images.length}
      </span>
    </section>
  );
}
