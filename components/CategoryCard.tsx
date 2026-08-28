import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { Category } from "@/lib/types";

export function CategoryCard({
  category,
  href,
}: {
  category: Category;
  href?: string;
}) {
  return (
    <Link
      href={href ?? `/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-1 hover:border-ink hover:shadow-[0_20px_40px_-24px_rgba(22,22,24,0.4)]"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-orange transition-transform duration-200 group-hover:scale-x-100"
      />
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3f3f4] text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-white">
          <Icon name={category.icon} className="h-[18px] w-[18px]" />
        </span>
        <span className="font-display text-[1.05rem] font-semibold leading-tight text-ink">
          {category.name}
        </span>
        <Icon
          name="ChevronRight"
          className="ml-auto h-4 w-4 shrink-0 text-border-strong transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-orange"
        />
      </div>
      <p className="mt-2.5 text-sm leading-snug text-muted">
        {category.tagline}
      </p>
    </Link>
  );
}

export function CategoryGrid({
  categories,
  hrefFor,
}: {
  categories: Category[];
  hrefFor?: (c: Category) => string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((c) => (
        <CategoryCard
          key={c.slug}
          category={c}
          href={hrefFor ? hrefFor(c) : undefined}
        />
      ))}
    </div>
  );
}
