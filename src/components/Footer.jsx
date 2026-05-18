import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUpCircle } from 'lucide-react';

const quickLinks = ['About Us', 'Courses', 'Student Gallery', 'Testimonials', 'Contact'];
const courseLinks = ['Fashion Design', 'Interior Design', 'Graphic Design', 'Animation', 'VFX', 'Event Management'];

const sectionMap = {
  'About Us': '#about', 'Courses': '#courses', 'Student Gallery': '#gallery',
  'Testimonials': '#testimonials', 'Contact': '#contact',
  'Fashion Design': '#courses', 'Interior Design': '#courses',
  'Graphic Design': '#courses', 'Animation': '#courses', 'VFX': '#courses', 'Event Management': '#courses',
};

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#030303] overflow-hidden">
      {/* Top border */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand with Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              {/* Logo instead of "J" */}
              <img 
                src="https://customer-assets.emergentagent.com/job_530e28b2-cc7b-4d96-afad-71eaf378d86f/artifacts/fqrrhy00_New%20Logo.png" 
                alt="JBG Academy Logo" 
                className="w-10 h-10 object-contain rounded-lg"
                onError={(e) => {
                  // Fallback if logo fails to load
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  const fallback = document.createElement('div');
                  fallback.className = 'w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-[#050505] text-lg';
                  fallback.style.background = 'linear-gradient(135deg, #D4AF37, #F0D060)';
                  fallback.innerText = 'J';
                  if (parent && parent.firstChild) {
                    parent.insertBefore(fallback, e.target);
                  }
                }}
              />
              <div>
                <div className="font-display font-bold text-white text-lg leading-none">JBG Academy</div>
                <div className="font-sans text-gold text-[9px] tracking-[0.3em] uppercase mt-0.5">of Design</div>
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
              Transforming creative passion into professional excellence. Your journey to a successful design career starts here.
            </p>
            <div className="flex gap-3">
              {/* Social icons */}
              {[
                {
                  label: 'Instagram', href: 'https://www.instagram.com/jbg_academy_of_design?igsh=MzhyZG9pZHN2cGky',
                  icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                },
                {
                  label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61579323298855',
                  icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                },
                {
                  label: 'YouTube', href: 'https://www.youtube.com/@Design_School_Baramati',
                  icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.15)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'; e.currentTarget.style.background = 'rgba(212,175,55,0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)'; e.currentTarget.style.background = 'rgba(212,175,55,0.08)'; }}
                  aria-label={label}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold/70">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold text-lg mb-5 pb-2 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={sectionMap[link]}
                    onClick={(e) => { e.preventDefault(); document.querySelector(sectionMap[link])?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-300 flex-shrink-0" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display text-white font-semibold text-lg mb-5 pb-2 relative">
              Our Courses
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-3">
              {courseLinks.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    onClick={(e) => { e.preventDefault(); document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-300 flex-shrink-0" />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-semibold text-lg mb-5 pb-2 relative">
              Contact
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: '8983664300 / 8983664200', href: 'tel:8983664300' },
                { icon: Mail, text: 'jbgbaramati@gmail.com', href: 'mailto:jbgbaramati@gmail.com' },
                { icon: MapPin, text: '3rd Floor, Above Saraf Honda, Bhigwan Road, Baramati', href: null },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex gap-3">
                  <Icon size={15} className="text-gold flex-shrink-0 mt-0.5" />
                  {href ? (
                    <a href={href} className="font-sans text-sm text-white/50 hover:text-gold transition-colors duration-300">{text}</a>
                  ) : (
                    <p className="font-sans text-sm text-white/50 leading-relaxed">{text}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">
            © 2026 JBG Academy of Design. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans text-xs text-white/30 hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans text-xs text-white/30 hover:text-gold transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-12 right-8 text-gold/40 hover:text-gold transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle size={32} />
      </button>
    </footer>
  );
}