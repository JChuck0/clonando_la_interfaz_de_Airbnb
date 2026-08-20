"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Room } from "@/types";

interface Props {
  center: [number, number];
  rooms: Room[];
  className?: string;
}

function priceIcon(price: number) {
  return L.divIcon({
    className: "price-marker",
    html: `<div style="background:white;border-radius:9999px;padding:6px 10px;font-size:12px;font-weight:600;box-shadow:0 2px 8px rgba(0,0,0,0.2);">${price} €</div>`,
  });
}

export function MapView({ center, rooms, className }: Props) {
  return (
    <div className={className}>
      <MapContainer center={center} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {rooms.map((room) => (
          <Marker key={room.id} position={[room.lat, room.lng]} icon={priceIcon(room.pricePerNight)}>
            <Popup>{room.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
