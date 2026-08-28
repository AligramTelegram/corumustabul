import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center">
      <h1 className="text-2xl font-bold">Sayfa bulunamadı</h1>
      <p className="mt-2 text-muted">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
      </p>
      <div className="mt-6 flex justify-center gap-2">
        <Link
          href="/"
          className="rounded-lg bg-primary px-4 py-2.5 font-semibold text-primary-fg"
        >
          Ana sayfa
        </Link>
        <Link
          href="/kategoriler"
          className="rounded-lg border border-border bg-surface px-4 py-2.5 font-semibold"
        >
          İş kolları
        </Link>
      </div>
    </div>
  );
}
