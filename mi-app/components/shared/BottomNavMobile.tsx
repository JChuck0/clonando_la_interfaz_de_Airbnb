import { Heart, Search, User } from "lucide-react";

const items = [
  { label: "Explorar", icon: Search, active: true },
  { label: "Favoritos", icon: Heart, active: false },
  { label: "Iniciar sesión", icon: User, active: false },
];

export function BottomNavMobile() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t bg-white md:hidden">
      <ul className="grid grid-cols-3 py-2">
        {items.map(({ label, icon: Icon, active }) => (
          <li key={label} className={`flex flex-col items-center gap-1 text-xs ${active ? "text-[#FF385C]" : "text-gray-500"}`}>
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
