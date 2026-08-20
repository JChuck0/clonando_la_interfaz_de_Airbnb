import { Logo } from "@/components/shared/Logo";
import { UserMenu } from "@/components/shared/UserMenu";

export function RoomHeaderDesktop() {
  return (
    <header className="hidden border-b bg-white md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <div className="rounded-full border px-6 py-3 text-sm">Cualquier lugar · Cualquier fecha · Añade viajeros</div>
        <UserMenu />
      </div>
    </header>
  );
}
