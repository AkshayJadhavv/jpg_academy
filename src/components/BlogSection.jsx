import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { blogData } from '../data/blogData';

const BlogSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full border border-gold/20 mb-4">
            <BookOpen size={14} className="text-gold" />
            <span className="font-sans text-xs tracking-wider text-gold uppercase">Our Journal</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Latest <span className="text-gradient-gold">Insights</span> & Updates
          </h2>
          <p className="font-body text-white/60 max-w-2xl mx-auto">
            Stay updated with academy news, creative trends, workshops, and student achievements
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-gold/40 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/1a1a1a/D4AF37?text=${blog.category}`;
                  }}
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30">
                  <span className="font-sans text-xs text-gold tracking-wider">{blog.category}</span>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-3 text-white/40 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="font-body text-white/50 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>

                {/* Read More Button */}
                <motion.a
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-gold font-sans text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>

              {/* Gold Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-black transition-all duration-300 group"
          >
            View All Articles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;