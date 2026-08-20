import Link from "next/link";
import { House } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-[#FF385C]">
      <House className="w-6 h-6" />
      <span className="text-xl font-semibold lowercase">airbnb</span>
    </Link>
  );
}
