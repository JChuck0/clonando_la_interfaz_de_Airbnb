export interface Traveler {
  adults: number;
  children: number;
  babies: number;
  pets: number;
}

export interface DateRange {
  checkIn: Date | null;
  checkOut: Date | null;
}

export type SearchCategory = "Todo" | "Alojamientos" | "Experiencias" | "Servicios";

export interface SearchFilters {
  query: string;
  category: SearchCategory;
  dateRange: DateRange;
  travelers: Traveler;
}

export interface City {
  id: string;
  name: string;
  image: string;
  reason: string;
  lat: number;
  lng: number;
}

export interface Host {
  name: string;
  avatar: string;
  experienceYears: number;
}

export interface Amenity {
  icon: string;
  label: string;
  available: boolean;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export type RoomBadge = "Recomendación del viajero" | "Superanfitrión" | "Hotel destacado";

export interface Room {
  id: string;
  citySlug: string;
  title: string;
  images: string[];
  pricePerNight: number;
  originalPricePerNight?: number;
  rating: number;
  reviewsCount: number;
  hostType: "Anfitrión profesional" | "Anfitrión particular";
  host: Host;
  badge?: RoomBadge;
  isHotel: boolean;
  discountBadge?: string;
  availableDatesLabel: string;
  bedInfo: string;
  address: string;
  lat: number;
  lng: number;
  description: string;
  highlights: Highlight[];
  amenities: Amenity[];
  totalAmenitiesCount: number;
}
