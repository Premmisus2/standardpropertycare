import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'How often should I have my gutters cleaned?',
    answer: 'We recommend cleaning your gutters at least twice a year: once in the spring to clear out winter debris, and once in the fall after the leaves have dropped. Homes with heavy tree coverage may require more frequent cleanings.'
  },
  {
    id: 2,
    question: 'Is soft washing safe for my siding?',
    answer: 'Yes, absolutely. Soft washing uses low-pressure water combined with specialized cleaning solutions to safely remove dirt, algae, and mold without damaging your siding, paint, or landscaping.'
  },
  {
    id: 3,
    question: 'Do I need to be home for the service?',
    answer: 'No, you do not need to be home as long as we have access to the areas being cleaned and an exterior water source. We will send you before and after photos upon completion.'
  },
  {
    id: 4,
    question: 'Are your cleaning solutions eco-friendly?',
    answer: 'Yes, we prioritize using biodegradable and eco-friendly cleaning solutions that are tough on grime but safe for your family, pets, and plants.'
  },
  {
    id: 5,
    question: 'Do you offer a satisfaction guarantee?',
    answer: 'We stand behind our work with a 100% satisfaction guarantee. If you are not completely satisfied with the results, we will return to make it right.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Frequently Asked <br />
            <span className="text-primary-text/40">Questions.</span>
          </h2>
          <p className="text-lg text-primary-text/70">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-black/5 rounded-2xl overflow-hidden bg-background hover:border-black/10 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cta-accent/50 rounded-2xl"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center text-cta-accent transition-transform duration-300">
                  {openId === faq.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-primary-text/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
