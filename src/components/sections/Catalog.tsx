import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

const products = [
  {
    model: "ENTA Villa",
    category: "Лифт для частных резиденций",
    description: "Элегантный домашний лифт для вилл и частных домов. Компактная шахта, тихий привод, индивидуальная отделка кабины. Создан для интеграции в существующие строения.",
    specs: ["Грузоподъёмность: 250–400 кг", "Скорость: 0.15–0.63 м/с", "Высота подъёма: до 15 м", "До 6 остановок"],
    file: "TKE_ENTA_Villa.pdf",
    tag: "Жилой",
  },
  {
    model: "ENTA 300",
    category: "Пассажирский лифт",
    description: "Надёжный лифт для жилых и коммерческих зданий средней этажности. Машинное отделение не требуется — MRL. Компактная конструкция, быстрый монтаж.",
    specs: ["Грузоподъёмность: 320–1600 кг", "Скорость: до 1.75 м/с", "До 30 остановок", "MRL — без машинного зала"],
    file: "TKE_ENTA_300.pdf",
    tag: "Коммерческий",
  },
  {
    model: "META 100",
    category: "Пассажирский лифт",
    description: "Стандартный пассажирский лифт для жилых домов, офисных и административных зданий. Оптимальное соотношение цены и качества, надёжный гидравлический или канатный привод.",
    specs: ["Грузоподъёмность: 320–2500 кг", "Скорость: до 2.5 м/с", "До 30 остановок", "Опция: энергосберегающий привод"],
    file: "TKE_META_100.pdf",
    tag: "Жилой / Офис",
  },
  {
    model: "META 200",
    category: "Пассажирский лифт премиум",
    description: "Высокоэффективный лифт для крупных коммерческих объектов, гостиниц и торговых центров. Широкий диапазон кабин, возможность группировки до 8 единиц.",
    specs: ["Грузоподъёмность: 480–3000 кг", "Скорость: до 4.0 м/с", "Группы до 8 лифтов", "Система диспетчеризации AGILE™"],
    file: "TKE_META_200.pdf",
    tag: "Гостиницы / ТЦ",
  },
  {
    model: "TUGELA",
    category: "Грузовой / сервисный лифт",
    description: "Мощный грузовой лифт для промышленных объектов, складов и производственных предприятий. Высокая грузоподъёмность, усиленная конструкция кабины и порогов.",
    specs: ["Грузоподъёмность: до 5000 кг", "Скорость: 0.25–1.0 м/с", "Размер кабины: по требованию", "Защита IP65 по запросу"],
    file: "TKE_TUGELA.pdf",
    tag: "Промышленный",
  },
  {
    model: "VELINO",
    category: "Эскалатор",
    description: "Высоконадёжный эскалатор для торговых центров, транспортных узлов и аэропортов. Низкий уровень шума, энергосбережение при низком трафике, антивандальное исполнение.",
    specs: ["Угол наклона: 30° или 35°", "Ширина: 600, 800, 1000 мм", "Высота: до 25 м", "Скорость: 0.5 м/с"],
    file: "TKE_VELINO_Escalator.pdf",
    tag: "Эскалатор",
  },
];

const tagColors: Record<string, string> = {
  "Жилой": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Коммерческий": "bg-amber-500/20 text-amber-300 border-amber-500/30",
  "Жилой / Офис": "bg-blue-500/20 text-blue-300 border-blue-500/30",
  "Гостиницы / ТЦ": "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "Промышленный": "bg-red-500/20 text-red-300 border-red-500/30",
  "Эскалатор": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

export function Catalog() {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="catalog" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">TK Elevator</span>
              <span className="text-white/40 text-sm">Официальный авторизованный дистрибьютор</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Каталог оборудования</h2>
          </div>
          <p className="text-white/50 font-light max-w-sm text-right">
            Скачайте технические брошюры по каждому продукту TK Elevator
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((p, i) => (
            <motion.div
              key={p.model}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-7 flex flex-col gap-5 border border-white/10 hover:border-primary/40 transition-colors group"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border mb-3 ${tagColors[p.tag]}`}>
                    {p.tag}
                  </span>
                  <h4 className="text-2xl font-serif text-white group-hover:text-primary transition-colors">{p.model}</h4>
                  <p className="text-white/50 text-sm mt-1">{p.category}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                  <FileText className="w-5 h-5 text-primary/70" />
                </div>
              </div>

              {/* Description */}
              <p className="text-white/65 text-sm leading-relaxed font-light flex-1">
                {p.description}
              </p>

              {/* Specs */}
              <ul className="space-y-1.5">
                {p.specs.map((s, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-white/55">
                    <div className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>

              {/* Download */}
              <a
                href={`${base}catalogs/${p.file}`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 h-11 rounded-xl border border-primary/40 text-primary text-sm font-medium hover:bg-primary hover:text-black transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Скачать брошюру PDF
              </a>
            </motion.div>
          ))}
        </div>
        {/* KOYO Catalog Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">KOYO Elevator</span>
            <span className="text-white/40 text-sm">Эксклюзивный представитель в Казахстане</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                model: "Каталог лифтов KOYO 2025",
                category: "Полный модельный ряд лифтового оборудования",
                description: "Актуальный каталог 2025 года: пассажирские, панорамные, больничные и грузовые лифты KOYO. Технические характеристики, варианты отделки, схемы шахт.",
                specs: ["Скорость: до 8 м/с", "Грузоподъёмность: до 5000 кг", "Сертификаты TUV, EAC, ISO", "Производство: Куньшань, Китай"],
                file: "KOYO_Lifts_2025.pdf",
                tag: "Лифты",
              },
              {
                model: "Лифты KOYO — KOE серия",
                category: "Специализированная серия лифтов",
                description: "Серия KOE — высокоэффективные лифты с частотным приводом и энергосберегающими технологиями. Подходит для жилых комплексов, офисных и торговых зданий.",
                specs: ["Частотный привод VVVF", "Точность остановки ±1 мм", "Энергосбережение класса A", "Тихий ход — менее 55 дБ"],
                file: "KOYO_Lifts_KOE.pdf",
                tag: "Лифты",
              },
            ].map((p, i) => (
              <motion.div
                key={p.model}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-7 flex flex-col gap-5 border border-white/10 hover:border-blue-400/40 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider border mb-3 bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {p.tag}
                    </span>
                    <h4 className="text-2xl font-serif text-white group-hover:text-blue-300 transition-colors">{p.model}</h4>
                    <p className="text-white/50 text-sm mt-1">{p.category}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                    <FileText className="w-5 h-5 text-blue-400/70" />
                  </div>
                </div>

                <p className="text-white/65 text-sm leading-relaxed font-light flex-1">{p.description}</p>

                <ul className="space-y-1.5">
                  {p.specs.map((s, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-white/55">
                      <div className="w-1 h-1 rounded-full bg-blue-400/60 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>

                <a
                  href={`${base}catalogs/${p.file}`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 h-11 rounded-xl border border-blue-400/40 text-blue-300 text-sm font-medium hover:bg-blue-500 hover:text-white transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  Скачать каталог PDF
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
