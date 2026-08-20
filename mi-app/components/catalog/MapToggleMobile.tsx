"use client";

interface Props {
  open: boolean;
  onToggle: () => void;
}

export function MapToggleMobile({ open, onToggle }: Props) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-20 left-1/2 z-30 -translate-x-1/2 rounded-full bg-black px-4 py-2 text-sm text-white md:hidden"
    >
      {open ? "Cerrar mapa" : "Mapa"}
    </button>
  );
}
