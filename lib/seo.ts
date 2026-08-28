import type { Metadata } from "next";
import { site, geo } from "@/lib/site";
import type { Category, District, Pro } from "@/lib/types";

export function canonical(path: string): string {
  return site.url + (path === "/" ? "" : path);
}

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = canonical(opts.path);
  return {
    // absolute: layout'taki "%s | Çorum Usta Bul" şablonunu atla,
    // başlıklar zaten markayı içeriyor
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}

/** İlçe + kategori sayfası için özgün, tekrara düşmeyen tanıtım paragrafları */
export function districtCategoryIntro(c: Category, d: District): string[] {
  const yer = d.isCenter ? "Çorum şehir merkezinde" : `Çorum'un ${d.name} ilçesinde`;
  const mah =
    d.neighborhoods.length > 1
      ? `${d.neighborhoods.slice(0, 3).join(", ")} gibi mahalleler dâhil ${d.name} genelinde`
      : `${d.name} genelinde`;
  const out: string[] = [];

  out.push(
    `${yer} ${c.name.toLowerCase()} hizmeti arıyorsanız doğru yerdesiniz. Bu sayfada ${mah} çalışan, iletişim bilgisi doğrulanmış ustaları bir arada bulacaksınız. Aramadan önce işin kapsamını (ne, nerede, aciliyeti) not almanız, ustanın size net bir süre ve fiyat aralığı verebilmesini kolaylaştırır.`,
  );

  if (c.group === "acil") {
    out.push(
      d.isCenter
        ? `Şehir merkezinde acil çağrılarda ulaşım süresi genelde kısadır; yine de ${d.name} içindeki konumunuzu (mahalle, cadde, bina) telefonda net verin.`
        : `${d.name} ilçe merkezine yakınsanız usta daha hızlı ulaşır; köy ve uzak mahallelerde yol süresi ve ücreti artabilir. Bunu çağrı sırasında konuşun.`,
    );
  } else {
    out.push(
      `${d.name} için ${c.shortName.toLowerCase()} işlerinde birden fazla ustadan keşif ve teklif almanız, hem fiyatı hem de iş planını karşılaştırmanıza yardımcı olur. Malzemenin kim tarafından alınacağını baştan netleştirin.`,
    );
  }

  out.push(d.blurb);
  return out;
}

// ---- JSON-LD üreticileri ----

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    areaServed: { "@type": "AdministrativeArea", name: "Çorum" },
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "tr-TR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/ara?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: canonical(it.path),
    })),
  };
}

export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function itemListJsonLd(pros: Pro[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: pros.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: canonical(`/usta/${p.slug}`),
      name: p.businessName,
    })),
  };
}

export function proJsonLd(p: Pro, districtNames: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: p.businessName,
    telephone: p.phone,
    url: canonical(`/usta/${p.slug}`),
    ...(p.logo ? { image: site.url + p.logo } : {}),
    ...(p.website ? { sameAs: [p.website] } : {}),
    ...(p.rating != null
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: p.rating,
            reviewCount: p.reviewCount ?? 1,
            bestRating: 5,
          },
        }
      : {}),
    areaServed: districtNames.map((n) => ({ "@type": "City", name: n })),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng },
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  date: string;
  updated?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    inLanguage: "tr-TR",
    datePublished: opts.date,
    dateModified: opts.updated ?? opts.date,
    mainEntityOfPage: canonical(opts.path),
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/emblem.png` },
    },
  };
}

export function serviceJsonLd(c: Category) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: c.name,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: { "@type": "AdministrativeArea", name: "Çorum" },
    description: c.searchIntent,
  };
}
