import React from 'react';
import { motion } from 'framer-motion';
import almatyAirportImg from '@assets/26-10_1784823724612.webp';
import { useLang } from '@/contexts/LanguageContext';
import type { Lang } from '@/i18n/translations';

type ML = Record<Lang, string>;

const additionalProjects: ML[] = [
  { ru: "MEGA Alma-Ata — все лифты и эскалаторы", en: "MEGA Alma-Ata — all lifts & escalators", kz: "MEGA Alma-Ata — барлық лифтілер мен эскалаторлар" },
  { ru: "MEGA Park, Алматы", en: "MEGA Park, Almaty", kz: "MEGA Park, Алматы" },
  { ru: "St. Regis Astana", en: "St. Regis Astana", kz: "St. Regis Astana" },
  { ru: "Ramada Almaty", en: "Ramada Almaty", kz: "Ramada Almaty" },
  { ru: "Sheraton Актобе", en: "Sheraton Aktobe", kz: "Sheraton Ақтөбе" },
  { ru: "Apple Tower, Алматы", en: "Apple Tower, Almaty", kz: "Apple Tower, Алматы" },
  { ru: "ТРЦ Март, Тараз", en: "Mart Mall, Taraz", kz: "Март СОО, Тараз" },
  { ru: "Ibis Актобе", en: "Ibis Aktobe", kz: "Ibis Ақтөбе" },
  { ru: "Гостиница «Алма-Ата», Алматы", en: "Alma-Ata Hotel, Almaty", kz: "«Алма-Ата» қонақ үйі, Алматы" },
  { ru: "Гостиница «Алма», Алматы", en: "Alma Hotel, Almaty", kz: "«Алма» қонақ үйі, Алматы" },
  { ru: "Жилые комплексы по всему Казахстану", en: "Residential complexes across Kazakhstan", kz: "Қазақстан бойынша тұрғын үй кешендері" },
];

const intlProjects = [
  {
    name: { ru: "Башня Демидов, Екатеринбург", en: "Demidov Tower, Yekaterinburg", kz: "Демидов мұнарасы, Екатеринбург" },
    spec: { ru: "10 скоростных лифтов 4 м/с", en: "10 high-speed lifts, 4 m/s", kz: "10 жоғары жылдамдықты лифт, 4 м/с" },
  },
  {
    name: { ru: "Завод СИБУР, Тобольск", en: "SIBUR Plant, Tobolsk", kz: "СИБУР зауыты, Тобольск" },
    spec: { ru: "5-тонные промышленные лифты, экстремальная среда", en: "5-tonne industrial lifts, extreme environment", kz: "5 тонналық өнеркәсіптік лифтілер, экстремалды орта" },
  },
  {
    name: { ru: "Ямал СПГ, полуостров Сабета", en: "Yamal LNG, Sabetta Peninsula", kz: "Ямал СПГ, Сабетта түбегі" },
    spec: { ru: "Арктический проект, доступный только ледоколом", en: "Arctic project, accessible only by icebreaker", kz: "Арктикалық жоба, тек мұзжарғышпен қол жетімді" },
  },
  {
    name: { ru: "ТРЦ «Пассаж» и «Радуга», Екатеринбург", en: "Passage & Raduga Mall, Yekaterinburg", kz: "Passage және Raduga СОО, Екатеринбург" },
    spec: { ru: "Лифтовые системы для крупных ТРЦ", en: "Elevator systems for large shopping centres", kz: "Ірі сауда орталықтарына арналған лифт жүйелері" },
  },
];

