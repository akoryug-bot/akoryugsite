import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Clock, CheckCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

export function Contact() {
  const { t } = useLang();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `Новая заявка от ${data.name} — ${data.company}`,
          from_name: 'АКОР ЮГ — сайт',
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setSuccess(true);
        form.reset();
        setTimeout(() => setSuccess(false), 6000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-primary text-sm tracking-widest uppercase font-semibold mb-4">{t('contact', 'label')}</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-8">{t('contact', 'title')}</h3>
            <p className="text-white/60 font-light mb-12 max-w-md">{t('contact', 'sub')}</p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">{t('contact', 'address')}</h4>
                  <p className="text-white/60 font-light">{t('address', 'street')}<br />{t('address', 'city')} 110000, {t('address', 'country')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">{t('contact', 'phone')}</h4>
                  <a href="tel:87003000515" className="text-white/60 font-light hover:text-primary transition-colors">8 700 300 0515</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">Email</h4>
                  <a href="mailto:akor.yug@gmail.com" className="text-white/60 font-light hover:text-primary transition-colors">akor.yug@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-serif text-lg mb-1">{t('contact', 'hours')}</h4>
                  <p className="text-white/60 font-light">{t('contact', 'weekdays')}: 9:00 – 18:00 (UTC+5)</p>
                  <p className="text-white/40 text-sm mt-1">{t('contact', 'weekend')}: {t('contact', 'wdays')}</p>
                </div>
              </div>
            </div>

            <Button
              className="bg-[#25D366] text-white hover:bg-[#128C7E] h-12 px-8 flex items-center gap-2"
              onClick={() => window.open('https://wa.me/77003000515', '_blank')}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass rounded-2xl p-8 lg:p-10 border border-white/10 relative">
            <h4 className="text-2xl font-serif text-white mb-6">{t('contact', 'title')}</h4>

            {success ? (
              <div className="absolute inset-0 z-10 glass rounded-2xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h5 className="text-2xl font-serif text-white mb-2">{t('contact', 'title')}</h5>
                <p className="text-white/60">{t('contact', 'success')}</p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-white/60 uppercase tracking-wider">{t('contact', 'fname')}</label>
                  <input name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/60 uppercase tracking-wider">{t('contact', 'fcompany')}</label>
                  <input name="company" required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-white/60 uppercase tracking-wider">{t('contact', 'fphone')}</label>
                  <input name="phone" required type="tel" placeholder="+7 (___) ___-__-__" className="w-full bg-white/5 border border-white/10 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/60 uppercase tracking-wider">Email</label>
                  <input name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs text-white/60 uppercase tracking-wider">{t('contact', 'fmsg')}</label>
                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
              </div>
              {error && (
                <p className="text-red-400 text-sm text-center">Ошибка отправки. Попробуйте ещё раз или напишите на akor.yug@gmail.com</p>
              )}
              <Button type="submit" disabled={loading} className="w-full h-14 bg-white text-black hover:bg-white/90 text-lg font-medium mt-4">
                {loading ? t('contact', 'sending') : t('contact', 'submit')}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
