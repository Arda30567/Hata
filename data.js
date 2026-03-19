export const categories = [
  {
    id: 'hvac',
    title: 'HVAC & Isı Pompası',
    icon: 'snow',
    color: '#4DA3FF',
    description: 'Kompresör, inverter, sensör ve termal koruma kodları',
  },
  {
    id: 'kombi',
    title: 'Kombi Sistemleri',
    icon: 'flame',
    color: '#FF7A4D',
    description: 'Ateşleme, presostat, basınç ve NTC sensör kodları',
  },
  {
    id: 'beyaz',
    title: 'Beyaz Eşya',
    icon: 'water',
    color: '#22C1A0',
    description: 'Çamaşır ve bulaşık makineleri hata kodları',
  },
  {
    id: 'buzdolabi',
    title: 'Buzdolabı & Soğutma',
    icon: 'cube',
    color: '#7B7DFF',
    description: 'No-frost, defrost ve fan sensör kodları',
  },
  {
    id: 'robot',
    title: 'Robot Süpürge',
    icon: 'robot',
    color: '#F2B24D',
    description: 'Lidar, motor, batarya ve sensör uyarıları',
  },
  {
    id: 'bilisim',
    title: 'Bilişim & Görüntüleme',
    icon: 'laptop',
    color: '#9C6BFF',
    description: 'Yazıcı, BIOS, TV ve kamera kodları',
  },
  {
    id: 'mutfak',
    title: 'Mutfak Elektroniği',
    icon: 'restaurant',
    color: '#FF5DA2',
    description: 'Fırın, mikrodalga ve kahve makinesi kodları',
  },
];

