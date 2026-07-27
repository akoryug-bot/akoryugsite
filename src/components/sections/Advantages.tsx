import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cog, Truck, Handshake, BadgeCheck, Users, Wrench, FileSearch } from 'lucide-react';

const advantages = [
  { icon: Users, title: "Профессиональная команда", desc: "Опытные инженеры с глубокой специализацией в лифтовом оборудовании." },
  { icon: BadgeCheck, title: "Официальный дистрибьютор", desc: "Официальный дистрибьютор TK Elevator (thyssenkrupp Elevator) и партнёр KOYO." },
  { icon: Cog, title: "Немецкие технологии", desc: "Высочайшая точность и долговечность немецкого машиностроения." },
  { icon: Shield, title: "Надёжные бренды", desc: "TKE и KOYO — глобально проверенные системы в 100+ странах." },
  { icon: FileSearch, title: "Индивидуальные решения", desc: "Инжиниринг под уникальную архитектуру каждого объекта." },
  { icon: Truck, title: "Поставки по Казахстану", desc: "Логистика до любого региона Республики Казахстан." },
  { icon: Wrench, title: "Техническое обслуживание", desc: "Комплексное сопровождение на протяжении всего жизненного цикла." },
  { icon: Handshake, title: "Долгосрочное партнёрство", desc: "Строим отношения на десятилетия. 15+ лет с TKE — тому подтверждение." },
];

export function Advantages() {
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
            <h2 className="text-primary text-sm tracking-widest uppercase font-semibold mb-4">Почему мы</h2>
            <h3 className="text-4xl font-serif text-white mb-6">Стандарт АКОР ЮГ</h3>
            <p className="text-white/60 font-light mb-8">
              Когда на кону — миллиарды тенге и безопасность тысяч людей, компромисса быть не может. Мы гарантируем абсолютную надёжность.
            </p>
            <div className="w-24 h-1 bg-primary/50" />
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass p-6 rounded-xl border-t border-t-white/10 hover:border-t-primary transition-colors group"
                >
                  <Icon className="w-8 h-8 text-primary mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <h4 className="text-white font-medium mb-2">{adv.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{adv.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
