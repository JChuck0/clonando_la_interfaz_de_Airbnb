import { Highlight } from "@/types";
import { IconFromName } from "@/components/shared/IconFromName";

interface Props {
  highlights: Highlight[];
}

export function HighlightsList({ highlights }: Props) {
  return (
    <section className="border-b py-6">
      {highlights.map((highlight) => (
        <article key={highlight.title} className="flex gap-3 border-b py-4 last:border-b-0">
          <IconFromName name={highlight.icon} className="h-5 w-5" />
          <div>
            <p className="font-semibold">{highlight.title}</p>
            <p className="text-sm text-gray-600">{highlight.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
