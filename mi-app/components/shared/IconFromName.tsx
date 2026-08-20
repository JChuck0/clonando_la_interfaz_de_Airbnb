import {
  BedDouble,
  Bell,
  Briefcase,
  DoorOpen,
  Flame,
  Globe,
  House,
  Lock,
  MapPin,
  Siren,
  Tv,
  Utensils,
  Wifi,
} from "lucide-react";

const iconMap = {
  bell: Bell,
  "bed-double": BedDouble,
  briefcase: Briefcase,
  "door-open": DoorOpen,
  flame: Flame,
  globe: Globe,
  house: House,
  lock: Lock,
  "map-pin": MapPin,
  siren: Siren,
  tv: Tv,
  utensils: Utensils,
  wifi: Wifi,
};

interface Props {
  name: string;
  className?: string;
}

export function IconFromName({ name, className = "w-5 h-5" }: Props) {
  const Icon = iconMap[name as keyof typeof iconMap] ?? House;
  return <Icon className={className} />;
}
