import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { useConsultationModal } from '../context/ModalContext';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openConsultation } = useConsultationModal();

  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Related articles
  const relatedPosts = blogData.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-36 sm:pt-40 lg:pt-44 pb-28 bg-[#F8FAFC]">
      <article className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Top Back Link */}
        <div className="mb-8 max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-body font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Article Header Card */}
        <div className="liquid-glass-light rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto space-y-6 shadow-md font-body">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading italic font-bold text-slate-950 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Block */}
          <div className="pt-6 border-t border-slate-200/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white text-slate-900 shadow-sm border border-slate-200 flex items-center justify-center font-bold text-sm">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 block">{post.author.name}</span>
                <span className="text-xs text-slate-500">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="hidden sm:inline-block text-xs font-medium text-slate-600 bg-white/80 border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Article Body Content */}
        <div className="liquid-glass-light rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto mt-8 space-y-6 shadow-md font-body">
          <p className="text-lg font-normal text-slate-800 leading-relaxed italic border-l-4 border-slate-900 pl-5 bg-slate-50/80 py-4 rounded-r-2xl">
            {post.excerpt}
          </p>

          <div className="space-y-6 text-base text-slate-700 leading-relaxed pt-4 font-normal">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Consultation Interstitial Card */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-2xl font-heading italic font-bold text-white">
                Need Guidance Applying This To Your Company?
              </h3>
              <p className="text-xs sm:text-sm font-body text-slate-300">
                Book a 1-on-1 strategy call with our Senior Solutions Architects.
              </p>
            </div>
            <button
              type="button"
              onClick={() => openConsultation(post.category)}
              className="liquid-glass-light bg-white/90 hover:bg-white text-slate-950 text-xs sm:text-sm font-semibold px-7 py-3.5 rounded-full transition-all shadow-md flex-shrink-0 cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="max-w-4xl mx-auto mt-16 space-y-6 font-body">
          <h2 className="text-2xl font-heading italic font-bold text-slate-950">
            Recommended Related Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.id}
                to={`/blog/${rel.slug}`}
                className="p-7 rounded-3xl liquid-glass-light space-y-3 block hover:shadow-xl transition-all duration-300 group"
              >
                <span className="text-[11px] font-bold uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {rel.category}
                </span>
                <h4 className="text-xl font-heading italic font-bold text-slate-950 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {rel.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
};
