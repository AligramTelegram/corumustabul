export type Faq = { q: string; a: string };

export type CategoryGroup = "acil" | "tadilat" | "diger";

export type Category = {
  slug: string;
  name: string; // "Çilingir"
  shortName: string; // liste/etiket için kısa ad
  tagline: string; // kartta görünen kısa açıklama (3-6 kelime)
  group: CategoryGroup;
  icon: string; // lucide ikon adı
  primaryKeyword: string; // "çorum çilingir"
  keywords: string[];
  searchIntent: string;
  heroText: string;
  /** Hub sayfası uzun tanıtım metni (paragraf dizisi) */
  intro: string[];
  /** "Nasıl çalışır / nelere dikkat" bölümü */
  notes: string[];
  priceInfo: string;
  faq: Faq[];
  relatedSlugs: string[];
};

export type District = {
  slug: string;
  name: string; // "İskilip"
  loc: string; // bulunma hâli, kesme işaretiyle: "İskilip'te"
  isCenter: boolean;
  neighborhoods: string[];
  blurb: string;
};

export type Pro = {
  slug: string;
  name: string; // kişi adı
  businessName: string;
  categories: string[]; // category slug
  districts: string[]; // district slug — hizmet verdiği bölgeler
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  website?: string; // "https://..." - isteğe bağlı
  logo?: string; // /public altında yol, ör. "/ustalar/karakus-logo.png"
  photos?: string[]; // iş fotoğrafları
  about: string[];
  workingHours: string;
  featured: boolean; // vitrin - listede en üstte
  rating?: number; // 1-5, ondalıklı olabilir
  reviewCount?: number;
  status: "active" | "passive";
  paidUntil: string; // ISO tarih
};
