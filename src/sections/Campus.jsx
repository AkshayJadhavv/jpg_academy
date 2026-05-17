import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Play, X, Volume2, VolumeX } from 'lucide-react';

export default function Campus() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative py-28 px-6 bg-[#080808] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-4">Virtual Tour</p>
          <h2 className="section-title text-white mb-4">
            Experience Our <span className="text-gradient-gold italic">Campus</span>
          </h2>
          <div className="section-divider" />
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto mt-6">
            Step inside JBG Academy and discover world-class facilities designed to inspire creativity and foster professional growth.
          </p>
        </motion.div>

        {/* Auto-playing YouTube Video - Always playing, no click needed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative group rounded-3xl overflow-hidden"
          style={{
            border: '1px solid rgba(212,175,55,0.25)',
            boxShadow: '0 0 60px rgba(212,175,55,0.1), 0 30px 80px rgba(0,0,0,0.5)',
          }}
        >
          {/* YouTube Video Embed - Auto playing, no controls */}
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/6u2QBabbmvE?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&loop=1&playlist=6u2QBabbmvE&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
              title="JBG Academy Campus Tour"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>

          {/* Custom Mute/Unmute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
            style={{
              background: 'rgba(212,175,55,0.2)',
              border: '1px solid rgba(212,175,55,0.5)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {isMuted ? (
              <VolumeX size={20} className="text-gold" />
            ) : (
              <Volume2 size={20} className="text-gold" />
            )}
          </button>

          {/* Overlay gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />

        </motion.div>

        {/* Bottom Grid Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80', label: 'Design Studio' },
            { img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80', label: 'Lecture Hall' },
            { img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80', label: 'Computer Lab' },
            { img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80', label: 'Event Space' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="img-zoom rounded-xl overflow-hidden group cursor-pointer"
              style={{ border: '1px solid rgba(212,175,55,0.15)' }}
            >
              <div className="relative">
                <img src={item.img} alt={item.label} className="w-full h-28 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-[#050505]/40 group-hover:bg-[#050505]/20 transition-colors duration-300" />
                <div className="absolute bottom-2 left-3">
                  <span className="font-sans text-xs text-white/80">{item.label}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}