// Site geneli sabitler. Marka/iletişim bilgisi kesinleşince burayı güncelle.
export const site = {
  name: "Çorum Usta Bul",
  shortName: "Çorum Usta Bul",
  domain: "corumustabul.com",
  url: "https://corumustabul.com",
  description:
    "Çorum ve ilçelerinde elektrikçi, su tesisatçısı, çilingir, boyacı ve daha fazlası. Bölgenizdeki güvenilir ustaya telefonla ulaşın.",
  phone: "+908503035532",
  phoneDisplay: "0850 303 55 32",
  whatsapp: "908503035532",
  email: "info@corumustabul.com",
  address: {
    locality: "Çorum",
    region: "Çorum",
    country: "TR",
    postalCode: "19000",
  },
  currency: "TL",
} as const;

export const geo = { lat: 40.5506, lng: 34.9556 } as const;

/** Ustaya kaydı için hazır WhatsApp mesajı */
export const isletmeWhatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Merhaba, Çorum Usta Bul dizinine işletmemi eklemek istiyorum.\n\nİşletme adı:\nYetkili:\nİş kolları:\nHizmet verdiğim ilçeler:\nWeb sitesi (varsa):",
)}`;
