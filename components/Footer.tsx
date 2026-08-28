import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { districts } from "@/data/districts";
import { site } from "@/lib/site";
import { EmblemImg } from "@/components/Emblem";

const isKollari = categories.slice(0, 6);
const ilceler = districts.slice(0, 7);

const kurumsal = [
  { label: "Rehber", href: "/rehber" },
  { label: "Hakkımızda", href: "/hakkinda" },
  { label: "İşletme ekle", href: "/isletme-ekle" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
];

function Col({
  title,
  links,
  more,
}: {
  title: string;
  links: { label: string; href: string }[];
  more?: { label: string; href: string };
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-orange">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-primary-fg/70">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-primary-fg">
              {l.label}
            </Link>
          </li>
        ))}
        {more && (
          <li>
            <Link href={more.href} className="text-primary-fg/90 hover:text-orange">
              {more.label} →
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-fg">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <EmblemImg className="h-8 w-8" size={64} />
              <span className="font-display text-lg font-semibold">
                Çorum<span className="text-orange">UstaBul</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-primary-fg/60">
              Çorum ve ilçelerinde usta rehberi. Ustaya doğrudan ulaşın, arada
              komisyon yok.
            </p>
          </div>

          <Col
            title="İş kolları"
            links={isKollari.map((c) => ({ label: c.name, href: `/${c.slug}` }))}
            more={{ label: "Tümü", href: "/kategoriler" }}
          />
          <Col
            title="İlçeler"
            links={ilceler.map((d) => ({
              label: d.name,
              href: `/ilce/${d.slug}`,
            }))}
            more={{ label: "Tümü", href: "/ilce/merkez" }}
          />
          <Col title="Kurumsal" links={kurumsal} />
        </div>
      </div>

      <div className="border-t border-primary-fg/15 py-6">
        <p className="text-center text-xs text-primary-fg/50">
          © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
        </p>
        <a
          href="https://cihanbeytech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center opacity-55 transition-opacity hover:opacity-100"
          aria-label="Cihanbey Tech"
        >
          <Image
            src="/cihanbeylogobeyaz.png"
            alt="Cihanbey Tech"
            width={150}
            height={22}
            className="h-5 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}
