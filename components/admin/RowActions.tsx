"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function addMonths(iso: string, months: number): string {
  const base = new Date(iso + "T00:00:00");
  const start = base.getTime() > Date.now() ? base : new Date();
  start.setMonth(start.getMonth() + months);
  return start.toISOString().slice(0, 10);
}

export function RowActions({
  id,
  slug,
  status,
  featured,
  paidUntil,
}: {
  id: string;
  slug: string;
  status: "active" | "passive";
  featured: boolean;
  paidUntil: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [menu, setMenu] = useState(false);

  async function patch(body: Record<string, unknown>) {
    setBusy(true);
    await fetch(`/api/admin/pros/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setBusy(false);
    setMenu(false);
    router.refresh();
  }

  async function del() {
    if (!confirm("Bu usta kalıcı olarak silinsin mi?")) return;
    setBusy(true);
    await fetch(`/api/admin/pros/${id}`, { method: "DELETE" });
    setBusy(false);
    router.refresh();
  }

  return (
    <div className="flex items-center gap-1.5 text-xs">
      <button
        disabled={busy}
        onClick={() => patch({ featured: !featured })}
        title="Vitrin"
        className={`rounded-md px-2 py-1 font-medium ${
          featured
            ? "bg-bordo/10 text-bordo"
            : "bg-black/5 text-muted hover:text-ink"
        } disabled:opacity-40`}
      >
        {featured ? "★ vitrin" : "☆ vitrin"}
      </button>

      <button
        disabled={busy}
        onClick={() =>
          patch({ status: status === "active" ? "passive" : "active" })
        }
        className="rounded-md bg-black/5 px-2 py-1 font-medium text-muted hover:text-ink disabled:opacity-40"
      >
        {status === "active" ? "pasifleştir" : "aktifleştir"}
      </button>

      <div className="relative">
        <button
          disabled={busy}
          onClick={() => setMenu((m) => !m)}
          className="rounded-md bg-black/5 px-2 py-1 font-medium text-muted hover:text-ink disabled:opacity-40"
        >
          uzat ▾
        </button>
        {menu && (
          <div className="absolute right-0 z-10 mt-1 w-32 overflow-hidden rounded-lg border border-border-strong bg-white shadow-lg">
            {[
              ["+1 ay", 1],
              ["+3 ay", 3],
              ["+6 ay", 6],
              ["+1 yıl", 12],
            ].map(([label, m]) => (
              <button
                key={label as string}
                onClick={() =>
                  patch({
                    paidUntil: addMonths(paidUntil, m as number),
                    status: "active",
                  })
                }
                className="block w-full px-3 py-1.5 text-left hover:bg-wash"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      <Link
        href={`/admin/usta/${id}`}
        className="rounded-md px-2 py-1 font-medium text-orange hover:underline"
      >
        düzenle
      </Link>
      <a
        href={`/usta/${slug}`}
        target="_blank"
        rel="noreferrer"
        className="rounded-md px-2 py-1 text-muted hover:text-orange"
      >
        gör
      </a>
      <button
        disabled={busy}
        onClick={del}
        className="rounded-md px-2 py-1 text-bordo hover:underline disabled:opacity-40"
      >
        sil
      </button>
    </div>
  );
}
