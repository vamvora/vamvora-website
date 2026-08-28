import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ArrowUpRight } from 'lucide-react';
import { blogData } from '../../data/blogData';
import { BlurReveal } from '../common/BlurReveal';

export const BlogPreview: React.FC = () => {
  // Infinite floating items for blog carousel
  const floatingPosts = [...blogData, ...blogData, ...blogData];

  const categoryBadgeColors: Record<string, string> = {
    'Cloud': 'bg-blue-50 text-blue-700 border-blue-200/60',
    'AI': 'bg-purple-50 text-purple-700 border-purple-200/60',
    'Cybersecurity': 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    'Microsoft 365': 'bg-sky-50 text-sky-700 border-sky-200/60',
    'Google Workspace': 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
  };

  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#F1F5F9] border-t border-slate-200/70 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Centered Section Header with BlurReveal */}
        <BlurReveal className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.15] max-w-3xl mx-auto text-center">
            <span className="block">Insights For Modern</span>
            <span className="block">Technology Leaders.</span>
          </h2>
          <p className="text-base sm:text-lg font-body font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto pt-1">
            Practical articles on cloud governance, workplace productivity, enterprise AI pipelines, and zero-trust cybersecurity.
          </p>
        </BlurReveal>
      </div>

      {/* Floating Horizontal Blog Cards with Side Fades */}
      <BlurReveal delay={0.15} className="relative w-full overflow-hidden py-4 mask-carousel-fade">
        {/* Left & Right Side Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-28 sm:w-48 bg-gradient-to-r from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 sm:w-48 bg-gradient-to-l from-[#F1F5F9] via-[#F1F5F9]/80 to-transparent z-10 pointer-events-none" />

        {/* Floating Track */}
        <div className="flex gap-6 w-max animate-scroll-left">
          {floatingPosts.map((post, idx) => (
            <article
              key={`${post.id}-${idx}`}
              className="w-[340px] sm:w-[380px] deep-glass rounded-3xl overflow-hidden flex flex-col justify-between group relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-white flex-shrink-0"
            >
              <div className="p-7 space-y-4">
                {/* Meta info & Category */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[11px] font-body font-semibold px-3 py-1 rounded-full deep-glass-inner ${categoryBadgeColors[post.category] || 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-body text-slate-500 font-normal">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-slate-900 line-clamp-2 group-hover:text-[#0145F2] transition-colors leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm font-body text-slate-600 font-normal line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="px-7 py-4 deep-glass-inner border-t border-slate-200/70 flex items-center justify-between text-xs font-body">
                <span className="text-slate-500 font-medium">
                  {post.date}
                </span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-body font-semibold text-[#0145F2] hover:underline inline-flex items-center gap-1 group/link"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </BlurReveal>

      {/* Centered Bottom CTA in Glassmorphism with BlurReveal */}
      <BlurReveal delay={0.25} className="text-center mt-10">
        <Link
          to="/blog"
          className="deep-glass-inner inline-flex items-center gap-2 text-xs sm:text-sm font-body font-semibold px-8 py-4 rounded-full text-slate-900 hover:bg-white shadow-sm transition-all"
        >
          <span>View All Insights & Case Studies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </BlurReveal>
    </section>
  );
};


