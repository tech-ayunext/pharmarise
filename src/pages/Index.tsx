import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Innovations from '@/components/Innovations';
import About from '@/components/About';
import Partnership from '@/components/Partnership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-slate-100 overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Innovations />
        <About />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
