import { cities } from "@/data/cities";
import { Room } from "@/types";

const images = Array.from({ length: 19 }, (_, idx) => `https://picsum.photos/seed/airbnb-${idx}/900/900`);

const baseAmenities = [
  { icon: "lock", label: "Cerradura en la puerta del dormitorio", available: true },
  { icon: "utensils", label: "Cocina", available: true },
  { icon: "wifi", label: "Wifi", available: true },
  { icon: "briefcase", label: "Zona para trabajar", available: true },
  { icon: "tv", label: "Televisión", available: true },
  { icon: "siren", label: "Detector de monóxido de carbono", available: false },
  { icon: "flame", label: "Detector de humo", available: false },
];

const madridBase: Room = {
  id: "madrid-gran-via-1",
  citySlug: "madrid",
  title: "Habitación privada en Gran Vía (Cama 90cm)",
  images,
  pricePerNight: 26.5,
  rating: 4.62,
  reviewsCount: 197,
  hostType: "Anfitrión particular",
  host: { name: "Pablo", avatar: "https://i.pravatar.cc/120?img=12", experienceYears: 3 },
  isHotel: false,
  discountBadge: "Este anfitrión ofrece un descuento",
  availableDatesLabel: "21–23 ago",
  bedInfo: "1 cama · Baño compartido",
  address: "Madrid, Comunidad de Madrid, España",
  lat: 40.42,
  lng: -3.7038,
  description:
    "Maravillosa habitación en un apartamento en el centro de Madrid, a escasos metros de Gran Vía. Con cama individual de 90x190 cm que pueden utilizar 2 personas si así lo desean. Podrás disfrutar del centro de la capital con todas las comodidades posibles...",
  highlights: [
    {
      icon: "door-open",
      title: "Llegada autónoma",
      description: "Accede al alojamiento directamente mediante la cerradura con teclado.",
    },
    {
      icon: "map-pin",
      title: "Mucho que hacer en el barrio",
      description: "Los viajeros afirman que esta zona es muy interesante.",
    },
    {
      icon: "bed-double",
      title: "Habitación en: apartamento",
      description: "Una habitación solo para ti con acceso a zonas comunes.",
    },
  ],
  amenities: baseAmenities,
  totalAmenitiesCount: 31,
};

const templates = [
  "Loft céntrico con luz natural",
  "Apartamento acogedor junto al casco histórico",
  "Estudio moderno con terraza",
  "Habitación premium cerca del centro",
  "Suite tranquila con vistas",
  "Alojamiento familiar bien comunicado",
];

const hosts = ["Ana", "Marcos", "Lucía", "Javier", "Sofía", "Raúl"];
const credits = ["+15 € de crédito de Airbnb", "+20 € de crédito de Airbnb", "+18 € de crédito de Airbnb"];

function buildRoom(cityIndex: number, roomIndex: number): Room {
  const city = cities[cityIndex];
  const price = 25 + ((cityIndex + 1) * 11 + roomIndex * 9) % 136;
  const rating = Number((4.3 + ((cityIndex * 3 + roomIndex) % 7) * 0.1).toFixed(2));
  const hotel = (cityIndex + roomIndex) % 15 === 0 || (cityIndex === 1 && roomIndex === 4);
  const hasBadge = roomIndex % 3 === 0;
  const badge = hasBadge ? (roomIndex % 2 ? "Superanfitrión" : "Recomendación del viajero") : undefined;
  return {
    id: `${city.id}-${roomIndex + 1}`,
    citySlug: city.id,
    title: `${templates[roomIndex]} en ${city.name}`,
    images: Array.from({ length: 8 }, (_, idx) => `https://picsum.photos/seed/${city.id}-${roomIndex}-${idx}/900/900`),
    pricePerNight: price,
    originalPricePerNight: roomIndex % 2 === 0 ? price + 12 : undefined,
    rating,
    reviewsCount: 40 + cityIndex * 23 + roomIndex * 17,
    hostType: roomIndex % 2 === 0 ? "Anfitrión particular" : "Anfitrión profesional",
    host: {
      name: hosts[(cityIndex + roomIndex) % hosts.length],
      avatar: `https://i.pravatar.cc/120?img=${cityIndex * 5 + roomIndex + 1}`,
      experienceYears: 2 + ((cityIndex + roomIndex) % 9),
    },
    badge,
    isHotel: hotel,
    discountBadge: hotel ? credits[(cityIndex + roomIndex) % credits.length] : undefined,
    availableDatesLabel: "21–23 ago",
    bedInfo: roomIndex % 2 ? "2 camas · Baño privado" : "1 cama · Baño compartido",
    address: `${city.name}, España`,
    lat: city.lat + roomIndex * 0.008,
    lng: city.lng + roomIndex * 0.008,
    description: `Espacio cómodo y bien ubicado en ${city.name}, ideal para escapadas urbanas y estancias de trabajo.`,
    highlights: [
      {
        icon: "door-open",
        title: "Llegada autónoma",
        description: "Check-in flexible con acceso seguro.",
      },
      {
        icon: "map-pin",
        title: "Ubicación muy valorada",
        description: "Zona céntrica con comercios y transporte.",
      },
      {
        icon: "bed-double",
        title: "Alojamiento completo",
        description: "Descansa con total privacidad y confort.",
      },
    ],
    amenities: baseAmenities,
    totalAmenitiesCount: 31,
  };
}

export const rooms: Room[] = cities.flatMap((_, cityIndex) => {
  const baseRooms = Array.from({ length: 6 }, (_, roomIndex) => buildRoom(cityIndex, roomIndex));
  if (cityIndex === 0) {
    baseRooms[0] = madridBase;
  }
  return baseRooms;
});

export const findRoomById = (id: string) => rooms.find((room) => room.id === id) ?? null;
