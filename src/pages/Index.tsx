import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Innovations from '@/components/Innovations';
import About from '@/components/About';
import Partnership from '@/components/Partnership';
import Footer from '@/components/Footer';
import New_about from '@/components/new_about';
 

const Index = () => {
  return (
    <div className="bg-slate-100 overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Innovations />
        <About />
        <Partnership />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
