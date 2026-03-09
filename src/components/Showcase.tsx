import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const showcases = [
  {
    id: 1,
    title: 'Siding Restoration',
    location: 'Oakville Estate',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
    tag: 'Soft Wash'
  },
  {
    id: 2,
    title: 'Gutter Clearing',
    location: 'Maplewood Residence',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop',
    tag: 'Maintenance'
  },
  {
    id: 3,
    title: 'Window Detailing',
    location: 'Downtown Loft',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2574&auto=format&fit=crop',
    tag: 'Exterior'
  }
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-32 bg-gradient-to-b from-slate-900 via-[#0a1128] to-primary-text text-white overflow-hidden">
      {/* Wave Transition from previous section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[120px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>

      {/* Background Ambient Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cta-accent/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white"
            >
              The difference is <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cta-accent to-blue-400">in the details.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-white/70"
            >
              We don't just clean; we restore. See how our specialized techniques bring properties back to life.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#quote" 
            className="inline-flex items-center gap-2 font-semibold text-cta-accent hover:text-white transition-colors group"
          >
            Start your project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* CSS Grid Bento Box Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[400px]">
          {showcases.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className={`group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2 auto-rows-[832px]' : ''
              }`}
            >
              <div className="absolute inset-0 shimmer bg-white/10" />
              <img 
                src={item.image} 
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.previousElementSibling?.remove();
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wide uppercase mb-4 text-white">
                  {item.tag}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-white/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cta-accent shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                  {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
