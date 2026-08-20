import { Globe, Menu } from "lucide-react";

export function UserMenu() {
  return (
    <div className="flex items-center gap-3">
      <button className="text-sm font-medium">Hazte anfitrión</button>
      <Globe className="w-5 h-5" />
      <button className="rounded-full bg-gray-100 p-2">
        <Menu className="w-5 h-5" />
      </button>
    </div>
  );
}
