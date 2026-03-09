import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    avatar: 'https://i.ibb.co/FLx9nYVL/demo-corporate-testimonials-01.webp',
    logo: 'https://i.ibb.co/mV1Smnkk/logo-loitech-dark-blue-creativesalahu.png',
    text: 'Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.',
    author: 'Herman miller, Monday'
  },
  {
    id: 2,
    avatar: 'https://i.ibb.co/5XZw7VfM/demo-corporate-testimonials-03.webp',
    logo: 'https://i.ibb.co/mV1Smnkk/logo-loitech-dark-blue-creativesalahu.png',
    text: 'Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.',
    author: 'Matthew taylor, invision'
  },
  {
    id: 3,
    avatar: 'https://i.ibb.co/7N0S7Njw/demo-corporate-testimonials-02.png',
    logo: 'https://i.ibb.co/mV1Smnkk/logo-loitech-dark-blue-creativesalahu.png',
    text: 'Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work. Trust us we looked for a very long time.',
    author: 'Leonel mooney, Logitech'
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      
      {/* Dotted Canada Map Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div 
          className="w-full h-full max-w-[1400px] max-h-[900px]"
          style={{
            backgroundImage: 'radial-gradient(circle, #94a3b8 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/b/b6/Canada_blank_map.svg)',
            maskSize: 'contain',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
            WebkitMaskImage: 'url(https://upload.wikimedia.org/wikipedia/commons/b/b6/Canada_blank_map.svg)',
            WebkitMaskSize: 'contain',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto text-4xl md:text-5xl font-bold tracking-tight mb-16 md:mb-24 text-primary-text leading-tight"
        >
          Trusted by the world's fastest growing companies
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden relative min-h-[450px] md:min-h-[350px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 md:px-16"
              >
                {/* Avatar */}
                <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl -z-10 transform translate-y-4" />
                  <img 
                    src={slides[currentIndex].avatar} 
                    alt={slides[currentIndex].author}
                    className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <img 
                    src={slides[currentIndex].logo} 
                    alt="Company Logo" 
                    className="h-8 md:h-10 mb-6 mx-auto md:mx-0 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <p className="text-[#242e45] text-lg md:text-xl leading-relaxed font-medium mb-6">
                    "{slides[currentIndex].text}"
                  </p>
                  <span className="text-[#3c2fc0] font-extrabold uppercase text-sm tracking-wider">
                    {slides[currentIndex].author}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 w-12 h-12 bg-white rounded-full shadow-lg border border-black/5 flex items-center justify-center text-primary-text hover:bg-gray-50 hover:scale-110 transition-all z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 w-12 h-12 bg-white rounded-full shadow-lg border border-black/5 flex items-center justify-center text-primary-text hover:bg-gray-50 hover:scale-110 transition-all z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
