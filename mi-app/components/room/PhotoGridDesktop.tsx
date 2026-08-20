import Image from "next/image";

interface Props {
  images: string[];
}

export function PhotoGridDesktop({ images }: Props) {
  return (
    <section className="hidden gap-0.5 overflow-hidden rounded-xl md:flex">
      <div className="relative min-h-96 w-1/2">
        <Image src={images[0]} alt="Foto principal" fill className="object-cover" />
      </div>
      <div className="grid w-1/2 grid-cols-2 gap-0.5">
        {images.slice(1, 5).map((image, idx) => (
          <div key={idx} className="relative h-48">
            <Image src={image} alt={`Foto ${idx + 2}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
