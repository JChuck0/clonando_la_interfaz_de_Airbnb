import { Room } from "@/types";

interface Props {
  room: Room;
}

export function RoomInfoSummary({ room }: Props) {
  return (
    <section className="space-y-1 border-b py-6">
      <h2 className="text-xl font-semibold">{room.title}</h2>
      <p className="text-sm text-gray-600">{room.bedInfo}</p>
      <a href="#reviews" className="text-sm font-semibold underline">
        ★ {room.rating} · {room.reviewsCount} evaluaciones
      </a>
    </section>
  );
}
