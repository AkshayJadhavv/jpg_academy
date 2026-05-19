import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

function toEmbedUrl(link) {
  try {
    const url = new URL(link);
    const clean = url.origin + url.pathname.replace(/\/$/, '');
    return `${clean}/embed/`;
  } catch {
    return `${link}embed/`;
  }
}

function toCleanUrl(link) {
  try {
    const url = new URL(link);
    return url.origin + url.pathname.replace(/\/$/, '') + '/';
  } catch {
    return link;
  }
}

export default function InstagramReelCard({ reel, index }) {
  const embedUrl = toEmbedUrl(reel.link);
  const cleanUrl = toCleanUrl(reel.link);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.015 }}
      className="group relative flex flex-col rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        border: '1px solid rgba(212,175,55,0.18)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.45), 0 1px 0 rgba(212,175,55,0.08) inset',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
        style={{
          boxShadow: '0 0 48px rgba(212,175,55,0.18), 0 0 6px rgba(212,175,55,0.12) inset',
        }}
      />

      {/* Embed + click interceptor */}
      <div
        className="relative w-full overflow-hidden rounded-t-3xl bg-black"
        style={{ paddingBottom: '177.78%' }}
      >
        {/* Instagram iframe */}
        <iframe
          src={embedUrl}
          title={reel.title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          scrolling="no"
          frameBorder="0"
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none', pointerEvents: 'none' }}
          loading="lazy"
        />

        {/* Transparent overlay — captures clicks, redirects to Instagram */}
        <a
          href={cleanUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          aria-label={`Watch ${reel.title} on Instagram`}
        >
          {/* Hover hint */}
          <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: 'rgba(0,0,0,0.65)',
                color: '#D4AF37',
                border: '1px solid rgba(212,175,55,0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Instagram size={12} />
              Watch on Instagram
            </div>
          </div>
        </a>
      </div>

      {/* Card footer */}
      <div className="flex items-center gap-3 px-5 py-4">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
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
      </div>
    </motion.div>
  );
}