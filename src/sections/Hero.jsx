import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const stats = [
  { value: '6+', label: 'Design Courses' },
  { value: '100%', label: 'Placement Support' },
  { value: 'Expert', label: 'Faculty' },
  { value: 'Modern', label: 'Infrastructure' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* YouTube Video Background - Darker overlay for better text visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full scale-125">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/YzUQiak5VbY?autoplay=1&mute=1&controls=0&loop=1&playlist=YzUQiak5VbY&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
            title="JBG Academy Hero Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        {/* Stronger overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content — pt-24 ensures content clears the fixed navbar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24"
      >
        {/* Logo with frosted-glass square background */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div
            className="inline-flex items-center justify-center rounded-2xl p-3 sm:p-4"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <img
              src="https://customer-assets.emergentagent.com/job_530e28b2-cc7b-4d96-afad-71eaf378d86f/artifacts/fqrrhy00_New%20Logo.png"
              alt="JBG Academy Logo"
              className="h-16 w-auto sm:h-20 md:h-24 lg:h-28 object-contain"
              style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                const fallback = document.createElement('div');
                fallback.className =
                  'inline-flex items-center justify-center bg-[#D4AF37] text-black font-bold rounded-full h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 text-2xl sm:text-3xl md:text-4xl mx-auto';
                fallback.innerText = 'JBG';
                if (parent) parent.appendChild(fallback);
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.2] mb-6"
        >
          Legacy of{' '}
          <span className="text-[#D4AF37] italic">Excellence,</span>
          <br />
          Now in Education
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="font-body text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Transform your creative passion into a professional career with industry-leading courses in Design, Animation, and Event Management.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="gold-btn flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-3 bg-[#D4AF37] text-black font-bold rounded-full hover:bg-[#c5a22e] transition-all duration-300 shadow-lg"
          >
            Enquire Now
          </a>
          <a
            href="/Broucher JBG.pdf"
            download="JBG_Academy_Brochure.pdf"
            className="gold-btn-outline flex items-center gap-2 w-full sm:w-auto justify-center px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
          >
            <Download size={16} />
            Download Brochure
          </a>
          <a
            href="https://wa.me/918983664300"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-sans font-semibold text-sm tracking-widest uppercase px-8 py-3 rounded-full transition-all duration-500 w-full sm:w-auto justify-center shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: '#fff',
            }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </motion.div>

        {/* Stats Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.03, y: -4 }}
              className="rounded-2xl p-4 text-center cursor-default backdrop-blur-sm bg-black/40 border border-white/15 transition-all duration-300"
            >
              <div className="font-display text-xl md:text-2xl font-bold text-[#D4AF37] mb-1">{stat.value}</div>
              <div className="font-sans text-[11px] text-white/70 tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}