import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import logoSrc from '@assets/логотип_1784805497394.jpg';
import tkeLogoSrc from '@assets/tke_dis_logo_portrait_rgb_gradient_1784884264240.jpg';
import koyoLogoSrc from '@assets/Рисунок1_коуо_лого_1785152814806.png';

const navLinks = [
  { name: 'О компании', href: '#about' },
  { name: 'Продукция', href: '#products' },
  { name: 'Проекты', href: '#projects' },
  { name: 'Партнёры', href: '#partners' },
  { name: 'Процесс', href: '#process' },
  { name: 'Контакты', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3"
        >
          <img src={logoSrc} alt="АКОР ЮГ" className="h-12 w-auto rounded object-contain bg-white/10" />
          <div className="h-8 w-px bg-white/20" />
          <img src={tkeLogoSrc} alt="TK Elevator (thyssenkrupp Elevator) Authorized Distributor" className="h-12 w-auto rounded object-contain bg-white p-1" />
          <div className="h-8 w-px bg-white/20" />
          <img src={koyoLogoSrc} alt="KOYO Elevator" className="h-7 w-auto rounded object-contain bg-[#1a1a1a] px-2 py-1" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-sm font-medium text-white/80 hover:text-primary transition-colors tracking-wide"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 border-l border-white/20 pl-8">
            <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
              <span>RU</span>
            </button>
            <Button
              variant="outline"
              onClick={() => scrollTo('#contact')}
              className="hidden xl:inline-flex border-primary text-primary hover:bg-primary hover:text-black"
            >
              Запросить предложение
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-lg font-medium text-white/90 hover:text-primary py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="mt-4 w-full bg-primary text-black hover:bg-primary/90"
              onClick={() => scrollTo('#contact')}
            >
              Запросить предложение
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
