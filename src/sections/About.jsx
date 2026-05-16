import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { GraduationCap, Building2, Briefcase, Wrench } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Industry Expert Faculty',
    desc: 'Learn from seasoned professionals with decades of real-world experience in their respective creative fields.',
  },
  {
    icon: Building2,
    title: 'State-of-the-Art Facilities',
    desc: 'Work in modern studios equipped with the latest design tools, software, and infrastructure available today.',
  },
  {
    icon: Briefcase,
    title: 'Placement Assistance',
    desc: '100% dedicated placement support with strong industry partnerships and a proven track record of career launches.',
  },
  {
    icon: Wrench,
    title: 'Hands-on Training',
    desc: 'Project-based learning methodology that ensures every student graduates with a compelling professional portfolio.',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden bg-[#050505]">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/30" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-4">Our Story</p>
          <h2 className="section-title text-white mb-4">
            About <span className="text-gradient-gold italic">JBG Academy</span>
          </h2>
          <div className="section-divider" />
          <p className="font-body text-lg md:text-xl text-white/60 max-w-2xl mx-auto mt-6 leading-relaxed">
            JBG Academy of Design is a premier institute dedicated to nurturing creative talent and transforming aspirations into successful careers. Our commitment to excellence spans design, technology, and the arts.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative">
              <div className="img-zoom rounded-2xl overflow-hidden glow-effect">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="JBG Academy students"
                  className="w-full h-80 lg:h-[480px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 glow-effect"
              >
                <div className="font-display text-4xl font-bold text-gradient-gold">15+</div>
                <div className="font-sans text-xs text-white/60 tracking-wider uppercase mt-1">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl md:text-4xl text-white font-semibold leading-tight">
              Crafting Creative Minds for <span className="text-gradient-gold italic">Tomorrow's World</span>
            </h3>
            <p className="font-body text-base text-white/60 leading-relaxed">
              At JBG Academy, we believe that great design changes the world. Our curriculum is built on the principles of innovation, craftsmanship, and professional excellence — preparing students not just for jobs, but for impactful careers.
            </p>
            <p className="font-body text-base text-white/60 leading-relaxed">
              Located in the heart of Baramati, our institute has become the go-to destination for aspiring designers from across Maharashtra seeking world-class education.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[['500+', 'Alumni'], ['100%', 'Placement'], ['6+', 'Courses'], ['15+', 'Years']].map(([val, lbl]) => (
                <div key={lbl} className="glass-card rounded-xl p-4 text-center border border-gold/10">
                  <div className="font-display text-2xl font-bold text-gradient-gold">{val}</div>
                  <div className="font-sans text-xs text-white/50 tracking-wider uppercase mt-1">{lbl}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.4 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 group cursor-default transition-all duration-500"
              style={{ boxShadow: '0 0 0 rgba(212,175,55,0)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
                <f.icon size={22} className="text-gold" />
              </div>
              <h4 className="font-display text-lg font-semibold text-white mb-3">{f.title}</h4>
              <p className="font-body text-sm text-white/55 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