const koyoProjects = [
  {
    name: { ru: "SEVEN HILLS", en: "SEVEN HILLS", kz: "SEVEN HILLS" },
    addr: { ru: "Алматы, пр. Гагарина, 277/7", en: "Almaty, Gagarin Ave, 277/7", kz: "Алматы, Гагарин д-лы, 277/7" },
    spec: { ru: "16 лифт · 16–18 қаб. · 1000 кг · 1.5 м/с · 2019", en: "16 lifts · 16–18 fl. · 1000 kg · 1.5 m/s · 2019", kz: "16 лифт · 16–18 қаб. · 1000 кг · 1.5 м/с · 2019" },
  },
  {
    name: { ru: "Алматинский Технологический Университет", en: "Almaty Technological University", kz: "Алматы Технологиялық Университеті" },
    addr: { ru: "Алматы, ул. Алматы, 100", en: "Almaty, Almaty St, 100", kz: "Алматы, Алматы көш., 100" },
    spec: { ru: "4 лифт · 1000 кг · 1.5 м/с · 2016", en: "4 lifts · 1000 kg · 1.5 m/s · 2016", kz: "4 лифт · 1000 кг · 1.5 м/с · 2016" },
  },
  {
    name: { ru: "ЖК Arbat", en: "Arbat Residential Complex", kz: "Arbat тұрғын үй кешені" },
    addr: { ru: "Алматы, пр. Жибек Жолы, 110", en: "Almaty, Zhibek Zholy Ave, 110", kz: "Алматы, Жібек Жолы д-лы, 110" },
    spec: { ru: "16 лифт · 1000 кг · 1.5 м/с · 2018", en: "16 lifts · 1000 kg · 1.5 m/s · 2018", kz: "16 лифт · 1000 кг · 1.5 м/с · 2018" },
  },
  {
    name: { ru: "ТРЦ MEGA Alma-Ata", en: "MEGA Alma-Ata Mall", kz: "MEGA Alma-Ata СОО" },
    addr: { ru: "Алматы, ул. Розыбакиева, 247а", en: "Almaty, Rozybakiev St, 247a", kz: "Алматы, Розыбақиев көш., 247а" },
    spec: { ru: "2 эскалатор · 30° · 1000 мм · 2021", en: "2 escalators · 30° · 1000 mm · 2021", kz: "2 эскалатор · 30° · 1000 мм · 2021" },
  },
  {
    name: { ru: "ЖК «Золото Москвы»", en: "Zoloto Moskvy Residential Complex", kz: "«Мәскеу алтыны» тұрғын үй кешені" },
    addr: { ru: "Астана, Festival Avenue, Достык 4", en: "Astana, Festival Avenue, Dostyk 4", kz: "Астана, Festival Avenue, Достық 4" },
    spec: { ru: "1 лифт · 1000 кг · 1.0 м/с", en: "1 lift · 1000 kg · 1.0 m/s", kz: "1 лифт · 1000 кг · 1.0 м/с" },
  },
  {
    name: { ru: "ЖК БАЙТАС", en: "BAYTAS Residential Complex", kz: "БАЙТАС тұрғын үй кешені" },
    addr: { ru: "г. Кокшетау", en: "Kokshetau", kz: "Көкшетау қ." },
    spec: { ru: "3 лифт · 1000 кг · 1.0 м/с · 2020", en: "3 lifts · 1000 kg · 1.0 m/s · 2020", kz: "3 лифт · 1000 кг · 1.0 м/с · 2020" },
  },
  {
    name: { ru: "ЖК АК ЖАЙЫК", en: "AK ZHAIYК Residential Complex", kz: "АК ЖАЙЫҚ тұрғын үй кешені" },
    addr: { ru: "Актау, 17-й мкр., 18/3", en: "Aktau, 17th district, 18/3", kz: "Ақтау, 17-ші ш/а, 18/3" },
    spec: { ru: "4 лифт · 11–12 қаб. · 1000 кг · 1.0 м/с · 2019", en: "4 lifts · 11–12 fl. · 1000 kg · 1.0 m/s · 2019", kz: "4 лифт · 11–12 қаб. · 1000 кг · 1.0 м/с · 2019" },
  },
  {
    name: { ru: "ЖК Twin Towers", en: "Twin Towers Residential Complex", kz: "Twin Towers тұрғын үй кешені" },
    addr: { ru: "Актау, мкр. 5А, уч.4", en: "Aktau, district 5A, plot 4", kz: "Ақтау, 5А ш/а, уч.4" },
    spec: { ru: "4 лифт · 11–12 қаб. · 1000 кг · 1.0 м/с · 2019", en: "4 lifts · 11–12 fl. · 1000 kg · 1.0 m/s · 2019", kz: "4 лифт · 11–12 қаб. · 1000 кг · 1.0 м/с · 2019" },
  },
];

