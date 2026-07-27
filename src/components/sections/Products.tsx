import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

export function Products() {
  const { t } = useLang();

  const products = [
    { titleKey: 'p1title' as const, descKey: 'p1desc' as const, image: "https://www.schmitt-elevators.com/fileadmin/user_upload/bilder/open_graph/Panorama-Aufzug-GP.jpg" },
    { titleKey: 'p2title' as const, descKey: 'p2desc' as const, image: "https://images.adsttc.com/media/images/59d7/fd94/b22e/3805/3400/00c8/large_jpg/open-uri20171006-19266-1xil78x.jpg?1507327373" },
    { titleKey: 'p3title' as const, descKey: 'p3desc' as const, image: "https://images.pexels.com/photos/18137069/pexels-photo-18137069.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200" },
    { titleKey: 'p4title' as const, descKey: 'p4desc' as const, image: "https://media.gettyimages.com/id/2191352933/photo/minimalist-elevator-interior.jpg?s=170667a&w=0&k=20&c=UL66idHSjFBwyfB__NdqCj5n4l6M-40EoISjQr_PU5w=" },
    { titleKey: 'p5title' as const, descKey: 'p5desc' as const, image: "https://as2.ftcdn.net/jpg/10/50/30/59/1000_F_1050305916_L3Ca6EOghs7B9ofqxHZhwTHdIRiMMGcz.jpg" },
    { titleKey: 'p6title' as const, descKey: 'p6desc' as const, image: "https://us.images.westend61.de/0001259538pw/diminishing-perspective-of-empty-moving-walkway-at-airport-AMF07302.jpg" },
  ];

  return (
    <section id="products" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-primary text-sm tracking-widest uppercase font-semibold mb-4">{t('products', 'label')}</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">{t('products', 'title')}</h3>
          </motion.div>
          <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-white/60 max-w-md font-light">
            {t('products', 'sub')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1622] via-[#0B1622]/80 to-transparent z-10 opacity-80" />
              <img src={product.image} alt={t('products', product.titleKey)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <h4 className="text-2xl font-serif text-white mb-2">{t('products', product.titleKey)}</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {t('products', product.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
