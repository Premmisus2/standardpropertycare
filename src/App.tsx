/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-primary-text font-sans selection:bg-cta-accent/30 selection:text-primary-text">
      <Header />
      <main>
        <Hero />
        <Services />
        <Showcase />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
