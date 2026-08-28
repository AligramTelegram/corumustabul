export type RehberSection = { heading: string; paragraphs: string[] };

export type RehberPost = {
  slug: string;
  title: string;
  description: string;
  /** İlgili iş kolu slug'ları - iç linkleme için */
  categorySlugs: string[];
  date: string; // ISO
  updated?: string;
  readingMin: number;
  intro: string[];
  sections: RehberSection[];
  faq?: { q: string; a: string }[];
};

export const posts: RehberPost[] = [
  {
    slug: "corumda-elektrikci-fiyatlari",
    title: "Çorum'da elektrikçi fiyatları: neye göre değişir?",
    description:
      "Çorum'da priz değişiminden komple daire tesisatına elektrikçi ücretlerini ne belirler? Fiyat sorarken nelere dikkat edin, hangi işler götürü hangileri yevmiye.",
    categorySlugs: ["elektrikci", "elektrik-ariza"],
    date: "2026-02-10",
    readingMin: 5,
    intro: [
      "\"Çorum'da elektrikçi ne kadar alıyor\" sorusunun tek bir cevabı yok, çünkü elektrik işleri çok farklı büyüklüklerde geliyor. Tek bir prizin yanıp yanmadığına bakmak ile bir dairenin bütün kablolarını yenilemek arasında hem işçilik hem malzeme açısından büyük fark var.",
      "Aşağıda Çorum'da en sık istenen elektrik işlerini ve fiyatı belirleyen kalemleri topladık. Rakam vermiyoruz çünkü piyasa hızlı değişiyor; onun yerine teklif alırken neyi sormanız gerektiğini anlatıyoruz.",
    ],
    sections: [
      {
        heading: "İşçilik nasıl fiyatlanır: yevmiye mi, götürü mü?",
        paragraphs: [
          "Küçük ve belirsiz işler (arıza arama, birkaç priz-anahtar, avize montajı) genelde yevmiye ya da saat üzerinden fiyatlanır. Usta işi görmeden net süre veremediği için bu mantıklı.",
          "Kapsamı belli işler (bir dairenin tesisatını yenilemek, belirli sayıda spot hattı çekmek, pano değiştirmek) götürü fiyatlanır. Burada nokta sayısı, kat planı ve malzeme sınıfı belli olduğu için usta tek rakam verebilir. Götürü teklifte 'nelerin dahil olmadığını' mutlaka sorun.",
        ],
      },
      {
        heading: "Malzemeyi kim alıyor?",
        paragraphs: [
          "Kablo kesiti, sigorta ve priz-anahtar markası fiyatı doğrudan etkiler. Teklifte 'malzeme dahil' yazıyorsa hangi markaların kullanılacağını yazılı isteyin.",
          "Malzemeyi kendiniz alacaksanız listeyi ustayla birlikte çıkarın. Eksik veya yanlış kesit kablo, iş günü ortasında ustayı durdurur ve ikinci bir nakliye gerektirir.",
        ],
      },
      {
        heading: "Fiyatı artıran işler",
        paragraphs: [
          "Sıva altı çekim (kanal açma, alçı tamiri), eski binada topraksız tesisatı topraklıya çevirme, kaçak akım rölesi ekleme ve pano yenileme işçiliği belirgin artırır.",
          "Acil çağrılar, gece ve resmi tatil müdahaleleri gündüz randevusuna göre daha pahalıdır. Arıza acil değilse ertesi güne randevu almak daha hesaplıdır.",
        ],
      },
      {
        heading: "Teklif alırken sorulacaklar",
        paragraphs: [
          "İş yevmiye mi götürü mü? Kaç kişi, kaç gün? Malzeme dahil mi, hangi markalar? Kanal açma ve alçı tamiri fiyata dahil mi? Kaçak akım rölesi var mı, yoksa eklenecek mi? Garanti veriliyor mu?",
          "Bu soruların cevaplarını iki ayrı ustadan alıp karşılaştırmak, hem fiyatı hem de işi kimin daha düzgün planladığını gösterir.",
        ],
      },
    ],
    faq: [
      {
        q: "Çorum'da daire tesisatını komple yenilemek şart mı?",
        a: "Kablolar bezli veya çok eskiyse ve sık arıza varsa evet. Aksi halde mutfak-banyo hattını topraklı yenilemek ve panoyu düzenlemek çoğu zaman yeterlidir.",
      },
      {
        q: "Acil elektrik arızasında fiyat neden yüksek?",
        a: "Ustanın planlı işini bırakıp gelmesi, gece veya tatil saati farkı ve keşifsiz müdahale riski ücreti artırır.",
      },
    ],
  },
  {
    slug: "kisa-girmeden-kombi-bakimi",
    title: "Kışa girmeden kombi bakımı: Çorum için kontrol listesi",
    description:
      "Çorum'da ısıtma sezonu uzun ve sert. Kombinizi kış ortasında yolda bırakmamak için sezon öncesi yapılması gerekenler ve petek temizliğinin ne zaman gerektiği.",
    categorySlugs: ["kombi-ariza", "su-tesisatcisi"],
    date: "2026-01-15",
    readingMin: 4,
    intro: [
      "Çorum'da kombi arızaları genelde en kötü zamanda, ilk gerçek soğuklarda ortaya çıkar. Yaz boyu çalışmayan cihazın contaları kurur, sistemde biriken tortu belli olur ve basınç düşmeye başlar.",
      "Sezon öncesi yapılan bir bakım, kış ortasında acil servis çağırmaktan hem ucuz hem de sıra beklemeden çözülür. İşte kısa bir kontrol listesi.",
    ],
    sections: [
      {
        heading: "Su basıncını kontrol edin",
        paragraphs: [
          "Kombi kapalıyken manometre 1 ile 1,5 bar arasında olmalı. Sürekli düşüyor ve sık su takviyesi gerekiyorsa sistemde bir kaçak vardır; bu genelde petek bağlantısı veya kombinin içindeki bir parçadır.",
          "Basıncı kendiniz 1,5 barın çok üstüne çıkarmayın; fazla basınç emniyet valfinden su atmasına yol açar.",
        ],
      },
      {
        heading: "Petekler üstten soğuk kalıyor mu?",
        paragraphs: [
          "Petek alttan sıcak üstten soğuksa içeride hava vardır ve pürjör (hava atma vidası) ile kolayca giderilir.",
          "Petek tümüyle soğuk kalıyor, su bulanık geliyorsa sistemde çamur ve tortu birikmiştir. Bu durumda pompalı kimyasal petek temizliği gerekir; pürjör yeterli olmaz.",
        ],
      },
      {
        heading: "Yıllık bakımı ihmal etmeyin",
        paragraphs: [
          "Yetkili veya deneyimli bir usta; eşanjörü, ateşleme elektrotlarını, fanı ve baca gazını kontrol eder. Baca gazı ölçümü hem verim hem de karbonmonoksit güvenliği için önemlidir.",
          "Garanti süresi devam eden kombilerde yetkili servisi tercih edin; garanti dışı cihazlarda her marka kombiye bakan ustalar iş görür.",
        ],
      },
    ],
    faq: [
      {
        q: "Petek temizliği her yıl gerekir mi?",
        a: "Hayır. Petekler düzgün ısınıyorsa gerek yok. Üstten soğukluk hava ise pürjör yeter; komple soğukluk ve bulanık su varsa pompalı temizlik gerekir.",
      },
    ],
  },
  {
    slug: "ev-tadilatina-baslamadan-once",
    title: "Ev tadilatına başlamadan önce cevaplamanız gereken 8 soru",
    description:
      "Boya, fayans, mutfak, elektrik ve tesisat bir arada gidince tadilat karışır. Çorum'da tadilata girişmeden önce sıralama, bütçe ve usta koordinasyonu için bir rehber.",
    categorySlugs: ["boya-badana", "fayans-seramik", "elektrikci", "su-tesisatcisi", "alcipan"],
    date: "2026-03-05",
    readingMin: 6,
    intro: [
      "Tadilatta en sık yaşanan sorun para değil, sıralama. Boyacı gelmeden elektrikçinin işini bitirmemesi ya da fayans döşendikten sonra tesisatta kaçak çıkması, çoğu zaman baştan bir plan yapılmadığı için oluyor.",
      "Aşağıdaki sorulara tadilata girişmeden önce cevap verin.",
    ],
    sections: [
      {
        heading: "1. Hangi işler var ve doğru sıra ne?",
        paragraphs: [
          "Genel sıra şöyledir: söküm, kaba tesisat ve elektrik (sıva altı), alçı ve alçıpan, fayans-seramik, boya, dolap ve mutfak montajı, temizlik. Aydınlatma armatürleri ve priz kapakları en sona kalır.",
          "Bu sırayı bozan her iş, sonradan yapılan işe zarar verir. Boyalı duvarda kanal açmak zorunda kalmak en klasik örnektir.",
        ],
      },
      {
        heading: "2. Tek ekip mi, ayrı ustalar mı?",
        paragraphs: [
          "Tek bir tadilat ekibi koordinasyonu üstlenir ama fiyatı genelde daha yüksektir. Ayrı ustalarla çalışmak daha hesaplı olabilir; bu durumda koordinasyonu siz yaparsınız ve ustaların birbirini beklememesi için takvim çıkarmanız gerekir.",
        ],
      },
      {
        heading: "3. Malzeme kararlarını verdiniz mi?",
        paragraphs: [
          "Fayans, boya rengi, mutfak tezgahı, armatür ve dolap kapağı seçimleri iş başlamadan netleşmeli. Usta beklerken karar vermek hem işi uzatır hem de aceleyle yanlış seçim yaptırır.",
        ],
      },
      {
        heading: "4. Elektrik ve tesisatta ne değişecek?",
        paragraphs: [
          "Priz ve anahtar yerleri, spot planı, ankastre cihaz hatları ve mutfak-banyo tesisatı fayans döşenmeden karara bağlanmalı. Eski fayans söküldüyse tesisatı da yenilemek en mantıklısıdır; bir daha açılmaz.",
        ],
      },
      {
        heading: "5. Evde mi kalacaksınız?",
        paragraphs: [
          "Boş evde tadilat hızlı ve temiz ilerler. Eşyalı ve içinde yaşanan evde toz kontrolü, oda oda çalışma ve koruma önlemleri işi uzatır; ustaya bunu baştan söyleyin.",
        ],
      },
      {
        heading: "6. Bütçenin ne kadarını yedeğe ayırdınız?",
        paragraphs: [
          "Söküm sonrası çürük boru, bozuk şap veya nemli duvar gibi sürprizler çıkar. Toplam bütçenin yüzde 10-15'ini beklenmedik işler için ayırın.",
        ],
      },
      {
        heading: "7. Sözleşme ve ödeme planı var mı?",
        paragraphs: [
          "İşin kapsamı, süresi, malzeme sorumluluğu ve ödeme aşamaları yazılı olsun. Ödemeyi işin bitişine göre aşamalandırmak iki taraf için de güven verir.",
        ],
      },
      {
        heading: "8. Referans gördünüz mü?",
        paragraphs: [
          "Ustadan daha önce yaptığı işlerden fotoğraf, mümkünse bir iki telefon numarası isteyin. Çorum küçük bir şehir; birçok ustanın işini görecek bir tanıdık bulunur.",
        ],
      },
    ],
  },
  {
    slug: "su-kacagi-belirtileri",
    title: "Su kaçağı belirtileri ve Çorum'da kırmadan tespit",
    description:
      "Faturanın artması, duvarda nem, alt komşuya damlama. Su kaçağının belirtileri ve akustik, termal, gazlı yöntemlerle zemini kırmadan tespitin nasıl yapıldığı.",
    categorySlugs: ["su-kacagi-tespiti", "su-tesisatcisi", "tikaniklik-acma"],
    date: "2026-02-22",
    readingMin: 4,
    intro: [
      "Gizli su kaçağı, fark edilmeden haftalarca sürebilir ve hem su faturasını hem de yapıyı yıpratır. İyi haber şu: modern tespit yöntemleri artık bütün zemini kırmadan çalışıyor.",
    ],
    sections: [
      {
        heading: "Belirtiler",
        paragraphs: [
          "Su faturasının açıklanamayan artışı, hiçbir musluk açık değilken sayacın dönmesi, duvar veya tavanda nem lekesi ve küf, zeminin belirli bir bölgesinin sürekli sıcak veya soğuk kalması, alt kata damlama.",
          "Kombili sistemde basıncın sürekli düşmesi ve sık su takviyesi de çoğu zaman petek veya bağlantı kaçağıdır.",
        ],
      },
      {
        heading: "Kırmadan tespit nasıl yapılır?",
        paragraphs: [
          "Akustik dinleme cihazı, basınçlı borudan sızan suyun sesini duvar ve zemin üzerinden dinleyerek noktayı daraltır. Termal kamera, sıcak su hattındaki kaçağı ısı farkından gösterir.",
          "Gaz (azot) yöntemi, sisteme zararsız gaz verilip yüzeye çıktığı noktanın hassas cihazla bulunmasıdır. Bu yöntemler birleşince kaçak birkaç santime kadar daraltılır ve sadece o küçük alan açılır.",
        ],
      },
      {
        heading: "Tespit ve tamir ayrı işlerdir",
        paragraphs: [
          "Cihazlı tespit kaçağın yerini bulur; tamir açılan yer ve malzemeye göre ayrı fiyatlanır. İkisini birlikte yapan ustayı tercih etmek süreci kısaltır.",
          "Kaçak komşudan geliyor olabilir. Bu durumda tespiti tarafsız yapması için ustayı iki taraf birlikte çağırmalı ve rapor istenmelidir.",
        ],
      },
    ],
  },
  {
    slug: "corumda-cilingir-cagirirken",
    title: "Çorum'da çilingir çağırırken bilmeniz gereken 6 şey",
    description:
      "Kapıda kaldınız ve Çorum'da çilingir arıyorsunuz. Doğru ustayı seçmek, kapınızın zarar görmemesi ve fiyatta sürpriz yaşamamak için pratik bir rehber.",
    categorySlugs: ["cilingir", "demir-kaynak"],
    date: "2026-03-18",
    readingMin: 4,
    intro: [
      "Kapıda kalmak can sıkıcı bir durum ve genelde acele ederken karar veriyorsunuz. Çorum'da çilingir çağırmadan önce bilmeniz gereken birkaç şey, hem kapınızı hem de cebinizi korur.",
    ],
    sections: [
      {
        heading: "Kapının cinsini baştan söyleyin",
        paragraphs: [
          "Çelik kapı, ahşap kapı ve oto kapısı farklı ekipman ister. Çelik kapıda bare sökülür, ahşapta gömme kilit çözülür, oto kapısında ise chipli anahtar için kodlama cihazı gerekir.",
          "Ustayı ararken hangi kapı olduğunu ve markasını söylerseniz doğru aletle gelir, ikinci kez gidip gelmesi gerekmez.",
        ],
      },
      {
        heading: "Kapıyı kırmadan açan ustayı seçin",
        paragraphs: [
          "Deneyimli bir çilingir çelik kapıyı zorlamadan, bareyi sökerek açar. Kapı ancak kilit tamamen bozuksa ve başka yol kalmadıysa müdahale görmeli.",
          "Telefonda 'kapıya zarar verir misiniz' diye sorun. Net cevap vermeyen ustayla çalışmayın.",
        ],
      },
      {
        heading: "Fiyatı kapıda değil telefonda konuşun",
        paragraphs: [
          "Gündüz açım orta bantta, gece ve resmi tatil çağrılarında daha yüksektir. Bu normaldir ama tutarı iş başlamadan netleştirin.",
          "Bare veya göbek değişimi yapılacaksa malzeme ücreti ayrıdır. Hangi marka kilit takılacağını sorun.",
        ],
      },
      {
        heading: "Kimlik istenmesi iyi bir işarettir",
        paragraphs: [
          "Çilingirin, kapının size ait olduğunu gösteren bir belge veya kimlik istemesi güvenlik açısından olağandır. Bunu yapan usta işini ciddiye alıyordur.",
        ],
      },
      {
        heading: "Kilit eskiyse açtırınca yenileyin",
        paragraphs: [
          "Bir bare zorlanarak açıldıysa içindeki piminler çoğu zaman yıpranır. Aynı gün göbek değişimi yaptırmak, birkaç ay sonra ikinci bir çağrının önüne geçer.",
        ],
      },
      {
        heading: "İlçedeyseniz bölgede çalışan birini arayın",
        paragraphs: [
          "Çorum merkeze uzak bir ilçedeyseniz, şehirden usta çağırmak hem uzun sürer hem de yol ücreti ekler. İlçenizde ya da yakın köylerde çalışan bir çilingir daha hızlı ulaşır.",
        ],
      },
    ],
    faq: [
      {
        q: "Çorum'da gece çilingir bulunur mu?",
        a: "Evet. Merkezde 7/24 çalışan çilingirler var. İlçelerde gece çağrısı daha zor olabilir; birkaç numarayı sırayla denemeye hazır olun.",
      },
      {
        q: "Çilingir ne kadar sürede gelir?",
        a: "Şehir merkezinde genellikle 15-30 dakika. İlçe ve köylerde mesafeye göre süre uzar.",
      },
    ],
  },
  {
    slug: "corumda-kisa-hazirlik-ev-bakimi",
    title: "Çorum'da kışa hazırlık: evde kontrol edilecek 7 nokta",
    description:
      "Çorum kışı sert ve uzun. Kombi, çatı, pencere ve tesisatı ilk soğuklardan önce kontrol ettirmek, kışın ortasında acil usta çağırmaktan çok daha ucuz.",
    categorySlugs: [
      "kombi-ariza",
      "cati-yalitim",
      "pvc-cam-balkon",
      "su-tesisatcisi",
      "dogalgaz-tesisat",
    ],
    date: "2026-01-05",
    readingMin: 5,
    intro: [
      "Çorum'da ısıtma sezonu erken başlar ve uzun sürer. Kışa girmeden birkaç kontrol yaptırmak, en soğuk günde kombinin arıza vermesinden ya da çatının akmasından iyidir.",
    ],
    sections: [
      {
        heading: "Kombi bakımı ve su basıncı",
        paragraphs: [
          "Kombi kapalıyken basınç 1 ile 1,5 bar arasında olmalı. Sürekli düşüyorsa sistemde kaçak vardır. Sezon öncesi bakımda eşanjör, ateşleme ve baca gazı kontrol edilir.",
        ],
      },
      {
        heading: "Petekler düzgün ısınıyor mu?",
        paragraphs: [
          "Petek üstten soğuk alttan sıcaksa içeride hava vardır, pürjörle atılır. Komple soğuk kalıyorsa çamur birikmiştir ve pompalı petek temizliği gerekir.",
        ],
      },
      {
        heading: "Çatı ve dere temizliği",
        paragraphs: [
          "Kaymış kiremit, tıkalı dere ve baca dibi Çorum'da en sık su alma noktaları. Kar yağmadan yapılan küçük bir çatı bakımı, kışın acil müdahaleden çok daha ucuz.",
        ],
      },
      {
        heading: "Pencere contaları ve cam balkon",
        paragraphs: [
          "Eski PVC pencerelerde conta sertleşir ve hava alır. Çoğu zaman pencereyi değiştirmeden conta yenileme ve kanat ayarıyla sızdırmazlık geri gelir.",
        ],
      },
      {
        heading: "Dış musluklar ve borular",
        paragraphs: [
          "Bahçe ve balkon musluklarının suyunu boşaltın. Donan su borusu patlatır ve baharda daha büyük bir tamir çıkarır.",
        ],
      },
      {
        heading: "Doğalgaz tesisatı ve baca",
        paragraphs: [
          "Gaz kokusu alırsanız ateş yakmadan, elektrik düğmesine dokunmadan ana vanayı kapatıp dışarıdan arayın. Baca çekişi ve sobalı sistemlerde baca temizliği karbonmonoksit riski için önemlidir.",
        ],
      },
      {
        heading: "Çatı arası ve dış duvar yalıtımı",
        paragraphs: [
          "Çatı arasına serilen cam yünü ya da taş yünü, kombi masrafını gözle görülür düşürür. Köşe daireler ve kuzey cephede mantolama farkı en çok hissedilen yerdir.",
        ],
      },
    ],
  },
  {
    slug: "corumda-tasinma-rehberi",
    title: "Çorum'da taşınma rehberi: nakliyat seçimi ve hazırlık",
    description:
      "Çorum içinde ya da şehirler arası taşınıyorsunuz. Doğru nakliyat firmasını seçmek, fiyatı karşılaştırmak ve eşyanızı zarar görmeden taşımak için adım adım rehber.",
    categorySlugs: ["nakliyat", "ev-temizligi", "marangoz"],
    date: "2026-02-28",
    readingMin: 5,
    intro: [
      "Taşınma stresli bir iş ve en büyük sürprizler genelde taşıma günü çıkar. Çorum'da nakliyat firması seçerken ve hazırlık yaparken birkaç şeye dikkat etmek, o günü çok kolaylaştırır.",
    ],
    sections: [
      {
        heading: "Keşif yapılmadan verilen fiyata güvenmeyin",
        paragraphs: [
          "Firma eşyayı görmeden net fiyat veremez. Yerinde ya da video ile keşif isteyin. Dar sokak, asansörsüz bina ve yüksek kat fiyatı en çok etkileyen üç şeydir.",
        ],
      },
      {
        heading: "Sigorta kapsamını yazılı isteyin",
        paragraphs: [
          "Taşıma sırasında bir şey kırılırsa neyin, ne kadar karşılandığını önceden öğrenin. 'Sigortalı taşıma' ifadesinin sözleşmede yer alması gerekir.",
        ],
      },
      {
        heading: "Montaj ve demontaj dahil mi?",
        paragraphs: [
          "Çoğu evden eve pakette yatak odası ve dolapların sökülüp kurulması dahildir. Yine de teklifte bunun yazılı olduğunu görün. Mutfak dolabı sökümü bazen ayrı fiyatlanır.",
        ],
      },
      {
        heading: "Beyaz eşya için emniyet civataları",
        paragraphs: [
          "Çamaşır makinesinin taşıma civataları takılmalı. Buzdolabı yan yatırıldıysa yeni evde en az 4-6 saat dik bekletilmeden çalıştırılmamalı.",
        ],
      },
      {
        heading: "Paketlemeyi erken başlatın",
        paragraphs: [
          "Az kullandığınız eşyalarla bir hafta önceden başlayın. Kolilerin üstüne hangi odaya ait olduğunu yazın; yeni evde yerleştirme yarı yarıya kısalır.",
        ],
      },
      {
        heading: "Eski ve yeni evi temizlik için planlayın",
        paragraphs: [
          "Boş haldeyken temizlik en kolayıdır. Yeni eve taşınmadan önce, eski evden çıktıktan sonra bir temizlik ekibiyle çalışmak iki tarafı da rahatlatır.",
        ],
      },
    ],
  },
];

export const postSlugs = posts.map((p) => p.slug);
export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const postsSorted = () =>
  [...posts].sort((a, b) => b.date.localeCompare(a.date));
export const postsForCategory = (categorySlug: string) =>
  postsSorted().filter((p) => p.categorySlugs.includes(categorySlug));
