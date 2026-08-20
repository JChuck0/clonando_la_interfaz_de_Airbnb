import Image from "next/image";
import { Host } from "@/types";

interface Props {
  host: Host;
}

export function HostCard({ host }: Props) {
  return (
    <section className="flex items-center gap-4 border-b py-6">
      <Image src={host.avatar} alt={host.name} width={56} height={56} className="rounded-full object-cover" />
      <div>
        <p className="font-semibold">Anfitrión: {host.name}</p>
        <p className="text-sm text-gray-600">{host.experienceYears} años de experiencia</p>
      </div>
    </section>
  );
}
