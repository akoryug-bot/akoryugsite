import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import type { Lang } from '@/i18n/translations';

type ML = Record<Lang, string>;

interface Product {
  model: ML;
  category: ML;
  description: ML;
  specs: ML[];
  file: string;
  tag: ML;
  tagColor: string;
}

const tkeProducts: Product[] = [
  {
    model:       { ru: "ENTA Villa", en: "ENTA Villa", kz: "ENTA Villa" },
    category:    { ru: "Лифт для частных резиденций", en: "Private Residence Lift", kz: "Жеке резиденцияларға арналған лифт" },
    description: { ru: "Элегантный домашний лифт для вилл и частных домов. Компактная шахта, тихий привод, индивидуальная отделка кабины. Создан для интеграции в существующие строения.", en: "Elegant home lift for villas and private residences. Compact shaft, quiet drive, bespoke cabin finish. Designed to integrate into existing structures.", kz: "Виллалар мен жеке үйлерге арналған элегантты үй лифті. Ықшам шахта, тыныш жетек, жеке кабина безендіруі. Бар ғимараттарға кіріктіруге арналған." },
    specs: [
      { ru: "Грузоподъёмность: 250–400 кг", en: "Capacity: 250–400 kg", kz: "Жүк көтерімділігі: 250–400 кг" },
      { ru: "Скорость: 0.15–0.63 м/с", en: "Speed: 0.15–0.63 m/s", kz: "Жылдамдық: 0.15–0.63 м/с" },
      { ru: "Высота подъёма: до 15 м", en: "Lift height: up to 15 m", kz: "Көтеру биіктігі: 15 м дейін" },
      { ru: "До 6 остановок", en: "Up to 6 stops", kz: "6 аялдамаға дейін" },
    ],
    file: "TKE_ENTA_Villa.pdf",
    tag: { ru: "Жилой", en: "Residential", kz: "Тұрғын" },
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    model:       { ru: "ENTA 300", en: "ENTA 300", kz: "ENTA 300" },
    category:    { ru: "Пассажирский лифт", en: "Passenger Lift", kz: "Жолаушы лифті" },
    description: { ru: "Надёжный лифт для жилых и коммерческих зданий средней этажности. Машинное отделение не требуется — MRL. Компактная конструкция, быстрый монтаж.", en: "Reliable lift for mid-rise residential and commercial buildings. No machine room required — MRL. Compact design, fast installation.", kz: "Орта қабатты тұрғын және коммерциялық ғимараттарға арналған сенімді лифт. Машина бөлмесі қажет емес — MRL. Ықшам конструкция, жылдам монтаж." },
    specs: [
      { ru: "Грузоподъёмность: 320–1600 кг", en: "Capacity: 320–1600 kg", kz: "Жүк көтерімділігі: 320–1600 кг" },
      { ru: "Скорость: до 3 м/с", en: "Speed: up to 3 m/s", kz: "Жылдамдық: 3 м/с дейін" },
      { ru: "До 30 остановок", en: "Up to 30 stops", kz: "30 аялдамаға дейін" },
      { ru: "MRL — без машинного зала", en: "MRL — no machine room", kz: "MRL — машина бөлмесінсіз" },
    ],
    file: "TKE_ENTA_300.pdf",
    tag: { ru: "Коммерческий", en: "Commercial", kz: "Коммерциялық" },
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  {
    model:       { ru: "META 100", en: "META 100", kz: "META 100" },
    category:    { ru: "Пассажирский лифт", en: "Passenger Lift", kz: "Жолаушы лифті" },
    description: { ru: "Стандартный пассажирский лифт для жилых домов, офисных и административных зданий. Оптимальное соотношение цены и качества, надёжный гидравлический или канатный привод.", en: "Standard passenger lift for residential, office and administrative buildings. Optimal price-quality ratio, reliable hydraulic or rope drive.", kz: "Тұрғын үйлер, кеңсе және әкімшілік ғимараттарға арналған стандартты жолаушы лифті. Оңтайлы баға-сапа қатынасы, сенімді гидравликалық немесе арқан жетегі." },
    specs: [
      { ru: "Грузоподъёмность: 320–2500 кг", en: "Capacity: 320–2500 kg", kz: "Жүк көтерімділігі: 320–2500 кг" },
      { ru: "Скорость: до 2.5 м/с", en: "Speed: up to 2.5 m/s", kz: "Жылдамдық: 2.5 м/с дейін" },
      { ru: "До 30 остановок", en: "Up to 30 stops", kz: "30 аялдамаға дейін" },
      { ru: "Опция: энергосберегающий привод", en: "Option: energy-saving drive", kz: "Опция: энергия үнемдейтін жетек" },
    ],
    file: "TKE_META_100.pdf",
    tag: { ru: "Жилой / Офис", en: "Residential / Office", kz: "Тұрғын / Кеңсе" },
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    model:       { ru: "META 200", en: "META 200", kz: "META 200" },
    category:    { ru: "Пассажирский лифт премиум", en: "Premium Passenger Lift", kz: "Премиум жолаушы лифті" },
    description: { ru: "Высокоэффективный лифт для крупных коммерческих объектов, гостиниц и торговых центров. Широкий диапазон кабин, возможность группировки до 8 единиц.", en: "High-performance lift for large commercial buildings, hotels and shopping centres. Wide range of cabin options, group control of up to 8 units.", kz: "Ірі коммерциялық нысандар, қонақ үйлер мен сауда орталықтарына арналған жоғары өнімді лифт. Кең кабина ауқымы, 8 бірлікке дейін топтастыру мүмкіндігі." },
    specs: [
      { ru: "Грузоподъёмность: 480–3000 кг", en: "Capacity: 480–3000 kg", kz: "Жүк көтерімділігі: 480–3000 кг" },
      { ru: "Скорость: до 4.0 м/с", en: "Speed: up to 4.0 m/s", kz: "Жылдамдық: 4.0 м/с дейін" },
      { ru: "Группы до 8 лифтов", en: "Groups of up to 8 lifts", kz: "8 лифтке дейінгі топтар" },
      { ru: "Система диспетчеризации AGILE™", en: "AGILE™ dispatching system", kz: "AGILE™ диспетчерлеу жүйесі" },
    ],
    file: "TKE_META_200.pdf",
    tag: { ru: "Гостиницы / ТЦ", en: "Hotels / Malls", kz: "Қонақ үйлер / СО" },
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
  {
    model:       { ru: "TUGELA", en: "TUGELA", kz: "TUGELA" },
    category:    { ru: "Эскалатор", en: "Escalator", kz: "Эскалатор" },
    description: { ru: "Высоконадёжный эскалатор для торговых центров, транспортных узлов и промышленных объектов. Усиленная конструкция ступеней и поручней, высокая интенсивность эксплуатации.", en: "Heavy-duty escalator for shopping centres, transport hubs and industrial facilities. Reinforced step and handrail structure, high-intensity operation.", kz: "Сауда орталықтары, көлік торабтары мен өнеркәсіптік нысандарға арналған жоғары сенімді эскалатор. Күшейтілген баспалдақ пен қолтықтар конструкциясы, жоғары интенсивтілік." },
    specs: [
      { ru: "Угол наклона: 30° или 35°", en: "Inclination: 30° or 35°", kz: "Еңіс бұрышы: 30° немесе 35°" },
      { ru: "Ширина: 600, 800, 1000 мм", en: "Width: 600, 800, 1000 mm", kz: "Ені: 600, 800, 1000 мм" },
      { ru: "Высота: до 25 м", en: "Height: up to 25 m", kz: "Биіктігі: 25 м дейін" },
      { ru: "Защита IP65 по запросу", en: "IP65 protection on request", kz: "IP65 қорғаныс сұрауға байланысты" },
    ],
    file: "TKE_TUGELA.pdf",
    tag: { ru: "Эскалатор", en: "Escalator", kz: "Эскалатор" },
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  {
    model:       { ru: "VELINO", en: "VELINO", kz: "VELINO" },
    category:    { ru: "Эскалатор", en: "Escalator", kz: "Эскалатор" },
    description: { ru: "Высоконадёжный эскалатор для торговых центров, транспортных узлов и аэропортов. Низкий уровень шума, энергосбережение при низком трафике, антивандальное исполнение.", en: "Highly reliable escalator for shopping centres, transport hubs and airports. Low noise, energy saving at low traffic, anti-vandal design.", kz: "Сауда орталықтары, көлік торабтары мен әуежайларға арналған жоғары сенімді эскалатор. Аз шу, аз трафикте энергия үнемдеу, вандалға төзімді орындалым." },
    specs: [
      { ru: "Угол наклона: 30° или 35°", en: "Inclination: 30° or 35°", kz: "Еңіс бұрышы: 30° немесе 35°" },
      { ru: "Ширина: 600, 800, 1000 мм", en: "Width: 600, 800, 1000 mm", kz: "Ені: 600, 800, 1000 мм" },
      { ru: "Высота: до 25 м", en: "Height: up to 25 m", kz: "Биіктігі: 25 м дейін" },
      { ru: "Скорость: 0.5 м/с", en: "Speed: 0.5 m/s", kz: "Жылдамдық: 0.5 м/с" },
    ],
    file: "TKE_VELINO_Escalator.pdf",
    tag: { ru: "Эскалатор", en: "Escalator", kz: "Эскалатор" },
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
];

const koyoProducts: Product[] = [
  {
    model:       { ru: "Каталог лифтов KOYO 2025", en: "KOYO Elevator Catalogue 2025", kz: "KOYO лифт каталогы 2025" },
    category:    { ru: "Полный модельный ряд лифтового оборудования", en: "Full range of elevator equipment", kz: "Лифт жабдықтарының толық модель қатары" },
    description: { ru: "Актуальный каталог 2025 года: пассажирские, панорамные, больничные и грузовые лифты KOYO. Технические характеристики, варианты отделки, схемы шахт.", en: "Current 2025 catalogue: passenger, panoramic, hospital and freight KOYO lifts. Technical specifications, finish options, shaft diagrams.", kz: "2025 жылғы өзекті каталог: KOYO жолаушы, панорамалық, аурухана және жүк лифтілері. Техникалық сипаттамалар, безендіру нұсқалары, шахта сызбалары." },
    specs: [
      { ru: "Скорость: до 8 м/с", en: "Speed: up to 8 m/s", kz: "Жылдамдық: 8 м/с дейін" },
      { ru: "Грузоподъёмность: до 5000 кг", en: "Capacity: up to 5000 kg", kz: "Жүк көтерімділігі: 5000 кг дейін" },
      { ru: "Сертификаты TUV, EAC, ISO", en: "TUV, EAC, ISO certified", kz: "TUV, EAC, ISO сертификаттары" },
      { ru: "Производство: Куньшань, Китай", en: "Made in Kunshan, China", kz: "Өндіріс: Қытай, Куньшань" },
    ],
    file: "KOYO_Lifts_2025.pdf",
    tag: { ru: "Лифты", en: "Lifts", kz: "Лифтілер" },
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    model:       { ru: "Варианты дизайнов лифтов KOYO и комплектующие", en: "KOYO Cabin Designs & Components", kz: "KOYO кабина дизайндары мен жинақтаушылары" },
    category:    { ru: "Дизайн кабин, отделка и комплектующие", en: "Cabin design, finishes & components", kz: "Кабина дизайны, безендіру мен жинақтаушылар" },
    description: { ru: "Широкий выбор вариантов дизайна кабин: отделка стен, полов, потолков, панели управления, освещение и поручни. Каталог комплектующих для индивидуальной компоновки лифтов KOYO.", en: "Wide selection of cabin design options: wall, floor and ceiling finishes, control panels, lighting and handrails. Components catalogue for custom KOYO lift configuration.", kz: "Кабина дизайны нұсқаларының кең таңдауы: қабырға, еден және төбе безендіруі, басқару панельдері, жарықтандыру мен қолтықтар. KOYO лифтілерінің жеке жинақтамасына арналған жинақтаушылар каталогы." },
    specs: [
      { ru: "Варианты отделки: нержавеющая сталь, стекло, дерево", en: "Finishes: stainless steel, glass, wood", kz: "Безендіру: тот баспайтын болат, шыны, ағаш" },
      { ru: "Широкий выбор панелей управления", en: "Wide choice of control panels", kz: "Басқару панельдерінің кең таңдауы" },
      { ru: "Разные типы дверей и порогов", en: "Various door and threshold types", kz: "Әртүрлі есік және табалдырық түрлері" },
      { ru: "Аксессуары и элементы безопасности", en: "Accessories and safety elements", kz: "Аксессуарлар мен қауіпсіздік элементтері" },
    ],
    file: "KOYO_Lifts_KOE.pdf",
    tag: { ru: "Дизайн", en: "Design", kz: "Дизайн" },
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  },
];

export function Catalog() {
  const { t, lang } = useLang();
  const base = import.meta.env.BASE_URL;

  return (
    <section id="catalog" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">{t('catalog', 'tkeLabel')}</span>
              <span className="text-white/40 text-sm">{t('catalog', 'tkeSub')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white">{t('catalog', 'title')}</h2>
          </div>
          <p className="text-white/50 font-light max-w-sm text-right">{t('catalog', 'sub')}</p>
        </motion.div>

        {/* TKE Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tkeProducts.map((p, i) => (
            <motion.div key={`tke-${i}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass rounded-2xl p-7 flex flex-col gap-5 border border-white/10 hover:border-primary/40 transition-colors group">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border mb-3 ${p.tagColor}`}>{p.tag[lang]}</span>
                  <h4 className="text-2xl font-serif text-white group-hover:text-primary transition-colors">{p.model[lang]}</h4>
                  <p className="text-white/50 text-sm mt-1">{p.category[lang]}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1"><FileText className="w-5 h-5 text-primary/70" /></div>
              </div>
              <p className="text-white/65 text-sm leading-relaxed font-light flex-1">{p.description[lang]}</p>
              <ul className="space-y-1.5">
                {p.specs.map((s, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-white/55">
                    <div className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />{s[lang]}
                  </li>
                ))}
              </ul>
              <a href={`${base}catalogs/${p.file}`} download target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-center gap-2 h-11 rounded-xl border border-primary/40 text-primary text-sm font-medium hover:bg-primary hover:text-black transition-all duration-200">
                <Download className="w-4 h-4" />{t('catalog', 'download')}
              </a>
            </motion.div>
          ))}
        </div>

        {/* KOYO Catalog */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">KOYO Elevator</span>
            <span className="text-white/40 text-sm">{t('catalog', 'koyoSub')}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {koyoProducts.map((p, i) => (
              <motion.div key={`koyo-${i}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="glass rounded-2xl p-7 flex flex-col gap-5 border border-white/10 hover:border-blue-400/40 transition-colors group">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border mb-3 ${p.tagColor}`}>{p.tag[lang]}</span>
                    <h4 className="text-2xl font-serif text-white group-hover:text-blue-300 transition-colors">{p.model[lang]}</h4>
                    <p className="text-white/50 text-sm mt-1">{p.category[lang]}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1"><FileText className="w-5 h-5 text-blue-400/70" /></div>
                </div>
                <p className="text-white/65 text-sm leading-relaxed font-light flex-1">{p.description[lang]}</p>
                <ul className="space-y-1.5">
                  {p.specs.map((s, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-white/55">
                      <div className="w-1 h-1 rounded-full bg-blue-400/60 shrink-0" />{s[lang]}
                    </li>
                  ))}
                </ul>
                <a href={`${base}catalogs/${p.file}`} download target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-center gap-2 h-11 rounded-xl border border-blue-400/40 text-blue-300 text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-200">
                  <Download className="w-4 h-4" />{t('catalog', 'koyoDl')}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
