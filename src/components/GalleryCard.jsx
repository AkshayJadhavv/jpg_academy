// src/components/GalleryCard.jsx
import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

function FallbackThumb({ title }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#111]">
      <ZoomIn size={22} className="text-gold/30" />
      <span className="font-sans text-[10px] text-white/20 text-center px-3">{title}</span>
    </div>
  );
}

// forwardRef required so AnimatePresence (PopChild) can attach its ref
const GalleryCard = forwardRef(function GalleryCard({ item, index, onOpen }, ref) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.88, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onOpen(item)}
      className="group relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        border: `1px solid ${hovered ? 'rgba(212,175,55,0.55)' : 'rgba(212,175,55,0.1)'}`,
        boxShadow: hovered
          ? '0 0 28px rgba(212,175,55,0.15), 0 16px 40px rgba(0,0,0,0.45)'
          : '0 4px 16px rgba(0,0,0,0.25)',
        transition: 'border-color 0.35s, box-shadow 0.35s',
        background: '#0a0a0a',
      }}
      aria-label={`View ${item.title}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(item)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square">
        {imgError ? (
          <FallbackThumb title={item.title} />
        ) : (
          <motion.img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover"
            animate={{ scale: hovered ? 1.09 : 1 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/10 to-transparent" />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ background: 'rgba(5,5,5,0.5)' }}
        />

        {/* Category pill - REMOVED */}
        {/* <div
          className="absolute top-2.5 left-2.5 font-sans text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(212,175,55,0.12)',
            border: '1px solid rgba(212,175,55,0.25)',
            color: 'rgba(212,175,55,0.9)',
            backdropFilter: 'blur(6px)',
          }}
        >
          {item.category}
        </div> */}

        {/* Zoom icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(212,175,55,0.15)',
              border: '1.5px solid rgba(212,175,55,0.7)',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 0 24px rgba(212,175,55,0.35)',
            }}
          >
            <ZoomIn size={18} className="text-gold" />
          </div>
        </motion.div>
      </div>

      {/* Text strip */}
      <div className="px-3 py-3">
        <p
          className="font-display text-sm font-semibold leading-snug truncate transition-colors duration-300"
          style={{ color: hovered ? '#D4AF37' : '#ffffff' }}
        >
          {item.title}
        </p>
        <p className="font-body text-[11px] text-white/45 mt-0.5 leading-snug line-clamp-1">
          {item.caption}
        </p>
      </div>
    </motion.div>
  );
});

export default GalleryCard;