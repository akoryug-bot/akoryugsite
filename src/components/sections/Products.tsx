import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    title: "Пассажирские лифты",
    description: "Высокоскоростные, бесшумные решения для жилых и коммерческих зданий. Скорость до 8 м/с. Группы диспетчеризации до 8 кабин.",
    image: "https://www.schmitt-elevators.com/fileadmin/user_upload/bilder/open_graph/Panorama-Aufzug-GP.jpg",
  },
  {
    title: "Панорамные лифты",
    description: "Архитектурные доминанты со стеклянными кабинами. Самые большие в мире стеклянные кабины высотой 6 м — ЭКСПО 2017, Астана.",
    image: "https://images.adsttc.com/media/images/59d7/fd94/b22e/3805/3400/00c8/large_jpg/open-uri20171006-19266-1xil78x.jpg?1507327373",
  },
  {
    title: "Эскалаторы",
    description: "Коммерческие эскалаторы для торговых центров и аэропортов. Высота до 25 м, угол наклона 30°. Установлены в MEGA, Esentai, аэропорту Алматы.",
    image: "https://images.pexels.com/photos/18137069/pexels-photo-18137069.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
  },
  {
    title: "Больничные лифты",
    description: "Лифты с точным нивелированием, просторными кабинами для медицинских кроватей и чувствительного оборудования. Соответствуют нормам EN81-70.",
    image: "https://media.gettyimages.com/id/2191352933/photo/minimalist-elevator-interior.jpg?s=170667a&w=0&k=20&c=UL66idHSjFBwyfB__NdqCj5n4l6M-40EoISjQr_PU5w=",
  },
  {
    title: "Грузовые лифты",
    description: "Промышленные подъёмники повышенной грузоподъёмности с защитой для экстремальных условий. Грузоподъёмность до 5 тонн и более.",
    image: "https://as2.ftcdn.net/jpg/10/50/30/59/1000_F_1050305916_L3Ca6EOghs7B9ofqxHZhwTHdIRiMMGcz.jpg",
  },
  {
    title: "Траволаторы",
    description: "Горизонтальные и наклонные пассажирские конвейеры длиной до 200 м для аэропортов и выставочных центров международного уровня.",
    image: "https://us.images.westend61.de/0001259538pw/diminishing-perspective-of-empty-moving-walkway-at-airport-AMF07302.jpg",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-sm tracking-widest uppercase font-semibold mb-4">Оборудование и решения</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Наша продукция</h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-md font-light"
          >
            Комплексные системы вертикального транспорта, отвечающие высочайшим международным стандартам безопасности и производительности.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1622] via-[#0B1622]/80 to-transparent z-10 opacity-80" />

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <h4 className="text-2xl font-serif text-white mb-2">{product.title}</h4>
                <p className="text-white/60 text-sm font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
