import React from 'react';
import logoSrc from '@assets/логотип_1784805497394.jpg';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { gtagEvent } from '@/lib/gtag';

export function Footer() {
  const { t } = useLang();

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { nameKey: 'about' as const,    href: '#about' },
    { nameKey: 'products' as const, href: '#products' },
    { nameKey: 'projects' as const, href: '#projects' },
    { nameKey: 'partners' as const, href: '#partners' },
    { nameKey: 'process' as const,  href: '#process' },
    { nameKey: 'contact' as const,  href: '#contact' },
  ];

  return (
    <footer className="bg-[#070D15] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <img src={logoSrc} alt="АКОР ЮГ" className="h-16 w-auto rounded bg-white/5 p-1" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{t('footer', 'desc')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">{t('footer', 'nav')}</h4>
            <ul className="space-y-3 text-sm">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
                    className="text-white/60 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {t('nav', item.nameKey)}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">{t('footer', 'contacts')}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>{t('address', 'city')}, {t('address', 'street')}<br />{t('address', 'country')}, 110000</span>
              </li>
              <li className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:87003000515" onClick={() => gtagEvent('click_phone')} className="hover:text-primary transition-colors">8 700 300 0515</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:akor.yug@gmail.com" className="hover:text-primary transition-colors">akor.yug@gmail.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-5 h-5 text-primary shrink-0 text-xs font-bold flex items-center justify-center">БИН</span>
                <span>150840003875</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">{t('footer', 'hours')}</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>{t('footer', 'weekdays')}</p>
              <p className="text-white font-medium">9:00 – 18:00 (UTC+5)</p>
              <p className="mt-4 pt-4 border-t border-white/10">{t('footer', 'weekend')}</p>
              <p>{t('footer', 'wdays')}</p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <a href="https://wa.me/77003000515" target="_blank" rel="noopener noreferrer" onClick={() => gtagEvent('click_whatsapp')} className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:text-[#128C7E] transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} ТОО «АКОР ЮГ». {t('footer', 'rights')}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footer', 'privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer', 'terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
