import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { SelfCare } from './components/SelfCare';
import { Counseling } from './components/Counseling';
import { Journey } from './components/Journey';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-white selection:bg-brand/20 selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Journey />
        <SelfCare />
        <Counseling />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default App;