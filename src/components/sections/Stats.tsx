import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "15+", label: "Лет партнёрства с TKE", prefix: "" },
  { value: "100+", label: "Стран присутствия TKE", prefix: "" },
  { value: "ТОП-4", label: "Мировой поставщик лифтов", prefix: "" },
  { value: "122", label: "Страны поставок KOYO", prefix: "" },
];

export function Stats() {
  return (
    <section className="relative z-30 -mt-16 sm:-mt-20 px-4 md:px-12 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel rounded-xl sm:rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-sm text-primary/80 font-medium mb-1">{stat.prefix}</span>
                <span className="text-4xl md:text-5xl font-serif text-white">{stat.value}</span>
              </div>
              <span className="text-sm md:text-base text-white/60 font-light">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
