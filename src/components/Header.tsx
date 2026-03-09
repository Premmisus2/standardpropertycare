import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-cta-accent flex items-center justify-center text-white">
              <Droplets size={24} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-primary-text">
              Pristine<span className="text-cta-accent">Wash</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-cta-accent transition-colors">Services</a>
            <a href="#showcase" className="text-sm font-medium hover:text-cta-accent transition-colors">Our Work</a>
            <a href="#reviews" className="text-sm font-medium hover:text-cta-accent transition-colors">Reviews</a>
            <a href="#faq" className="text-sm font-medium hover:text-cta-accent transition-colors">FAQ</a>
            <a 
              href="#quote" 
              className="bg-primary-text text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/20 mt-3"
          >
            <nav className="flex flex-col px-4 py-6 gap-4">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Services</a>
              <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Our Work</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">Reviews</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2">FAQ</a>
              <a 
                href="#quote" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-cta-accent text-white px-5 py-3 rounded-xl text-center font-semibold mt-2"
              >
                Get a Quote
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
