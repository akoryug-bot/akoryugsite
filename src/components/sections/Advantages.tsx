import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cog, Truck, Handshake, BadgeCheck, Users, Wrench, FileSearch } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

export function Advantages() {
  const { t } = useLang();

  const advantages = [
    { icon: Users,      titleKey: 'a1t' as const, descKey: 'a1d' as const },
    { icon: BadgeCheck, titleKey: 'a2t' as const, descKey: 'a2d' as const },
    { icon: Cog,        titleKey: 'a3t' as const, descKey: 'a3d' as const },
    { icon: Shield,     titleKey: 'a4t' as const, descKey: 'a4d' as const },
    { icon: FileSearch, titleKey: 'a5t' as const, descKey: 'a5d' as const },
    { icon: Truck,      titleKey: 'a6t' as const, descKey: 'a6d' as const },
    { icon: Wrench,     titleKey: 'a7t' as const, descKey: 'a7d' as const },
    { icon: Handshake,  titleKey: 'a8t' as const, descKey: 'a8d' as const },
  ];

  return (
    <section className="py-24 bg-card/40">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="text-primary text-sm tracking-widest uppercase font-semibold mb-4">{t('advantages', 'label')}</h2>
            <h3 className="text-4xl font-serif text-white mb-6">{t('advantages', 'title')}</h3>
            <p className="text-white/60 font-light mb-8">{t('advantages', 'sub')}</p>
            <div className="w-24 h-1 bg-primary/50" />
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass p-6 rounded-xl border-t border-t-white/10 hover:border-t-primary transition-colors group"
                >
                  <Icon className="w-8 h-8 text-primary mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <h4 className="text-white font-medium mb-2">{t('advantages', adv.titleKey)}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{t('advantages', adv.descKey)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
