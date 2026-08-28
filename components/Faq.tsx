import { Icon } from "@/components/Icon";
import type { Faq as FaqItem } from "@/lib/types";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border-strong bg-white">
      {items.map((f, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 font-medium text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <Icon
              name="ChevronRight"
              className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-90"
            />
          </summary>
          <p className="px-4 pb-4 text-sm leading-7 text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
