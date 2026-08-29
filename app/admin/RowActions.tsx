"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function RowActions({
  id,
  slug,
  status,
}: {
  id: string;
  slug: string;
  status: "active" | "passive";
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function patch(body: Record<string, unknown>) {
    setBusy(true);
    await fetch(`/api/admin/pros/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setBusy(false);
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
    <div className="flex items-center gap-2 text-xs">
      <a
        href={`/usta/${slug}`}
        target="_blank"
        rel="noreferrer"
        className="text-muted hover:text-orange"
      >
        gör
      </a>
      <Link href={`/admin/usta/${id}`} className="text-muted hover:text-orange">
        düzenle
      </Link>
      <button
        disabled={busy}
        onClick={() =>
          patch({ status: status === "active" ? "passive" : "active" })
        }
        className="text-muted hover:text-ink disabled:opacity-40"
      >
        {status === "active" ? "pasifleştir" : "aktifleştir"}
      </button>
      <button
        disabled={busy}
        onClick={del}
        className="text-bordo hover:underline disabled:opacity-40"
      >
        sil
      </button>
    </div>
  );
}
