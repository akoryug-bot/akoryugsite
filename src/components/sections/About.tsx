import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import escalatorImg from '@assets/O9VV2R0-1-scaled_1784884934718.jpg';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-primary text-sm tracking-widest uppercase font-semibold">О компании</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Масштаб Казахстана,<br />
                <span className="italic text-white/80">немецкая точность.</span>
              </h3>
            </div>

            <p className="text-white/70 text-lg leading-relaxed font-light">
              ТОО «АКОР ЮГ» — надёжный инжиниринговый партнёр в составе группы компаний «Акор».
              Обладая многолетним опытом работы на рынке России, мы успешно переориентировали наши
              бизнес-процессы на Казахстан, привнося передовые технологии и стандарты качества.
            </p>

            <ul className="space-y-4 text-white/80">
              {[
                "15+ лет успешного партнёрства с TK Elevator",
                "Эксклюзивный представитель KOYO в Республике Казахстан",
                "Полный цикл: от анализа проекта до технического обслуживания",
                "Поставки по всему Казахстану",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 grid grid-cols-2 gap-6 border-t border-white/10">
              <div>
                <p className="text-2xl font-serif text-primary mb-1">БИН</p>
                <p className="text-white/60 text-sm">150840003875</p>
              </div>
              <div>
                <p className="text-2xl font-serif text-primary mb-1">Казахстан</p>
                <p className="text-white/60 text-sm">Костанай, ул. Карбышева 12/7</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1622] via-transparent to-transparent z-10" />
            <img
              src={escalatorImg}
              alt="Эскалаторы в бизнес-центре — АКОР ЮГ"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />

            <div className="absolute bottom-8 left-8 right-8 z-20 glass p-6 rounded-xl border-l-2 border-l-primary">
              <p className="text-lg font-serif text-white mb-2">«Качество — это когда всё сделано правильно, даже когда никто не смотрит.»</p>
              <p className="text-sm text-primary uppercase tracking-wider">Философия АКОР ЮГ</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
