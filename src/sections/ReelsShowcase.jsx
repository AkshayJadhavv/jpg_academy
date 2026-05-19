import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { reelsData } from '../data/reelsData';
import InstagramReelCard from '../components/InstagramReelCard';
import InstagramCTA from '../components/InstagramCTA';
import { Sparkles, ChevronDown } from 'lucide-react';

const INITIAL_VISIBLE = 4;

// Decorative background grid lines
function GridLines() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.025]">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-px bg-gold"
          style={{ left: `${(i + 1) * (100 / 7)}%` }}
        />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-px bg-gold"
          style={{ top: `${(i + 1) * 25}%` }}
        />
      ))}
    </div>
  );
}

export default function ReelsShowcase() {
  const { ref, isVisible } = useScrollReveal(0.08);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const displayed = reelsData.slice(0, visibleCount);
  const hasMore = visibleCount < reelsData.length;

  return (
    <section
      id="reels"
      className="relative py-28 px-6 bg-[#060606] overflow-hidden"
    >
      {/* ── Decorative grid ── */}
      <GridLines />

      {/* ── Glow orbs ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 blur-3xl opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent)' }}
      />
      <div
        className="absolute bottom-40 right-0 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #833ab4, transparent)' }}
      />

      {/* ── Top border shimmer ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      <div ref={ref} className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full"
            style={{
              background: 'rgba(212,175,55,0.07)',
              border: '1px solid rgba(212,175,55,0.22)',
            }}
          >
            <Sparkles size={13} className="text-gold" />
            <span className="font-sans text-xs tracking-[0.35em] uppercase text-gold">
              Student Showcase
            </span>
          </motion.div>

          <h2
            className="font-display font-bold text-white mb-4 leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
          >
            Student Reels &amp;{' '}
            <span
              className="text-transparent bg-clip-text italic"
              style={{
                backgroundImage: 'linear-gradient(135deg, #D4AF37, #F0D060, #D4AF37)',
              }}
            >
              Campus Life
            </span>
          </h2>

          {/* Divider */}
          <div
            className="w-24 h-0.5 mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
          />

          <p className="font-body text-lg text-white/55 max-w-2xl mx-auto leading-relaxed">
            A glimpse into the creative energy, hands-on workshops, and vibrant
            student community that define life at JBG Academy.
          </p>
        </motion.div>

        {/* ── Reels Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-7"
        >
          <AnimatePresence mode="popLayout">
            {displayed.map((reel, i) => (
              <InstagramReelCard key={reel.id} reel={reel} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Empty state ── */}
        {reelsData.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-sans text-white/30 text-sm">No reels available yet.</p>
          </motion.div>
        )}

        {/* ── Load More ── */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setVisibleCount((c) => c + 4)}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 font-sans font-semibold text-sm tracking-widest uppercase px-9 py-4 rounded-full transition-all duration-400"
              style={{
                background: 'transparent',
                border: '1px solid rgba(212,175,55,0.4)',
                color: '#D4AF37',
                boxShadow: '0 0 12px rgba(212,175,55,0.08)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37, #F0D060)';
                e.currentTarget.style.color = '#050505';
                e.currentTarget.style.boxShadow = '0 0 35px rgba(212,175,55,0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#D4AF37';
                e.currentTarget.style.boxShadow = '0 0 12px rgba(212,175,55,0.08)';
              }}
            >
              <ChevronDown size={16} />
              Load More Reels ({reelsData.length - visibleCount} remaining)
            </motion.button>
          </motion.div>
        )} 
      </div>

      {/* ── Bottom border shimmer ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />
    </section>
  );
}