import Link from "next/link";
import { site } from "@/lib/site";
import { Icon } from "@/components/Icon";
import { Wordmark } from "@/components/Emblem";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-strong bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4">
        <Link href="/" aria-label="Çorum Usta Bul ana sayfa">
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft sm:flex">
          <Link href="/kategoriler" className="hover:text-orange">
            İş Kolları
          </Link>
          <Link href="/ilce/merkez" className="hover:text-orange">
            İlçeler
          </Link>
          <Link href="/rehber" className="hover:text-orange">
            Rehber
          </Link>
          <Link href="/isletme-ekle" className="hover:text-orange">
            İşletme Kaydı
          </Link>
        </nav>
        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="enamel inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
        >
          <Icon name="MessageCircle" className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
