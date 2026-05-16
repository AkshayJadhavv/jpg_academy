import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Users, 
  Sparkles, 
  Briefcase, 
  PhoneCall,
  Star,
  Gem
} from 'lucide-react';

const announcementItems = [
  { text: "Admission Open 2026", icon: GraduationCap },
  { text: "Scholarship Offers Available", icon: Award },
  { text: "Limited Seats Available", icon: Users },
  { text: "Industry Expert Faculty", icon: Sparkles },
  { text: "100% Placement Support", icon: Briefcase },
  { text: "Enquire Now", icon: PhoneCall },
];

const ScrollingAnnouncementBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const baseVelocity = 50;
  const x = useMotionValue(0);
  
  const doubledItems = [...announcementItems, ...announcementItems, ...announcementItems];

  useEffect(() => {
    let controls;
    if (!isHovered) {
      controls = animate(x, -1000, {
        duration: 25,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop"
      });
    } else {
      controls?.stop();
    }
    return () => controls?.stop();
  }, [isHovered, x]);

  return (
    <section className="relative py-3 overflow-hidden bg-gradient-to-r from-black via-[#0a0a0a] to-black border-y border-gold/20">
      {/* Gold shimmer line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      <div 
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap"
          style={{ x }}
          animate={!isHovered ? {
            x: [0, -1000]
          } : {}}
          transition={!isHovered ? {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          } : {}}
        >
          {doubledItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <item.icon size={18} className="text-gold group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <item.icon size={18} className="text-gold" />
                </div>
              </div>
              <span className="font-sans text-sm tracking-wide text-white/80 group-hover:text-white transition-colors duration-300">
                {item.text}
              </span>
              <div className="w-1 h-1 rounded-full bg-gold/40 mx-2" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingAnnouncementBar;