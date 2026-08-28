import Link from "next/link";

export function LinkChips({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <section className="mt-9">
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
        {title}
      </h2>
      <div className="flex flex-wrap gap-2">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-full border border-border-strong bg-surface px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-orange hover:text-orange"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
