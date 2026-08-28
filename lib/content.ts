import type { Category, District } from "@/lib/types";

/**
 * İlçe + iş kolu sayfaları için özgün gövde metni üretir.
 * Aynı şablonun 280 kez tekrar etmemesi için metin, ilçe ve iş kolu
 * slug'ından türeyen bir tohumla birkaç varyant arasından seçilir.
 * Amaç yapay değil, gerçek bir rehber metni gibi okunması.
 */

function seed(a: string, b: string): number {
  const s = `${a}:${b}`;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

function pick<T>(arr: T[], s: number, salt = 0): T {
  return arr[(s + salt) % arr.length];
}

// Çorum ilçelerinin merkeze yaklaşık uzaklığı (km)
const KM: Record<string, number> = {
  merkez: 0,
  lacin: 25,
  mecitozu: 37,
  ortakoy: 55,
  alaca: 52,
  bogazkale: 87,
  dodurga: 40,
  iskilip: 56,
  kargi: 96,
  oguzlar: 62,
  osmancik: 59,
  sungurlu: 72,
  ugurludag: 85,
  bayat: 82,
};

const BUYUK = new Set(["merkez", "sungurlu", "osmancik", "alaca", "iskilip"]);

export type Section = { heading: string; paragraphs: string[] };

export function comboSections(c: Category, d: District): Section[] {
  const s = seed(c.slug, d.slug);
  const loc = d.loc; // "İskilip'te", "Sungurlu'da", "Çorum merkezde"
  const ad = d.isCenter ? "Çorum merkez" : d.name;
  const km = KM[d.slug] ?? 60;
  const isAcil = c.group === "acil";
  const buyuk = BUYUK.has(d.slug) || d.isCenter;
  const mahalleler = d.neighborhoods.slice(0, 4).join(", ");
  const isKolu = c.name.toLowerCase();

  const sections: Section[] = [];

  sections.push({
    heading: `${loc} ${isKolu} ne zaman gerekir?`,
    paragraphs: [
      pick(
        [
          `${c.searchIntent} ${loc} de tablo aynı: iş çıktığında çoğu kişi önce tanıdık bir usta arıyor, bulamayınca internete bakıyor. Bu sayfa o ikinci adımı kısaltmak için var.`,
          `${loc} ${isKolu} ihtiyacı genelde plansız doğar. ${c.searchIntent} Aramadan önce sorunun ne olduğunu, nerede olduğunu ve ne kadar acele ettiğinizi kısa bir not haline getirin; ustayla ilk konuşma çok kısalır.`,
          `${c.searchIntent} Bu tür işlerde en sık yapılan hata, ilk bulunan numarayı arayıp fiyatı hiç konuşmadan işi başlatmak. İki dakikalık bir görüşme çoğu sürprizi baştan engeller.`,
        ],
        s,
        1,
      ),
      isAcil
        ? d.isCenter
          ? pick(
              [
                `Merkezde acil çağrılarda ulaşım kısa sürer. Yine de ${mahalleler} gibi mahallelerden birindeyseniz cadde ve bina numarasını baştan verin, usta boşuna dolaşmasın.`,
                `Şehir merkezinde bu iş kolunda 7/24 çalışan ustalar var. Gece ve hafta sonu çağrılarında ücretin gündüzden yüksek olması normal; tutarı telefonda konuşun.`,
              ],
              s,
              2,
            )
          : pick(
              [
                `${ad}, merkeze yaklaşık ${km} km uzaklıkta. Acil bir işte ustanın yola çıkıp gelmesi zaman alır; bu yüzden ${ad} içinde veya yakın köylerde çalışan birini seçmek, şehirden usta çağırmaktan hem hızlı hem hesaplı olur.`,
                `${ad} gibi ilçelerde gece çağrısı bulmak merkeze göre zor olabilir. Akşam saatlerinde iş çıkarsa birkaç ustayı sırayla aramaya hazır olun. Merkeze ${km} km mesafe, gelen ustanın ücretine de yansır.`,
              ],
              s,
              2,
            )
        : pick(
            [
              `Bu iş kalıcı bir iş olduğu için acele karar iyi sonuç vermez. ${ad} için mümkünse iki ustadan keşif isteyin, hem fiyatı hem de işi nasıl yapacaklarını karşılaştırın.`,
              `Ustayı yalnızca fiyata göre seçmeyin. Daha önce ${loc} yaptığı işlerden fotoğraf veya bir iki referans istemek en sağlıklısı.`,
              `Malzemeyi kimin alacağı baştan belli olsun. Usta alacaksa fişini isteyin, siz alacaksanız listeyi birlikte çıkarın.`,
            ],
            s,
            2,
          ),
    ],
  });

  sections.push({
    heading: `${loc} ${c.shortName.toLowerCase()} nasıl seçilir?`,
    paragraphs: [
      pick(
        [
          `${ad} için ${c.shortName.toLowerCase()} seçerken işi büyük ölçüde şu birkaç şey belirler:`,
          `Doğru ustayı ayıran detaylar genelde küçüktür. ${loc} dikkat edilecekler:`,
          `${c.name} işinde memnun kalmak için ustaya sormanız gerekenler:`,
        ],
        s,
        3,
      ),
      ...c.notes,
      pick(
        [
          `Bu sayfadaki ustaların iletişim bilgileri doğrulanmıştır. Görüşmeyi, fiyatı ve işi doğrudan kendisiyle konuşursunuz, arada komisyon yoktur.`,
          `Listedeki ustalara telefon veya WhatsApp'tan doğrudan ulaşırsınız. Aracı yok, anlaşmayı kendi aranızda yaparsınız.`,
        ],
        s,
        4,
      ),
    ],
  });

  sections.push({
    heading: `${loc} ${isKolu} fiyatları`,
    paragraphs: [
      c.priceInfo,
      d.isCenter
        ? pick(
            [
              `Merkez içinde ulaşım maliyeti düşük ve usta sayısı fazla olduğu için fiyat sormak ve karşılaştırmak kolay. Tek teklifle yetinmeyin.`,
              `Şehir merkezinde rekabet daha yüksek; fiyatlar genelde ilçelere göre biraz daha uygun oluyor.`,
            ],
            s,
            5,
          )
        : pick(
            [
              `${ad} merkeze ${km} km uzakta olduğu için şehirden gelen ustalar yol ücreti ekleyebilir. Yerinde çalışan bir usta bu kalemi ortadan kaldırır.`,
              `İlçe ve köy işlerinde yol ve zaman maliyeti fiyata yansır. ${ad} içinde ikamet eden bir ustayla çalışmak çoğu zaman daha hesaplı olur.`,
            ],
            s,
            5,
          ),
      buyuk
        ? `${ad} nüfusça kalabalık olduğu için bu iş kolunda seçenek genelde birden fazladır.`
        : `${ad} küçük bir yerleşim; bu iş kolunda usta sayısı sınırlı olabilir, yakın ilçelere de bakmakta fayda var.`,
    ],
  });

  sections.push({
    heading: `${ad} ve çevresi`,
    paragraphs: [
      d.blurb,
      d.neighborhoods.length > 1
        ? `Sayfadaki ustalar ${mahalleler} başta olmak üzere ${ad} geneline hizmet veriyor. Köy ve uzak mahalleler için adresi net verin, ulaşım süresini birlikte konuşun.`
        : `Sayfadaki ustalar ${ad} geneline hizmet veriyor.`,
    ],
  });

  return sections;
}

/** İlçeye özgü, kategori SSS'sine eklenen soru */
export function comboFaq(c: Category, d: District) {
  const ad = d.isCenter ? "Çorum merkez" : d.name;
  const q =
    c.group === "acil"
      ? `${d.loc} acil ${c.shortName.toLowerCase()} bulunur mu?`
      : `${d.loc} ${c.shortName.toLowerCase()} bulmak zor mu?`;
  const a =
    c.group === "acil"
      ? d.isCenter
        ? "Çorum merkezde bu iş kolunda 7/24 çalışan ustalar var. Gece çağrılarında ücret gündüze göre yüksektir; tutarı telefonda netleştirin."
        : `${d.loc} ve yakın köylerde çalışan ustalar bulunur. Merkeze uzaklık nedeniyle şehirden usta çağırmak yerine bölgede çalışan birini seçmek daha hızlıdır. Gece çağrılarında birkaç numarayı denemeye hazır olun.`
      : BUYUK.has(d.slug) || d.isCenter
        ? `${ad} için bu iş kolunda genelde birden fazla usta bulunur. İki teklif alıp karşılaştırmanız önerilir.`
        : `${ad} küçük bir yerleşim olduğu için usta sayısı sınırlı olabilir. Bu sayfada kayıt yoksa yakın ilçelere veya Çorum merkeze bakabilirsiniz.`;
  return { q, a };
}
