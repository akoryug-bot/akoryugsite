import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Settings, TrendingUp, ShieldCheck } from 'lucide-react';

const partners = [
  {
    name: "TK Elevator (thyssenkrupp Elevator)",
    role: "Официальный дистрибьютор (15+ лет)",
    description: "Один из четырёх крупнейших мировых поставщиков лифтового оборудования со штаб-квартирой в Штутгарте, Германия. Создатели уникальных систем Twin и Multi, не имеющих аналогов у конкурентов.",
    stats: [
      "16 производственных предприятий",
      "Присутствие в 100+ странах",
      "~1000 сервисных точек",
      "Испытательные башни выше 100 м",
    ],
    features: [
      { icon: <Globe className="w-4 h-4" />, text: "ТОП-4 в мире" },
      { icon: <Settings className="w-4 h-4" />, text: "Немецкие технологии" },
    ],
    image: "https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://media.iceportal.com/93129/photos/74155907_XL/Hilton-Astana-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto",
    imageAlt: "Hilton Astana — объект с оборудованием TKE",
  },
  {
    name: "KOYO Elevator",
    role: "Партнёр в Казахстане",
    description: "Основана в 2002 году в Куньшане, Китай. Первая китайская лифтовая компания, выигравшая проект метро в Германии. Использует немецкие технологии, инвестиции $130 млн, сертификации TUV и EAC.",
    stats: [
      "Макс. скорость: 8 м/с",
      "Эскалаторы до 25 м высотой",
      "Траволаторы до 200 м длиной",
      "Сертификаты ISO, TUV, EAC",
    ],
    features: [
      { icon: <TrendingUp className="w-4 h-4" />, text: "Завод 230 000 м²" },
      { icon: <ShieldCheck className="w-4 h-4" />, text: "Надёжность класса Premium" },
    ],
    image: "https://www.schmitt-elevators.com/fileadmin/user_upload/bilder/open_graph/Panorama-Aufzug-GP.jpg",
    imageAlt: "Панорамный лифт KOYO",
  },
];

export function Partners() {
  return (
    <section id="partners" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-primary text-sm tracking-widest uppercase font-semibold mb-4">Стратегические партнёры</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Мировые лидеры</h3>
          <p className="text-white/60 font-light text-lg">Мы привносим лучшие мировые технологии вертикального транспорта непосредственно на казахстанский рынок.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition-colors group"
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1622]/90 z-10" />
                <img
                  src={partner.image}
                  alt={partner.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-6 z-20">
                  <h4 className="text-3xl font-serif text-white group-hover:text-primary transition-colors">{partner.name}</h4>
                  <span className="inline-block mt-1 px-3 py-1 rounded bg-white/10 border border-white/10 text-primary text-xs font-medium uppercase tracking-wider">
                    {partner.role}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <p className="text-white/70 mb-6 font-light leading-relaxed">
                  {partner.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {partner.stats.map((stat, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 border-t border-white/10">
                  {partner.features.map((feat, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-white/50 uppercase tracking-wide">
                      {feat.icon}
                      <span>{feat.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
