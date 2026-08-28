import Link from "next/link";
import { Icon } from "@/components/Icon";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="breadcrumb" className="mb-5 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.path} className="flex items-center gap-1">
              {last ? (
                <span className="text-foreground">{it.name}</span>
              ) : (
                <Link href={it.path} className="hover:text-accent">
                  {it.name}
                </Link>
              )}
              {!last && <Icon name="ChevronRight" className="h-3.5 w-3.5" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
