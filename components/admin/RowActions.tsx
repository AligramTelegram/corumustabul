"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);

  function toggle() {
    if (!open && btn.current) {
      const r = btn.current.getBoundingClientRect();
      setUp(window.innerHeight - r.bottom < 340);
    }
    setOpen((o) => !o);
  }

  async function patch(body: Record<string, unknown>) {
    setBusy(true);
    await fetch(`/api/admin/pros/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setBusy(false);
    setOpen(false);
    router.refresh();
  }

  async function del() {
    if (!confirm("Bu usta kalıcı olarak silinsin mi?")) return;
    setBusy(true);
    await fetch(`/api/admin/pros/${id}`, { method: "DELETE" });
    setBusy(false);
    setOpen(false);
    router.refresh();
  }

  const item =
    "block w-full rounded-lg px-2.5 py-2 text-left text-sm hover:bg-wash disabled:opacity-40";

  return (
    <div className="relative">
      <button
        ref={btn}
        disabled={busy}
        onClick={toggle}
        className="rounded-lg border border-border-strong bg-white px-3 py-1.5 text-sm font-medium text-ink disabled:opacity-40"
      >
        İşlemler ▾
      </button>

      {open && (
        <>
          <button
            aria-label="kapat"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-20 cursor-default"
          />
          <div
            className={`absolute right-0 z-30 w-56 rounded-xl border border-border-strong bg-white p-1 shadow-xl ${
              up ? "bottom-full mb-1" : "top-full mt-1"
            }`}
          >
            <button
              disabled={busy}
              onClick={() => patch({ featured: !featured })}
              className={item}
            >
              {featured ? "★ Vitrinden çıkar" : "☆ Vitrine al"}
            </button>
            <button
              disabled={busy}
              onClick={() =>
                patch({ status: status === "active" ? "passive" : "active" })
              }
              className={item}
            >
              {status === "active" ? "Pasifleştir" : "Aktifleştir"}
            </button>

            <div className="my-1 border-t border-border" />
            <div className="px-2.5 pb-1 pt-1 text-xs font-semibold uppercase tracking-wide text-muted">
              Süre uzat
            </div>
            <div className="grid grid-cols-2 gap-1 px-1 pb-1">
              {(
                [
                  ["+1 ay", 1],
                  ["+3 ay", 3],
                  ["+6 ay", 6],
                  ["+1 yıl", 12],
                ] as const
              ).map(([label, m]) => (
                <button
                  key={label}
                  disabled={busy}
                  onClick={() =>
                    patch({
                      paidUntil: addMonths(paidUntil, m),
                      status: "active",
                    })
                  }
                  className="rounded-lg bg-black/5 px-2 py-1.5 text-sm font-medium hover:bg-black/10 disabled:opacity-40"
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="my-1 border-t border-border" />
            <Link
              href={`/admin/usta/${id}`}
              onClick={() => setOpen(false)}
              className={item}
            >
              Düzenle
            </Link>
            <a
              href={`/usta/${slug}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className={item}
            >
              Sitede gör
            </a>
            <button
              disabled={busy}
              onClick={del}
              className={`${item} text-bordo`}
            >
              Sil
            </button>
          </div>
        </>
      )}
    </div>
  );
}
