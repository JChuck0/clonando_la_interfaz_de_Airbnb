import { RoomView } from "@/components/room/RoomView";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function RoomPage({ params }: Props) {
  const { id } = await params;
  return <RoomView id={id} />;
}
