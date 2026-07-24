import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Консультация", desc: "Первичное обсуждение: трафик здания, архитектурное решение, технические ограничения." },
  { number: "02", title: "Анализ проекта", desc: "Детальная оценка конструкции и расчёт пропускной способности нашими инженерами." },
  { number: "03", title: "Инженерное решение", desc: "Подбор оборудования TKE или KOYO, оптимизированного под ваш объект." },
  { number: "04", title: "Коммерческое предложение", desc: "Прозрачное ценообразование и планирование сроков под масштаб вашего проекта." },
  { number: "05", title: "Поставка оборудования", desc: "Прямая логистика с международных заводов-производителей до объекта в Казахстане." },
  { number: "06", title: "Техническое сопровождение", desc: "Долгосрочное партнёрство: обслуживание, диагностика, бесперебойная работа." },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-primary text-sm tracking-widest uppercase font-semibold mb-4">Как мы работаем</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">Наша методология</h3>
          <p className="text-white/50 font-light">От первой встречи до бесперебойной эксплуатации — шесть чётких шагов.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center md:items-start group"
              >
                {/* Dot */}
                <div className="w-12 h-12 rounded-full bg-[#0B1622] border-2 border-white/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all z-10 mx-auto md:mx-0">
                  <span className="text-primary font-serif">{step.number}</span>
                </div>

                <h4 className="text-xl font-serif text-white mb-3 text-center md:text-left w-full">{step.title}</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed text-center md:text-left">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
