import { Logo } from "@/components/shared/Logo";
import { CategoryTabs } from "@/components/shared/CategoryTabs";
import { UserMenu } from "@/components/shared/UserMenu";
import { SearchCategory } from "@/types";

interface Props {
  category: SearchCategory;
  onCategoryChange: (category: SearchCategory) => void;
}

export function NavbarDesktop({ category, onCategoryChange }: Props) {
  return (
    <header className="hidden border-b bg-white md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <CategoryTabs value={category} onChange={onCategoryChange} />
        <UserMenu />
      </div>
    </header>
  );
}