export const errorCodes = [
  // HVAC
  {
    id: 'hvac-1',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'E2',
    description:
      'Anti-friz koruması. Evaporatör petekleri donmuştur, hava akışı ve filtre kirliliği kontrol edilmelidir.',
  },
  {
    id: 'hvac-2',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'E3',
    description:
      'Sistemde soğutucu akışkan düşük basıncı. Gaz kaçağı kontrolü ve manometre ölçümü yapılmalıdır.',
  },
  {
    id: 'hvac-3',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'E4',
    description:
      'Kompresör egzoz (basma) aşırı sıcaklık koruması. Termal yük fazladır, dış ünite havalandırması açılmalıdır.',
  },
  {
    id: 'hvac-4',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'E5',
    description:
      'AC aşırı akım koruması. Kompresör sargıları veya şebeke voltajı test edilmelidir.',
  },
  {
    id: 'hvac-5',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'E6',
    description:
      'İç ve dış ünite iletişim hatası. Sinyal kablosunun empedansı ve optokuplör devresi ölçülmelidir.',
  },
  {
    id: 'hvac-6',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'E8',
    description:
      'Aşırı yüksek sıcaklık koruması. Dış ortam termistörü ve fan motor devri kontrol edilmelidir.',
  },
  {
    id: 'hvac-7',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'H4',
    description:
      'İç ünite fan motoru geri bildirimi (Hall Effect) yok. Motor stator sargıları ve triyak devresi test edilmelidir.',
  },
  {
    id: 'hvac-8',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'H6',
    description:
      'Jumper (atlama) kapağı arızası. Anakart donanım yapılandırma konnektörü değiştirilmelidir.',
  },
  {
    id: 'hvac-9',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'C5',
    description:
      'İç/Dış ünite kapasite uyuşmazlığı. EEPROM modeli ve cihaz birleşim tablosu doğrulanmalıdır.',
  },
  {
    id: 'hvac-10',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'LP',
    description:
      'Dış ünite DC fan motor arızası. BLDC sürücü kartı ve motor bobinleri incelenmelidir.',
  },
  {
    id: 'hvac-11',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'L3',
    description:
      'Güç koruması (Aşırı gerilim/Düşük gerilim). Voltaj regülatörü ile faz-nötr dengesi sağlanmalıdır.',
  },
  {
    id: 'hvac-12',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'L9',
    description:
      'Soğutucu akışkan toplama (Pump-down) aktif. Hata değildir, sistem gazı kondensere hapsediyordur.',
  },
  {
    id: 'hvac-13',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'Fo (F0)',
    description:
      'İç ortam sıcaklık sensörü açık/kısa devre. 25°C’de omaj testi yapılmalı, sapma varsa yenilenmelidir.',
  },
  {
    id: 'hvac-14',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'F1',
    description:
      'İç ünite boru sensörü arızası (Açık/Kısa devre). Sensör kablolarında fiziki kopukluk kontrol edilmelidir.',
  },
  {
    id: 'hvac-15',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'F2',
    description:
      'Dış ortam sıcaklık sensörü arızası. Dış ünite anakartındaki ilgili soket oksitten arındırılmalıdır.',
  },
  {
    id: 'hvac-16',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'F3',
    description:
      'Dış ünite kondenser boru sensörü arızası. Boru termistörü korozyona uğramış olabilir, ölçülmelidir.',
  },
  {
    id: 'hvac-17',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'F4',
    description:
      'Egzoz (Deşarj) sensörü açık/kısa devre. Kompresör basma hattındaki sensör ısıdan erimiş olabilir.',
  },
  {
    id: 'hvac-18',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'F5',
    description:
      'Aşırı yük limiti / Frekans düşürme. Kompresör modülasyonu termal stresi azaltmak için yavaşlatılmıştır.',
  },
  {
    id: 'hvac-19',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'F6',
    description:
      'Aşırı akım limiti / Frekans düşürme. Şebeke zayıflığı nedeniyle cihaz kapasite kısmaktadır.',
  },
  {
    id: 'hvac-20',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'F8',
    description:
      'Yüksek egzoz sıcaklık limiti. Kondenser petekleri yıkanmalı, gaz şarjı dengelenmelidir.',
  },
  {
    id: 'hvac-21',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'F9',
    description:
      'Soğutucu akışkan sızıntısı tespiti. Azot ile basınç testi yapılmalı ve kaçak lehimlenmelidir.',
  },
  {
    id: 'hvac-22',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'FH',
    description:
      'Defrost (Buz çözme) durumu. Cihaz kış modunda kondenser buzunu eritiyordur, müdahale edilmez.',
  },
  {
    id: 'hvac-23',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'H1',
    description:
      'Kompresör aşırı yük koruması. Kompresör üzerindeki klixon termik açmıştır, soğuması beklenmelidir.',
  },
  {
    id: 'hvac-24',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'H3',
    description:
      'IPM (Akıllı Güç Modülü) koruması. İnverter IGBT transistörleri soğutulamıyordur, termal macun yenilenmelidir.',
  },
  {
    id: 'hvac-25',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'H5',
    description:
      'Modül sıcaklığı çok yüksek / PFC koruması. Güç faktörü düzeltme devresi aşırı yüklenmiştir.',
  },
  {
    id: 'hvac-26',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'HC',
    description:
      'EEPROM yükleme hatası. Mikroişlemci flash belleği okuyamıyordur, anakart değişimi gerekebilir.',
  },
  {
    id: 'hvac-27',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'EE / PH',
    description:
      'Yüksek PN / Düşük PN voltaj koruması. DC bara gerilimi kapasitör limitleri dışındadır.',
  },
  {
    id: 'hvac-28',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'PL',
    description:
      '4 yollu vana tersine dönme anomalisi. Valf bobini veya mekanik sürgü mekanizması arızalıdır.',
  },
  {
    id: 'hvac-29',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'U7',
    description:
      'DRED1 / DRED2 / DRED3 (Talep Yanıtı). Şebeke operatörü tarafından cihaz gücü sınırlandırılmıştır.',
  },
  {
    id: 'hvac-30',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'EU / LU',
    description:
      'Modül sıcaklığı veya güç nedeniyle frekans kısma. Çevresel koşullar cihaz limitlerini zorluyordur.',
  },
  {
    id: 'hvac-31',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'JF',
    description:
      'Wi-Fi algılama modülü arızası. IoT haberleşme kartı yuvadan çıkmış veya yanmıştır.',
  },
  {
    id: 'hvac-32',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'D1 / D2 / D3',
    description:
      'Kompresör minimum çalışma frekansı (Test durumu). Diagnostik veri, bir arıza değildir.',
  },
  {
    id: 'hvac-33',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: 'P0 / P1 / P3',
    description:
      'Kompresör nominal/maksimum/orta frekans test durumu. Fabrika test modunu gösterir.',
  },
  {
    id: 'hvac-34',
    categoryId: 'hvac',
    brand: 'AC Pro',
    code: '1 / 8',
    description:
      'Normal çalışma ve sıcaklığa ulaşma kodları. Hedeflenen ısı değerine ulaşıldığını belirtir.',
  },
  {
    id: 'hvac-35',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'E8',
    description:
      'İnverter kompresör aşırı akım. Kompresör mekanik olarak sıkışmış veya stator kısa devre yapmıştır.',
  },
  {
    id: 'hvac-36',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'E9',
    description:
      'Elektronik Genleşme Valfi (EXV) bobin arızası. Valf adımlama motoru ohmik testi yapılmalıdır.',
  },
  {
    id: 'hvac-37',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'EA',
    description:
      'Dört yollu vana anormalliği. Isıtma/Soğutma döngüsü değiştirilemiyor, bobin 220V almıyordur.',
  },
  {
    id: 'hvac-38',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'EC',
    description:
      'Giriş suyu sıcaklık anomalisi. Soğutma kulesi veya su eşanjörü termistöründe kısa devre mevcuttur.',
  },
  {
    id: 'hvac-39',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'F3',
    description:
      'Basma borusu sıcaklık anomalisi. Tıkalı kılcal borular veya aşırı gaz eksiği ısıyı yükseltmiştir.',
  },
  {
    id: 'hvac-40',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'F6',
    description:
      'Aşırı yüksek basınç / Fazla soğutucu akışkan. Sisteme gereğinden fazla gaz basılmıştır, tahliye edilmelidir.',
  },
  {
    id: 'hvac-41',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'H0',
    description:
      'Kompresör sensör sistem hatası. Sensör kablaj (harness) grubunda yapısal kopukluk vardır.',
  },
  {
    id: 'hvac-42',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'H1',
    description:
      'Oda sıcaklık sensörü veya damper arızası. Limit sviçleri ile damper motorları kontrol edilmelidir.',
  },
  {
    id: 'hvac-43',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'H3',
    description:
      'Yüksek Basınç Şalteri (HPS) hatası. HPS kontakları açmıştır, basınç düşürülmelidir.',
  },
  {
    id: 'hvac-44',
    categoryId: 'hvac',
    brand: 'Daikin',
    code: 'H4',
    description:
      'Alçak Basınç Şalteri (LPS) hatası. Sistemde yeterli basınç kalmamış, gaz kaçağı yaşanmıştır.',
  },
  {
    id: 'hvac-45',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'E0 / F4',
    description:
      'EEPROM parametre hatası. Elektriksel gürültü çip verisini silmiştir, kart değiştirilmelidir.',
  },
  {
    id: 'hvac-46',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'E1',
    description:
      'İç ve dış ünite iletişim kopukluğu. 110 saniye boyunca sinyal alınamamıştır, L/S kabloları kontrol edilmelidir.',
  },
  {
    id: 'hvac-47',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'E2',
    description:
      'Zero-crossing (Sıfır geçiş) sinyal tespiti hatası. Fazın sıfır noktasından geçişi okunamaz, triyak sürülemez.',
  },
  {
    id: 'hvac-48',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'E3',
    description:
      'Fan motor hızı anormalliği. PG motor devir geri beslemesi kesilmiştir.',
  },
  {
    id: 'hvac-49',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'E4 / E5',
    description:
      'İç ünite T1 (Oda) / T2 (Boru) sensör arızası. NTC dirençleri 25°C ortamda test edilmelidir.',
  },
  {
    id: 'hvac-50',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'E7',
    description:
      'Dış ortam sıcaklık sensörü hatası. Sensör soketlerindeki oksitler giderilmelidir.',
  },
  {
    id: 'hvac-51',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'Eb / Ed',
    description:
      'Su / Basma borusu sıcaklık sensörü anormalliği. Sensör izolasyonlarında kayıp mevcuttur.',
  },
  {
    id: 'hvac-52',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'EF / EP',
    description:
      'Su giriş sensörü / Basma borusu yüksek sıcaklık alarmı. Isı atılamaması sebebiyle termal blokaj.',
  },
  {
    id: 'hvac-53',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'EU / Fd',
    description:
      'Toplam çıkış / Emiş sensörü hatası. Emiş tarafında likit yürümesi veya sensör kopukluğu olabilir.',
  },
  {
    id: 'hvac-54',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'F9 / Fb',
    description:
      'İnverter IPM modül sıcaklık sensörü / Basınç sensörü. Soğutucu plaka termal macunu yenilenmelidir.',
  },
  {
    id: 'hvac-55',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'EC',
    description:
      'Soğutucu akışkan (gaz) sızıntısı tespiti. Delta-T ölçümü sistemin soğutmadığını doğrular.',
  },
  {
    id: 'hvac-56',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'F1 / F2 / F3',
    description:
      'Dış ünite ortam, kondenser, kompresör deşarj sensörleri arızası. İlgili NTC’ler değiştirilmelidir.',
  },
  {
    id: 'hvac-57',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'F0',
    description:
      'Aşırı akım koruması (Overcurrent). Şebeke voltajı çökmesi veya mekanik kompresör kilidi.',
  },
  {
    id: 'hvac-58',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'P0',
    description:
      'IPM (IGBT) koruması. Kompresör sargılarından aşırı akım geçmesi modülü durdurur.',
  },
  {
    id: 'hvac-59',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'P1',
    description:
      'DC Voltaj anormalliği (Aşırı/Düşük). Kondansatörlerin şarj voltajı ölçülmelidir.',
  },
  {
    id: 'hvac-60',
    categoryId: 'hvac',
    brand: 'Midea',
    code: 'P4',
    description:
      'İnverter sürücü (Drive) arızası. DSP çipi ile IGBT arasındaki sinyal yolları yanmıştır.',
  },
  {
    id: 'hvac-61',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'E4 / E5',
    description:
      'Kompresör basma sıcaklık / AC aşırı yük koruması. Yüksek kondenzasyon veya kirli petekler.',
  },
  {
    id: 'hvac-62',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'EE / EU',
    description:
      'EEPROM arızası / IPM sıcaklık koruması. Anakart flash bellek hatası veya yetersiz soğutma.',
  },
  {
    id: 'hvac-63',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'F3 / F4',
    description:
      'Dış ortam / Dış bobin sensörü kısa/açık devre. Omik testten geçemeyen termistörler yenilenmeli.',
  },
  {
    id: 'hvac-64',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'F5 / F8',
    description:
      'Deşarj sensörü hatası / Aşırı akım nedeniyle frekans düşürme.',
  },
  {
    id: 'hvac-65',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'F9 / H2',
    description:
      'Yüksek egzoz sıcaklığı frekans düşürme / Elektrostatik toz koruması.',
  },
  {
    id: 'hvac-66',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'H3 / H6',
    description:
      'Kompresör aşırı yük / İç fan motoru arızası. Fan Hall-IC arızası dönüş bilgisini keser.',
  },
  {
    id: 'hvac-67',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'H7 / L3',
    description:
      'Kompresör arızası / Fan modülü koruması. Kompresör faz dengesizliği incelenmelidir.',
  },
  {
    id: 'hvac-68',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'Lc / PH',
    description:
      'Kalkış (Startup) başarısızlığı / DC yüksek voltaj. Start kapasitörü veya reaktör bobini kontrolü.',
  },
  {
    id: 'hvac-69',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'PU / U3',
    description:
      'Kapasitör şarj hatası / DC bara dalgalanması. Şarj rölesi yapışık kalmış olabilir.',
  },
  {
    id: 'hvac-70',
    categoryId: 'hvac',
    brand: 'Gree',
    code: 'U7',
    description:
      'Reversing (4 yollu) valf anormalliği. Valf mekanik olarak konum değiştiremiyordur.',
  },
  {
    id: 'hvac-71',
    categoryId: 'hvac',
    brand: 'Haier',
    code: 'F2 / F4',
    description:
      'Dış DC motor hatası / Basma sıcaklığı aşırı koruması. Motor sürücüsü IPM arızalanmıştır.',
  },
  {
    id: 'hvac-72',
    categoryId: 'hvac',
    brand: 'Haier',
    code: 'F5 / F6',
    description:
      'Modül aşırı akım / Ortam sensörü arızası. Transdüser devresi yanlış akım okuyordur.',
  },
  {
    id: 'hvac-73',
    categoryId: 'hvac',
    brand: 'Haier',
    code: 'F11 / F13',
    description:
      'EEPROM okuma hatası / Dış PCB iletişim kopukluğu. Yazılım flash belleğe yazılamıyordur.',
  },
  {
    id: 'hvac-74',
    categoryId: 'hvac',
    brand: 'Haier',
    code: 'F21 / F25',
    description:
      'Defrost (Buz çözme) sensörü / Egzoz sensörü arızası. NTC eğrileri limitlerin dışına taşmıştır.',
  },
  {
    id: 'hvac-75',
    categoryId: 'hvac',
    brand: 'Chigo',
    code: 'E1',
    description:
      'Defrost operasyonu tespiti. Cihaz dış üniteyi ısıtarak karlanmayı eritiyor.',
  },
  {
    id: 'hvac-76',
    categoryId: 'hvac',
    brand: 'Chigo',
    code: 'E2 / E3',
    description:
      'Oda sensörü / Bobin (Coil) sensörü hatası. Direnç 25 derecede 5KΩ olmalıdır, değilse değişmelidir.',
  },
  {
    id: 'hvac-77',
    categoryId: 'hvac',
    brand: 'Chigo',
    code: 'E4',
    description:
      'Dış ünite çalışma anormalliği. Kompresör empedansı ve basınç değerleri bütünüyle sapmıştır.',
  },
  {
    id: 'hvac-78',
    categoryId: 'hvac',
    brand: 'Mitsubishi',
    code: '2502 / 2503',
    description:
      'Drenaj pompası / Drenaj sensörü hatası. Su tahliye edilemiyor, şamandıra takılı kalmıştır.',
  },
  {
    id: 'hvac-79',
    categoryId: 'hvac',
    brand: 'Mitsubishi',
    code: '2600 / 4255',
    description:
      'Su sızıntısı / Dış fan arızası. Alt tavada su tespit edilmiştir; fan motoru dönmüyordur.',
  },
  {
    id: 'hvac-80',
    categoryId: 'hvac',
    brand: 'Mitsubishi',
    code: '5102 / 6201',
    description:
      'Dönüş havası termistör arızası / Uzaktan kumanda hatası.',
  },
  {
    id: 'hvac-81',
    categoryId: 'hvac',
    brand: 'Mitsubishi',
    code: 'E0 / E3',
    description:
      'Kumanda iletim arızası. Sinyal kablosunda zayıflama vardır, yeniden reset atılmalıdır.',
  },
  {
    id: 'hvac-82',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '14 P2',
    description:
      'Kompresör faz akımı koruması. Kompresör 3 fazının dengesi bozulmuştur.',
  },
  {
    id: 'hvac-83',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '15 P3',
    description:
      'Dış ünite aşırı yüksek/düşük AC voltaj koruması. Şebeke 170V altına inmiştir.',
  },
  {
    id: 'hvac-84',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '16 P4',
    description:
      'DC bara voltajı koruması. Anakart güç katı kondansatörlerinde şişme vardır.',
  },
  {
    id: 'hvac-85',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '17 P5',
    description:
      'IPM aşırı yüksek sıcaklık koruması. IGBT’ler üzerindeki termal direnç çok yüksektir.',
  },
  {
    id: 'hvac-86',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '18 P6 / 20 P8',
    description:
      'Basma sıcaklığı koruması / Soğutma dış bobin aşırı ısınma. Fan motoru soğutma sağlayamıyor.',
  },
  {
    id: 'hvac-87',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '21 P9 / 22 PC',
    description:
      'Isıtma iç bobin aşırı ısınma / Soğutma dış ortam çok düşük koruması.',
  },
  {
    id: 'hvac-88',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '23 PH / 31 L1',
    description:
      'Isıtma dış ortam çok yüksek / Sürücü bara gerilimi çok yüksek.',
  },
  {
    id: 'hvac-89',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '32 L2 / 33 L3',
    description:
      'Sürücü bara gerilimi çok düşük / Sürücü faz akımı aşırı yük. Motor kilitlenmiş olabilir.',
  },
  {
    id: 'hvac-90',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '34 L4 / 13 P1',
    description:
      'Faz akımı örnekleme (sampling) arızası / Dış ünite AC akım koruması.',
  },
  {
    id: 'hvac-91',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '4 F1 / 5 F2',
    description:
      'Kompresör başlatma anormal (faz hatası, ters dönüş) / Kompresör adım kaybı (Out-of-step).',
  },
  {
    id: 'hvac-92',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '6 F3 / 7 F4',
    description:
      'IPM modül arızası / Kompresör gövde (Shell) çatı koruması.',
  },
  {
    id: 'hvac-93',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '8 F5 / 9 F6',
    description:
      'Deşarj sensörü / Emiş sıcaklık sensörü hatası. Kompresör dönüş hattı çok sıcaktır.',
  },
  {
    id: 'hvac-94',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '10 F7 / 11 F8',
    description:
      'Dış bobin / Dış ortam sensörü hatası. Kış şartlarında karlanma çözülemez.',
  },
  {
    id: 'hvac-95',
    categoryId: 'hvac',
    brand: 'Generic',
    code: '12 F9',
    description:
      'Dış DC fan arızası. Sürücü devresinden fana giden PWM sinyalleri kesilmiştir.',
  },
  {
    id: 'hvac-96',
    categoryId: 'hvac',
    brand: 'Generic',
    code: 'CL / nF',
    description:
      'Filtre temizleme hatırlatıcısı / Filtre değiştirme hatırlatıcısı. Kullanıcı uyarısıdır.',
  },
  {
    id: 'hvac-97',
    categoryId: 'hvac',
    brand: 'Bosch (AC)',
    code: 'F3 / F5',
    description:
      'T6B sıcaklık sensörü / T6A sıcaklık sensörü arızası. Ticari VRF sistem sensör kopukluğu.',
  },

  // Kombi
  {
    id: 'kombi-1',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Aden)',
    code: '30 / 40 Led',
    description:
      'Tesisat / Kullanım suyu sensör hatası. Kalorifer ve sıcak su termistör omajları ölçülmelidir.',
  },
  {
    id: 'kombi-2',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Aden)',
    code: '50 / 60 Led',
    description:
      'Dış hava sensör arızası / Tesisat suyu basıncı düşük. Sisteme 1.5 bar su basılmalıdır.',
  },
  {
    id: 'kombi-3',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Aden)',
    code: '70 / 80 Led',
    description:
      'Presostat veya baca sensör hatası / Aşırı ısınma termostatı atmış. Pompa sıkışıklığı giderilmeli.',
  },
  {
    id: 'kombi-4',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Aden)',
    code: '90 Led',
    description:
      'Gaz beslemesi veya iyonizasyon hatası. Gaz valfi kontrol edilmeli, alev çubuğu zımparalanmalı.',
  },
  {
    id: 'kombi-5',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Kalisto)',
    code: 'F1 / F2',
    description:
      'Aşırı ısınma limit arızası / Kullanım suyu sensörü. Kombi soğumaya bırakılıp resetlenmeli.',
  },
  {
    id: 'kombi-6',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Kalisto)',
    code: 'F3 / F4',
    description:
      'Tesisat suyu sensörü / İyonizasyon hatası. Ateşleme trafosu ateşleme yapıyor mu bakılmalı.',
  },
  {
    id: 'kombi-7',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Kalisto)',
    code: 'F5 / F6',
    description:
      'Atık gaz (Baca) sensörü / Dış hava bağlantı hatası. Hermetik baca veya dış sensör takılmamış.',
  },
  {
    id: 'kombi-8',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Kalisto)',
    code: 'F7 / FF',
    description:
      'Su basıncı düşük / Topraklama problemi. Şebeke nötr-toprak arası voltaj 2V altında olmalıdır.',
  },
  {
    id: 'kombi-9',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Kalisto)',
    code: 'CC',
    description:
      'Dış hava sensörünün devrede olmadığını belirtir, informatif koddur.',
  },
  {
    id: 'kombi-10',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Nanomiks)',
    code: 'F0 / F1',
    description:
      'Düşük su basıncı / Limit termostat hatası. Eşanjör suyu kaynatıyordur, filtreler tıkanmıştır.',
  },
  {
    id: 'kombi-11',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Nanomiks)',
    code: 'F2 / F3',
    description:
      'Kullanım / Tesisat NTC sensörü hatası. Anakart sensörden veri alamıyordur.',
  },
  {
    id: 'kombi-12',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Nanomiks)',
    code: 'F4 / F5',
    description:
      'İyonizasyon hatası / Baca sıcaklık sensörü hatası. Yoğuşma gideri tıkalı olabilir.',
  },
  {
    id: 'kombi-13',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Nanomiks)',
    code: 'F6 / F8 / F9',
    description:
      'OTC (Dış ortam) hatası / Fan hızı limit dışı / Parametre yüklendi arızası. Anakart kalibrasyonu.',
  },
  {
    id: 'kombi-14',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Isofast)',
    code: '1 / 2',
    description:
      'İyonizasyon hatası / Hava akış hatası (Presostat basıncı yok). Fan ventüri hortumları üflenmeli.',
  },
  {
    id: 'kombi-15',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Isofast)',
    code: '3 / 5',
    description:
      'Tekrar eden hava akış hatası / Aşırı ısınma. Fan rölesi kart üzerinde kilitlenmiş olabilir.',
  },
  {
    id: 'kombi-16',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Isofast)',
    code: '9 / 14 / 17',
    description:
      'Kullanım basınç hatası / 95°C üzeri ısıtma / Voltaj <170V. Üç yollu vana motoru arızası ve düşük voltaj.',
  },
  {
    id: 'kombi-17',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Nepto)',
    code: 'F1 / F2 / F3',
    description:
      'Aşırı ısınma / Kullanım suyu NTC / Tesisat gidiş NTC. Limit termik veya sıcaklık sondaları bozuktur.',
  },
  {
    id: 'kombi-18',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Nepto)',
    code: 'F4 / F5',
    description:
      'İyonizasyon (Alev yok) / Hava akış anahtarı arızası. Cihaz hava sirkülasyonunu sağlayamıyordur.',
  },
  {
    id: 'kombi-19',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Nepto)',
    code: 'F10 / F12',
    description:
      'Su basıncı / Düşük voltaj. Şebekeye regülatör bağlanmalı ve sistem su takviyesi yapılmalı.',
  },
  {
    id: 'kombi-20',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Adonis)',
    code: 'F1 / F2 / F4',
    description:
      'Aşırı ısınma / Kullanım suyu NTC / İyonizasyon. Tesisatta hava vardır, purjörden hava alınmalı.',
  },
  {
    id: 'kombi-21',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Adonis)',
    code: 'F10 / F13',
    description:
      'Su basıncı / Tesisat devresi NTC sıcaklık farkı. Gidiş-dönüş arası ısı çok açık, sirkülasyon yok.',
  },
  {
    id: 'kombi-22',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Sargon)',
    code: 'F3 / F4',
    description:
      'Tesisat sensörü / İyonizasyon. Anakart alev görmediği için gaz valfini kapatmıştır.',
  },
  {
    id: 'kombi-23',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Sargon)',
    code: 'F5 / F6',
    description:
      'Hava akışı problemi / Dış hava sensörü hatası. Hermetik fan yatağı bozulmuştur.',
  },
  {
    id: 'kombi-24',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Sargon)',
    code: 'F7 / F8 / F9',
    description:
      'Fan geri besleme sinyali / Fan hız problemi / Fan durmama. PWM fan sürücü entegresi yandı.',
  },
  {
    id: 'kombi-25',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Condense)',
    code: 'F0 / F1 / F2',
    description:
      'Düşük basınç / Aşırı ısınma / Kullanım sensörü. Yoğuşmalı eşanjör tıkalı olabilir.',
  },
  {
    id: 'kombi-26',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Condense)',
    code: 'F3 / F4 / F5',
    description:
      'Tesisat NTC / İyonizasyon / Hava akış anahtarı. Kondans tablosu kontrol edilmelidir.',
  },
  {
    id: 'kombi-27',
    categoryId: 'kombi',
    brand: 'Demirdöküm (Condense)',
    code: 'F6',
    description:
      'Dış hava sensörü arızası. Kablo toprağa kısa devre yapıyor olabilir.',
  },
  {
    id: 'kombi-28',
    categoryId: 'kombi',
    brand: 'Baymak (Falke)',
    code: 'E01 / E02',
    description:
      'Gaz besleme blokajı / Emniyet termostat sensörü. Sayaçtan gaz gelip gelmediği kontrol edilmeli.',
  },
  {
    id: 'kombi-29',
    categoryId: 'kombi',
    brand: 'Baymak (Falke)',
    code: 'E03 / E05',
    description:
      'Baca termostat (Presostat) / Isıtma NTC. Fan emişi yetersizdir, baca uç terminali kontrol edilmeli.',
  },
  {
    id: 'kombi-30',
    categoryId: 'kombi',
    brand: 'Baymak (Falke)',
    code: 'E06 / E10',
    description:
      'Kullanım suyu NTC / Düşük su basıncı. Sensör ohm değeri ölçülmeli, su seviyesi 1.5 bar olmalı.',
  },
  {
    id: 'kombi-31',
    categoryId: 'kombi',
    brand: 'Baymak (Falke)',
    code: 'E25 / E35',
    description:
      'Maksimum sıcaklık uyarısı (Pompa sıkışık) / Alev oluşumu. Pompa mili düz tornavida ile açılmalı.',
  },
  {
    id: 'kombi-32',
    categoryId: 'kombi',
    brand: 'Baymak (Duotech)',
    code: 'E125 / E130',
    description:
      'Sirkülasyon arızası-hava yapması / Baca NTC aşırı ısınma. Eşanjör hava yapıyor, baca çok sıcak.',
  },
  {
    id: 'kombi-33',
    categoryId: 'kombi',
    brand: 'Baymak (Duotech)',
    code: 'E133 / E151',
    description:
      'Gaz besleme arızası / Kontrol kartı hatası. Gaz valfi diyaframı veya modülasyon bobini.',
  },
  {
    id: 'kombi-34',
    categoryId: 'kombi',
    brand: 'Baymak (Duotech)',
    code: 'E156 / E160',
    description:
      'Düşük-yüksek voltaj / Fan arızası. Akıllı kart gerilim değişiminden kendini kilitler.',
  },
  {
    id: 'kombi-35',
    categoryId: 'kombi',
    brand: 'Baymak (Duotech)',
    code: 'E193',
    description:
      'Sistemin hava yapması. Otomatik hava tahliye purjörü arızalanmıştır, yenilenmelidir.',
  },
  {
    id: 'kombi-36',
    categoryId: 'kombi',
    brand: 'Baymak (Eco4)',
    code: 'E01 / E02 / E03',
    description:
      'Başarısız ateşleme / Emniyet termostat / Atık gaz. Sensör, ateşleyici ve fan zincirlemesi hatası.',
  },
  {
    id: 'kombi-37',
    categoryId: 'kombi',
    brand: 'Buderus',
    code: 'E3 / E4',
    description:
      'Alev oluşmuyor / İstenilen sıcaklığa gelindi. E3 gaz valfi sorunudur, E4 çalışma durumudur.',
  },
  {
    id: 'kombi-38',
    categoryId: 'kombi',
    brand: 'Buderus',
    code: 'E5 / E6',
    description:
      'Kullanım suyu 85°C / Alev oluşmadı (İyonizasyon). Plakalı eşanjör kireçlenmiştir.',
  },
  {
    id: 'kombi-39',
    categoryId: 'kombi',
    brand: 'Buderus',
    code: 'E7 / E8',
    description:
      'Baca tıkanması / Sigorta arızası. Atık gaz atılamıyor, anakart cam sigortası patlaktır.',
  },
  {
    id: 'kombi-40',
    categoryId: 'kombi',
    brand: 'Buderus',
    code: 'E9 / E0',
    description:
      'Kart arızası / Gerilim çok düşük. Mikrodenetleyici çip veya SMPS devresi çökmüştür.',
  },
  {
    id: 'kombi-41',
    categoryId: 'kombi',
    brand: 'Viessmann (Vitodens)',
    code: 'F5 / F7',
    description:
      'Prosestat çalışmıyor / Su basınç sensörü. Presostat hortumlarında yoğuşma suyu birikmiştir.',
  },
  {
    id: 'kombi-42',
    categoryId: 'kombi',
    brand: 'Viessmann (Vitodens)',
    code: 'F8 / F9',
    description:
      'Gaz armatürü geç kapanıyor / Fan arızası. Gaz valfi elektromanyetik bobini takılı kalıyor.',
  },
  {
    id: 'kombi-43',
    categoryId: 'kombi',
    brand: 'Viessmann (Vitodens)',
    code: 'FA / FD',
    description:
      'Fan sürekli çalışıyor / Elektronik kart. Fanın triyak sürücüsü kısa devre yapmıştır.',
  },
  {
    id: 'kombi-44',
    categoryId: 'kombi',
    brand: 'Viessmann (Vitodens)',
    code: 'FE',
    description:
      'Elektronik kart devreye girmiyor. Eeprom veya Flash bellekte donanımsal arıza.',
  },
  {
    id: 'kombi-45',
    categoryId: 'kombi',
    brand: 'Viessmann (Vitopend)',
    code: 'A0 / E0',
    description:
      'Gaz basıncı düşük / Baca gazı sensörü. Regülatör basıncı çok düşük, baca sondası arızalı.',
  },
  {
    id: 'kombi-46',
    categoryId: 'kombi',
    brand: 'Viessmann (Vitopend)',
    code: 'F2 / F4',
    description:
      'Emniyet termostatı / Alev yok. Aşırı ısınma sonrası limit rölesi sıfırlanmalıdır.',
  },
  {
    id: 'kombi-47',
    categoryId: 'kombi',
    brand: 'Viessmann (Vitopend)',
    code: 'F30-F38',
    description:
      'Sıcaklık NTC sensörü arızası. Spesifik gidiş-dönüş termistörlerinde korozyon.',
  },
  {
    id: 'kombi-48',
    categoryId: 'kombi',
    brand: 'Viessmann (Vitopend)',
    code: 'F51-F59',
    description:
      'Çıkış sıcaklık sensörleri. Su çıkış hattında elektriksel direnç limiti aşılmıştır.',
  },
  {
    id: 'kombi-49',
    categoryId: 'kombi',
    brand: 'Airfel',
    code: 'E1 / E2',
    description:
      'Alev kesintisi / Aşırı ısınma. Gaz subabı veya alev dedektörü elektrodu bozuktur.',
  },
  {
    id: 'kombi-50',
    categoryId: 'kombi',
    brand: 'Airfel',
    code: 'E3 / E4',
    description:
      'Yanmış gaz çıkış arızası / Kalorifer basıncı yetersiz. Baca emişi ve hidrolik basınç eksikliği.',
  },
  {
    id: 'kombi-51',
    categoryId: 'kombi',
    brand: 'Airfel',
    code: 'E6 / E7',
    description:
      'Kullanım / Kalorifer NTC arızası. NTC problarında direnç kaybı meydana gelmiştir.',
  },
  {
    id: 'kombi-52',
    categoryId: 'kombi',
    brand: 'Alarko',
    code: 'E01 / E02',
    description:
      'Alev yok / Limit termostat. Ateşleme trafosu ateşleme yapıyor mu gözlemlenmeli.',
  },
  {
    id: 'kombi-53',
    categoryId: 'kombi',
    brand: 'Alarko',
    code: 'H20 / E05',
    description:
      'Su basıncı arızası / Isıtma sensörü. Bar seviyesi yükseltilmeli, termistör değiştirilmeli.',
  },
  {
    id: 'kombi-54',
    categoryId: 'kombi',
    brand: 'Alarko',
    code: 'E06 / E14',
    description:
      'Kullanım suyu NTC / Baca tıkanıklığı. Baca terminali rüzgar veya kuş yuvası ile kapanmış.',
  },
  {
    id: 'kombi-55',
    categoryId: 'kombi',
    brand: 'Alarko',
    code: 'E22 / E35',
    description:
      'Anakart problemi / Alev algılama arızası. Karta giden 220V nötr-faz yönü ters bağlanmış.',
  },
  {
    id: 'kombi-56',
    categoryId: 'kombi',
    brand: 'Arçelik (Kombi)',
    code: 'E01 / E02',
    description:
      'Alev kesintisi / Limit termostat. Gaz sayacı kapalı veya tesisatta hava olabilir.',
  },
  {
    id: 'kombi-57',
    categoryId: 'kombi',
    brand: 'Arçelik (Kombi)',
    code: 'E03 / E04',
    description:
      'Hava basınç / Alev kaybı emniyet. Fan devri düşmüş, alev stabilitesi rüzgarla bozulmuş.',
  },
  {
    id: 'kombi-58',
    categoryId: 'kombi',
    brand: 'Arçelik (Kombi)',
    code: 'E05 / E06',
    description:
      'Tesisat / Kullanım suyu arızası. Sıcaklık saptama işlemi durmuştur, sensör değişimi.',
  },
  {
    id: 'kombi-59',
    categoryId: 'kombi',
    brand: 'Arçelik (Kombi)',
    code: 'E10 / E25-E26',
    description:
      'Düşük basınç / Muhtemel pompa blokajı. Su basılmalı, Grunfos/Wilo devridaim pompası sökülmeli.',
  },
  {
    id: 'kombi-60',
    categoryId: 'kombi',
    brand: 'Arçelik (Kombi)',
    code: 'E35 / E96',
    description:
      'Alev algılama / Düşük voltaj arızası. İyonizasyon kablosu izülasyonunu kaybetmiştir.',
  },
  {
    id: 'kombi-61',
    categoryId: 'kombi',
    brand: 'Immergas',
    code: 'E01 / E02',
    description:
      'Yanma arızası / Aşırı sıcaklık emniyet termostatı. Brülör enjektörleri tıkanmış olabilir.',
  },
  {
    id: 'kombi-62',
    categoryId: 'kombi',
    brand: 'Immergas',
    code: 'E03 / E05',
    description:
      'Baca gazı termostatı / Kalorifer NTC. Hermetik baca veya atık gaz sensörü devre kesmiştir.',
  },
  {
    id: 'kombi-63',
    categoryId: 'kombi',
    brand: 'Immergas',
    code: 'E06 / E07',
    description:
      'Kullanım suyu NTC / Baca test konumu. Cihaz baca gazı analiz modunda kilitli kalmıştır.',
  },
  {
    id: 'kombi-64',
    categoryId: 'kombi',
    brand: 'Immergas',
    code: 'E10',
    description:
      'Yetersiz su basıncı. Basınç anahtarı diyaframı yırtılmış veya su tamamen bitmiştir.',
  },

  // Beyaz Eşya
  {
    id: 'beyaz-1',
    categoryId: 'beyaz',
    brand: 'Whirlpool',
    code: 'F7 E1 / F8 E1',
    description:
      'Motor hız algılama / Düşük su akışı. Tako jeneratörü veya giriş valfi filtresi bozuktur.',
  },
  {
    id: 'beyaz-2',
    categoryId: 'beyaz',
    brand: 'Whirlpool',
    code: 'F8 E2 / F9 E1',
    description:
      'Dispenser sorunu / Tahliye süresi aşımı (8dk+). Drenaj pompası pervanesi kalıntılarla tıkalıdır.',
  },
  {
    id: 'beyaz-3',
    categoryId: 'beyaz',
    brand: 'Whirlpool',
    code: 'F5 E2',
    description:
      'Kapı kilitlenmiyor. Interlock PTC (Pozitif Sıcaklık Katsayısı) rezistans mekanizması çalışmıyor.',
  },
  {
    id: 'beyaz-4',
    categoryId: 'beyaz',
    brand: 'Whirlpool',
    code: 'rL / F34',
    description:
      'Tambur içinde nesne (Clean modunda). Boş yıkama öncesi içerde kıyafet unutulmuştur.',
  },
  {
    id: 'beyaz-5',
    categoryId: 'beyaz',
    brand: 'Whirlpool',
    code: 'Sud / Sd',
    description:
      'Aşırı köpük (Suds) tespiti. Basınç anahtarı köpüğü su sanır, sistem durulama döngüsüne girerek köpüğü kırar.',
  },
  {
    id: 'beyaz-6',
    categoryId: 'beyaz',
    brand: 'Whirlpool',
    code: 'LOC / dET / Int',
    description:
      'Kontrol kilidi / Deterjan yok / Döngü iptal. Kullanıcı arayüzü uyarılarıdır.',
  },
  {
    id: 'beyaz-7',
    categoryId: 'beyaz',
    brand: 'LG / Samsung',
    code: 'OE / 03 / 5E',
    description:
      'Drenaj (Tahliye) hatası. Gider hortumu bükülmüş, pompa filtresi tıkanmış veya motor yanmıştır.',
  },
  {
    id: 'beyaz-8',
    categoryId: 'beyaz',
    brand: 'LG / Samsung',
    code: 'UE / E4',
    description:
      'Dengesiz yük (Unbalanced Load). Tambur titreşimi sensör toleransını aşmıştır, yük dağıtılmalı.',
  },
  {
    id: 'beyaz-9',
    categoryId: 'beyaz',
    brand: 'LG / Samsung',
    code: 'LE / E6',
    description:
      'Motor kilitlenme. Direct Drive Hall (Rotor pozisyon) sensörü motorun dönüşünü algılayamaz.',
  },
  {
    id: 'beyaz-10',
    categoryId: 'beyaz',
    brand: 'LG / Samsung',
    code: 'dE / DC',
    description:
      'Kapı kapatılamadı. Kilit mekanizmasındaki elektriksel kısa devre ana karta sinyal yollayamaz.',
  },
  {
    id: 'beyaz-11',
    categoryId: 'beyaz',
    brand: 'LG / Samsung',
    code: 'IE / E1',
    description:
      'Su giriş hatası. Ventiller açılmış ancak flowmetre suyun geçtiğini doğrulayamamıştır.',
  },
  {
    id: 'beyaz-12',
    categoryId: 'beyaz',
    brand: 'LG / Samsung',
    code: 'F21',
    description:
      'Tahliye zaman aşımı. Cihaz pompayı süre aşımına kadar çalıştırmış ancak su bitmemiştir.',
  },
  {
    id: 'beyaz-13',
    categoryId: 'beyaz',
    brand: 'Hotpoint',
    code: 'F01 / F02',
    description:
      'Elektronik kart / Motor devresi hatası. Anakart triyak kısa devresi veya motor fırça aşınması.',
  },
  {
    id: 'beyaz-14',
    categoryId: 'beyaz',
    brand: 'Hotpoint',
    code: 'F03 / F05',
    description:
      'Sıcaklık sensörü / Atık boru tıkanıklığı. NTC direnci 20 kOhm sınırından çıkmış, presostat basınçta.',
  },
  {
    id: 'beyaz-15',
    categoryId: 'beyaz',
    brand: 'Hotpoint',
    code: 'F06 / F07',
    description:
      'Kapı kilit / Isıtma devre hatası. Rezistans rölesi ana kart üzerinde yanmıştır.',
  },
  {
    id: 'beyaz-16',
    categoryId: 'beyaz',
    brand: 'Hotpoint',
    code: 'F08 / F09',
    description:
      'Isıtıcı hatası / Yazılım hatası. Isıtıcı şaseye topraklanmış, EEPROM yazılımı çökmüştür.',
  },
  {
    id: 'beyaz-17',
    categoryId: 'beyaz',
    brand: 'Hotpoint',
    code: 'F11 / F12',
    description:
      'Pompa devresi / Elektronik iletişim. Ana kart ile ekran kartı arası UART haberleşmesi kesilmiş.',
  },
  {
    id: 'beyaz-18',
    categoryId: 'beyaz',
    brand: 'Hotpoint',
    code: 'F13 / F15',
    description:
      'Kurutucu sıcaklık / Kurutucu ısıtıcı. Kurutmalı makinelerde fan tıkanıklığı NTC’yi ısıtır.',
  },
  {
    id: 'beyaz-19',
    categoryId: 'beyaz',
    brand: 'Hotpoint',
    code: 'F16 / F18',
    description:
      'Tambur kilidi pozisyonu / Dâhili veri hatası. Üstten yüklemelilerde tambur manyetik park sensörü arızası.',
  },
  {
    id: 'beyaz-20',
    categoryId: 'beyaz',
    brand: 'Hotpoint',
    code: 'Fault 10/11/12/13/14/15',
    description:
      'Presostat / Pompa aktivasyonu / Kartlar arası iletişim hatalarını ifade eden LED flaş kodlarıdır.',
  },
  {
    id: 'beyaz-21',
    categoryId: 'beyaz',
    brand: 'Electrolux',
    code: 'E10 / E20',
    description:
      'Su alma / Drenaj arızası. Su şebekesi kapalıdır veya tahliye pompası bobini açılmıştır.',
  },
  {
    id: 'beyaz-22',
    categoryId: 'beyaz',
    brand: 'Electrolux',
    code: 'E30 / E40',
    description:
      'Basınç sensörü / Kapı kilit arızası. Elektronik lineer basınç anahtarı bozulmuştur.',
  },
  {
    id: 'beyaz-23',
    categoryId: 'beyaz',
    brand: 'Electrolux',
    code: 'E50 / E60',
    description:
      'Motor problemi / Isıtma problemi. İnverter kart arızası veya ısıtıcı eleman direnç kaybı.',
  },
  {
    id: 'beyaz-24',
    categoryId: 'beyaz',
    brand: 'Electrolux',
    code: 'EF0 / EF1 / EF3',
    description:
      'Sızıntı-köpük / Drenaj bloke / AquaControl. Aqua-stop sistemi aktifleşmiş, alt tavada su var.',
  },
  {
    id: 'beyaz-25',
    categoryId: 'beyaz',
    brand: 'Electrolux',
    code: 'EH0 / C2 / CLE',
    description:
      'Güç kaynağı sorunu / Drenaj hatası / Temizlik uyarısı. Şebeke voltajı stabil değildir.',
  },
  {
    id: 'beyaz-26',
    categoryId: 'beyaz',
    brand: 'Candy/Hoover',
    code: 'Er 01 / E22',
    description:
      'Tekerlek/Motor (Süpürge) / Isıtma-Presostat (Makine). Basınç anahtarı hortumu kirlilikten tıkanmış.',
  },
  {
    id: 'beyaz-27',
    categoryId: 'beyaz',
    brand: 'Candy/Hoover',
    code: 'Er 02 / Er 04 / Er 05',
    description:
      'Agitatör sıkıştı / Sol-Sağ tekerlek aşırı yük. DC motorlar mekanik zorlanmadan akım keser.',
  },
  {
    id: 'beyaz-28',
    categoryId: 'beyaz',
    brand: 'Candy/Hoover',
    code: 'Er 07 / Er 08 / Er 09',
    description:
      'Tekerlek teması yok / Tampon / Toz haznesi arızaları. Limit sviçleri pozisyon doğrulayamaz.',
  },
  {
    id: 'beyaz-29',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E01 / E02 / E03',
    description:
      'Isı pompa motor devresi / Ana PCB röle hatası. Yıkama motoru ile kart arasındaki iletişim çökmüştür.',
  },
  {
    id: 'beyaz-30',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E04 / E05',
    description:
      'Elektronik (Isıtıcı) hatası / Yıkama kolu yönlendirici. Saptırıcı (diverter) valf motoru arızalıdır.',
  },
  {
    id: 'beyaz-31',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E06 / E07',
    description:
      'Kapı sensörü / Zeolit (Crystal Dry) fan arızası. Kurutma işlemi için kullanılan özel fan dönmüyordur.',
  },
  {
    id: 'beyaz-32',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E08 / E09',
    description:
      'Düşük su / Isıtma pompa rezistansı. Isıtma pompası içerisindeki seramik rezistans kopmuştur (Tipik arıza).',
  },
  {
    id: 'beyaz-33',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E10 / E11',
    description:
      'Zeolit ısıtıcısı / Termostat NTC hatası. Mineral ısıtıcı elemanı limit değerlerini aşmıştır.',
  },
  {
    id: 'beyaz-34',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E12 / E13 / E14',
    description:
      'Isı pompası kireçlenmesi / Akış sensörü (Flow metre). Manyetik reed sensör türbini sayaç değerini atlıyordur.',
  },
  {
    id: 'beyaz-35',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E15',
    description:
      'Aquastop sızıntı tespiti. Hazne O-ringinden sızan su, polistiren şamandırayı kaldırarak emniyet sviçini açmıştır.',
  },
  {
    id: 'beyaz-36',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E16 / E17',
    description:
      'Su giriş ventili açık kalması / Yüksek su seviyesi. Giriş solenoid valfinin diyaframı kapanmıyor.',
  },
  {
    id: 'beyaz-37',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E18 / E19',
    description:
      'Düşük su / Dispenser (Deterjanlık) arızası. Deterjan kutusunu açan termal aktüatör yanmıştır.',
  },
  {
    id: 'beyaz-38',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E20 / E21',
    description:
      'Sirkülasyon pompa devresi hatası. Yıkama motoru statoru sargılarında kısadevre veya atlama.',
  },
  {
    id: 'beyaz-39',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E22 / E23',
    description:
      'Filtre tıkalı (Su kaldı) / Tahliye pompa hatası. Alt ızgara tıkanmış, pompa kanatçığı bloke olmuştur.',
  },
  {
    id: 'beyaz-40',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E24 / E25',
    description:
      'Tahliye bükülmüş / Drenaj kapağı tespiti. Pompa pervanesini kapatan emniyet plastiği yerine takılmamış.',
  },
  {
    id: 'beyaz-41',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E26 / E27 / E28',
    description:
      'Su seviye sensörü / Düşük voltaj. Şebeke akımı kartı beslemeye yetmiyor.',
  },
  {
    id: 'beyaz-42',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E29 / E31',
    description:
      'Gelişmiş donanım veya Zeolit arızaları. Zeolit bölmesi nem dolmuştur.',
  },
  {
    id: 'beyaz-43',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E92-40 / H06',
    description:
      'Özel donanım iletişim arızası, kapı modülü sorunu.',
  },
  {
    id: 'beyaz-44',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E0100 / E0103 / E0105',
    description:
      'Güç modülü ve bileşen doğrulama alt kodları.',
  },
  {
    id: 'beyaz-45',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E0106 / E0107 / E0110',
    description:
      'Kapı anahtarı, modül rölesi, elektronik iletişim hataları.',
  },
  {
    id: 'beyaz-46',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E2030 / E2060 / E2120',
    description:
      'Isı pompa hatası, Kireçlenme, Zeolit oda ısıtıcısı arızası.',
  },
  {
    id: 'beyaz-47',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E2130 / E3000 / E3100',
    description:
      'Diğer gelişmiş modül hataları.',
  },
  {
    id: 'beyaz-48',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E3200 / E3300 / E3400',
    description:
      'Donanım kimlik doğrulama problemleri.',
  },
  {
    id: 'beyaz-49',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E6001 / E6002 / E6101',
    description:
      'Cihaz veri yolu (Bus) mimarisinde hata, donanımlar haberleşemiyor.',
  },
  {
    id: 'beyaz-50',
    categoryId: 'beyaz',
    brand: 'Siemens/Bosch',
    code: 'E6102 / E6103',
    description: 'Dâhili modül kontrol arızaları.',
  },
  {
    id: 'beyaz-51',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F1 / F2 / F3',
    description:
      'Su sıcaklığı / NTC / Kurutma NTC hatası. Direnç seviyesi referans voltajını aşıyor.',
  },
  {
    id: 'beyaz-52',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F4 / F10 / F11',
    description:
      'Kurutma NTC / Su alımı / Drenaj arızası. Atık su sistemi pompa motorunu kilitlemiştir.',
  },
  {
    id: 'beyaz-53',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F12 / F13 / F14',
    description:
      'Su giriş hataları (Flowmetre). Su sayacı devri elektronik olarak kaydedilememektedir.',
  },
  {
    id: 'beyaz-54',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F15 / F16 / F18',
    description:
      'Tıkalı valf / Fazla köpük / Giriş valfi arızası. Şebeke basıncı 0.5 barın altındadır (F15).',
  },
  {
    id: 'beyaz-55',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F19 / F20 / F24',
    description:
      'Akış ölçer / Isıtma hatası / Isıtıcı röle yapışık. Elektromekanik röle kontakları yanarak birleşmiştir.',
  },
  {
    id: 'beyaz-56',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F25 / F26 / F29',
    description:
      'İstenen ısı yok / Isıtma koruma / Isıtma devre dışı. Klixon termik sigorta atmıştır.',
  },
  {
    id: 'beyaz-57',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F32 / F33 / F34',
    description:
      'Kapı kilit sorunları. Elektronik veya mekanik olarak kilit motoru mili itilemiyordur.',
  },
  {
    id: 'beyaz-58',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F35 / F36 / F37',
    description: 'Kapı serbest bırakma / Kilit açma / Sensör arızası.',
  },
  {
    id: 'beyaz-59',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F38 / F40 / F42',
    description:
      'Kurutma devresi / Elektronik iletişim / Şebeke senkronizasyon. 50Hz dalga boyu alınamıyordur.',
  },
  {
    id: 'beyaz-60',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F47 / F51 / F52',
    description:
      'Arayüz arızası / Basınç sensörü / Fazla deterjan. Basınç anahtarı köpüğü aşırı yük olarak okur.',
  },
  {
    id: 'beyaz-61',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F53 / F63 / F67',
    description:
      'Hız (Tako) sensörü / Su yolu (Diverter) / Sirkülasyon pompası durdu. Motor statoru bozuktur.',
  },
  {
    id: 'beyaz-62',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F68 / F69 / F70',
    description:
      'Pompa kapanmıyor / Pompa blokajı / Waterproof aktif. Şamandıra su sızıntısını tespitlemiştir.',
  },
  {
    id: 'beyaz-63',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F78 / F79 / F84',
    description:
      'Sirkülasyon sürücü arızası / Çevre birimi arızası / Deklanşör hatası. Kapı konum sensörü okumuyordur.',
  },
  {
    id: 'beyaz-64',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F85 / F86 / F87',
    description:
      'Sürgü arızası / Tuz haznesi / Parlatıcı arızası. Manyetik dispenser valfleri oksitlenmiştir.',
  },
  {
    id: 'beyaz-65',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F88 / F91',
    description:
      'Bulanıklık (Turbidity) sensörü / Kapasite tanıma başarısız. Optik su kirlilik sensörü körleşmiştir.',
  },
  {
    id: 'beyaz-66',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'F170-F177',
    description:
      'Bileşen engel, giriş tıkanıklığı, dâhili donanım sensörleri. Kritik bileşenlerin ömrü dolmuştur.',
  },
  {
    id: 'beyaz-67',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: '-0- / <25% / 888',
    description:
      'Ekran hata döngüsü / Yük tespiti / Başlangıç tanı ekranı.',
  },
  {
    id: 'beyaz-68',
    categoryId: 'beyaz',
    brand: 'Miele',
    code: 'ADD / Ctr',
    description: 'Çamaşır ekleme uyarısı / Kontrol ünitesi donanım hatası.',
  },
  {
    id: 'beyaz-69',
    categoryId: 'beyaz',
    brand: 'Arçelik/Beko/Altus',
    code: 'E01 / E02',
    description:
      'Taşma hatası / Su kesik. Makine tabanı suyla dolmuş veya ventil filtresi kireç bağlamıştır.',
  },
  {
    id: 'beyaz-70',
    categoryId: 'beyaz',
    brand: 'Arçelik/Beko/Altus',
    code: 'E06 / E07',
    description:
      'NTC ısıtma arızası / Sürekli su alma. Isı sensörü bozulmuş, anakart suyu kesemiyordur.',
  },
  {
    id: 'beyaz-71',
    categoryId: 'beyaz',
    brand: 'Arçelik/Beko/Altus',
    code: 'E26 / IONIZER',
    description:
      '15°C üstü / Altı kompresör arızası. Isı pompalı kurutma devresi soğutucu gaz sirkülasyon arızası.',
  },
  {
    id: 'beyaz-72',
    categoryId: 'beyaz',
    brand: 'Arçelik/Beko/Altus',
    code: 'H1 / H2 / H3',
    description:
      'Isıtıcı eleman / Termostat / Aşırı ısınma koruması. Isıtıcı teller veya termik sigorta atmıştır.',
  },
  {
    id: 'beyaz-73',
    categoryId: 'beyaz',
    brand: 'Arçelik/Beko/Altus',
    code: 'E01 / E02 / E03',
    description:
      'Vantilatör motor hatası / Hız kontrol / Aşırı ısınma. DC motor veya hız modülasyon modülü yanmıştır.',
  },

  // Buzdolabı
  {
    id: 'buz-1',
    categoryId: 'buzdolabi',
    brand: 'Samsung',
    code: '1E / SE / 5E',
    description:
      'Buzdolabı sensörü / Defrost sensörü arızası. Hava kanalları tıkanmıştır, rezistans test edilmelidir.',
  },
  {
    id: 'buz-2',
    categoryId: 'buzdolabi',
    brand: 'Samsung',
    code: '13E / 14E',
    description:
      'Buz yapıcı motoru / Buz yapıcı sensörü arızası. Buzluk kırıcısı donmuştur.',
  },
  {
    id: 'buz-3',
    categoryId: 'buzdolabi',
    brand: 'Samsung',
    code: '21E / 22E (22C)',
    description:
      'Dondurucu / Soğutucu evaporatör fan hatası. Pervane karlanmadan dönmüyor, motor çekilen akımdan kilitlenmiştir.',
  },
  {
    id: 'buz-4',
    categoryId: 'buzdolabi',
    brand: 'Samsung',
    code: '24E / 25E',
    description:
      'Dondurucu / Soğutucu defrost döngüsü başarısız. Defrost ısıtıcısı ohmik değeri okunmalıdır.',
  },
  {
    id: 'buz-5',
    categoryId: 'buzdolabi',
    brand: 'Samsung',
    code: '33E / 39E',
    description:
      'Buz borusu ısıtıcı / Buz fonksiyonu arızası. Su besleme borusu donduğu için ısıtıcı görev yapmıyordur.',
  },
  {
    id: 'buz-6',
    categoryId: 'buzdolabi',
    brand: 'Samsung',
    code: 'OF / 88 88',
    description:
      'Demo (Cooling Off) modu / İletişim hatası. Anakart ile ekran arasında LCD kablosu kopukluğu.',
  },
  {
    id: 'buz-7',
    categoryId: 'buzdolabi',
    brand: 'LG',
    code: 'Er IF / 1F',
    description:
      'Buz yapıcı fanı bloke. Dolap içi veya kondenser fan motoru statorları tıkanmıştır.',
  },
  {
    id: 'buz-8',
    categoryId: 'buzdolabi',
    brand: 'LG',
    code: 'Er FF / Er rF',
    description:
      'Dondurucu / Soğutucu fan hatası. Fan yatağı yağsız kalmış veya sensör buzu algılamamıştır.',
  },
  {
    id: 'buz-9',
    categoryId: 'buzdolabi',
    brand: 'LG',
    code: 'Er FS',
    description:
      'Dondurucu NTC sensör kısa/açık devre. Sensör okuması voltaj devresini bozuyordur.',
  },
  {
    id: 'buz-10',
    categoryId: 'buzdolabi',
    brand: 'LG',
    code: 'Er dH / F dH',
    description:
      'Defrost (Buz çözme) arızası. Cam tüp rezistans patlamış, buz çözme sistemi durmuştur.',
  },
  {
    id: 'buz-11',
    categoryId: 'buzdolabi',
    brand: 'LG',
    code: 'Er CO',
    description:
      'Ana kart-gösterge arası haberleşme. Kapı açılıp kapanmaktan kablo yorulması yaşamış olabilir.',
  },
  {
    id: 'buz-12',
    categoryId: 'buzdolabi',
    brand: 'GE',
    code: 'FF',
    description:
      'Dondurulmuş gıdalarda ısınma. Kapı aralık kalmış, kompresör kalkış yapamamış.',
  },
  {
    id: 'buz-13',
    categoryId: 'buzdolabi',
    brand: 'GE',
    code: 'CI',
    description:
      'Buz yapıcı arızası. Su valfi diyaframı veya filtrenin tıkalı olması.',
  },
  {
    id: 'buz-14',
    categoryId: 'buzdolabi',
    brand: 'GE',
    code: 'CC',
    description:
      'Sıcaklık kontrolleri arızası. Dâhili ortam termistörü hatalı direnç gösteriyor.',
  },
  {
    id: 'buz-15',
    categoryId: 'buzdolabi',
    brand: 'GE',
    code: 'dE / tC / tF / PF',
    description:
      'Defrost hatası / Turbo Cool / Turbo Freeze / Güç hatası. Mod bilgilendirmesi veya elektrik kesintisi.',
  },
  {
    id: 'buz-16',
    categoryId: 'buzdolabi',
    brand: 'Frigidaire',
    code: 'SY EF (5Y EF)',
    description:
      'Evaporatör fan devresi hatası. BLDC fan kontrol kartı sinyal gönderemiyor.',
  },
  {
    id: 'buz-17',
    categoryId: 'buzdolabi',
    brand: 'Frigidaire',
    code: 'SY CF',
    description:
      'Kullanıcı paneli - kontrol kartı iletişimi. Veri akışı (Data bus) kesilmiş, kablo oksitlenmiştir.',
  },
  {
    id: 'buz-18',
    categoryId: 'buzdolabi',
    brand: 'Frigidaire',
    code: 'H1 / OP',
    description:
      'Yüksek sıcaklık / Açık termistör. Kompresör soğutma döngüsünü kaybetmiştir, gaz kaçağı olabilir.',
  },
  {
    id: 'buz-19',
    categoryId: 'buzdolabi',
    brand: 'Frigidaire',
    code: 'dF',
    description:
      'Defrost devresi arızası. Bimetal termostat devre vermiyordur, buzlanma kapatılamaz.',
  },
  {
    id: 'buz-20',
    categoryId: 'buzdolabi',
    brand: 'Whirlpool',
    code: 'PO / 6 / 18',
    description:
      'Güç kesintisi / Kapı açık / Buz yapıcı. Şebeke arızasından kaynaklanan geçici hatalardır.',
  },
  {
    id: 'buz-21',
    categoryId: 'buzdolabi',
    brand: 'Whirlpool',
    code: 'E2 / F2 / F1',
    description:
      'Termistör arızası / Kompresör arızası. PTC start rölesi yanmış veya kompresör sargısı kopmuştur.',
  },
  {
    id: 'buz-22',
    categoryId: 'buzdolabi',
    brand: 'Electrolux',
    code: 'H / HI',
    description:
      'Yüksek sıcaklık alarmı. Kapı contasından (fitilinden) sıcak hava girmesi ısıyı yükseltmiştir.',
  },

  // Robot Süpürge
  {
    id: 'robot-1',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 1',
    description:
      'Lazer Mesafe Sensörü (LDS) Arızası. Dönen kule mekanizması sıkışmış, tozdan arındırılmalıdır.',
  },
  {
    id: 'robot-2',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 2',
    description:
      'Ön Tampon Sıkıştı (Bumper Stuck). Tampon yaylarının içine sıkışan kirler temizlenmeli.',
  },
  {
    id: 'robot-3',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 3',
    description:
      'Tekerlek Sıkıştı. Tahrik motor redüktörüne halı saçağı veya kablo dolanmıştır.',
  },
  {
    id: 'robot-4',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 4',
    description:
      'Uçurum (Cliff) Sensörü tıkalı. Alt bölgedeki şeffaf IR sensörler mikrofiber bezle silinmeli.',
  },
  {
    id: 'robot-5',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 5',
    description:
      'Ana Fırça (Main Brush) sıkıştı. Rulolar sökülüp etrafındaki hayvan/insan saçları kesilmelidir.',
  },
  {
    id: 'robot-6',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 6',
    description:
      'Yan Fırça sıkıştı. Pervane motor dişlilerine kıl birikmesi rotasyonu engellemiştir.',
  },
  {
    id: 'robot-7',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 7 / 16',
    description:
      'Tekerlek yerden kesildi / Cihaz eğik duruyor. Robot merdiven eşiğinde askıda kalmıştır.',
  },
  {
    id: 'robot-8',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 9 / 10',
    description:
      'Toz haznesi dolu / Filtre kurumamış. Islak HEPA filtre emiş vakumunu tıkayarak motoru zorlar.',
  },
  {
    id: 'robot-9',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 11 / 24',
    description:
      'Manyetik alan tespiti / Sanal duvar. Cihaz engelli veya metal alan şeritleri üzerindedir.',
  },
  {
    id: 'robot-10',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 12',
    description:
      'Düşük batarya. Cihazın şarj dock istasyonunu bulması engellenmiştir.',
  },
  {
    id: 'robot-11',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 13 / 22',
    description:
      'Şarj hatası / Şarj sensörü tozlu. Robotun altındaki veya docktaki pinler oksitlenmiştir.',
  },
  {
    id: 'robot-12',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 14',
    description:
      'Batarya sıcaklık arızası. BMS (Batarya Yönetim Sistemi) termistörü aşırı ısı algılamış, pili kesti.',
  },
  {
    id: 'robot-13',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 15 / 26',
    description:
      'Kirli duvar sensörü. Yan taraftaki mesafe bulucu göz kirlidir, cihaz yönünü şaşırır.',
  },
  {
    id: 'robot-14',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 17 / 18',
    description:
      'Yan fırça motoru hatası / Fan arızası. Anakart üzerinden DC motorların akımı kesilmiştir.',
  },
  {
    id: 'robot-15',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 21',
    description:
      'Dikey tampon basılı kaldı. LDS kulesinin üzerine ağırlık veya baskı binmiştir.',
  },
  {
    id: 'robot-16',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 23',
    description:
      'Şarj dock sıkışık. İstasyonda kılavuz dalgaları (Beacon) gönderimi fiziksel olarak kapalı.',
  },
  {
    id: 'robot-17',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 27',
    description:
      'VibraRise (Mop titreşim) sistemi sıkıştı. Paspas indirme/kaldırma servomotoru kilitlenmiştir.',
  },
  {
    id: 'robot-18',
    categoryId: 'robot',
    brand: 'Roborock',
    code: 'Error 28',
    description:
      'Halı üzerinde işlem. Mop pedi takılıyken cihaz halı tespiti yapmış ve operasyonu durdurmuştur.',
  },
  {
    id: 'robot-19',
    categoryId: 'robot',
    brand: 'Xiaomi',
    code: 'Error 01 / 02',
    description:
      'Sol / Sağ tekerlek arızası. Redüktör dişli grubu sıyırmış veya ağır akım çekiyordur.',
  },
  {
    id: 'robot-20',
    categoryId: 'robot',
    brand: 'Xiaomi',
    code: 'Error 03 / 04',
    description:
      'Uçurum sensör arızası / Düşük batarya. Cihaz yüksek algısında veya docka dönemedi.',
  },
  {
    id: 'robot-21',
    categoryId: 'robot',
    brand: 'Xiaomi',
    code: 'Error 05 / 06',
    description:
      'Tampon hatası / Fırça dönüş arızası. Yaylar deforme olmuş veya rulo kilitlenmiştir.',
  },
  {
    id: 'robot-22',
    categoryId: 'robot',
    brand: 'Xiaomi',
    code: 'Error 07 / 08',
    description:
      'Yan fırça hatası / Fan motor arızası. Emiş gücü sağlayan BLDC türbini yanmıştır.',
  },
  {
    id: 'robot-23',
    categoryId: 'robot',
    brand: 'Xiaomi',
    code: 'Error 09 / 10',
    description:
      'Toz/Su haznesi yok / Şarj hatası. Hazne üzerindeki metal kontaktörler birbirine değmiyordur.',
  },
  {
    id: 'robot-24',
    categoryId: 'robot',
    brand: 'Xiaomi',
    code: 'Error 11',
    description:
      'Su yetersizliği hatası. Su deposundaki seviye pimi kuru pozisyonda kalmıştır.',
  },
  {
    id: 'robot-25',
    categoryId: 'robot',
    brand: 'Dreame',
    code: 'Error 1 / 2',
    description:
      'Tampon sensör hatası / Tekerlekler havada. Cihaz fiziki engellere oturmuştur.',
  },
  {
    id: 'robot-26',
    categoryId: 'robot',
    brand: 'Dreame',
    code: 'Error 3 / 4',
    description:
      'Uçurum sensörü devrede / Ana fırça blokajı. Temizlik gerektiren kritik hareket mekanizmaları tıkalı.',
  },
  {
    id: 'robot-27',
    categoryId: 'robot',
    brand: 'Dreame',
    code: 'Error 5 / 6',
    description:
      'Yan fırça dolanması / Sürüş tekerlek hatası. Motor sargıları korumaya geçmiştir.',
  },
  {
    id: 'robot-28',
    categoryId: 'robot',
    brand: 'Dreame',
    code: 'Error 7 / 8',
    description:
      'Robot sıkıştı / Toz haznesi algılanmadı. Hall (mıknatıs) sensörü hazneyi bulamıyor.',
  },
  {
    id: 'robot-29',
    categoryId: 'robot',
    brand: 'Dreame',
    code: 'Error 9 / 10',
    description:
      'Manyetik alan girişimi / Şarj gerilim hatası. Anakart voltaj regülatörü çökmüştür.',
  },
  {
    id: 'robot-30',
    categoryId: 'robot',
    brand: 'Dreame',
    code: 'Error 11 / 12',
    description:
      'Batarya termal hatası / Dâhili (Internal) sistem. Anakart mikroişlemci RAM hatası (Yazılım).',
  },
  {
    id: 'robot-31',
    categoryId: 'robot',
    brand: 'iRobot',
    code: 'Error 74 / 75',
    description:
      'Alan limiti / İlerleme yok (No progress). Cihaz haritasının dışına itilmiştir.',
  },
  {
    id: 'robot-32',
    categoryId: 'robot',
    brand: 'iRobot',
    code: 'Error 76 / 88',
    description:
      'Dâhili haberleşme / Yedekleme reddedildi. Firmware dosyaları bulut ile senkron olamadı.',
  },
  {
    id: 'robot-33',
    categoryId: 'robot',
    brand: 'iRobot',
    code: 'Error 89 / 99',
    description:
      'Görev süresi uzun / Misyon tamamlanmadı. Pil kapasitesi odayı bitirmeye yetmedi.',
  },
  {
    id: 'robot-34',
    categoryId: 'robot',
    brand: 'iRobot',
    code: 'Error 1003 / c100..c600, c140',
    description:
      'Wi-Fi / Bulut senkronizasyon hatası. Router ayarlarından cihaz lokal ağa bağlanamıyordur.',
  },
  {
    id: 'robot-35',
    categoryId: 'robot',
    brand: 'Shark',
    code: 'E6',
    description:
      'Tıkalı hava akışı. Emiş borusu tıkanmış veya sensörler yanlış basınç okuyor.',
  },
  {
    id: 'robot-36',
    categoryId: 'robot',
    brand: 'Shark',
    code: 'Error 2',
    description:
      'Obstrüksiyon (Tıkanıklık). Döner fırçada veya tekerlekte inatçı bir cisim takılıdır.',
  },
  {
    id: 'robot-37',
    categoryId: 'robot',
    brand: 'Dyson',
    code: 'Mavi Flaş',
    description:
      'Batarya gücü yok. Li-ion hücreler tamamen tükenmiş, 3.5 saat şarj gerektiriyor.',
  },
  {
    id: 'robot-38',
    categoryId: 'robot',
    brand: 'Dyson',
    code: 'Sarı / Amber Flaş',
    description:
      'Cihaz aşırı ısındı. Motor Boost modda uzun süre çalıştırılmış, soğuması için kapatılmalı.',
  },
  {
    id: 'robot-39',
    categoryId: 'robot',
    brand: 'Dyson',
    code: 'Kırmızı Flaş',
    description:
      'Batarya hücre ölümü. Dâhili BMS kartı hücre gerilimlerini dengesiz bulup sistemi kalıcı kilitledi.',
  },
  {
    id: 'robot-40',
    categoryId: 'robot',
    brand: 'Dyson',
    code: 'Mavi-Yeşil Flaş',
    description:
      'Şarj algılama anormalliği. Temassızlık veya adaptör çipinde sorun vardır.',
  },

  // Bilişim
  {
    id: 'bilisim-1',
    categoryId: 'bilisim',
    brand: 'HP/Canon',
    code: '13 / 202 / W-02',
    description:
      'Kağıt sıkışması (Paper Jam). Besleme makaralarındaki (roller) sensör kollarını temizleyin.',
  },
  {
    id: 'bilisim-2',
    categoryId: 'bilisim',
    brand: 'HP/Canon',
    code: '10 / 14 / 16 / W10',
    description:
      'Toner/Mürekkep boş veya kartuş yok. Çip okuyucu kontakları kirli veya kartuş takılmamıştır.',
  },
  {
    id: 'bilisim-3',
    categoryId: 'bilisim',
    brand: 'HP/Canon',
    code: '79 / 40.3 / 49',
    description:
      'Offline / Firmware donanım iletişim çökmesi. Yazıcı spooler verisi bozuktur, resetlenmeli.',
  },
  {
    id: 'bilisim-4',
    categoryId: 'bilisim',
    brand: 'HP/Canon',
    code: '50.4 / E000 / E50',
    description:
      'Fuser (Isıtıcı) aşırı ısınma / arıza. Toner kaynaştıran fuser termistörü 200°C limitini geçmiştir.',
  },
  {
    id: 'bilisim-5',
    categoryId: 'bilisim',
    brand: 'HP/Canon',
    code: '41.3 / 41 / 41.1',
    description:
      'Beklenmeyen kağıt boyutu / Motor geçici hata. Tepsi sensörü ile baskı komutu uyuşmuyor.',
  },
  {
    id: 'bilisim-6',
    categoryId: 'bilisim',
    brand: 'HP/Canon',
    code: '11 / 12 / 18',
    description:
      'Kağıt yok / EP kartuş açık / MIO hazır değil. I/O arayüzünde iletişim kopukluğu.',
  },
  {
    id: 'bilisim-7',
    categoryId: 'bilisim',
    brand: 'HP/Canon',
    code: '20 / 21 / 22 / 24',
    description:
      'Bellek taşması / Print overrun / I/O Hatası / İş belleği dolu. Doküman boyutu SRAM’i aşmıştır.',
  },
  {
    id: 'bilisim-8',
    categoryId: 'bilisim',
    brand: 'HP/Canon',
    code: '23 / 30 / 40 / 43',
    description:
      'G/Ç hazır değil / PS Hatası / Veri Transfer hatası / Arayüz arızası.',
  },
  {
    id: 'bilisim-9',
    categoryId: 'bilisim',
    brand: 'HP/Canon',
    code: '50 / 51 / 52 / 53 / 55',
    description:
      'Servis hataları ve dâhili İletişim kopuklukları. Formatter kart veya lazer tarayıcı aynası bozuktur.',
  },
  {
    id: 'bilisim-10',
    categoryId: 'bilisim',
    brand: 'Canon',
    code: 'E202 / B200',
    description:
      'Tarayıcı okuma hatası / Yazdırma kafası hatası. Kafa ısınmıştır, kartuş bloğu değiştirilmelidir.',
  },
  {
    id: 'bilisim-11',
    categoryId: 'bilisim',
    brand: 'Epson',
    code: '0x97',
    description:
      'Donanım / Anakart kısa devresi. Genellikle mikro piezo baskı kafasının mürekkep kaçırmasıyla oluşur.',
  },
  {
    id: 'bilisim-12',
    categoryId: 'bilisim',
    brand: 'Brother',
    code: 'E51 / E52 / 900.00',
    description:
      'Lazer ünitesi arızası / Soğutma Fanı / Firmware. Fan dönmediğinde anakart lazeri kilitler.',
  },
  {
    id: 'bilisim-13',
    categoryId: 'bilisim',
    brand: 'Brother',
    code: '30-3F / 4F / E0',
    description:
      'Engel kaynaklı kağıt durması / Baskı kafa / Mantık kartı. Anakart baskı kafası sürüş çipini yakmıştır.',
  },
  {
    id: 'bilisim-14',
    categoryId: 'bilisim',
    brand: 'AMI BIOS',
    code: '1 Bip',
    description:
      'DRAM (Bellek) tazeleme hatası. RAM çipleri oksitlenmiş, slotlardan veri yolu kesilmiştir.',
  },
  {
    id: 'bilisim-15',
    categoryId: 'bilisim',
    brand: 'AMI BIOS',
    code: '2 Bip / 3 Bip',
    description:
      'Parity (Eşlik) devresi / Base 64K RAM hatası. Belleğin ilk sektörleri bozuktur, Dual-Channel test edilmeli.',
  },
  {
    id: 'bilisim-16',
    categoryId: 'bilisim',
    brand: 'AMI BIOS',
    code: '4 Bip',
    description:
      'Sistem zamanlayıcı (Timer) hatası. Anakart kristal osilatör veya PCH köprüsü arızalıdır.',
  },
  {
    id: 'bilisim-17',
    categoryId: 'bilisim',
    brand: 'AMI BIOS',
    code: '5 Bip / 7 Bip',
    description:
      'İşlemci (CPU) başarısızlığı / Sanal mod istisnası. İşlemci pimleri bükülmüş, soket okumuyordur.',
  },
  {
    id: 'bilisim-18',
    categoryId: 'bilisim',
    brand: 'AMI BIOS',
    code: '6 Bip',
    description:
      'Klavye kontrolcüsü (Gate A20) arızası. PS/2 devresi veya Super I/O çipi yanmıştır.',
  },
  {
    id: 'bilisim-19',
    categoryId: 'bilisim',
    brand: 'AMI BIOS',
    code: '8 Bip',
    description:
      'Görüntü (Ekran) bellek (VRAM) Okuma/Yazma hatası. Ekran kartı lehimleri çatlamıştır (Reballing gerektirir).',
  },
  {
    id: 'bilisim-20',
    categoryId: 'bilisim',
    brand: 'AMI BIOS',
    code: '9 Bip / 10 Bip',
    description:
      'ROM BIOS Checksum / CMOS Kaydedici okuma hatası. BIOS çipi silinmiş veya CMOS pili bitmiştir.',
  },
  {
    id: 'bilisim-21',
    categoryId: 'bilisim',
    brand: 'AMI BIOS',
    code: '11 Bip / 1L 2S / 1L 3S',
    description:
      'L2 Cache (Önbellek) hatası / Geleneksel bellek hatası. İşlemci dâhili önbelleği statik hasar almıştır.',
  },
  {
    id: 'bilisim-22',
    categoryId: 'bilisim',
    brand: 'AMI BIOS',
    code: '1L 8S',
    description:
      'Display/Retrace Test Başarısız. Görüntü senkronizasyonu anakarttan monitöre aktarılamamıştır.',
  },
  {
    id: 'bilisim-23',
    categoryId: 'bilisim',
    brand: 'Dell PC',
    code: '1 Bip / 2 Bip',
    description:
      'BIOS ROM arızası / RAM algılanmadı. Bellek slotları üflenmeli, BIOS diagostik başlatılmalıdır.',
  },
  {
    id: 'bilisim-24',
    categoryId: 'bilisim',
    brand: 'Dell PC',
    code: '3 Bip / 4 Bip',
    description:
      'Chipset, Zaman saati, Gate A20 hatası / Bellek RAM arızası.',
  },
  {
    id: 'bilisim-25',
    categoryId: 'bilisim',
    brand: 'Dell PC',
    code: '5 Bip / 6 Bip',
    description:
      'CMOS Batarya hatası / Video Grafik kartı arızası. 3V yassı pil yenilenmeli veya GPU test edilmeli.',
  },
  {
    id: 'bilisim-26',
    categoryId: 'bilisim',
    brand: 'Dell PC',
    code: '7 Bip / 8 Bip',
    description:
      'CPU hatası / LCD Panel başarısızlığı. Ekran data kablosu (LVDS) menteşe dibinden kopmuştur.',
  },
  {
    id: 'bilisim-27',
    categoryId: 'bilisim',
    brand: 'HP Laptop',
    code: '1S / 2S / 3S / 4S',
    description:
      'Eski donanım (Floppy vb.) hataları / BIOS Flaşlama sorunları. Recovery (Win+B) ile BIOS atılmalıdır.',
  },
  {
    id: 'bilisim-28',
    categoryId: 'bilisim',
    brand: 'HP Laptop',
    code: '5S / 1S1L / 2S1L / 3S1L',
    description:
      'BIOS Kurtarma başarılı / Bellek / Video Kart / Uyumsuz CPU hataları. Donanım uyumu incelenmelidir.',
  },
  {
    id: 'bilisim-29',
    categoryId: 'bilisim',
    brand: 'HP Laptop',
    code: '2S2L',
    description: 'BIOS Kurtarma işlemi başarılı (Reboot gerekiyor).',
  },
  {
    id: 'bilisim-30',
    categoryId: 'bilisim',
    brand: 'Lenovo',
    code: '0282h / 0283h (1-3/1-4)',
    description:
      'Bellek / PCI Kaynak hatası. Wi-Fi veya NVMe modülleri DMA/IRQ çakışması yaratıyordur.',
  },
  {
    id: 'bilisim-31',
    categoryId: 'bilisim',
    brand: 'Lenovo',
    code: '0284h / 0285h (2-3/2-4)',
    description:
      'TCG veya TPM başlatma arızası. Güvenilir Platform Modülü şifrelemeyi reddediyor.',
  },
  {
    id: 'bilisim-32',
    categoryId: 'bilisim',
    brand: 'Lenovo',
    code: '0286h / 0287h (3-1/3-2)',
    description:
      'Entegre / Ayrık Grafik (GPU) hatası. Anakart güç fazlarında VRM mosfetleri yanmıştır.',
  },
  {
    id: 'bilisim-33',
    categoryId: 'bilisim',
    brand: 'Lenovo',
    code: '0000h / 0001h (N/A / 1-2)',
    description: 'Rezerve / Reset platform de-asserted hatası.',
  },
  {
    id: 'bilisim-34',
    categoryId: 'bilisim',
    brand: 'Lenovo',
    code: '0002h / 0003h (1-3 / 1-4)',
    description:
      'Dâhili Bus hatası / NV-RAM programlama hatası. Güç entegresindeki bellek çipleri yandı.',
  },
  {
    id: 'bilisim-35',
    categoryId: 'bilisim',
    brand: 'Sony TV',
    code: '2 Blinks / 3 Blinks',
    description:
      'Güç kartı (Power) hatası / Anakart (Main board) hatası. SMPS kapasitör şişmesi ve voltaj çökmesi.',
  },
  {
    id: 'bilisim-36',
    categoryId: 'bilisim',
    brand: 'Sony TV',
    code: '4 Blinks / 5 Blinks',
    description:
      'Dikey saptırma yok / T-CON kartı, Ekran arızası. Panel LVDS konnektörü su almıştır (Oksitlenme).',
  },
  {
    id: 'bilisim-37',
    categoryId: 'bilisim',
    brand: 'Sony TV',
    code: '6 Blinks / 7 Blinks',
    description: 'Veri setinde bu kodlar için açıklama belirtilmemiştir.',
  },
  {
    id: 'bilisim-38',
    categoryId: 'bilisim',
    brand: 'Sony TV',
    code: '8 Blinks / White / Cyan',
    description:
      'Ses arızası (Audio) / Yazılım güncelleniyor / Wi-Fi senkronizasyon.',
  },
  {
    id: 'bilisim-39',
    categoryId: 'bilisim',
    brand: 'Sony TV',
    code: 'Amber / Pink / Green / Yel',
    description: 'Uyku Zamanlayıcısı devrede / Kayıt Modu / Kamera açık / Mikrofon devrede.',
  },
  {
    id: 'bilisim-40',
    categoryId: 'bilisim',
    brand: 'Samsung TV',
    code: 'Kırmızı Hızlı Yanıp Sönme',
    description:
      'Yazılım çökmesi veya One Connect donanım kısa devresi. Standby ışığı uyarı verir, hard reset şarttır.',
  },
  {
    id: 'bilisim-41',
    categoryId: 'bilisim',
    brand: 'Philips TV',
    code: 'Yanıp Sönen Standby',
    description:
      'TV bekleme modunda kilitlenmiştir, prizden fiş çekilip kapasitörlerin tam boşalması beklenmelidir.',
  },
  {
    id: 'bilisim-42',
    categoryId: 'bilisim',
    brand: 'Nikon',
    code: 'c / Full',
    description:
      'Flaş tam güçte patladı (Şarj bekleniyor) / Hafıza (SD) kartı dolu, resim kaydedilemiyor.',
  },
  {
    id: 'bilisim-43',
    categoryId: 'bilisim',
    brand: 'Nikon',
    code: 'Err / Card',
    description:
      'Kamera ayna-perde mekanizması arızası / Hafıza kartı write-protect kilitlidir.',
  },
  {
    id: 'bilisim-44',
    categoryId: 'bilisim',
    brand: 'Nikon',
    code: 'fEE / F',
    description:
      'Diyafram halkası en kısık pozisyonda değil / Lens kontak pinleri (CPU temasları) oksitlenmiştir.',
  },
  {
    id: 'bilisim-45',
    categoryId: 'bilisim',
    brand: 'Sony Cam',
    code: 'E:62:12 / E:62:20',
    description:
      'Görüntü sabitleyici (SteadyShot) lens grubunda mekanik asılı kalma, odaklama blokajı.',
  },
  {
    id: 'bilisim-46',
    categoryId: 'bilisim',
    brand: 'Sony Cam',
    code: 'E:91:01 / E:91:xx',
    description:
      'Flaş ünitesi veya batarya tanıma (şifreleme) iletişimsizliği.',
  },
  {
    id: 'bilisim-47',
    categoryId: 'bilisim',
    brand: 'Sony Cam',
    code: 'C:32 / 03-01 / Format Err',
    description:
      'Batarya bilgi hatası / Uzaktan kumanda senkron hatası / Hafıza kartı format dosya sistemi sorunu.',
  },

  // Mutfak
  {
    id: 'mutfak-1',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'F0 / F1 / F5 / F8',
    description:
      'Kontrol kartı hatası / EEPROM flaş bellek okunamadı. Yüksek ısı kart rölelerini yakmıştır.',
  },
  {
    id: 'mutfak-2',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'F2 / F2E0 / F5',
    description:
      'Dokunmatik panel / Keypad kısa devresi. Buhar membranın arasına girmiştir, sensör temizlenmeli.',
  },
  {
    id: 'mutfak-3',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'F3 / F4',
    description:
      'Sıcaklık sensörü probu / Nem sensörü arızası. RTD oda sıcaklığında 1080 ohm göstermiyorsa değişmelidir.',
  },
  {
    id: 'mutfak-4',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'F1E0 / F1E1 / F1E2',
    description: 'Kontrol kartı alt hataları, işlemci iletişim yetersizliği.',
  },
  {
    id: 'mutfak-5',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'F2E1 / F2E5 / F2E6',
    description:
      'Keypad kablo soketinde gevşeklik veya kablo yanması.',
  },
  {
    id: 'mutfak-6',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'F3E0 / F3E1 / F3E2 / F3E3',
    description:
      'Fırın pirolitik temizlikte veya ısıtmada aşırı ısınma termal limiti aştı.',
  },
  {
    id: 'mutfak-7',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'F3E6 / F4E1',
    description:
      'Isıtma çekmecesi açık tespit edildi / Et probu (Meat probe) arızalandı.',
  },
  {
    id: 'mutfak-8',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'F6E1 / F7',
    description:
      'Fonksiyon tuşu sıkışması / Röle aktivasyon hatası.',
  },
  {
    id: 'mutfak-9',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'F9 / F9E0',
    description:
      'Kapı kilidi (Door lock) arızası. Pirolitik motor kilitlemiyor, kapı sviçi yanmış olabilir.',
  },
  {
    id: 'mutfak-10',
    categoryId: 'mutfak',
    brand: 'Whirlpool (Oven)',
    code: 'LOC / PF',
    description:
      'Kontrol kilidi devrede (Hata değil) / Elektrik kesintisi uyarısı (Saat resetlendi).',
  },
  {
    id: 'mutfak-11',
    categoryId: 'mutfak',
    brand: 'Whirlpool (MW)',
    code: 'F1E5 / F1E6 / F1E7 / F1E9',
    description:
      'Mikrodalga kontrol devrelerindeki işlemci arızaları, ana kart değişimi gerektirir.',
  },
  {
    id: 'mutfak-12',
    categoryId: 'mutfak',
    brand: 'Whirlpool (MW)',
    code: 'F2E1 / F2E2 / F2E3 / F2E4',
    description:
      'Klavye, membran, tuş kısa devresi, F2E5, F2E6 alt tuş basılı kalma uyarısı.',
  },
  {
    id: 'mutfak-13',
    categoryId: 'mutfak',
    brand: 'Whirlpool (MW)',
    code: 'F4E6 / F4E7 / F4E8 / F4E9',
    description:
      'Mikrodalga nem veya inveter sürüş parametresi hataları.',
  },
  {
    id: 'mutfak-14',
    categoryId: 'mutfak',
    brand: 'Whirlpool (MW)',
    code: 'F5E0 / F5E1 / F5E2 / F5E3',
    description:
      'F5 serisi röle kartı ve magnetron akım iletim hataları, F5E4, F5E5 modül hatası.',
  },
  {
    id: 'mutfak-15',
    categoryId: 'mutfak',
    brand: 'Whirlpool (MW)',
    code: 'FCE1 / FCE2 / FCE3 / FCE7',
    description:
      'Aşırı menzil (Over-the-Range) mikrodalga iletişim kopuklukları, FCE8.',
  },
  {
    id: 'mutfak-16',
    categoryId: 'mutfak',
    brand: 'Whirlpool (MW)',
    code: 'E03 / E11 / E12 / E13',
    description:
      'Sensör kirliliği ve invertör dalga çıkışı okunamıyor, E21, E22, E23, E24.',
  },
  {
    id: 'mutfak-17',
    categoryId: 'mutfak',
    brand: 'Whirlpool (MW)',
    code: 'E61 / E62 / E63 / SE',
    description:
      'Mikrodalga aşırı ısınması, havalandırma pervanesi durmuş (SE Sensör arızası).',
  },
  {
    id: 'mutfak-18',
    categoryId: 'mutfak',
    brand: 'Smeg',
    code: 'F1 / E2',
    description:
      'Sıcaklık probu girişi yok (Missing Input). PT100/PT1000 sensörü kartla iletişimi kesmiştir.',
  },
  {
    id: 'mutfak-19',
    categoryId: 'mutfak',
    brand: 'Smeg',
    code: 'F3 / E3 / E0',
    description:
      'Sıcaklık sensörü kısa / açık devre. Kablo fırın gövdesine şase yapmıştır veya sensör kopuktur.',
  },
  {
    id: 'mutfak-20',
    categoryId: 'mutfak',
    brand: 'Smeg',
    code: 'F4 / E0',
    description:
      'EEPROM iletişim hatası. Çip mantık yanıtı vermiyor, hafızadaki yazılım voltajla hasar almış.',
  },
  {
    id: 'mutfak-21',
    categoryId: 'mutfak',
    brand: 'Smeg',
    code: 'F5 / E2',
    description:
      'Kapı kilit bloğu kilitlenmiyor/açılmıyor. Kapı sviç pozisyonunu motora iletemiyordur.',
  },
  {
    id: 'mutfak-22',
    categoryId: 'mutfak',
    brand: 'Smeg',
    code: 'F8 / E0',
    description:
      'Potansiyometre voltaj referans arızası. Döner sıcaklık düğmesi okuma (Analog) değerini aşıyor.',
  },
  {
    id: 'mutfak-23',
    categoryId: 'mutfak',
    brand: 'Smeg',
    code: 'FF / F',
    description:
      'Bilinmeyen sistem / Dâhili hata. Mantık denetleyicisi komutları işlemeyi reddediyor.',
  },
  {
    id: 'mutfak-24',
    categoryId: 'mutfak',
    brand: 'Smeg',
    code: '1 / E',
    description: 'Fırın paneli spesifik donanım okuma ve yazma hataları.',
  },
  {
    id: 'mutfak-25',
    categoryId: 'mutfak',
    brand: 'Fisher',
    code: 'F10000 / F20000',
    description: 'Mikrodalga termal prob sorunu. Prob empedans kalibrasyonu sapmıştır.',
  },
  {
    id: 'mutfak-26',
    categoryId: 'mutfak',
    brand: 'Fisher',
    code: 'F10101 / F20101',
    description:
      'Prob kırık. Mikrodalga dâhili sensörü mekanik hasar almıştır.',
  },
  {
    id: 'mutfak-27',
    categoryId: 'mutfak',
    brand: 'GE',
    code: 'F1 / F2 / F3',
    description:
      'Aşırı ısı kaynaklı açık sensör / Kısa devre sensör / Kısa devre touch pad.',
  },
  {
    id: 'mutfak-28',
    categoryId: 'mutfak',
    brand: 'GE',
    code: 'F4 / F5 / F6 / F10',
    description:
      'Açık nem sensörü / Kısa devre nem sensörü / Kısa devre prob / Kısa devre ekran.',
  },
  {
    id: 'mutfak-29',
    categoryId: 'mutfak',
    brand: 'Philips (Kahve)',
    code: '01 / E01',
    description:
      'Kahve hunisi (Funnel) öğütülmüş kahve tıkanıklığı. Demleme grubu temizlenmeli.',
  },
  {
    id: 'mutfak-30',
    categoryId: 'mutfak',
    brand: 'Philips (Kahve)',
    code: '03 / E03',
    description:
      'Demleme grubu tıkalı veya yağlanmamış. Kahve yağları pistonu sıkıştırmış, greslenmeli.',
  },
  {
    id: 'mutfak-31',
    categoryId: 'mutfak',
    brand: 'Philips (Kahve)',
    code: '04 / E04',
    description:
      'Demleme grubu (Brew group) yanlış yerleştirilmiş veya yerine kilitlenmemiş.',
  },
  {
    id: 'mutfak-32',
    categoryId: 'mutfak',
    brand: 'Philips (Kahve)',
    code: '05',
    description:
      'Su devresinde (hortum/pompa) hava hapsolmuş. AquaClean filtresi doğru takılarak pürjör boşaltılmalı.',
  },
  {
    id: 'mutfak-33',
    categoryId: 'mutfak',
    brand: 'Philips (Kahve)',
    code: '14 / 11 / 19',
    description:
      'Makine aşırı ısınmış veya ortam ısısına uyumsuz. Thermoblock veya pompa sargıları dinlendirilmelidir.',
  },
  {
    id: 'mutfak-34',
    categoryId: 'mutfak',
    brand: 'Nespresso',
    code: 'Hızlı Flaş',
    description:
      'Su haznesi yerine oturmamış veya su yollarında magnezyum (kireç) tıkanıklığı var, descaling yapılmalı.',
  },
  {
    id: 'mutfak-35',
    categoryId: 'mutfak',
    brand: 'Nespresso',
    code: 'Sürekli Flaş',
    description:
      'Sistem sıcaklığı çok düşük/yüksek. Termoblok hazır hale gelene kadar basınç devre dışıdır.',
  },
  {
    id: 'mutfak-36',
    categoryId: 'mutfak',
    brand: 'Jura',
    code: 'Error 8',
    description:
      'Demleme grubu (Brewing Unit) pozisyon arızası. Step motorun torku çekirdeği ezmeye yetememiş ve sıkışmış.',
  },
];
