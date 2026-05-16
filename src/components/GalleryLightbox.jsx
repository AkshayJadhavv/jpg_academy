// src/components/GalleryLightbox.jsx
import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function GalleryLightbox({ item, allItems, onClose, onNavigate }) {
  const currentIndex = allItems.findIndex((i) => i.id === item.id);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < allItems.length - 1;

  const prev = useCallback(() => {
    if (hasPrev) onNavigate(allItems[currentIndex - 1]);
  }, [hasPrev, currentIndex, allItems, onNavigate]);

  const next = useCallback(() => {
    if (hasNext) onNavigate(allItems[currentIndex + 1]);
  }, [hasNext, currentIndex, allItems, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
      style={{ background: 'rgba(0,0,0,0.94)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      {/* Card */}
      <motion.div
        key={item.id}
        initial={{ scale: 0.88, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(212,175,55,0.3)',
          boxShadow: '0 0 60px rgba(212,175,55,0.12), 0 40px 80px rgba(0,0,0,0.6)',
          background: '#0a0a0a',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative">
          <img
            src={item.src}
            alt={item.title}
            className="w-full max-h-[65vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        {/* Info bar */}
        <div className="px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
            <p className="font-body text-sm text-white/55 mt-1 leading-relaxed">{item.caption}</p>
          </div>
          <span
            className="flex-shrink-0 flex items-center gap-1.5 font-sans text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full mt-0.5"
            style={{
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.2)',
              color: '#D4AF37',
            }}
          >
            <Tag size={10} />
            {item.category}
          </span>
        </div>

        {/* Counter */}
        <div className="absolute bottom-5 right-6">
          <span className="font-sans text-[10px] text-white/25">
            {currentIndex + 1} / {allItems.length}
          </span>
        </div>
      </motion.div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        aria-label="Close"
      >
        <X size={18} className="text-white/70 hover:text-gold transition-colors" />
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={20} className="text-gold" />
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
          }}
          aria-label="Next image"
        >
          <ChevronRight size={20} className="text-gold" />
        </button>
      )}
    </motion.div>
  );
}
