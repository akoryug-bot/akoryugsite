import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Partners } from '@/components/sections/Partners';
import { Products } from '@/components/sections/Products';
import { Projects } from '@/components/sections/Projects';
import { Process } from '@/components/sections/Process';
import { Advantages } from '@/components/sections/Advantages';
import { Contact } from '@/components/sections/Contact';
import { Catalog } from '@/components/sections/Catalog';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Partners />
        <Products />
        <Projects />
        <Catalog />
        <Process />
        <Advantages />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
