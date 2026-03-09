import React from 'react';
import { Droplets, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-text text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cta-accent flex items-center justify-center text-white">
                <Droplets size={24} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Pristine<span className="text-cta-accent">Wash</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Professional exterior cleaning services dedicated to restoring the beauty and integrity of your property.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cta-accent transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cta-accent transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cta-accent transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">Gutter Cleaning</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">Window Washing</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">Siding Soft Wash</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors text-sm">Roof Treatment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-3">
              <li><a href="#showcase" className="text-white/60 hover:text-white transition-colors text-sm">Our Work</a></li>
              <li><a href="#reviews" className="text-white/60 hover:text-white transition-colors text-sm">Reviews</a></li>
              <li><a href="#faq" className="text-white/60 hover:text-white transition-colors text-sm">FAQ</a></li>
              <li><a href="#quote" className="text-white/60 hover:text-white transition-colors text-sm">Get a Quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>contact@pristinewash.com</li>
              <li>1 (800) 555-0199</li>
              <li>123 Clean Street, Suite 100<br />Seattle, WA 98101</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} PristineWash. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
