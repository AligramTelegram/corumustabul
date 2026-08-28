import type { District } from "@/lib/types";

export const districts: District[] = [
  {
    slug: "merkez",
    name: "Çorum Merkez",
    loc: "Çorum merkezde",
    isCenter: true,
    neighborhoods: [
      "Bahçelievler",
      "Ulukavak",
      "Gülabibey",
      "Mimar Sinan",
      "Bahçelievler",
      "Yavruturna",
      "Çepni",
      "Kunduzhan",
    ],
    blurb:
      "Çorum şehir merkezi; Bahçelievler, Ulukavak ve Gülabibey gibi yoğun mahalleleriyle il nüfusunun büyük bölümünü barındırır. Usta talebinin en yüksek olduğu bölge.",
  },
  {
    slug: "alaca",
    name: "Alaca",
    loc: "Alaca'da",
    isCenter: false,
    neighborhoods: ["Cumhuriyet", "Yıldızhan", "Denizhan", "Zile"],
    blurb:
      "Çorum'un güneyinde, il merkezine yaklaşık 50 km uzaklıkta tarım ağırlıklı ilçe.",
  },
  {
    slug: "bayat",
    name: "Bayat",
    loc: "Bayat'ta",
    isCenter: false,
    neighborhoods: ["Camiikebir", "Yeni", "Derekutuğun"],
    blurb: "İl merkezinin kuzeybatısında, İskilip'e komşu ilçe.",
  },
  {
    slug: "bogazkale",
    name: "Boğazkale",
    loc: "Boğazkale'de",
    isCenter: false,
    neighborhoods: ["Hattuşaş", "Yekbas"],
    blurb:
      "Hattuşa antik kenti ile bilinen küçük ilçe; merkeze yaklaşık 87 km.",
  },
  {
    slug: "dodurga",
    name: "Dodurga",
    loc: "Dodurga'da",
    isCenter: false,
    neighborhoods: ["Cumhuriyet", "Berk", "Alpagut"],
    blurb: "Osmancık yolu üzerinde, kömür işletmeleriyle bilinen ilçe.",
  },
  {
    slug: "iskilip",
    name: "İskilip",
    loc: "İskilip'te",
    isCenter: false,
    neighborhoods: ["Meydan", "Bahabey", "Hacıpiri", "Karlık"],
    blurb:
      "Tarihi ahşap evleri ve el sanatlarıyla ünlü, merkeze 56 km uzaklıkta köklü ilçe.",
  },
  {
    slug: "kargi",
    name: "Kargı",
    loc: "Kargı'da",
    isCenter: false,
    neighborhoods: ["Yeni", "Eski", "Mihrihatun"],
    blurb: "Kastamonu sınırında, ormanlık ve dağlık yapıya sahip ilçe.",
  },
  {
    slug: "lacin",
    name: "Laçin",
    loc: "Laçin'de",
    isCenter: false,
    neighborhoods: ["Merkez", "Narlık"],
    blurb: "İl merkezine en yakın ilçelerden biri; yaklaşık 25 km.",
  },
  {
    slug: "mecitozu",
    name: "Mecitözü",
    loc: "Mecitözü'nde",
    isCenter: false,
    neighborhoods: ["Camiikebir", "Kışla", "Elvançelebi"],
    blurb: "Amasya yolu üzerinde, merkeze 37 km uzaklıkta ilçe.",
  },
  {
    slug: "oguzlar",
    name: "Oğuzlar",
    loc: "Oğuzlar'da",
    isCenter: false,
    neighborhoods: ["Merkez", "Karadona"],
    blurb: "Ceviziyle bilinen, Obruk Barajı kıyısındaki küçük ilçe.",
  },
  {
    slug: "ortakoy",
    name: "Ortaköy",
    loc: "Ortaköy'de",
    isCenter: false,
    neighborhoods: ["Merkez", "Aşdağul", "İncesu"],
    blurb: "Çorum'un güneydoğusunda, Aksaray değil Çorum'a bağlı ilçe.",
  },
  {
    slug: "osmancik",
    name: "Osmancık",
    loc: "Osmancık'ta",
    isCenter: false,
    neighborhoods: ["Yazı", "Gemici", "Ulucami", "Kızılırmak"],
    blurb:
      "Kızılırmak kıyısında, pirinciyle ünlü, merkeze 59 km uzaklıkta ilçenin ikinci büyük yerleşimi.",
  },
  {
    slug: "sungurlu",
    name: "Sungurlu",
    loc: "Sungurlu'da",
    isCenter: false,
    neighborhoods: ["Sunguroğlu", "Yörüklü", "Kale", "Cumhuriyet"],
    blurb:
      "Ankara yolu üzerinde, ilin en kalabalık ilçelerinden; merkeze 72 km.",
  },
  {
    slug: "ugurludag",
    name: "Uğurludağ",
    loc: "Uğurludağ'da",
    isCenter: false,
    neighborhoods: ["Merkez", "Cimproğlu"],
    blurb: "Sungurlu'ya komşu, tarım ağırlıklı ilçe.",
  },
];

export const districtSlugs = districts.map((d) => d.slug);
export const getDistrict = (slug: string) =>
  districts.find((d) => d.slug === slug);
