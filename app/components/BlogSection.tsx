import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      date: 'Feb 26, 2026',
      readTime: '4 min read',
      title: 'Dubai Permit Guide 2026',
      description: 'Planning a trip to Dubai in 2026? Here\'s a simple and updated guide covering permit types, required documents, processing time, an...',
      image: '/blog1.jpg', // Passport stamp image
    },
    {
      id: 2,
      date: 'Feb 20, 2026',
      readTime: '3-4 min read',
      title: 'Dubai Tourist Permit 2026 – Complete Guide for Travelers',
      description: 'Planning to visit Dubai in 2026? Here\'s everything you need to know about Dubai tourist permit types, requirements, processing tim...',
      image: '/blog2.jpg', // Passport on documents
    },
    {
      id: 3,
      date: 'Feb 20, 2026',
      readTime: '4-5 min read',
      title: 'UAE Permit Processing Time in 2026 – Complete Guide for Travelers',
      description: 'Wondering how long a UAE tourist permit takes in 2026? Learn about standard and express processing times, possible delays, and tip...',
      image: '/blog1.jpg', // Similar to first image per screenshot
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl bauhaus font-black text-[#0F172A] mb-4">
        Insights & Updates
      </h2>
      <p className="text-slate-500 text-base md:text-md mb-8">
        Stay informed with the latest travel insights, UAE entry updates, and expert guidance for a smooth journey.
      </p>
      <button className="px-6 py-2 border border-slate-600 rounded-full text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors">
        Explore all articles
      </button>
    </div>

    {/* Blog Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => (
        <div 
          key={blog.id} 
          className="group bg-white rounded-[32px] overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col h-full transition-transform duration-300 hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative h-64 w-full overflow-hidden">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              <span className="text-[10px] font-bold text-slate-800 uppercase">{blog.readTime}</span>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-sm font-medium text-slate-400 mb-3">
              {blog.date}
            </span>
            <h3 className="text-2xl font-bold text-[#0F172A] mb-4 leading-snug min-h-[64px] line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8 flex-grow line-clamp-3">
              {blog.description}
            </p>

            <Link 
              href="https://wa.me/+971502947867" 
              className="inline-flex items-center justify-center gap-2 bg-[#202E56] text-white px-6 py-3 rounded-full text-sm font-bold w-fit hover:bg-[#1a2545] transition-colors group/btn"
            >
              Read article
              <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default BlogSection;