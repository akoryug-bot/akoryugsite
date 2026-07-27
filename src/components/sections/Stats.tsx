import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';

export function Stats() {
  const { t } = useLang();

  const stats = [
    { value: "15+",   label: t('stats', 's1label') },
    { value: "100+",  label: t('stats', 's2label') },
    { value: "ТОП-4", label: t('stats', 's3label') },
    { value: "122",   label: t('stats', 's4label') },
  ];

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
              <span className="text-4xl md:text-5xl font-serif text-white mb-2">{stat.value}</span>
              <span className="text-sm md:text-base text-white/60 font-light">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
