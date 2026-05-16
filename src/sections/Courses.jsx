import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2 } from 'lucide-react';

const courses = [
  {
    title: 'Fashion Design',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    desc: 'Master the art of clothing design, textile science, and fashion illustration with hands-on studio practice.',
    highlights: ['Pattern Making & Draping', 'Fashion Illustration', 'Textile Science', 'Portfolio Development'],
  },
  {
    title: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    desc: 'Learn to transform spaces beautifully — from residential homes to commercial spaces with professional design software.',
    highlights: ['Space Planning', 'AutoCAD & 3D Studio', 'Material Selection', 'Client Presentation'],
  },
  {
    title: 'Graphic Design',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80',
    desc: 'Build visual communication skills across branding, print, and digital media using industry-standard tools.',
    highlights: ['Adobe Suite Mastery', 'Brand Identity Design', 'Print & Digital Media', 'Typography & Layout'],
  },
  {
    title: 'Animation',
    image: 'https://images.unsplash.com/photo-1616161560417-66d4db5892ec?w=600&q=80',
    desc: 'Bring stories to life through 2D and 3D animation techniques used in film, gaming, and digital media.',
    highlights: ['2D & 3D Animation', 'Character Design', 'Storyboarding', 'After Effects & Maya'],
  },
  {
    title: 'VFX',
    image: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=600&q=80',
    desc: 'Create stunning visual effects for films and digital platforms with cutting-edge compositing and CGI techniques.',
    highlights: ['Compositing', 'Motion Graphics', 'CGI & Rendering', 'Nuke & Houdini'],
  },
  {
    title: 'Event Management',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80',
    desc: 'Plan, produce, and execute memorable events — from corporate conferences to grand weddings and cultural festivals.',
    highlights: ['Event Planning & Design', 'Vendor Management', 'Budget & Logistics', 'Live Event Production'],
  },
];

export default function Courses() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="courses" className="relative py-28 px-6 bg-[#050505] overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />

      <div ref={ref} className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-sans text-xs tracking-[0.4em] uppercase text-gold mb-4">What We Offer</p>
          <h2 className="section-title text-white mb-4">
            Our Professional <span className="text-gradient-gold italic">Courses</span>
          </h2>
          <div className="section-divider" />
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto mt-6">
            Industry-aligned programs designed to make you job-ready from day one — with real projects, expert mentors, and placement support.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(212,175,55,0.15)',
                transition: 'border-color 0.4s, box-shadow 0.4s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(212,175,55,0.1), 0 20px 40px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52 flex-shrink-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#050505]/30 to-transparent" />
                {/* Course number */}
                <div className="absolute top-4 right-4 font-display text-5xl font-bold text-white/5 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gradient-gold transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="font-body text-sm text-white/55 leading-relaxed mb-5">{course.desc}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6 flex-1">
                  {course.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-gold flex-shrink-0" />
                      <span className="font-sans text-xs text-white/60">{h}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="gold-btn text-center text-xs w-full block"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
