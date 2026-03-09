import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Gutter Cleaning',
    num: '01',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop',
    desc: 'Remove debris, prevent water damage, and ensure proper flow. We clean inside and out.'
  },
  {
    title: 'Window Washing',
    num: '02',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2574&auto=format&fit=crop',
    desc: 'Streak-free, crystal clear windows using purified water systems for a lasting shine.'
  },
  {
    title: 'Roof Moss Removal',
    num: '03',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2665&auto=format&fit=crop',
    desc: 'Extend the life of your roof by safely removing black streaks, moss, and lichen.'
  },
  {
    title: 'Siding Cleaning',
    num: '04',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop',
    desc: 'Safe, low-pressure cleaning that removes algae, mold, and dirt without damage.'
  },
  {
    title: 'Permanent LED Lights',
    num: '05',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2669&auto=format&fit=crop',
    desc: 'Custom, professionally installed permanent exterior lighting for any occasion.'
  }
];

const ServiceCard: React.FC<{ service: typeof services[0], index: number, activeIndex: any }> = ({ service, index, activeIndex }) => {
  const relativeIndex = useTransform(activeIndex, (v: number) => index - v);
  
  // Cards are closer together (45% instead of 65%) and have a smoother curve
  const x = useTransform(relativeIndex, (v: number) => `calc(${v * 45}% + ${v * 10}px)`);
  const y = useTransform(relativeIndex, (v: number) => `${Math.abs(v) * 6}%`);
  const rotate = useTransform(relativeIndex, (v: number) => `${v * 3}deg`);
  const zIndex = useTransform(relativeIndex, (v: number) => 100 - Math.abs(Math.round(v)));
  const opacity = useTransform(relativeIndex, (v: number) => {
    if (Math.abs(v) > 3) return 0;
    return 1 - Math.abs(v) * 0.15;
  });
  const scale = useTransform(relativeIndex, (v: number) => 1 - Math.abs(v) * 0.05);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        zIndex,
        opacity,
        scale,
      }}
      className="absolute w-[280px] sm:w-[340px] h-[400px] sm:h-[460px] bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden flex flex-col origin-bottom"
    >
      {/* Small Image Area */}
      <div className="relative h-[180px] sm:h-[200px] w-full overflow-hidden shrink-0 bg-gray-100">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center font-display font-bold text-primary-text shadow-sm">
          {service.num}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-primary-text">{service.title}</h3>
          <p className="text-primary-text/70 text-sm leading-relaxed line-clamp-3">
            {service.desc}
          </p>
        </div>
        
        <a href="#quote" className="inline-flex items-center justify-center gap-2 w-full py-3 mt-4 bg-background hover:bg-cta-accent hover:text-white text-primary-text rounded-xl font-semibold transition-colors duration-300 group">
          Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Add spring physics for buttery smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Map smooth scroll progress (0 to 1) to the active card index (0 to 4)
  const activeIndex = useTransform(smoothProgress, [0, 1], [0, services.length - 1]);

  return (
    <section id="services" ref={containerRef} className="relative bg-background h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        {/* Header - Uses shrink-0 to prevent getting squished, ensuring it's never cut off */}
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-4 sm:pb-8 z-50 pointer-events-none shrink-0">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6 font-display text-primary-text">
              Services designed for <br className="hidden md:block" />
              <span className="text-primary-text/40">immaculate results.</span>
            </h2>
            <p className="text-base sm:text-lg text-primary-text/70 max-w-xl">
              Scroll to explore our high-end, full-service exterior cleaning and enhancements.
            </p>
          </div>
        </div>

        {/* Cards Container - Uses flex-1 to take remaining space, centering cards perfectly */}
        <div className="relative w-full max-w-7xl mx-auto flex-1 flex items-center justify-center pb-12 sm:pb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} activeIndex={activeIndex} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
