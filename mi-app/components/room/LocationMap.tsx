"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

interface Props {
  lat: number;
  lng: number;
}

const homeIcon = L.divIcon({
  className: "home-marker",
  html: '<div style="width:32px;height:32px;border-radius:9999px;background:black;display:grid;place-items:center;color:white;font-size:14px;">⌂</div>',
});

export function LocationMap({ lat, lng }: Props) {
  return (
    <section className="relative h-80 overflow-hidden rounded-xl md:h-96">
      <MapContainer center={[lat, lng]} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[lat, lng]} icon={homeIcon} />
      </MapContainer>
      <div className="absolute left-4 right-4 top-4 rounded-full bg-white px-4 py-2 shadow">Prueba una cafetería local</div>
    </section>
  );
}
