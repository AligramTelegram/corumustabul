import type { Metadata } from "next";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export const metadata: Metadata = {
  title: "Yönetim",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-wash">
      <header className="border-b border-border-strong bg-white">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <Link href="/admin" className="font-display font-semibold text-ink">
            Çorum Usta Bul · Yönetim
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-muted hover:text-orange" target="_blank">
              Siteyi aç
            </Link>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
    </div>
  );
}
