import React from 'react';
import { motion } from 'framer-motion';
import almatyAirportImg from '@assets/26-10_1784823724612.webp';

const projects = [
  {
    name: "ЭКСПО 2017, Астана (Сфера)",
    desc: "Самые большие стеклянные кабины лифтов в мире — 6 м в высоту. Монтаж во всех павильонах и Конгресс-центре.",
    image: "https://images.adsttc.com/media/images/59d7/fd94/b22e/3805/3400/00c8/large_jpg/open-uri20171006-19266-1xil78x.jpg?1507327373",
    size: "large",
  },
  {
    name: "Аэропорт Алматы",
    desc: "Полный комплекс оборудования в новом и старом терминалах — лифты и эскалаторы.",
    image: almatyAirportImg,
    size: "small",
  },
  {
    name: "Esentai Mall, Алматы",
    desc: "Премиальная вертикальная транспортировка в элитном торговом центре класса люкс.",
    image: "https://www.studiofractal.co.uk/uploads/Esentai_Mall_Photography_6.jpg?v=1629468712",
    size: "small",
  },
  {
    name: "Хан Шатыр, Астана",
    desc: "Уникальный шатровый развлекательный центр — лифты и эскалаторы TKE.",
    image: "https://content.fosterandpartners.com/api/media/getCroppedImage?imagePath=/media/hy3ccvnr/hero_1438_fp405466.jpg&width=1200&height=630&crop=true",
    size: "medium",
  },
  {
    name: "Hilton Astana",
    desc: "Флагманский отель международного класса — лифтовое оборудование мирового уровня.",
    image: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://media.iceportal.com/93129/photos/74155907_XL/Hilton-Astana-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto",
    size: "medium",
  },
];

const additionalProjects = [
  "MEGA Alma-Ata — все лифты и эскалаторы",
  "MEGA Park, Алматы",
  "St. Regis Astana",
  "Ramada Almaty",
  "Sheraton Актобе",
  "Apple Tower, Алматы",
  "ТРЦ Март, Тараз",
  "Ibis Актобе",
  "Гостиница «Алма-Ата», Алматы",
  "Гостиница «Алма», Алматы",
  "Жилые комплексы по всему Казахстану",
];

const intlProjects = [
  { name: "Башня Демидов, Екатеринбург", spec: "10 скоростных лифтов 4 м/с" },
  { name: "Завод СИБУР, Тобольск", spec: "5-тонные промышленные лифты, экстремальная среда" },
  { name: "Ямал СПГ, полуостров Сабета", spec: "Арктический проект, доступный только ледоколом" },
  { name: "ТРЦ «Пассаж» и «Радуга», Екатеринбург", spec: "Лифтовые системы для крупных ТРЦ" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/50 border-y border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Объекты представляемых брендов в Казахстане</h3>
          <p className="text-white/60 font-light text-lg">Наше оборудование TK Elevator (thyssenkrupp Elevator) и KOYO обслуживает множество людей в самых значимых архитектурных объектах страны.</p>
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
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <h4 className="text-2xl font-serif text-white mb-2">{project.name}</h4>
                <p className="text-primary text-sm font-medium tracking-wide">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <h4 className="text-xl font-serif text-white mb-6 text-primary">Другие реализованные объекты в Казахстане</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {additionalProjects.map((proj, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                <span>{proj}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* International Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white fill-current">
              <path d="M100,0 C44.8,0 0,44.8 0,100 C0,155.2 44.8,200 100,200 C155.2,200 200,155.2 200,100 C200,44.8 155.2,0 100,0 Z M100,180 C55.9,180 20,144.1 20,100 C20,55.9 55.9,20 100,20 C144.1,20 180,55.9 180,100 C180,144.1 144.1,180 100,180 Z" />
              <path d="M100,20 C120,20 140,55.8 140,100 C140,144.2 120,180 100,180 C80,180 60,144.2 60,100 C60,55.8 80,20 100,20 Z" />
              <path d="M20,100 L180,100" /><path d="M35,60 L165,60" /><path d="M35,140 L165,140" />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-serif text-white mb-2">Международный опыт</h3>
            <p className="text-white/50 text-sm mb-8">Знаковые проекты в России, реализованные совместно с TKE за 15+ лет</p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {intlProjects.map((p, i) => (
                <div key={i} className="flex flex-col border-l-2 border-primary/30 pl-4 py-1 hover:border-primary transition-colors">
                  <span className="text-white font-medium text-lg">{p.name}</span>
                  <span className="text-white/50 text-sm">{p.spec}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* KOYO Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">KOYO Elevator</span>
              <span className="text-white/40 text-sm">Эксклюзивный представитель в Казахстане</span>
            </div>
            <h3 className="text-3xl font-serif text-white mb-8">Реализованные проекты KOYO</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "SEVEN HILLS", addr: "Алматы, пр. Гагарина, 277/7", spec: "16 лифтов · 16–18 эт. · 1000 кг · 1.5 м/с · 2019" },
                { name: "Алматинский Технологический Университет", addr: "Алматы, ул. Алматы, 100", spec: "4 лифта · 1000 кг · 1.5 м/с · 2016" },
                { name: "ЖК Arbat", addr: "Алматы, пр. Жибек Жолы, 110", spec: "16 лифтов · 1000 кг · 1.5 м/с · 2018" },
                { name: "ТРЦ MEGA Alma-Ata", addr: "Алматы, ул. Розыбакиева, 247а", spec: "2 эскалатора · 30° · 1000 мм · 2021" },
                { name: "ЖК «Золото Москвы»", addr: "Астана, Festival Avenue, Достык 4", spec: "1 лифт · 1000 кг · 1.0 м/с" },
                { name: "ЖК БАЙТАС", addr: "г. Кокшетау", spec: "3 лифта · 1000 кг · 1.0 м/с · 2020" },
                { name: "ЖК АК ЖАЙЫК", addr: "Актау, 17-й мкр., 18/3", spec: "4 лифта · 11–12 эт. · 1000 кг · 1.0 м/с · 2019" },
                { name: "ЖК Twin Towers", addr: "Актау, мкр. 5А, уч.4", spec: "4 лифта · 11–12 эт. · 1000 кг · 1.0 м/с · 2019" },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-primary/40 transition-colors"
                >
                  <h5 className="text-white font-serif text-lg mb-1">{p.name}</h5>
                  <p className="text-white/50 text-xs mb-3">{p.addr}</p>
                  <p className="text-primary text-xs font-medium">{p.spec}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
