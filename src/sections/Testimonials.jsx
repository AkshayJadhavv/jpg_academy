import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    course: 'Fashion Design',
    review: 'JBG Academy completely transformed my understanding of fashion. The faculty is incredibly supportive and the curriculum is cutting-edge. I landed my first internship within a month of graduating!',
    rating: 5,
  },
  {
    name: 'Rahul Patil',
    course: 'Graphic Design',
    review: 'The hands-on approach at JBG Academy set me up perfectly for the design industry. My portfolio built here got me hired at a top agency in Pune. Best decision of my career!',
    rating: 5,
  },
  {
    name: 'Sneha Kulkarni',
    course: 'Interior Design',
    review: 'The infrastructure, mentors, and real-project exposure at JBG is unmatched in Baramati. I now run my own interior design consultancy. Grateful for every moment here.',
    rating: 5,
  },
  {
    name: 'Amit Deshpande',
    course: 'Animation',
    review: 'From zero knowledge to working on real animation projects — JBG Academy made that happen in two years. The placement team is outstanding and truly cares about your success.',
    rating: 5,
  },
  {
    name: 'Neha Jadhav',
    course: 'Event Management',
    review: 'Managing large-scale events felt intimidating, but JBG Academy gave me the confidence and tools to handle anything. I have now managed 50+ events including two celebrity weddings!',
    rating: 5,
  },
];

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.92 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.92 }),
  };

  return (
    <section id="testimonials" className="relative py-28 px-6 bg-[#050505] overflow-hidden">
      {/* Glow BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />

      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-4">Success Stories</p>
          <h2 className="section-title text-white mb-4">
            Student <span className="text-gradient-gold italic">Testimonials</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Card - No Image */}
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                className="glass-card rounded-3xl p-8 md:p-12 relative"
                style={{ boxShadow: '0 0 40px rgba(212,175,55,0.08)' }}
              >
                {/* Quote icon */}
                <Quote size={60} className="absolute top-8 right-8 text-gold/10" />

                <div className="flex flex-col items-center text-center">
                  {/* Content - Centered without image */}
                  <div className="flex-1">
                    <StarRating count={testimonials[current].rating} />
                    <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed mt-6 italic">
                      "{testimonials[current].review}"
                    </p>
                    <div className="mt-8">
                      <p className="font-display text-xl font-bold text-white">{testimonials[current].name}</p>
                      <p className="font-sans text-sm text-gold mt-1 tracking-wider">{testimonials[current].course} Graduate</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-gold/25 text-gold/60 hover:border-gold hover:text-gold hover:shadow-lg transition-all duration-300"
              style={{ background: 'rgba(212,175,55,0.05)' }}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    background: i === current ? 'linear-gradient(90deg, #D4AF37, #F0D060)' : 'rgba(255,255,255,0.15)',
                    boxShadow: i === current ? '0 0 10px rgba(212,175,55,0.5)' : 'none',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full flex items-center justify-center border border-gold/25 text-gold/60 hover:border-gold hover:text-gold hover:shadow-lg transition-all duration-300"
              style={{ background: 'rgba(212,175,55,0.05)' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Mini name cards below - without images */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`rounded-xl px-4 py-2 text-center transition-all duration-300 ${
                i === current ? 'border-gold/50 bg-gold/5' : 'border-white/5 bg-white/2 hover:border-gold/20'
              }`}
              style={{ border: `1px solid ${i === current ? 'rgba(212,175,55,0.4)' : 'rgba(255,255,255,0.05)'}` }}
            >
              <p className="font-sans text-xs text-white/80">{t.name}</p>
              <p className="font-sans text-[10px] text-gold/60 mt-0.5">{t.course}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}