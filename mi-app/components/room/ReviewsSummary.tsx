interface Props {
  rating: number;
  reviewsCount: number;
}

export function ReviewsSummary({ rating, reviewsCount }: Props) {
  return (
    <section id="reviews" className="py-6 text-lg font-semibold">
      ★ {rating} · {reviewsCount} evaluaciones
    </section>
  );
}
