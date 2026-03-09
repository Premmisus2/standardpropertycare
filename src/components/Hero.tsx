import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, useScroll, useTransform } from 'motion/react';
import { CheckCircle2, ChevronDown } from 'lucide-react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  address: string;
};

export default function Hero() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const revealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24"
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0F172A]">
        {/* Deep Blue Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/40 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0F172A]/80 z-10" />
        
        <motion.img 
          style={{ y, scale }}
          src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2574&auto=format&fit=crop" 
          alt="Window cleaning" 
          className="w-full h-full object-cover origin-top"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full mt-12 lg:mt-0">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Copy */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            className="lg:col-span-7 max-w-2xl"
          >
            <motion.p 
              variants={revealVariants}
              className="text-cta-accent font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-semibold drop-shadow-md"
            >
              Professional Exterior Services
            </motion.p>

            <h1 className="text-white font-bold leading-none mb-8 tracking-tight drop-shadow-lg">
              <span className="block text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem] mb-2 font-display">STANDARD</span>
              <span className="block text-2xl sm:text-4xl lg:text-5xl font-medium tracking-wide text-white/90">PROPERTY CARE</span>
            </h1>
            
            <motion.div 
              variants={revealVariants}
              className="mt-8 bg-[#2A2A2A]/80 backdrop-blur-md p-6 sm:p-8 rounded-xl border-l-4 border-cta-accent shadow-2xl max-w-lg"
            >
              <p className="text-white/90 text-lg sm:text-xl font-medium italic leading-relaxed">
                There's nothing complicated about Exterior Cleaning. We believe hiring a company should be just as simple.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={revealVariants}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-lg mx-auto lg:ml-auto"
          >
            {/* Stoned Grey Form Container */}
            <div className="bg-[#2A2A2A]/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 font-display tracking-wide">
                Get your free quote
              </h3>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Request Sent!</h3>
                  <p className="text-white/70">We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-white font-medium text-lg mb-3">Name</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">First Name *</label>
                        <input
                          {...register('firstName', { required: true })}
                          className="w-full px-4 py-3 bg-[#1A1A1A]/80 border border-white/5 rounded-lg text-white focus:outline-none focus:border-cta-accent/50 focus:ring-1 focus:ring-cta-accent/50 transition-all placeholder-white/20"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Last Name *</label>
                        <input
                          {...register('lastName', { required: true })}
                          className="w-full px-4 py-3 bg-[#1A1A1A]/80 border border-white/5 rounded-lg text-white focus:outline-none focus:border-cta-accent/50 focus:ring-1 focus:ring-cta-accent/50 transition-all placeholder-white/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Phone *</label>
                    <input
                      {...register('phone', { required: true })}
                      type="tel"
                      className="w-full px-4 py-3 bg-[#1A1A1A]/80 border border-white/5 rounded-lg text-white focus:outline-none focus:border-cta-accent/50 focus:ring-1 focus:ring-cta-accent/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Email *</label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      className="w-full px-4 py-3 bg-[#1A1A1A]/80 border border-white/5 rounded-lg text-white focus:outline-none focus:border-cta-accent/50 focus:ring-1 focus:ring-cta-accent/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Service *</label>
                    <div className="relative">
                      <select
                        {...register('service', { required: true })}
                        className="w-full px-4 py-3 bg-[#1A1A1A]/80 border border-white/5 rounded-lg text-white appearance-none focus:outline-none focus:border-cta-accent/50 focus:ring-1 focus:ring-cta-accent/50 transition-all"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="gutter">Gutter Cleaning</option>
                        <option value="window">Window Washing</option>
                        <option value="siding">Siding Soft Wash</option>
                        <option value="roof">Roof Treatment</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-wider mb-1.5">Address</label>
                    <textarea
                      {...register('address')}
                      rows={2}
                      className="w-full px-4 py-3 bg-[#1A1A1A]/80 border border-white/5 rounded-lg text-white focus:outline-none focus:border-cta-accent/50 focus:ring-1 focus:ring-cta-accent/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-white text-[#0F172A] hover:bg-gray-100 rounded-lg font-bold text-lg transition-all duration-300 mt-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] uppercase tracking-wider"
                  >
                    Get Your Free Quote
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 text-white/60 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cta-accent to-transparent"></div>
      </motion.div>
    </section>
  );
}
