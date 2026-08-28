import type { Pro } from "@/lib/types";

/**
 * Yayındaki gerçek usta kayıtları.
 * status: "passive" veya paidUntil geçmiş olanlar hiçbir listede ve sitemapte görünmez.
 */
export const pros: Pro[] = [
  {
    slug: "karakus-yol-yardim",
    name: "Karakuş Yol Yardım",
    businessName: "Karakuş Yol Yardım",
    categories: ["oto-cekici"],
    districts: [
      "merkez",
      "alaca",
      "bayat",
      "bogazkale",
      "dodurga",
      "iskilip",
      "kargi",
      "lacin",
      "mecitozu",
      "oguzlar",
      "ortakoy",
      "osmancik",
      "sungurlu",
      "ugurludag",
    ],
    phone: "+905418403895",
    phoneDisplay: "0541 840 38 95",
    whatsapp: "905418403895",
    website: "https://corumotocekici.net",
    about: [
      "Çorum merkez ve tüm ilçelerde 7/24 oto çekici ve yol yardım hizmeti veriyoruz.",
      "Kaza ve arıza sonrası araç kurtarma, akü takviye, lastik yardımı ve şehirler arası araç taşıma. Kayar kasa araçla otomatik ve dört çekişli araçları da güvenle taşıyoruz.",
    ],
    workingHours: "7/24 (haftanın her günü, 24 saat)",
    featured: true,
    rating: 4.8,
    reviewCount: 51,
    status: "active",
    paidUntil: "2027-12-31",
  },
  {
    slug: "ikram-mobilya",
    name: "İkram Mobilya",
    businessName: "İkram Mobilya ve Dekorasyon",
    categories: ["marangoz"],
    districts: [
      "merkez",
      "lacin",
      "mecitozu",
      "ortakoy",
      "alaca",
      "sungurlu",
      "osmancik",
      "iskilip",
    ],
    phone: "+905455738515",
    phoneDisplay: "0545 573 85 15",
    whatsapp: "905455738515",
    website: "https://corummobilya.com",
    about: [
      "Çorum Sanayi Sitesi'nde ölçüye mutfak dolabı, gardırop, banyo dolabı, TV ünitesi ve giyinme odası üretiyoruz.",
      "Yerinde ölçü alıp montajı biz yapıyoruz. Yazılı teklif ve fotoğraf paylaşımı için WhatsApp'tan ulaşabilirsiniz.",
    ],
    workingHours: "Pazartesi-Cumartesi 09:00-19:00",
    featured: true,
    rating: 4.6,
    reviewCount: 31,
    status: "active",
    paidUntil: "2027-12-31",
  },

];

export const activePros = () => {
  const today = new Date().toISOString().slice(0, 10);
  return pros.filter(
    (p) => p.status === "active" && p.paidUntil.slice(0, 10) >= today,
  );
};
