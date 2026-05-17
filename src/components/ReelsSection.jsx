import { motion } from 'framer-motion';
import { reelsData } from './reelsData';
import InstagramReelCard from './InstagramReelCard';
import { Instagram, Sparkles } from 'lucide-react';

export default function ReelsSection() {
  return (
    <section
      id="reels"
      className="relative py-28 px-6 overflow-hidden bg-[#050505]"
    >
      {/* ── Background atmosphere ── */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 -left-40 w-96 h-96 rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
      />

      {/* Vertical top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gold/30" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Label pill */}
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/60" />
            <span
              className="text-[10px] tracking-[0.45em] uppercase text-gold/80 font-medium"
              style={{ fontFamily: 'sans-serif' }}
            >
              Instagram
            </span>
            <Instagram size={12} className="text-gold/70" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/60" />
          </div>

          {/* Main heading */}
          <h2
            className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Student Reels &amp;{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #F5E27A 50%, #B8962E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
              }}
            >
              Campus Life
            </span>
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
            <Sparkles size={12} className="text-gold/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <p
            className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            A glimpse into the creative energy, hands-on workshops, and vibrant
            student community that define life at JBG Academy.
          </p>
        </motion.div>

        {/* ── Reels Grid ── */}
        {/*
          Mobile  : 1 column
          Tablet  : 2 columns
          Desktop : 4 columns
          Each card is a 9:16 portrait reel — no manual thumbnails needed.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-7">
          {reelsData.map((reel, index) => (
            <InstagramReelCard key={reel.id} reel={reel} index={index} />
          ))}
        </div>

        {/* ── Follow CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/jbgacademy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(212,175,55,0.25)]"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.06) 100%)',
              border: '1px solid rgba(212,175,55,0.35)',
              color: '#D4AF37',
              fontFamily: 'sans-serif',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Instagram size={16} />
            Follow us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}