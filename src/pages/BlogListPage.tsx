import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { Clock, ArrowUpRight, Search } from 'lucide-react';

const blogCategories = ['All Topics', 'Cloud', 'AI', 'Cybersecurity', 'Microsoft 365', 'Google Workspace'];

export const BlogListPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All Topics');
  const [query, setQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogData.filter((post) => {
      const matchCat = selectedCat === 'All Topics' || post.category === selectedCat;
      const matchQuery = post.title.toLowerCase().includes(query.toLowerCase()) || post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCat, query]);

  const categoryBadgeColors: Record<string, string> = {
    'Cloud': 'bg-blue-50 text-blue-700 border-blue-200',
    'AI': 'bg-purple-50 text-purple-700 border-purple-200',
    'Cybersecurity': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Microsoft 365': 'bg-blue-50 text-blue-700 border-blue-200',
    'Google Workspace': 'bg-amber-50 text-amber-700 border-amber-200',
  };

  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 pb-28 bg-[#F8FAFC]">
      
      {/* Header */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 mb-12 sm:mb-14 text-center">
        <div className="max-w-3xl mx-auto space-y-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-950 tracking-tight leading-[1.1] text-center mx-auto">
            <span className="block">Enterprise Technology</span>
            <span className="block">Insights & Perspectives.</span>
          </h1>
          <p className="text-base sm:text-lg font-body font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto text-center">
            Practical strategies on cloud economics, Zero-Trust cybersecurity, AI workflow integration, and modern workplace architecture.
          </p>

          {/* Search bar */}
          <div className="pt-6 w-full max-w-lg mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles by keyword or topic..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-sm font-body focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar justify-start md:justify-center">
          {blogCategories.map((cat) => {
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="liquid-glass-light rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-8 space-y-4 font-body">
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${categoryBadgeColors[post.category] || 'bg-slate-50 text-slate-700'}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-heading italic font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-tight">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-8 pb-8 pt-4 border-t border-slate-200/70 flex items-center justify-between font-body">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-800 block">{post.author.name}</span>
                  <span className="text-[11px] text-slate-400">{post.date}</span>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
