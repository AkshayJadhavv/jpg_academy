// src/components/InstagramCTA.jsx
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

function InstagramIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

// Animated floating phone mockup
function PhoneMockup() {
  return (
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      className="relative mx-auto w-32 h-52 rounded-3xl overflow-hidden flex-shrink-0"
      style={{
        border: '2px solid rgba(212,175,55,0.4)',
        background: 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 40px rgba(212,175,55,0.15)',
      }}
    >
      {/* Fake screen content */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
        <InstagramIcon size={28} className="text-gold/80" />
        <div className="w-full h-1.5 rounded-full bg-white/10" />
        <div className="w-3/4 h-1.5 rounded-full bg-white/10" />
        <div className="w-full h-1.5 rounded-full bg-white/10" />
        <div className="mt-2 w-8 h-8 rounded-full bg-gold/20 border border-gold/30" />
        <div className="w-full h-14 rounded-xl bg-white/5 border border-white/5" />
      </div>
      {/* Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-gold/20" />
    </motion.div>
  );
}

export default function InstagramCTA() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
      className="relative mt-20 rounded-3xl overflow-hidden"
      style={{
        border: '1px solid rgba(212,175,55,0.2)',
        background: 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #833ab4, transparent)' }}
      />

      {/* Shimmer top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 px-8 md:px-16 py-14">
        {/* Phone mockup */}
        <div className="hidden sm:block">
          <PhoneMockup />
        </div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span
              className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.35em] uppercase px-4 py-2 rounded-full mb-5"
              style={{
                background: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.2)',
                color: '#D4AF37',
              }}
            >
              <InstagramIcon size={12} className="text-gold" />
              @jbg_academy_of_design
            </span>

            <h3 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              Follow JBG Academy on{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)',
                }}
              >
                Instagram
              </span>
            </h3>

            <p className="font-body text-base text-white/55 leading-relaxed mb-8 max-w-md">
              Stay updated with the latest reels, student showcases, event highlights, and creative inspiration from our academy community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Primary Instagram CTA */}
              <motion.a
                href="https://www.instagram.com/jbg_academy_of_design?igsh=MzhyZG9pZHN2cGky"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-sans font-semibold text-sm tracking-widest uppercase text-white transition-all duration-400"
                style={{
                  background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)',
                  boxShadow: '0 0 30px rgba(131,58,180,0.35)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 50px rgba(131,58,180,0.6), 0 0 80px rgba(253,29,29,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(131,58,180,0.35)'; }}
              >
                <InstagramIcon size={16} />
                Visit Instagram Page
              </motion.a>

              {/* Secondary gold CTA */}
              <motion.a
                href="https://www.instagram.com/jbg_academy_of_design?igsh=MzhyZG9pZHN2cGky"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-400"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(212,175,55,0.5)',
                  color: '#D4AF37',
                  boxShadow: '0 0 10px rgba(212,175,55,0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #D4AF37, #F0D060)';
                  e.currentTarget.style.color = '#050505';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(212,175,55,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#D4AF37';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(212,175,55,0.1)';
                }}
              >
                View All Reels
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Follower stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.35 }}
          className="flex-shrink-0 flex sm:flex-col gap-6"
        >
          {[
            { value: '1k+', label: 'Followers' },
            { value: '84+', label: 'Posts' },
            { value: '40+', label: 'Reels' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl px-5 py-4"
              style={{
                background: 'rgba(212,175,55,0.06)',
                border: '1px solid rgba(212,175,55,0.15)',
              }}
            >
              <div className="font-display text-2xl font-bold text-gradient-gold">{stat.value}</div>
              <div className="font-sans text-[10px] text-white/50 tracking-wider uppercase mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
