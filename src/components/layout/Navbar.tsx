import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import logoSrc from '@assets/логотип_1784805497394.jpg';
import tkeLogoSrc from '@assets/tke_dis_logo_portrait_rgb_gradient_1784884264240.jpg';
import koyoLogoSrc from '@assets/Рисунок1_коуо_лого_1785152814806.png';
import { useLang } from '@/contexts/LanguageContext';
import type { Lang } from '@/i18n/translations';

const LANGS: { code: Lang; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'kz', label: 'KZ' },
];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: t('nav', 'about'),    href: '#about' },
    { name: t('nav', 'products'), href: '#products' },
    { name: t('nav', 'projects'), href: '#projects' },
    { name: t('nav', 'partners'), href: '#partners' },
    { name: t('nav', 'process'),  href: '#process' },
    { name: t('nav', 'contact'),  href: '#contact' },
  ];

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
          <img src={tkeLogoSrc} alt="TK Elevator Authorized Distributor" className="h-12 w-auto rounded object-contain bg-white p-1" />
          <div className="h-8 w-px bg-white/20" />
          <img src={koyoLogoSrc} alt="KOYO Elevator" className="h-7 w-auto rounded object-contain bg-[#1a1a1a] px-2 py-1" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
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
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>{lang.toUpperCase()}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute top-8 left-0 glass-panel border border-white/10 rounded-lg overflow-hidden shadow-xl z-50 min-w-[70px]"
                  >
                    {LANGS.map(({ code, label }) => (
                      <button
                        key={code}
                        onClick={() => { setLang(code); setLangOpen(false); }}
                        className={`w-full px-4 py-2 text-sm text-left hover:bg-white/10 transition-colors ${lang === code ? 'text-primary font-semibold' : 'text-white/70'}`}
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              variant="outline"
              onClick={() => scrollTo('#contact')}
              className="hidden xl:inline-flex border-primary text-primary hover:bg-primary hover:text-black"
            >
              {t('nav', 'cta')}
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
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-lg font-medium text-white/90 hover:text-primary py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            {/* Mobile lang switcher */}
            <div className="flex gap-3 pt-2">
              {LANGS.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`px-3 py-1 rounded text-sm border transition-colors ${lang === code ? 'border-primary text-primary' : 'border-white/20 text-white/60 hover:border-white/40'}`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Button
              className="mt-2 w-full bg-primary text-black hover:bg-primary/90"
              onClick={() => scrollTo('#contact')}
            >
              {t('nav', 'cta')}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