export function Projects() {
  const { t, lang } = useLang();

  const projects = [
    { name: { ru: "ЭКСПО 2017, Астана (Сфера)", en: "EXPO 2017, Astana (Sphere)", kz: "EXPO 2017, Астана (Сфера)" }, descKey: 'pr1d' as const, image: "https://images.adsttc.com/media/images/59d7/fd94/b22e/3805/3400/00c8/large_jpg/open-uri20171006-19266-1xil78x.jpg?1507327373", size: "large" },
    { name: { ru: "Аэропорт Алматы", en: "Almaty Airport", kz: "Алматы әуежайы" }, descKey: 'pr2d' as const, image: almatyAirportImg, size: "small" },
    { name: { ru: "Esentai Mall, Алматы", en: "Esentai Mall, Almaty", kz: "Esentai Mall, Алматы" }, descKey: 'pr3d' as const, image: "https://www.studiofractal.co.uk/uploads/Esentai_Mall_Photography_6.jpg?v=1629468712", size: "small" },
    { name: { ru: "Хан Шатыр, Астана", en: "Khan Shatyr, Astana", kz: "Хан Шатыр, Астана" }, descKey: 'pr4d' as const, image: "https://content.fosterandpartners.com/api/media/getCroppedImage?imagePath=/media/hy3ccvnr/hero_1438_fp405466.jpg&width=1200&height=630&crop=true", size: "medium" },
    { name: { ru: "Hilton Astana", en: "Hilton Astana", kz: "Hilton Astana" }, descKey: 'pr5d' as const, image: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://media.iceportal.com/93129/photos/74155907_XL/Hilton-Astana-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto", size: "medium" },
  ];

  return (
    <section id="projects" className="py-24 bg-card/50 border-y border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">{t('projects', 'title')}</h3>
          <p className="text-white/60 font-light text-lg">{t('projects', 'sub')}</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden ${
                project.size === 'large' ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-full' :
                project.size === 'medium' ? 'h-[400px]' : 'h-[300px]'
              }`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
              <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h4 className="text-2xl font-serif text-white mb-2">{project.name[lang]}</h4>
                <p className="text-primary text-sm font-medium tracking-wide">{t('projects', project.descKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8 mb-12">
          <h4 className="text-xl font-serif text-white mb-6 text-primary">{t('projects', 'otherTitle')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {additionalProjects.map((proj, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                <span>{proj[lang]}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* International Experience */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white fill-current">
              <path d="M100,0 C44.8,0 0,44.8 0,100 C0,155.2 44.8,200 100,200 C155.2,200 200,155.2 200,100 C200,44.8 155.2,0 100,0 Z M100,180 C55.9,180 20,144.1 20,100 C20,55.9 55.9,20 100,20 C144.1,20 180,55.9 180,100 C180,144.1 144.1,180 100,180 Z" />
              <path d="M100,20 C120,20 140,55.8 140,100 C140,144.2 120,180 100,180 C80,180 60,144.2 60,100 C60,55.8 80,20 100,20 Z" />
              <path d="M20,100 L180,100" /><path d="M35,60 L165,60" /><path d="M35,140 L165,140" />
            </svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif text-white mb-2">{t('projects', 'intlTitle')}</h3>
            <p className="text-white/50 text-sm mb-8">{t('projects', 'intlSub')}</p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {intlProjects.map((p, i) => (
                <div key={i} className="flex flex-col border-l-2 border-primary/30 pl-4 py-1 hover:border-primary transition-colors">
                  <span className="text-white font-medium text-lg">{p.name[lang]}</span>
                  <span className="text-white/50 text-sm">{p.spec[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* KOYO Projects */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8 glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">KOYO Elevator</span>
              <span className="text-white/40 text-sm">{t('projects', 'koyoSub')}</span>
            </div>
            <h3 className="text-3xl font-serif text-white mb-8">{t('projects', 'koyoTitle')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {koyoProjects.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-primary/40 transition-colors">
                  <h5 className="text-white font-serif text-lg mb-1">{p.name[lang]}</h5>
                  <p className="text-white/50 text-xs mb-3">{p.addr[lang]}</p>
                  <p className="text-primary text-xs font-medium">{p.spec[lang]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
