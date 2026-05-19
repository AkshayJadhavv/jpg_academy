import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="text-center">
            {/* Logo Container with 3D flip animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
              className="mb-6 flex justify-center"
            >
              <div
                className="inline-flex items-center justify-center rounded-2xl p-4"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
                  src="https://customer-assets.emergentagent.com/job_530e28b2-cc7b-4d96-afad-71eaf378d86f/artifacts/fqrrhy00_New%20Logo.png"
                  alt="JBG Academy Logo"
                  className="h-16 w-auto sm:h-20 md:h-24 object-contain"
                  style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className =
                        'font-display font-bold text-5xl text-gradient-gold tracking-widest';
                      fallback.innerText = 'JBG';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </motion.div>

            {/* Academy of Design Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm font-sans tracking-[0.3em] text-white/50 uppercase"
            >
              Academy of Design
            </motion.div>

            {/* Animated Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.6 }}
              className="h-0.5 mx-auto max-w-xs mt-4"
              style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
            />

            {/* Animated Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-5 flex justify-center gap-2"
            >
              {[0, 0.2, 0.4].map((delay) => (
                <motion.div
                  key={delay}
                  className="w-1.5 h-1.5 rounded-full bg-gold"
                  animate={{ y: [-4, 4, -4], opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}