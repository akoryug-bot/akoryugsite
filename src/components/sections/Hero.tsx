import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroBg from '@assets/ChatGPT_Image_23_июл._2026_г.,_21_21_38_1784823714036.png';

export function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1622]/70 via-[#0B1622]/50 to-[#0B1622] z-10" />
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: 'easeOut' }}
          src={heroBg}
          alt="Лифты и эскалаторы — лобби современного бизнес-центра"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium tracking-wider text-white/90 uppercase">Официальный дистрибьютор TK Elevator (thyssenkrupp Elevator) в Казахстане</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight leading-tight"
        >
          АКОР ЮГ — <span className="text-primary">поставщик</span>
          <br />лифтового оборудования
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Официальный дистрибьютор TK Elevator (thyssenkrupp Elevator) и партнёр KOYO в Республике Казахстан.
          Поставка лифтов, эскалаторов и траволаторов по всему Казахстану.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-black bg-primary hover:bg-primary/90 h-14 px-8 text-base font-semibold group"
            onClick={() => scrollTo('#projects')}
          >
            Наши проекты
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="glass"
            className="w-full sm:w-auto h-14 px-8 text-base font-medium"
            onClick={() => scrollTo('#contact')}
          >
            Запросить предложение
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 cursor-pointer hover:text-white transition-colors"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-xs tracking-widest uppercase">Прокрутите</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
