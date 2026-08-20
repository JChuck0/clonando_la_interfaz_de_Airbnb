import { CatalogView } from "@/components/catalog/CatalogView";

interface Props {
  searchParams: Promise<{ city?: string }>;
}

export default async function CatalogPage({ searchParams }: Props) {
  const params = await searchParams;
  return <CatalogView citySlug={params.city} />;
}
