"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const reviews = [
  {
    text: "After a clerical error on my part, the team intervened immediately to rectify my itinerary. Their efficiency saved my trip. The level of transparency regarding processing times was genuinely refreshing.",
    name: "Noura Al-Farsi",
    role: "Creative Director, Muscat",
  },
  {
    text: "I applied for a short-notice business entry with incomplete paperwork. The support staff personally reviewed my files and expedited the submission. I received my approval notice in record time.",
    name: "Muhammad Usman",
    role: "E-commerce Founder, Karachi",
  },
  {
    text: "Straightforward pricing with absolutely no hidden surcharges. My 96-hour transit permit was processed in less than a day, and the airport logistics were handled with professional punctuality.",
    name: "Priya N.",
    role: "Product Strategy, Bengaluru",
  },
  {
    text: "The premium service is a worthwhile investment for frequent travelers. The precision of their documentation process and the real-time status updates eliminated all my travel anxiety.",
    name: "James Wilson",
    role: "Strategy Consultant, London",
  }
];

  return (
    <section className="relative w-full py-24 px-4 bg-[#F9FAFB] overflow-hidden">
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl bauhaus font-black text-[#1E293B] mb-2 uppercase tracking-tight">
            Verified Experiences
          </h2>
          <h2 className="text-3xl md:text-4xl bauhaus font-black text-[#E11D48] mb-6 uppercase tracking-tight">
            From Global Travelers
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
            Real stories from clients who trusted us with their journey to the UAE.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative px-4 md:px-12">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.next-btn',
              prevEl: '.prev-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col items-center text-center min-h-[420px]">
                  {/* Quote & Stars */}
                  <div className="flex justify-between w-full mb-8">
                    <Quote className="text-rose-100 w-10 h-10 fill-rose-100" />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-base mb-10 flex-grow italic">
                    {review.text}
                  </p>

                  {/* Author */}
                  <div className="mt-auto">
                    <h4 className="text-[#E11D48] font-black text-lg mb-1">
                      {review.name}
                    </h4>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                      {review.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button className="prev-btn w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center bg-white text-slate-600 hover:border-[#E11D48] hover:text-[#E11D48] transition-all shadow-sm disabled:opacity-20">
              <ChevronLeft size={24} />
            </button>
            <button className="next-btn w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center bg-slate-900 text-white hover:bg-[#E11D48] hover:border-[#E11D48] transition-all shadow-sm disabled:opacity-20">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;