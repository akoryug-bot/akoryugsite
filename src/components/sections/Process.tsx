import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';

export function Process() {
  const { t } = useLang();

  const steps = [
    { number: "01", titleKey: 's1t' as const, descKey: 's1d' as const },
    { number: "02", titleKey: 's2t' as const, descKey: 's2d' as const },
    { number: "03", titleKey: 's3t' as const, descKey: 's3d' as const },
    { number: "04", titleKey: 's4t' as const, descKey: 's4d' as const },
    { number: "05", titleKey: 's5t' as const, descKey: 's5d' as const },
    { number: "06", titleKey: 's6t' as const, descKey: 's6d' as const },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-primary text-sm tracking-widest uppercase font-semibold mb-4">{t('process', 'label')}</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white mb-6">{t('process', 'title')}</h3>
          <p className="text-white/50 font-light">{t('process', 'sub')}</p>
        </div>

        <div className="relative">
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
                <div className="w-12 h-12 rounded-full bg-[#0B1622] border-2 border-white/20 flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all z-10 mx-auto md:mx-0">
                  <span className="text-primary font-serif">{step.number}</span>
                </div>
                <h4 className="text-xl font-serif text-white mb-3 text-center md:text-left w-full">{t('process', step.titleKey)}</h4>
                <p className="text-white/50 text-sm font-light leading-relaxed text-center md:text-left">{t('process', step.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
