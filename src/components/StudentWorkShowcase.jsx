import { motion, useMotionValue, animate, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, Sparkles } from 'lucide-react';
import { studentWorkData } from '../data/studentWorkData';

const categories = ["All", "Fashion", "Interior", "Graphics", "Animation", "Events"];

const StudentWorkShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollInterval = useRef(null);
  
  const filteredWorks = activeCategory === "All" 
    ? studentWorkData.all 
    : studentWorkData.all.filter(item => item.category === activeCategory);

  // Auto-scroll function
  const startAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }
    
    autoScrollInterval.current = setInterval(() => {
      if (scrollContainerRef.current && !isHovered && isAutoScrolling) {
        const container = scrollContainerRef.current;
        const scrollAmount = 1;
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft + container.clientWidth >= maxScroll - 1) {
          // Reset to start for infinite loop
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 30);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  // Start/stop auto-scroll based on hover state
  useEffect(() => {
    if (isHovered) {
      stopAutoScroll();
    } else {
      startAutoScroll();
    }
    
    return () => {
      stopAutoScroll();
    };
  }, [isHovered, filteredWorks.length]);

  // Reset scroll position when category changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
    // Restart auto-scroll after category change
    if (!isHovered) {
      stopAutoScroll();
      startAutoScroll();
    }
  }, [activeCategory]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Manual scroll with mouse wheel
  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollBy({ left: e.deltaY, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3">
            Portfolio Excellence
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Student Creative <span className="text-gradient-gold">Showcase</span>
          </h2>
          <p className="font-body text-white/60 max-w-2xl mx-auto">
            Explore outstanding creative work crafted by our talented students
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-sans text-sm tracking-wide transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-black font-semibold shadow-lg shadow-gold/20'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Auto-scroll indicator */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
            <div className={`w-2 h-2 rounded-full ${isAutoScrolling && !isHovered ? 'bg-gold animate-pulse' : 'bg-white/30'}`} />
            <span className="font-sans text-[10px] text-gold tracking-wider">
              {isHovered ? '' : ''}
            </span>
          </div>
        </div>

        {/* Gallery Container with Navigation */}
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Navigation */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 backdrop-blur-md p-3 rounded-full border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold/20"
          >
            <ChevronLeft size={24} className="text-gold" />
          </button>

          {/* Scrolling Gallery */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 px-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onWheel={handleWheel}
          >
            {filteredWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-72 md:w-80 lg:w-96 group/card cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 hover:border-gold/50 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-80">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/400x500/1a1a1a/D4AF37?text=${work.category}+Work`;
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                      <ZoomIn size={32} className="text-gold" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles size={12} className="text-gold" />
                      <span className="font-sans text-xs text-gold tracking-wider">{work.category}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-2">{work.title}</h3>
                    <p className="font-body text-sm text-white/50">{work.description}</p>
                  </div>

                  {/* Gold Bottom Border on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Navigation */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 backdrop-blur-md p-3 rounded-full border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gold/20"
          >
            <ChevronRight size={24} className="text-gold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentWorkShowcase;