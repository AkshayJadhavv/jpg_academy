// src/components/ReelCard.jsx
import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Eye, ExternalLink } from 'lucide-react';

function InstagramIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// forwardRef required so AnimatePresence (PopChild) can attach its ref
const ReelCard = forwardRef(function ReelCard({ reel, index }, ref) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      ref={ref}
      href={reel.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer block"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: `1px solid ${hovered ? 'rgba(212,175,55,0.55)' : 'rgba(212,175,55,0.12)'}`,
        boxShadow: hovered
          ? '0 0 30px rgba(212,175,55,0.18), 0 20px 50px rgba(0,0,0,0.5)'
          : '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
      }}
      aria-label={`View ${reel.title} on Instagram`}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-[9/14]">
        <motion.img
          src={reel.thumbnail}
          alt={reel.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          loading="lazy"
        />

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent" />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ background: 'rgba(5,5,5,0.55)' }}
        />

        {/* Instagram badge — top left */}
        <motion.div
          className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
          style={{
            background: hovered
              ? 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)'
              : 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(8px)',
            transition: 'background 0.4s ease',
          }}
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <InstagramIcon size={12} className="text-white" />
          <span className="font-sans text-[10px] text-white font-medium tracking-wider">Reel</span>
        </motion.div>

        {/* External link — top right */}
        <motion.div
          className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <ExternalLink size={12} className="text-gold" />
        </motion.div>

        {/* Center play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative flex items-center justify-center w-14 h-14 rounded-full"
            animate={{ scale: hovered ? 1 : 0.7, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{
              background: 'rgba(212,175,55,0.15)',
              border: '2px solid rgba(212,175,55,0.7)',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 0 30px rgba(212,175,55,0.4)',
            }}
          >
            <Play size={22} className="text-gold ml-0.5" fill="#D4AF37" />
            {hovered && (
              <motion.div
                className="absolute inset-0 rounded-full border border-gold/30"
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeOut' }}
              />
            )}
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-sans text-[10px] text-white/70">
              <Eye size={10} className="text-gold/60" />
              {reel.views}
            </span>
            <span className="flex items-center gap-1 font-sans text-[10px] text-white/70">
              <Heart size={10} className="text-gold/60" />
              {reel.likes}
            </span>
          </div>
          <span
            className="font-sans text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-full"
            style={{
              background: 'rgba(212,175,55,0.12)',
              border: '1px solid rgba(212,175,55,0.2)',
              color: 'rgba(212,175,55,0.8)',
            }}
          >
            {reel.category}
          </span>
        </div>
      </div>

      {/* Text content */}
      <div className="p-4">
        <h3
          className="font-display text-base font-semibold text-white mb-1 leading-snug transition-colors duration-300"
          style={{ color: hovered ? '#D4AF37' : '#ffffff' }}
        >
          {reel.title}
        </h3>
        <p className="font-body text-xs text-white/50 leading-relaxed line-clamp-2">{reel.caption}</p>

        <div className="flex items-center gap-1.5 mt-3">
          <InstagramIcon size={12} className="text-gold/60" />
          <span className="font-sans text-[10px] text-gold/60 tracking-wider">View on Instagram</span>
          <motion.span
            animate={{ x: hovered ? 3 : 0 }}
            transition={{ duration: 0.25 }}
            className="font-sans text-[10px] text-gold/60"
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
});

export default ReelCard;
