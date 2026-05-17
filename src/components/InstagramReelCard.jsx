import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

/**
 * Converts a raw Instagram reel URL into the embed URL.
 * Strips query params / trailing slashes, then appends /embed/
 *
 * Input:  "https://www.instagram.com/reel/DXhEtOIDbOR/?utm_source=..."
 * Output: "https://www.instagram.com/reel/DXhEtOIDbOR/embed/"
 */
function toEmbedUrl(link) {
  try {
    const url = new URL(link);
    // keep only origin + pathname (strips all query params & hash)
    const clean = url.origin + url.pathname.replace(/\/$/, '');
    return `${clean}/embed/`;
  } catch {
    return link + 'embed/';
  }
}

export default function InstagramReelCard({ reel, index }) {
  const embedUrl = toEmbedUrl(reel.link);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="group relative flex flex-col rounded-3xl overflow-hidden"
      style={{
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        border: '1px solid rgba(212,175,55,0.18)',
        boxShadow:
          '0 4px 24px rgba(0,0,0,0.45), 0 1px 0 rgba(212,175,55,0.08) inset',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* ── Glow halo on hover ── */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          boxShadow: '0 0 48px rgba(212,175,55,0.18), 0 0 6px rgba(212,175,55,0.12) inset',
        }}
      />

      {/* ── Instagram reel embed ── */}
      <div className="relative w-full overflow-hidden rounded-t-3xl bg-black" style={{ paddingBottom: '177.78%' /* 9:16 */ }}>
        <iframe
          src={embedUrl}
          title={reel.title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          scrolling="no"
          frameBorder="0"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
          loading="lazy"
        />
      </div>

      {/* ── Card footer ── */}
      <div className="flex items-center gap-3 px-5 py-4">
        {/* Instagram icon badge */}
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{
            background:
              'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          }}
        >
          <Instagram size={14} className="text-white" />
        </div>

        <div className="min-w-0">
          <p
            className="text-white/85 font-medium text-sm truncate leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {reel.title}
          </p>
          <p className="text-white/35 text-[10px] tracking-widest uppercase mt-0.5">
            @jbgacademy
          </p>
        </div>

        {/* Live indicator */}
        <a
          href={reel.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
            color: '#D4AF37',
            fontFamily: 'sans-serif',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse inline-block" />
          View
        </a>
      </div>
    </motion.div>
  );
}