import type { Category } from "@/lib/types";

/**
 * 20 iş kolu. Metinler yerel arama niyetine göre özgün yazıldı;
 * ilçe sayfalarında bu içerik ilçe adı ve yerel detaylarla birleştirilir.
 */
export const categories: Category[] = [
  {
    slug: "cilingir",
    name: "Çilingir",
    shortName: "Çilingir",
    tagline: "Kapı açma, kilit ve bare değişimi",
    group: "acil",
    icon: "KeyRound",
    primaryKeyword: "çorum çilingir",
    keywords: [
      "çorum çilingir",
      "çorum çilingir fiyatları",
      "çorum acil çilingir",
      "çorum 7/24 çilingir",
      "çorum anahtarcı",
      "çorum kapı açma",
      "çorum oto çilingir",
      "çorum kasa çilingir",
      "çorum çelik kapı kilit değişimi",
      "çorum gece çilingir",
      "en yakın çilingir çorum",
    ],
    searchIntent:
      "Kapıda kalan, anahtarını kaybeden veya kilidi arızalanan kullanıcı; genelde acil ve gece saatlerinde arıyor.",
    heroText: "Kapıda mı kaldınız? Çorum'da en yakın çilingir birkaç dakika uzağınızda.",
    intro: [
      "Çorum'da çilingir çağırmak çoğu zaman planlı bir şey değildir. Kapı rüzgârda çarpar, anahtar içeride kalır ya da yıllardır kullanılan bir bare bir sabah dönmez. Bu sayfadaki çilingirler şehir merkezinde ve ilçelerde çalışıyor, büyük kısmı 7/24 açık.",
      "İşini bilen bir çilingir kapıyı zarar vermeden açar. Çelik kapıda bare sökülerek, ahşap kapıda gömme kilit çözülerek, oto kapısında ise immobilizerli anahtar kodlanarak girilir. Bu yüzden ararken kapının cinsini baştan söyleyin; usta doğru ekipmanla gelir.",
      "Kilit zaten eskimişse açtırdıktan sonra bare veya göbek değiştirmek mantıklıdır. Birkaç ay içinde ikinci bir çağrının ve ikinci bir ücretin önüne geçer.",
    ],
    notes: [
      "Gece ve resmî tatil çağrılarında ücret farkı normaldir; ustayla telefonda net konuşun.",
      "Kapıyı deforme ederek açan değil, bareli sökerek açan ustayı tercih edin.",
      "Kimlik ve kapının size ait olduğunu gösteren belge istenmesi güvenlik açısından olağandır.",
    ],
    priceInfo:
      "Çorum'da standart bir daire kapısı açımı gündüz için orta bantta, gece ve acil çağrılarda daha yüksek fiyatlanır. Bare veya göbek değişimi malzemeye göre ayrıca hesaplanır. Kesin rakamı ustadan telefonda alın.",
    faq: [
      {
        q: "Çorum'da çilingir kaç para?",
        a: "Gündüz standart bir daire kapısı açımı orta bantta, gece ve acil çağrılarda daha yüksektir. Bare veya göbek değişimi malzemeye göre ayrıca hesaplanır. Kesin rakamı çağrı sırasında ustadan alın.",
      },
      {
        q: "Çorum'da gece çilingir bulunur mu?",
        a: "Evet. Listedeki ustaların büyük kısmı 7/24 çalışır; gece çağrılarında ulaşım ve saat farkı nedeniyle ücret gündüze göre yüksektir.",
      },
      {
        q: "Çilingir kapıyı kırar mı?",
        a: "Deneyimli çilingir çelik kapıyı kırmadan, bareyi sökerek açar. Kapı ancak kilit tamamen bozuksa ve başka yol kalmadıysa müdahale görür.",
      },
      {
        q: "Oto anahtarı kopyalatmak için çilingir yeterli mi?",
        a: "Düz anahtarlar çoğu çilingirde kopyalanır. Chip'li (immobilizerli) anahtarlarda kodlama cihazı olan oto çilingiri gerekir; ararken araç marka ve modelini belirtin.",
      },
    ],
    relatedSlugs: ["elektrik-ariza", "pvc-cam-balkon", "demir-kaynak"],
  },
  {
    slug: "oto-cekici",
    name: "Oto Çekici ve Yol Yardım",
    shortName: "Oto Çekici",
    tagline: "Şehir içi ve şehirler arası çekici",
    group: "acil",
    icon: "Truck",
    primaryKeyword: "çorum oto çekici",
    keywords: [
      "çorum oto çekici",
      "çorum oto kurtarma",
      "çorum çekici",
      "çorum yol yardım",
      "çorum 7/24 çekici",
      "çorum oto kurtarma fiyatları",
      "çorum akü takviye",
      "çorum lastik yol yardım",
      "çorum şehirler arası çekici",
      "çorum kayar kasa çekici",
      "en yakın çekici çorum",
    ],
    searchIntent:
      "Yolda kalan sürücü; kaza, arıza, akü bitmesi veya lastik patlaması sonrası acil çekici arıyor.",
    heroText: "Yolda kaldıysanız bir telefon yeter. Çorum ve çevre yollarda çekici hizmeti.",
    intro: [
      "Çorum çevresindeki Samsun, Ankara ve Amasya yollarında arıza ve kaza sonrası araç kurtarma sık yaşanır. Bu sayfadaki oto çekiciler şehir içi ve şehirler arası çalışıyor, çoğu 7/24 yol yardım veriyor.",
      "Çağrı yaparken bulunduğunuz yolu, yaklaşık kilometreyi ya da en yakın köyü, aracın markasını ve vitesin boşa alınıp alınamadığını söyleyin. Otomatik şanzımanlı ve dört çekişli araçlar sürüklenmeden, tam kaldırmalı çekiciyle taşınmalıdır.",
      "Kaza sonrası aracı çektirmeden önce trafik tutanağı ve birkaç fotoğraf için vakit ayırın. Sigorta süreci bunları ister ve sonradan telafisi zor olur.",
    ],
    notes: [
      "Kasko poliçeniz çekici masrafını karşılıyor olabilir; çağrıdan önce sigortanızı arayın.",
      "Şehirler arası mesafede ücret kilometreye göre artar; peşin tutar isteyin.",
      "Aracınız garaj kat altındaysa veya bariyer arkasındaysa bunu baştan belirtin.",
    ],
    priceInfo:
      "Şehir içi çekme sabit bir taban ücrettedir; şehirler arası taşımalar gidiş-dönüş kilometre üzerinden hesaplanır. Gece ve zorlu kurtarmalarda (devrilme, şarampol) ücret artar.",
    faq: [
      {
        q: "Çorum'da oto çekici ne kadar?",
        a: "Şehir içi çekme sabit bir taban ücrettedir; şehirler arası taşımalar gidiş-dönüş kilometre üzerinden hesaplanır. Gece ve zorlu kurtarmalarda ücret artar. Kasko poliçeniz masrafı karşılıyor olabilir.",
      },
      {
        q: "Çorum'da çekici ne kadar sürede gelir?",
        a: "Şehir merkezinde genellikle 15-30 dakika. Şehirler arası yolda konuma göre süre uzar; ustayla telefonda tahmini varış süresini netleştirin.",
      },
      {
        q: "Otomatik vitesli aracım çekilebilir mi?",
        a: "Otomatik şanzımanlı araçlar sürüklenerek değil, tam kaldırmalı (kayar kasa) çekici ile taşınmalıdır. Aksi halde şanzıman zarar görür.",
      },
    ],
    relatedSlugs: ["cilingir", "beyaz-esya-servisi"],
  },
  {
    slug: "tikaniklik-acma",
    name: "Tıkanıklık Açma",
    shortName: "Tıkanıklık Açma",
    tagline: "Lavabo, tuvalet ve ana kolon açma",
    group: "acil",
    icon: "Waves",
    primaryKeyword: "çorum tıkanıklık açma",
    keywords: [
      "çorum tıkanıklık açma",
      "çorum gider açma",
      "çorum kanal açma",
      "çorum lavabo açma",
      "çorum tuvalet tıkanıklığı",
      "çorum pissu tıkanıklığı",
      "çorum makineli tıkanıklık açma",
      "çorum kamera ile görüntüleme",
      "çorum tıkanıklık açma fiyatları",
      "çorum acil gider açma",
    ],
    searchIntent:
      "Lavabo, tuvalet veya ana giderı taşan kullanıcı; hızlı müdahale istiyor.",
    heroText: "Gider taştıysa beklemeyin. Çorum'da makineli tıkanıklık açma.",
    intro: [
      "Çorum'da tıkanıklık açma çağrılarının çoğu iki tabloda gelir: yavaş akan bir mutfak lavabosu ya da komple geri tepen bir tuvalet. İlki genelde spiral makineyle, ikincisi çoğu zaman basınçlı su veren kanal jet makinesiyle çözülür.",
      "Bu sayfadaki ustalar elektrikli spiral, jet makinesi ve gerektiğinde kamera ile hat görüntüleme kullanıyor. Apartmanda ortak kolon tıkandıysa masrafın kat malikleri arasında paylaşılması olağandır.",
      "Kış aylarında dış giderlerde donma kaynaklı tıkanma da görülür. Bu durumda boruyu zorlamak yerine çözülmesini beklemek en doğrusu.",
    ],
    notes: [
      "Market tipi asit/kostik dökmeden ustayı arayın; bu ürünler bazen boruyu ve contaları bozar.",
      "Tıkanıklığın yeri tespit edilemiyorsa kameralı kontrol isteyin.",
      "Kokulu geri tepme varsa fori (çekvalf) arızası olabilir; ustaya söyleyin.",
    ],
    priceInfo:
      "Tekli lavabo/tuvalet açımı gündüz için uygun banttadır. Ana kolon veya bahçe hattı, jet makinesi ve kamera gerektirdiğinde ücret yükselir. Kat başına veya metre üzerinden fiyatlayan ustalar vardır.",
    faq: [
      {
        q: "Çorum'da tıkanıklık açma ne kadar sürer, kaç para?",
        a: "Tekli lavabo veya klozet tıkanıklığı genelde 30-60 dakikada açılır ve uygun banttadır. Ana kolon, jet makinesi ve kamera gerektiğinde hem süre hem ücret artar.",
      },
      {
        q: "Tıkanıklık açma ne kadar sürer?",
        a: "Basit bir lavabo veya klozet tıkanıklığı genelde 30-60 dakikada açılır. Ana kolon ve kök sarması gibi durumlar birkaç saati bulabilir.",
      },
      {
        q: "Boruya zarar verir mi?",
        a: "Doğru makine ve uçla çalışan usta zarar vermez. Eski ve çürümüş pis su borularında ise açma sırasında sızıntı ortaya çıkabilir; bu boru zaten değişmelidir.",
      },
    ],
    relatedSlugs: ["su-tesisatcisi", "su-kacagi-tespiti"],
  },
  {
    slug: "su-kacagi-tespiti",
    name: "Su Kaçağı Tespiti",
    shortName: "Su Kaçağı Tespiti",
    tagline: "Cihazla, zemini kırmadan tespit",
    group: "acil",
    icon: "Droplets",
    primaryKeyword: "çorum su kaçağı tespiti",
    keywords: [
      "çorum su kaçağı tespiti",
      "çorum su kaçağı bulma",
      "çorum cihazla su kaçağı tespiti",
      "çorum kırmadan su kaçağı tespiti",
      "çorum petek kaçağı tespiti",
      "çorum gizli su kaçağı",
      "çorum su kaçağı tespiti fiyatları",
      "çorum kombi basınç düşmesi",
      "çorum termal kamera kaçak tespiti",
    ],
    searchIntent:
      "Faturası yükselen, duvarında nem/küf çıkan veya alt komşusuna su veren kullanıcı; kırmadan tespit istiyor.",
    heroText: "Duvarı kırmadan, cihazla su kaçağı tespiti - Çorum geneli.",
    intro: [
      "Çorum'da su kaçağı tespiti; faturası açıklanamayacak kadar artan, duvarında nem lekesi çıkan ya da alt komşusuna su veren kişilerin aradığı bir hizmet. İyi haber şu: artık zeminin tamamını kırmadan bulunuyor.",
      "Bu sayfadaki ustalar akustik dinleme cihazı, termal kamera ve gaz yöntemiyle kaçağın noktasını birkaç santime kadar daraltıyor. Sonra sadece o küçük alan açılıyor.",
      "Kombili sistemde basıncın sürekli düşmesi ve sık su takviyesi gerekmesi çoğu zaman petek ya da bağlantı kaçağıdır. Bu da aynı cihazlarla bulunur.",
    ],
    notes: [
      "Tespit ile tamir çoğu zaman ayrı işlerdir; ikisini birlikte yapan ustayı sorun.",
      "Rapor/görsel isteyin - site yönetimi veya sigortaya lazım olabilir.",
      "Kaçak komşudan geliyorsa tespiti tarafsız yapılması için ustayı birlikte çağırın.",
    ],
    priceInfo:
      "Cihazlı tespit sabit bir hizmet bedelidir; kaçağın bulunduğu tek nokta için tektir. Tamir, açılan yer ve malzemeye göre ayrıca fiyatlanır.",
    faq: [
      {
        q: "Çorum'da cihazla su kaçağı tespiti ne kadar?",
        a: "Cihazlı tespit, bulunan tek nokta için sabit bir hizmet bedelidir. Tamir; açılan yer ve malzemeye göre ayrıca fiyatlanır. Tespit ve tamiri birlikte yapan ustayı sorun.",
      },
      {
        q: "Su kaçağı kırmadan bulunur mu?",
        a: "Çoğu durumda evet. Akustik ve termal cihazlarla kaçak noktası daraltılır, sadece o küçük alan açılır. Tümüyle kırmasız garanti verilemez ama hasar en aza iner.",
      },
      {
        q: "Petek kaçağı nasıl anlaşılır?",
        a: "Kombi basıncı sürekli düşüyor, sık su takviyesi gerekiyorsa ve zeminde ısınan nemli bir bölge varsa petek/bağlantı kaçağı olasıdır.",
      },
    ],
    relatedSlugs: ["su-tesisatcisi", "tikaniklik-acma", "kombi-ariza"],
  },
  {
    slug: "elektrik-ariza",
    name: "Elektrik Arıza",
    shortName: "Elektrik Arıza",
    tagline: "Sigorta atması, priz ve pano arızası",
    group: "acil",
    icon: "Zap",
    primaryKeyword: "çorum elektrik arıza",
    keywords: [
      "çorum elektrik arıza",
      "çorum acil elektrikçi",
      "çorum elektrik arıza servisi",
      "çorum sigorta atması",
      "çorum kaçak akım rölesi atıyor",
      "çorum priz arızası",
      "çorum elektrik kesintisi ev içi",
      "çorum 7/24 elektrikçi",
      "çorum pano arızası",
    ],
    searchIntent:
      "Evinde elektrik giden, sigortası sürekli atan veya priz/pano kıvılcım yapan kullanıcı; acil.",
    heroText: "Sigorta sürekli atıyorsa oyalanmayın. Çorum'da acil elektrik arıza servisi.",
    intro: [
      "Çorum'da elektrik arızası acil bir iştir. Evin bir bölümünün elektriksiz kalması, kaçak akım rölesinin durmadan atması ya da prizden yanık kokusu gelmesi ertelenecek şeyler değildir.",
      "Bu sayfadaki elektrikçiler acil çağrıya çıkıyor, pano ve tesisat arızasına aynı gün bakıyor. Sık atan sigortanın ardında genelde bir cihazın kaçağı veya nemlenmiş bir buat vardır; usta hattı bölerek arızalı kısmı bulur.",
      "Panoya ıslak elle ya da izolesiz aletle dokunmayın. Ana şalteri indirip ustayı beklemek en güvenlisi.",
    ],
    notes: [
      "Pano içine ıslak elle veya izolesiz aletle dokunmayın; ana şalteri indirip ustayı bekleyin.",
      "Kaçak akım rölesi atıyorsa bu bir güvenlik uyarısıdır, köprüleyerek devre dışı bırakmayın.",
      "Sayaç öncesi (dağıtım şirketi tarafı) arızalarda usta değil, il elektrik dağıtım hattı aranır.",
    ],
    priceInfo:
      "Acil çağrı taban ücreti + yapılan işe göre fiyatlanır. Basit sigorta/priz arızası uygun banttadır; pano yenileme ve hat çekimi malzemeyle birlikte hesaplanır.",
    faq: [
      {
        q: "Çorum'da acil elektrikçi çağırmak ne kadar?",
        a: "Acil çağrı taban ücreti artı yapılan işe göre fiyatlanır. Basit sigorta veya priz arızası uygun banttadır; pano yenileme ve hat çekimi malzemeyle birlikte hesaplanır. Gece farkı olur.",
      },
      {
        q: "Sigorta neden sürekli atıyor?",
        a: "Genellikle bir elektrikli cihazın içindeki kaçak, aşırı yük ya da nemlenmiş bağlantı kutusu yüzünden. Elektrikçi hattı bölerek hangi bölümün attırdığını bulur.",
      },
      {
        q: "Gece elektrik arızasına usta gelir mi?",
        a: "Evet, listedeki ustaların bir kısmı 7/24 acil hizmet veriyor. Gece çağrılarında ücret farkı olur.",
      },
    ],
    relatedSlugs: ["elektrikci", "kombi-ariza", "beyaz-esya-servisi"],
  },
  {
    slug: "kombi-ariza",
    name: "Kombi Arıza ve Petek Temizliği",
    shortName: "Kombi ve Petek",
    tagline: "Kombi tamiri ve petek temizliği",
    group: "acil",
    icon: "Flame",
    primaryKeyword: "çorum kombi servisi",
    keywords: [
      "çorum kombi servisi",
      "çorum kombi arıza",
      "çorum kombi tamiri",
      "çorum petek temizliği",
      "çorum kombi bakımı",
      "çorum petek temizleme fiyatları",
      "çorum kombi basınç düşmesi",
      "çorum kombi hata kodu",
      "çorum kombi ateşleme yapmıyor",
      "çorum her marka kombi servisi",
    ],
    searchIntent:
      "Kışın kombisi yanmayan, hata kodu veren veya petekleri ısınmayan kullanıcı; hızlı çözüm.",
    heroText: "Kombiniz kışın ortasında mı arıza yaptı? Çorum'da aynı gün servis.",
    intro: [
      "Çorum'da kombi servisi ihtiyacı genelde ilk soğuklarda, yani en kötü zamanda ortaya çıkar. Ateşleme yapmama, sık sık arıza koduna düşme, basıncın tutmaması ve peteklerin üstten soğuk kalması en sık gelen şikâyetler.",
      "Bu sayfadaki ustalar her marka kombiye bakıyor, yıllık bakım ve baca gazı ölçümü de yapıyor. Petek üstten soğuk alttan sıcaksa içeride hava vardır ve pürjörle atılır; tümüyle soğuksa sistemde çamur birikmiştir ve pompalı kimyasal petek temizliği gerekir.",
      "Sezon başında yaptırılan bir bakım, kışın ortasında acil çağrıdan hem ucuz hem de sıra beklemeden çözülür.",
    ],
    notes: [
      "Kombi kombi hata kodunu (E ile başlayan) ustaya telefonda söyleyin; parçayı yanında getirebilir.",
      "Su basıncı 1-1.5 bar arasında olmalı; sürekli düşüyorsa kaçak vardır.",
      "Garasi devam eden kombilerde yetkili servis dışı müdahale garantiyi düşürebilir.",
    ],
    priceInfo:
      "Standart kombi bakımı sabit bir ücrettir. Arızada işçilik + değişen parça (kart, pompa, genleşme tankı, üç yollu vana) ayrı hesaplanır. Petek temizliği daire büyüklüğüne / petek sayısına göre fiyatlanır.",
    faq: [
      {
        q: "Çorum'da kombi bakımı ve petek temizliği kaç para?",
        a: "Standart kombi bakımı sabit bir ücrettir. Arızada işçilik artı değişen parça ayrı hesaplanır. Petek temizliği daire büyüklüğüne ve petek sayısına göre fiyatlanır.",
      },
      {
        q: "Petek temizliği ne zaman gerekir?",
        a: "Petekler alttan sıcak üstten soğuksa hava vardır, pürjör yeter. Komple soğuk kalıyor, su bulanık geliyorsa sistemde tortu birikmiştir ve pompalı kimyasal temizlik gerekir.",
      },
      {
        q: "Her marka kombiye bakılıyor mu?",
        a: "Listedeki ustaların çoğu tüm markalara bakar. Garanti süresi devam eden kombilerde yetkili servisi tercih edin.",
      },
    ],
    relatedSlugs: ["su-tesisatcisi", "su-kacagi-tespiti", "dogalgaz-tesisat"],
  },
  {
    slug: "beyaz-esya-servisi",
    name: "Beyaz Eşya Servisi",
    shortName: "Beyaz Eşya Servisi",
    tagline: "Buzdolabı, çamaşır ve bulaşık makinesi",
    group: "acil",
    icon: "WashingMachine",
    primaryKeyword: "çorum beyaz eşya servisi",
    keywords: [
      "çorum beyaz eşya servisi",
      "çorum buzdolabı tamiri",
      "çorum çamaşır makinesi tamiri",
      "çorum bulaşık makinesi servisi",
      "çorum fırın tamiri",
      "çorum beyaz eşya tamircisi",
      "çorum buzdolabı soğutmuyor",
      "çorum çamaşır makinesi su almıyor",
      "çorum yerinde beyaz eşya tamiri",
    ],
    searchIntent:
      "Buzdolabı soğutmayan, çamaşır makinesi su almayan/almış su boşaltmayan kullanıcı; yerinde tamir.",
    heroText: "Buzdolabı soğutmuyor, makine çalışmıyor mu? Çorum'da yerinde beyaz eşya tamiri.",
    intro: [
      "Çorum'da beyaz eşya servisi çağrılarının çoğu buzdolabının soğutmayı bırakması, çamaşır makinesinin su almaması ya da suyu boşaltmaması, bulaşık makinesinin hata verip durmasıyla gelir. Bu arızaların büyük kısmı evde, aynı ziyarette çözülür.",
      "Bu sayfadaki ustalar tüm markalara bakıyor, sık kullanılan parçaları yanında taşıyor. Buzdolabında en yaygın sorunlar gaz kaçağı, termostat ve fandır; makinelerde ise su valfi, tahliye pompası ve rulman öne çıkar.",
      "On yaşını geçmiş, sık arıza yapan bir cihazda tamir masrafı yeni cihazın yarısını buluyorsa ustaya değişim tavsiyesini de sorun.",
    ],
    notes: [
      "Cihazın marka, model ve mümkünse arıza kodunu telefonda verin.",
      "Garanti süresi devam eden cihazlarda yetkili servisi arayın.",
      "Nakliyede yan yatırılan buzdolabını en az 4-6 saat dik bekletmeden çalıştırmayın.",
    ],
    priceInfo:
      "Yerinde servis/keşif ücreti sabittir ve tamir yapılırsa çoğu ustada işçiliğe sayılır. Parça bedeli ayrıca eklenir.",
    faq: [
      {
        q: "Çorum'da beyaz eşya servisi eve mi geliyor, ücret ne kadar?",
        a: "Arızaların büyük kısmı yerinde çözülür. Yerinde servis bedeli sabittir ve tamir yapılırsa çoğu ustada işçiliğe sayılır. Parça bedeli ayrıca eklenir.",
      },
      {
        q: "Servis eve mi geliyor?",
        a: "Evet, beyaz eşya arızalarının büyük kısmı yerinde çözülür. Kompresör değişimi gibi işler atölyeye taşınabilir.",
      },
      {
        q: "Buzdolabım hiç soğutmuyor, tamir eder mi yenisini mi alayım?",
        a: "Termostat veya fan arızasıysa tamir mantıklıdır. Gaz kaçağı + eski cihaz kombinasyonunda masraf yükselir; usta yerinde görüp yönlendirir.",
      },
    ],
    relatedSlugs: ["elektrik-ariza", "su-tesisatcisi"],
  },
  {
    slug: "dogalgaz-tesisat",
    name: "Doğalgaz ve Tesisat",
    shortName: "Doğalgaz Tesisat",
    tagline: "İç tesisat, proje ve gaz bağlantısı",
    group: "acil",
    icon: "FlameKindling",
    primaryKeyword: "çorum doğalgaz tesisatı",
    keywords: [
      "çorum doğalgaz tesisatı",
      "çorum doğalgaz iç tesisat",
      "çorum doğalgaz proje firması",
      "çorum doğalgaz kaçağı",
      "çorum gaz kokusu",
      "çorum kombi gaz bağlantısı",
      "çorum doğalgaz abonelik projesi",
      "çorum petek tesisatı",
      "çorum doğalgaz tadilatı",
    ],
    searchIntent:
      "Gaz kokusu alan (acil), yeni doğalgaz aboneliği/projesi yaptıracak veya iç tesisat tadilatı isteyen kullanıcı.",
    heroText: "Gaz kokusu alıyorsanız önce vanayı kapatın, sonra bizi arayın.",
    intro: [
      "Çorum'da doğalgaz tesisatı yetki isteyen bir iştir; iç tesisat sertifikalı tesisatçı ve onaylı proje ile yapılır. Bu sayfadaki firmalar abonelik projesi, iç tesisat döşeme, kombi ve ocak bağlantısı ile tadilat sonrası hat taşıma işlerini yürütüyor.",
      "Gaz kokusu acil bir durumdur. Ateş yakmayın, elektrik düğmesine dokunmayın, ana vanayı kapatın, ortamı havalandırın ve dışarıdan arayın.",
      "Tadilatta duvar taşıyacak ya da kombi yeri değişecekse gaz hattı projesine uygun taşınmalıdır. Kaçak testi yapılmadan gaz açılmaz.",
    ],
    notes: [
      "İç tesisatı yapan firmanın yetki belgesini görün.",
      "Proje onayı ve gaz açma dağıtım şirketi kontrolüyle tamamlanır.",
      "Sertifikasız kişiye gaz hattı yaptırmak hem tehlikeli hem de aboneliği geçersiz kılar.",
    ],
    priceInfo:
      "İç tesisat metrajı, kolon sayısı ve cihaz bağlantısına göre fiyatlanır. Proje bedeli ayrıdır. Kesin teklif için keşif gerekir.",
    faq: [
      {
        q: "Çorum'da doğalgaz iç tesisatı ne kadar?",
        a: "İç tesisat metrajı, kolon sayısı ve cihaz bağlantısına göre fiyatlanır. Proje bedeli ayrıdır. Kesin teklif için keşif gerekir; işi yapan firmanın yetki belgesini görün.",
      },
      {
        q: "Gaz kokusu alınca ne yapmalıyım?",
        a: "Ateş ve kıvılcım kaynaklarından uzak durun, elektrik anahtarlarına dokunmayın, doğalgaz ana vanasını kapatın, kapı-pencereleri açın ve binadan çıkıp arayın.",
      },
      {
        q: "Kombi yerini değiştirmek istiyorum, tesisat taşınır mı?",
        a: "Evet, ancak projeye uygun şekilde sertifikalı tesisatçı yapar ve gaz kaçak testi sonrası hat yeniden devreye alınır.",
      },
    ],
    relatedSlugs: ["kombi-ariza", "su-tesisatcisi"],
  },
  {
    slug: "elektrikci",
    name: "Elektrikçi",
    shortName: "Elektrikçi",
    tagline: "Tesisat, aydınlatma ve pano işleri",
    group: "tadilat",
    icon: "Plug",
    primaryKeyword: "çorum elektrikçi",
    keywords: [
      "çorum elektrikçi",
      "çorum elektrik tesisatı",
      "çorum elektrik tesisatı yenileme",
      "çorum avize montajı",
      "çorum spot aydınlatma",
      "çorum priz anahtar değişimi",
      "çorum elektrikçi fiyatları",
      "çorum daire tesisatı",
      "çorum pano kurulumu",
      "çorum iş yeri elektrik tesisatı",
    ],
    searchIntent:
      "Tadilat, tesisat yenileme, avize/spot montajı, ek priz-hat çekimi planlayan kullanıcı; randevulu iş.",
    heroText: "Tesisat yenileme, aydınlatma, pano - Çorum'da işini bilen elektrikçi.",
    intro: [
      "Çorum'da elektrikçi işi göründüğünden fazla planlama ister. Tadilatta ek priz, spot hattı, ankastre fırın için ayrı sigorta ya da eski binada tek hattı ikiye bölmek; bunların hepsi doğru kesitte kablo ve düzenli bir pano ister.",
      "Bu sayfadaki elektrikçiler daire ve iş yeri tesisatı, kaçak akım korumalı pano kurulumu, aydınlatma, interkom ve zil tesisatı yapıyor. Sıva altı çekimlerde kanal açma ve alçı tamiri de işin parçası.",
      "1990 öncesi binalarda topraksız tesisat hâlâ yaygın. Banyo ve mutfağı önce topraklı hatta almak en doğru başlangıç.",
    ],
    notes: [
      "İş öncesi priz/anahtar/spot sayısını ve yerlerini birlikte işaretleyin.",
      "Kaçak akım rölesi (30 mA) yoksa mutlaka ekletin.",
      "Malzeme kalitesi (kablo, sigorta, priz markası) fiyatı belirler; markayı netleştirin.",
    ],
    priceInfo:
      "Priz/anahtar başına, spot başına veya götürü olarak fiyatlanır. Komple daire tesisatı metrekare + nokta sayısıyla hesaplanır. Malzeme ayrı veya dahil olabilir; sözleşmede belirtin.",
    faq: [
      {
        q: "Çorum'da elektrikçi fiyatları neye göre değişir?",
        a: "Priz ve anahtar başına, spot başına veya götürü olarak fiyatlanır. Komple daire tesisatı metrekare ve nokta sayısıyla hesaplanır. Malzeme dahil mi, hangi markalar, sözleşmede belirtin.",
      },
      {
        q: "Daire tesisatını komple yenilemek şart mı?",
        a: "Kablolar bezli/çok eskiyse ve sık arıza varsa evet. Aksi halde sadece mutfak-banyo hattını topraklı yenilemek ve pano düzenlemek yeterli olabilir.",
      },
      {
        q: "Avize ve spot montajı ne kadar sürer?",
        a: "Hazır tavan çıkışı varsa avize montajı kısadır. Yeni spot hattı çekmek, tavan tipine göre yarım ila bir gün alır.",
      },
    ],
    relatedSlugs: ["elektrik-ariza", "alcipan", "boya-badana"],
  },
  {
    slug: "su-tesisatcisi",
    name: "Su Tesisatçısı",
    shortName: "Su Tesisatçısı",
    tagline: "Musluk, batarya ve banyo tesisatı",
    group: "tadilat",
    icon: "Wrench",
    primaryKeyword: "çorum su tesisatçısı",
    keywords: [
      "çorum su tesisatçısı",
      "çorum tesisatçı",
      "çorum su tesisatı tamiri",
      "çorum musluk tamiri",
      "çorum batarya değişimi",
      "çorum banyo tesisatı",
      "çorum rezervuar tamiri",
      "çorum su borusu değişimi",
      "çorum tesisatçı fiyatları",
      "çorum acil tesisatçı",
    ],
    searchIntent:
      "Damlayan musluk, akan rezervuar, batarya değişimi, banyo-mutfak tesisat tadilatı isteyen kullanıcı.",
    heroText: "Damlayan musluktan komple banyo tesisatına - Çorum su tesisatçısı.",
    intro: [
      "Çorum'da su tesisatçısı işleri damlayan bir bataryadan komple banyo yenilemeye kadar geniş bir aralıkta geliyor. Bu sayfadaki ustalar hem acil onarım hem de randevulu tadilat yapıyor.",
      "Eski binada galvaniz borular içten daralır ve su basıncı düşer. Bu borular yeşil PPRC boruyla yenilenince basınç geri gelir. Gömme rezervuar ve duş sistemi değişiminde sızdırmazlık testi yapılmış bağlantı önemlidir.",
      "Kış öncesi bahçe ve balkon musluklarının suyunu boşaltmak, donma nedeniyle patlayan boruların önüne geçer.",
    ],
    notes: [
      "Batarya/armatür markası ve modelini önceden belirleyin; usta doğru yedek parça getirir.",
      "Gömme (ankastre) sistemlerde marka uyumu şarttır; karışık marka sızdırır.",
      "Tadilatta pis su eğimini (her metrede ~2 cm) kontrol ettirin.",
    ],
    priceInfo:
      "Musluk/rezervuar onarımı ve batarya değişimi uygun banttadır. Komple banyo tesisatı, hat yenileme metraj ve nokta sayısıyla hesaplanır. Malzeme ayrıdır.",
    faq: [
      {
        q: "Çorum'da su tesisatçısı kaç para alır?",
        a: "Musluk ve rezervuar onarımı ile batarya değişimi uygun banttadır. Komple banyo tesisatı ve hat yenileme metraj ve nokta sayısıyla hesaplanır. Malzeme ayrıdır.",
      },
      {
        q: "Rezervuar sürekli su akıtıyor, ne yapılmalı?",
        a: "Genelde iç takım (flatör ve dip contası) yıpranmıştır; değişimi kısa sürer. Kireçli sularda iç takımın 2-3 yılda bir yenilenmesi normaldir.",
      },
      {
        q: "Su basıncım çok düşük, sebebi ne olabilir?",
        a: "Eski galvaniz boruların içten daralması, tıkalı perlatör/filtre veya bina hidroforu arızası. Tesisatçı noktayı test ederek bulur.",
      },
    ],
    relatedSlugs: ["tikaniklik-acma", "su-kacagi-tespiti", "fayans-seramik"],
  },
  {
    slug: "boya-badana",
    name: "Boya Badana",
    shortName: "Boyacı",
    tagline: "İç cephe, dış cephe ve tavan boyası",
    group: "tadilat",
    icon: "PaintRoller",
    primaryKeyword: "çorum boya badana",
    keywords: [
      "çorum boya badana",
      "çorum boyacı",
      "çorum boya badana ustası",
      "çorum iç cephe boya",
      "çorum dış cephe boya",
      "çorum daire boyama fiyatları",
      "çorum boya badana metrekare fiyatı",
      "çorum tavan boyası",
      "çorum saten alçı boya",
      "çorum dekoratif boya",
    ],
    searchIntent:
      "Ev/iş yeri iç boyası, tavan, dış cephe veya dekoratif boya yaptırmak isteyen kullanıcı; metrekare fiyatı araştırıyor.",
    heroText: "Taşınmadan önce ya da yıllık tazeleme - Çorum'da temiz işçi boyacı.",
    intro: [
      "Çorum'da boya badana işinin kalitesi büyük ölçüde hazırlıkta belli olur. Kabaran eski boyanın kazınması, çatlakların mastikle doldurulması, macun çekilip zımparalanması ve astar; bu adımlar atlanınca en pahalı boya bile bir yılda çatlar.",
      "Bu sayfadaki boyacılar iç cephe, dış cephe, tavan, dekoratif uygulama ve eski ahşap boyası yapıyor. Eşyalı evde naylon örtme ve toz kontrolü işin standardı olmalı.",
      "Çorum'da dış cephede kışın nem ve don çevrimi yıprattığı için silikon esaslı, su itici boyalar daha uzun ömürlü oluyor.",
    ],
    notes: [
      "Metrekare fiyatı 'kaç kat' ve 'hazırlık dahil mi' sorularıyla netleşir.",
      "Renk kartelasından seçtiğiniz tonu küçük alanda deneyin; ışıkta değişir.",
      "Tavan ve duvar aynı beyaz olmasın; tavan bir ton açık daha ferah durur.",
    ],
    priceInfo:
      "İç cephe boya metrekare üzerinden, hazırlık (macun-zımpara-astar) ayrı ya da dahil olarak fiyatlanır. Dış cephe iskele/sepet ihtiyacına göre değişir. Oda başı götürü teklif de alınabilir.",
    faq: [
      {
        q: "Çorum'da boya badana metrekare fiyatı ne kadar?",
        a: "İç cephe boya metrekare üzerinden fiyatlanır; hazırlık (macun, zımpara, astar) ayrı ya da dahil olabilir. Boş daire daha ucuza gelir. Teklifte kaç kat ve hangi marka boya yazılı olsun.",
      },
      {
        q: "Daire boyatmak ne kadar sürer?",
        a: "Boş bir 2+1 dairenin macunlu tam hazırlıkla boyanması genelde 3-5 gün. Sadece tazeleme (tek kat) ise 1-2 gün.",
      },
      {
        q: "Eşyalı evde boya yapılır mı?",
        a: "Yapılır. Mobilyalar orta alana toplanıp naylonla örtülür, zemin korunur. Yine de küçük bir toz olması kaçınılmazdır.",
      },
    ],
    relatedSlugs: ["alcipan", "fayans-seramik", "elektrikci"],
  },
  {
    slug: "fayans-seramik",
    name: "Fayans Seramik",
    shortName: "Fayansçı",
    tagline: "Banyo, mutfak ve zemin kaplama",
    group: "tadilat",
    icon: "Grid3x3",
    primaryKeyword: "çorum fayans ustası",
    keywords: [
      "çorum fayans ustası",
      "çorum seramik döşeme",
      "çorum fayans döşeme fiyatları",
      "çorum banyo yenileme",
      "çorum mutfak tezgah arası",
      "çorum granit seramik",
      "çorum zemin seramiği",
      "çorum eski fayans sökümü",
      "çorum büyük ebat seramik",
    ],
    searchIntent:
      "Banyo-mutfak yenileme, zemin seramiği, tezgah arası veya balkon fayansı yaptıracak kullanıcı.",
    heroText: "Banyo ve mutfak yenileme, zemin seramiği - Çorum'da düz ve derzi tertemiz.",
    intro: [
      "Çorum'da fayans ustası ararken göz iki şeye takılır: derzlerin aynı kalınlıkta ve düz olması, bir de zeminin terazisinde olup su tutmaması. İyi usta önce zemini şapla düzeltir, sonra kaplar.",
      "Bu sayfadaki ustalar eski fayans sökümü, şap düzeltme, büyük ebat granit seramik, tezgah arası ve dış mekân donmaz seramik işleri yapıyor. Banyo yenilemede tesisat ve fayansın koordineli gitmesi işi hızlandırır.",
      "60x120 gibi büyük ebat seramiklerde zemin ne kadar düzse sonuç o kadar iyi. Bu ürünler tolerans affetmez.",
    ],
    notes: [
      "Eski fayans sökülünce tesisatı da yenilemek mantıklıdır, bir daha açılmaz.",
      "Su giderine doğru eğim (%1-2) verilmeli; yoksa zeminde su göllenir.",
      "Derz rengini koyu seçmek uzun vadede daha temiz görünür.",
    ],
    priceInfo:
      "Döşeme metrekare üzerinden; sökme, şap düzeltme, süpürgelik ve köşe profilleri ayrı kalemlerdir. Büyük ebat ve desenli ek kesim işçiliği artırır. Malzeme genelde mal sahibinden.",
    faq: [
      {
        q: "Çorum'da fayans döşeme metrekare fiyatı nedir?",
        a: "Döşeme metrekare üzerinden; sökme, şap düzeltme, süpürgelik ve köşe profilleri ayrı kalemlerdir. Büyük ebat ve desenli kesim işçiliği artırır. Malzeme genelde mal sahibinden.",
      },
      {
        q: "Eski fayansın üstüne fayans yapılır mı?",
        a: "Teknik olarak mümkün ama önerilmez; kot yükselir, kapılar sürtebilir ve alttaki gevşek karo sonradan sorun çıkarır. Sökme daha sağlıklıdır.",
      },
      {
        q: "Banyo yenileme kaç günde biter?",
        a: "Söküm, tesisat, şap, fayans, derz ve armatür montajıyla birlikte tek banyo genelde 5-8 iş günü sürer.",
      },
    ],
    relatedSlugs: ["su-tesisatcisi", "boya-badana", "alcipan"],
  },
  {
    slug: "alcipan",
    name: "Alçıpan ve Asma Tavan",
    shortName: "Alçıpan Ustası",
    tagline: "Asma tavan, bölme duvar ve niş",
    group: "tadilat",
    icon: "SquareStack",
    primaryKeyword: "çorum alçıpan ustası",
    keywords: [
      "çorum alçıpan ustası",
      "çorum asma tavan",
      "çorum alçıpan asma tavan fiyatları",
      "çorum kartonpiyer",
      "çorum bölme duvar alçıpan",
      "çorum gizli ışık tavan",
      "çorum dekoratif tavan",
      "çorum alçıpan niş",
      "çorum alçı sıva",
    ],
    searchIntent:
      "Asma tavan, dekoratif tavan, gizli ışıklı bordür, alçıpan bölme duvar veya niş yaptıracak kullanıcı.",
    heroText: "Gizli ışıklı tavan, bölme duvar, dekoratif niş - Çorum alçıpan işçiliği.",
    intro: [
      "Çorum'da alçıpan ustası; düşük maliyetle asma tavan, gizli aydınlatma, TV ünitesi arkası duvar ve hızlı bölme yapmanın en pratik yolu. Islak hacimlerde yeşil, yangın riskli alanlarda kırmızı plaka kullanılır.",
      "Bu sayfadaki ustalar düz ve dekoratif asma tavan, gizli ışık kanalı, izolasyonlu bölme duvar, raf ve niş işleri yapıyor. İş bitiminde derz alçısı ve saten macun çekilmesi, boya için hazır yüzey demektir.",
      "Ses yalıtımı önemliyse bölme içine taş yünü koydurmak sonradan yapılamayan bir detaydır.",
    ],
    notes: [
      "Tavan alçak geliyorsa düz yerine sadece kenar bordür yaptırın; orta yükseklik korunur.",
      "Spot yerlerini elektrikçiyle birlikte, tavan yapılmadan planlayın.",
      "Bölme duvara ağır eşya (kombi, TV) asılacaksa iç kadronun güçlendirilmesini isteyin.",
    ],
    priceInfo:
      "Düz asma tavan metrekare üzerinden; dekoratif kademe, gizli ışık kanalı ve kavis metretül olarak eklenir. Bölme duvar çift kat + izolasyon seçeneğine göre fiyatlanır.",
    faq: [
      {
        q: "Çorum'da alçıpan asma tavan metrekare fiyatı ne kadar?",
        a: "Düz asma tavan metrekare üzerinden; dekoratif kademe, gizli ışık kanalı ve kavis metretül olarak eklenir. Bölme duvar çift kat ve izolasyon seçeneğine göre fiyatlanır.",
      },
      {
        q: "Alçıpan tavan çatlar mı?",
        a: "Doğru derz bandı ve esnek derz alçısı kullanılırsa çatlamaz. Çatlaklar genelde bant atlanmış veya bina oturması olan yerlerde görülür.",
      },
      {
        q: "Banyoya alçıpan tavan yapılır mı?",
        a: "Yapılır, ancak neme dayanıklı yeşil plaka ve nemden etkilenmeyen profil kullanılmalı, havalandırma iyi olmalıdır.",
      },
    ],
    relatedSlugs: ["boya-badana", "elektrikci", "marangoz"],
  },
  {
    slug: "marangoz",
    name: "Marangoz ve Mobilya",
    shortName: "Marangoz",
    tagline: "Ölçüye mutfak, dolap ve kapı",
    group: "tadilat",
    icon: "Hammer",
    primaryKeyword: "çorum marangoz",
    keywords: [
      "çorum marangoz",
      "çorum mobilyacı",
      "çorum ölçüye mutfak dolabı",
      "çorum gardırop yapımı",
      "çorum mutfak dolabı fiyatları",
      "çorum ahşap kapı tamiri",
      "çorum banyo dolabı",
      "çorum tv ünitesi",
      "çorum dolap kapağı değişimi",
    ],
    searchIntent:
      "Ölçüye mutfak/gardırop, portmanto, kapak değişimi, ahşap kapı-pencere tamiri isteyen kullanıcı.",
    heroText: "Ölçüye mutfak, gömme dolap, kapı tamiri - Çorum'da marangoz işçiliği.",
    intro: [
      "Çorum'da marangoz işleri hâlâ değerli, çünkü hazır mobilya eğri duvarlara, köşelere ve alçak tavanlara oturmuyor. Bu sayfadaki marangozlar ölçüye mutfak, gardırop, banyo dolabı, TV ünitesi ve ofis mobilyası üretiyor.",
      "Malzeme seçimi ömrü belirler. Suya değen yerlerde nemden şişmeyen laminat veya lake tercih edilir; menteşe ve ray kalitesi kapağın yıllarca düzgün kapanmasını sağlar.",
      "Ölçü alınırken tesisat, priz ve davlumbaz bacası yerlerinin net olması sonradan kesim derdini önler.",
    ],
    notes: [
      "Teklifte gövde ve kapak malzemesi ayrı ayrı yazılsın (suntalam mı MDF lam mı, kapak lake mi).",
      "Menteşe ve çekmece rayı markasını sorun; frenli olması sessiz kapanma sağlar.",
      "Montaj ve eski mobilyanın sökümü teklife dahil mi, netleştirin.",
    ],
    priceInfo:
      "Mutfak ve gardırop metretül (bir metre uzunluk) üzerinden, malzeme sınıfına göre fiyatlanır. Kapak değişimi adet başı, ahşap kapı onarımı işçilik olarak hesaplanır.",
    faq: [
      {
        q: "Çorum'da ölçüye mutfak dolabı kaç para?",
        a: "Mutfak ve gardırop metretül üzerinden, malzeme sınıfına göre fiyatlanır. Kapak değişimi adet başı, ahşap kapı onarımı işçilik olarak hesaplanır. Teklifte gövde ve kapak malzemesi ayrı yazılsın.",
      },
      {
        q: "Ölçüye mutfak mı hazır mutfak mı?",
        a: "Standart ölçülü, düz duvarlı mutfaklarda hazır sistem ekonomik olur. Köşeli, boru geçişli veya alçak tavanlı mutfaklarda ölçüye üretim daha verimli kullanım sağlar.",
      },
      {
        q: "Sadece dolap kapaklarını değiştirebilir miyim?",
        a: "Gövdeler sağlamsa evet. Yeni kapak ve menteşelerle mutfak yenilenmiş görünür, maliyet komple değişimin çok altında kalır.",
      },
    ],
    relatedSlugs: ["alcipan", "pvc-cam-balkon", "boya-badana"],
  },
  {
    slug: "pvc-cam-balkon",
    name: "PVC ve Cam Balkon",
    shortName: "PVC / Cam Balkon",
    tagline: "PVC pencere, cam balkon ve sineklik",
    group: "tadilat",
    icon: "PanelsTopLeft",
    primaryKeyword: "çorum cam balkon",
    keywords: [
      "çorum cam balkon",
      "çorum pvc pencere",
      "çorum cam balkon fiyatları",
      "çorum ısıcamlı doğrama",
      "çorum katlanır cam balkon",
      "çorum sürme cam balkon",
      "çorum sineklik",
      "çorum pvc tamir ayar",
      "çorum panjur",
    ],
    searchIntent:
      "Balkon kapatma, eski pencereleri PVC ile yenileme, ısıcam değişimi, sineklik veya PVC ayar isteyen kullanıcı.",
    heroText: "Balkon kapatma ve PVC pencere - Çorum'da ısı ve ses yalıtımı için.",
    intro: [
      "Çorum kışı sert geçtiği için cam balkon ve PVC pencere konfor kadar yakıt meselesi. Eski ahşap ya da ilk nesil PVC pencereler tek camlı ve contası bozuk olduğunda ısının önemli kısmı buradan kaçar.",
      "Bu sayfadaki firmalar PVC pencere-kapı, katlanır ve sürme cam balkon, ısıcam değişimi, sineklik, panjur ve mevcut PVC'lerde conta-ayar tamiri yapıyor.",
      "Cam balkonda ısı yalıtımı isteniyorsa ısıcamlı sürme sistem, sadece rüzgâr ve toz koruması yeterliyse tek camlı katlanır sistem tercih edilir. Aralarında ciddi fiyat farkı var.",
    ],
    notes: [
      "Kat mülkiyetinde balkon kapatma için yönetim/komşu onayı ve dış görünüm birliği gerekebilir.",
      "Profil sınıfını (kaç odacıklı, hangi marka) ve cam paketini (4+16+4 vb.) teklifte isteyin.",
      "Montaj sonrası PTF köpük + dış silikon + iç denizlik tam yapılmalı; yoksa su alır.",
    ],
    priceInfo:
      "PVC pencere metrekare üzerinden profil ve cam paketine göre; cam balkon sistem tipine (katlanır/sürme, tek cam/ısıcam) göre metrekare fiyatlanır. Ölçü ve keşif ücretsizdir.",
    faq: [
      {
        q: "Çorum'da cam balkon metrekare fiyatı ne kadar?",
        a: "PVC pencere profil ve cam paketine göre metrekare fiyatlanır; cam balkon sistem tipine (katlanır veya sürme, tek cam veya ısıcam) göre değişir. Ölçü ve keşif ücretsizdir.",
      },
      {
        q: "Cam balkon ısı yalıtımı yapar mı?",
        a: "Isıcamlı sürme sistemler kışın balkonu belirgin ısıtır ve rüzgârı keser. Tek camlı katlanır sistemler daha çok toz, yağmur ve rüzgâr koruması sağlar.",
      },
      {
        q: "Eski PVC pencerem hava alıyor, değişmesi mi lazım?",
        a: "Çoğu zaman hayır. Conta yenileme, kanat ayarı ve ispanyolet bakımıyla sızdırmazlık geri gelir. Profil çatlamış veya cam patlаksa değişim gerekir.",
      },
    ],
    relatedSlugs: ["demir-kaynak", "marangoz", "cati-yalitim"],
  },
  {
    slug: "demir-kaynak",
    name: "Demir Doğrama ve Ferforje",
    shortName: "Demirci / Kaynakçı",
    tagline: "Korkuluk, ferforje ve yerinde kaynak",
    group: "tadilat",
    icon: "Anvil",
    primaryKeyword: "çorum demir doğrama",
    keywords: [
      "çorum demir doğrama",
      "çorum kaynakçı",
      "çorum ferforje korkuluk",
      "çorum demir korkuluk",
      "çorum çelik kapı tamiri",
      "çorum bahçe kapısı",
      "çorum ferforje merdiven",
      "çorum yerinde kaynak",
      "çorum demir doğrama fiyatları",
    ],
    searchIntent:
      "Korkuluk, bahçe/balkon demiri, ferforje, çelik kapı tamiri, saç kesim-kaynak işi isteyen kullanıcı.",
    heroText: "Korkuluk, bahçe kapısı, ferforje ve yerinde kaynak - Çorum demir işleri.",
    intro: [
      "Çorum'da demir doğrama ve kaynak işleri hem güvenlik hem görünüm tarafında iş görüyor: pencere ve balkon korkuluğu, çelik kapı, bahçe çiti, ferforje merdiven ve kapı. Bu sayfadaki ustalar atölyede üretim ve yerinde montaj-kaynak yapıyor.",
      "Dışarıda kalan demirin ömrü boya sistemine bağlı. İyi zımpara, antipas astar ve statik boya pas dönüşünü yıllarca geciktirir.",
      "Korkuluk yüksekliği ve dikey çubuk aralığı çocuk güvenliği açısından güncel yönetmeliğe uygun olmalı.",
    ],
    notes: [
      "Korkuluk yüksekliği ve dikey çubuk aralığı için güncel yapı yönetmeliğine uygunluk isteyin (çocuk güvenliği).",
      "Montaj dübeli mi kaynak mı, zemine göre ustayla konuşun.",
      "Son kat boya statik (elektrostatik toz) mi yağlı boya mı; ömrü çok farklı.",
    ],
    priceInfo:
      "Korkuluk ve demir doğrama metretül veya metrekare + işçilik; ferforje desen yoğunluğuna göre artar. Yerinde kaynak/tamir işçilik saatiyle fiyatlanır.",
    faq: [
      {
        q: "Çorum'da ferforje korkuluk metre fiyatı nedir?",
        a: "Korkuluk ve demir doğrama metretül veya metrekare artı işçilik olarak fiyatlanır; ferforje desen yoğunluğuna göre artar. Yerinde kaynak ve tamir işçilik saatiyle hesaplanır.",
      },
      {
        q: "Balkon korkuluğu yerinde mi yapılır?",
        a: "Ölçü alınır, atölyede kaynaklanır, sonra yerinde monte ve nokta kaynağı yapılır. Bazı tamiratlar tamamen yerinde çözülür.",
      },
      {
        q: "Çelik kapım kapanmıyor / sürtüyor, tamir edilir mi?",
        a: "Menteşe ayarı, kasa düzeltme ve kilit dili sorunlarının çoğu yerinde giderilir. Kapı kanadı eğilmişse doğrultma veya değişim gerekebilir.",
      },
    ],
    relatedSlugs: ["pvc-cam-balkon", "cilingir", "cati-yalitim"],
  },
  {
    slug: "cati-yalitim",
    name: "Çatı ve Yalıtım",
    shortName: "Çatı / Yalıtım",
    tagline: "Çatı aktarma, su yalıtımı ve mantolama",
    group: "tadilat",
    icon: "Home",
    primaryKeyword: "çorum çatı ustası",
    keywords: [
      "çorum çatı ustası",
      "çorum çatı aktarma",
      "çorum çatı tamiri",
      "çorum su yalıtımı",
      "çorum teras izolasyon",
      "çorum mantolama",
      "çorum çatı aktarma fiyatları",
      "çorum çatı arası ısı yalıtımı",
      "çorum membran yalıtım",
    ],
    searchIntent:
      "Çatısı akan, terası su geçiren, mantolama veya çatı aktarma yaptıracak kullanıcı; genelde bina/site kararı.",
    heroText: "Çatı akıyor, teras su geçiriyorsa kışa girmeden çözün - Çorum yalıtım.",
    intro: [
      "Çorum'da kar yükü ve don-çöz döngüsü çatıları hızla yıpratır. Kiremit kayması, çürüyen alt tahta, tıkalı dere ve baca dibi en sık su alma noktaları.",
      "Bu sayfadaki ustalar çatı aktarma, ahşap çatı onarımı, çatı arası ısı yalıtımı, teras su yalıtımı ve dış cephe mantolama yapıyor.",
      "Çatı işi mevsimliktir. Yağış ve kar öncesi yapılan aktarma, kışın acil müdahaleden çok daha ucuz ve kalıcı.",
    ],
    notes: [
      "Sadece 'akan yeri' yamamak yerine su yalıtım örtüsünün durumunu kontrol ettirin.",
      "Çatı arası ısı yalıtımı, kombi masrafını gözle görülür düşürür.",
      "Site/apartmanda çatı ortak alandır; masraf ve karar yönetim üzerinden yürür.",
    ],
    priceInfo:
      "Çatı aktarma metrekare + malzeme (örtü, kiremit, ahşap değişimi ayrı); teras yalıtımı seçilen sisteme göre metrekare fiyatlanır. Mantolama m² fiyatı yalıtım kalınlığı ve kaplamaya bağlıdır.",
    faq: [
      {
        q: "Çorum'da çatı aktarma metrekare fiyatı ne kadar?",
        a: "Çatı aktarma metrekare artı malzeme (örtü, kiremit, ahşap değişimi ayrı); teras yalıtımı seçilen sisteme göre metrekare fiyatlanır. Mantolama fiyatı yalıtım kalınlığı ve kaplamaya bağlıdır.",
      },
      {
        q: "Çatı aktarma nedir, tamir yeter mi?",
        a: "Aktarma; kiremitlerin tümüyle sökülüp altına su yalıtım örtüsü serilerek yeniden dizilmesidir. Tek noktadan sızıntıda önce lokal tamir denenir; yaygın kaçakta aktarma gerekir.",
      },
      {
        q: "Mantolama gerçekten fatura düşürür mü?",
        a: "Dış duvarlardan olan ısı kaybını belirgin azaltır; özellikle köşe daireler ve kuzey cephede fark hissedilir. Geri ödeme süresi yakıt fiyatına göre birkaç yıldır.",
      },
    ],
    relatedSlugs: ["su-kacagi-tespiti", "boya-badana", "pvc-cam-balkon"],
  },
  {
    slug: "klima-montaj",
    name: "Klima Montaj ve Servis",
    shortName: "Klimacı",
    tagline: "Montaj, bakım ve gaz dolumu",
    group: "tadilat",
    icon: "AirVent",
    primaryKeyword: "çorum klima montaj",
    keywords: [
      "çorum klima montaj",
      "çorum klima servisi",
      "çorum klima bakımı",
      "çorum klima montaj fiyatları",
      "çorum klima gaz dolumu",
      "çorum klima sökme takma",
      "çorum klima soğutmuyor",
      "çorum split klima montajı",
      "çorum klima arıza",
    ],
    searchIntent:
      "Yeni klima montajı, sezon öncesi bakım, gaz dolumu, sökme-takma (taşınma) isteyen kullanıcı.",
    heroText: "Klima montajı, bakımı ve gaz dolumu - Çorum'da sezon başlamadan halledin.",
    intro: [
      "Çorum'da klima montajının kalitesi cihazın verimini ve ömrünü belirler. Bakır boru uzunluğu, vakum yapılması ve yoğuşma suyunun düzgün tahliyesi doğru yapılmazsa cihaz az soğutur ve birkaç yılda gaz kaybeder.",
      "Bu sayfadaki ustalar split klima montajı, sökme-takma, yıllık bakım, gaz kontrolü ve arıza tespiti yapıyor.",
      "Nisan-mayıs gibi sezon öncesi yapılan bakım, temmuz sıcağında klima soğutmuyor çağrısından hem kolay hem ucuz.",
    ],
    notes: [
      "Montajda vakum pompası kullanıldığından emin olun; 'gazla süpürme' cihaza zarar verir.",
      "Dış ünite yeri gölge ve bakımı kolay bir noktada olsun.",
      "Yoğuşma suyu giderinin komşuyu rahatsız etmeyecek şekilde bağlanması gerekir.",
    ],
    priceInfo:
      "Standart montaj (3-4 m boru dahil) sabit bir ücrettedir; ek boru metresi, kırım-delme ve yükseklik (sepet/ip) ayrı hesaplanır. Bakım ve gaz dolumu ayrı kalemlerdir.",
    faq: [
      {
        q: "Çorum'da klima montaj ücreti ne kadar?",
        a: "Standart montaj (3-4 metre boru dahil) sabit bir ücrettedir; ek boru metresi, kırım-delme ve yükseklik ayrı hesaplanır. Bakım ve gaz dolumu ayrı kalemlerdir.",
      },
      {
        q: "Klimam az soğutuyor, gaz mı bitti?",
        a: "Filtre kirliliği, dış ünite tıkanıklığı veya gaz eksikliği olabilir. Usta manifold ile basınç ölçer; gerçekten gaz eksikse önce kaçak noktası bulunmalı, yoksa dolum kısa sürede tekrar biter.",
      },
      {
        q: "Taşınırken klimayı söküp taşıyabilir miyim?",
        a: "Sökme sırasında gazın dış üniteye toplanması (pump down) gerekir; usta yapmadan sökülürse gaz kaçar ve yeni evde dolum masrafı çıkar.",
      },
    ],
    relatedSlugs: ["elektrikci", "beyaz-esya-servisi"],
  },
  {
    slug: "nakliyat",
    name: "Nakliyat - Evden Eve Taşıma",
    shortName: "Nakliyat",
    tagline: "Evden eve ve ofis taşımacılığı",
    group: "diger",
    icon: "Boxes",
    primaryKeyword: "çorum evden eve nakliyat",
    keywords: [
      "çorum evden eve nakliyat",
      "çorum nakliyat",
      "çorum evden eve nakliyat fiyatları",
      "çorum asansörlü nakliyat",
      "çorum ofis taşıma",
      "çorum şehirler arası nakliyat",
      "çorum eşya taşıma",
      "çorum parça eşya taşıma",
      "çorum nakliye firması",
    ],
    searchIntent:
      "Ev veya ofis taşıyacak kullanıcı; paketleme, asansör, montaj-demontaj dahil fiyat karşılaştırıyor.",
    heroText: "Eşyanız zarar görmeden taşınsın - Çorum evden eve nakliyat.",
    intro: [
      "Çorum'da evden eve nakliyatın farkı ambalajda ve montaj-demontaj işçiliğinde ortaya çıkar. Battaniyeye sarılan mobilya, köşe koruması ve beyaz eşyanın sabitlenmesi işin kalitesini belirler.",
      "Bu sayfadaki firmalar şehir içi ve şehirler arası evden eve taşıma, ofis taşıma, dış cephe asansörü ve sigortalı taşıma yapıyor.",
      "Dar sokak, asansörsüz bina ve yüksek kat fiyatı en çok etkileyen üç şey. Keşifte bunları net söyleyin.",
    ],
    notes: [
      "Keşif (yerinde veya video) yapılmadan verilen fiyatlar taşıma günü değişebilir.",
      "Sigorta kapsamını (ne, ne kadar) yazılı isteyin.",
      "Beyaz eşya nakliye emniyet civataları takılmalı; çamaşır makinesi için önemlidir.",
    ],
    priceInfo:
      "Ev büyüklüğü (1+1, 2+1, 3+1), kat/asansör durumu ve mesafeye göre fiyatlanır. Asansör, paketleme ve depolama ayrı kalemlerdir. Şehirler arası taşımada km ve dönüş yükü etkilidir.",
    faq: [
      {
        q: "Çorum'da evden eve nakliyat fiyatları ne kadar?",
        a: "Ev büyüklüğü (1+1, 2+1, 3+1), kat ve asansör durumu ile mesafeye göre fiyatlanır. Asansör, paketleme ve depolama ayrı kalemlerdir. Keşif yapılmadan verilen fiyatlar taşıma günü değişebilir.",
      },
      {
        q: "Montaj ve demontaj fiyata dahil mi?",
        a: "Çoğu evden eve pakette dahildir; yine de teklifte 'montaj-demontaj dahil' ibaresini görün. Mutfak dolabı sökümü bazen ayrı fiyatlanır.",
      },
      {
        q: "Asansörsüz 4. kattan taşınma sorun mu?",
        a: "Sorun değil ama işçilik ve süre arttığı için fiyat yükselir. Alternatif olarak dış cephe asansörü kurulabilir.",
      },
    ],
    relatedSlugs: ["ev-temizligi", "marangoz"],
  },
  {
    slug: "ev-temizligi",
    name: "Ev ve Ofis Temizliği",
    shortName: "Temizlik",
    tagline: "Düzenli, detaylı ve inşaat sonrası",
    group: "diger",
    icon: "Sparkles",
    primaryKeyword: "çorum ev temizliği",
    keywords: [
      "çorum ev temizliği",
      "çorum temizlik şirketi",
      "çorum ev temizliği fiyatları",
      "çorum inşaat sonrası temizlik",
      "çorum ofis temizliği",
      "çorum cam silme",
      "çorum tadilat sonrası temizlik",
      "çorum günlük temizlik",
      "çorum detaylı ev temizliği",
    ],
    searchIntent:
      "Düzenli ev temizliği, taşınma/inşaat sonrası detaylı temizlik veya ofis temizliği arayan kullanıcı.",
    heroText: "Taşınma, tadilat sonrası ya da haftalık - Çorum'da güvenilir temizlik.",
    intro: [
      "Çorum'da ev temizliği ihtiyacı üç başlıkta toplanır: düzenli bakım, detaylı bahar temizliği ve inşaat ya da tadilat sonrası temizlik. Bu sayfadaki ekipler kadrolu ve referanslı personelle çalışıyor.",
      "İnşaat sonrası temizlik normal temizlikten farklıdır; ince toz birkaç turda alınır ve genelde metrekare üzerinden fiyatlanır.",
      "Ofis ve iş yeri için mesai dışı veya hafta sonu programı yapılabiliyor.",
    ],
    notes: [
      "Ekip sayısı ve tahmini süreyi baştan konuşun (ör. 2 kişi / 4 saat).",
      "Kırılabilir ve değerli eşyaları önceden belirtin.",
      "Kimyasal hassasiyetiniz varsa (koku, alerji) ekibe söyleyin.",
    ],
    priceInfo:
      "Düzenli temizlik ekip-saat üzerinden; detaylı ve inşaat sonrası temizlik daire büyüklüğü (m²) ve kirlilik derecesine göre fiyatlanır. Cam silme adet/m² olarak eklenebilir.",
    faq: [
      {
        q: "Çorum'da ev temizliği fiyatları nasıl belirlenir?",
        a: "Düzenli temizlik ekip-saat üzerinden; detaylı ve inşaat sonrası temizlik daire büyüklüğü (metrekare) ve kirlilik derecesine göre fiyatlanır. Cam silme adet veya metrekare olarak eklenebilir.",
      },
      {
        q: "Temizlik malzemesini kim getiriyor?",
        a: "Genelde ekip kendi profesyonel ekipman ve kimyasallarını getirir. Özel bir ürün isterseniz önceden belirtin.",
      },
      {
        q: "İnşaat sonrası temizlik ne kadar sürer?",
        a: "Daire büyüklüğüne ve kirliliğe göre değişir; 2+1 bir daire için 2-3 kişilik ekiple genelde tam gün sürer.",
      },
    ],
    relatedSlugs: ["nakliyat", "boya-badana"],
  },
];

export const categorySlugs = categories.map((c) => c.slug);
export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
