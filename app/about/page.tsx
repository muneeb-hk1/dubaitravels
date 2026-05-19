import Link from 'next/link'
import { CheckCircle2, MessageSquareText, Handshake, Users, ClipboardCheck, Sparkles, Plane, 
  Users2, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  MapPin, 
  ArrowRight } from 'lucide-react';

const page = () => {
  const values = [
  { title: "Clear Pricing", desc: "No surprises — upfront fees with optional add-ons." },
  { title: "Quick Support", desc: "Reach us anytime via WhatsApp or email." },
  { title: "Step-by-Step Guidance", desc: "Know exactly what to submit and when." },
  { title: "Secure Handling", desc: "Your documents are protected and handled with care." },
  { title: "Flexible Options", desc: "Tourist, multi-entry, residence and more." },
  { title: "Live Updates", desc: "Track progress at every stage of your application." }
];

const services = [
  { title: "Tourist & Multi-Entry", icon: <Sparkles className="w-8 h-8 text-[#E11D48]" /> },
  { title: "Airport-to-Airport Options", icon: <Sparkles className="w-8 h-8 text-[#E11D48]" /> },
  { title: "Residence & Extensions", icon: <Sparkles className="w-8 h-8 text-[#E11D48]" /> },
  { title: "WhatsApp Assistance", icon: <MessageSquareText className="w-8 h-8 text-[#E11D48]" /> },
  { title: "Clear Processing Time", icon: <CheckCircle2 className="w-8 h-8 text-[#E11D48]" /> },
  { title: "Secure Process", icon: <Handshake className="w-8 h-8 text-[#E11D48]" /> },
  { title: "Human Support Team", icon: <Users className="w-8 h-8 text-[#E11D48]" /> },
];

const categories = [
  {
    title: "Tourist & Multi-Entry",
    desc: "Ideal for short visits and frequent travelers looking for flexibility.",
    icon: <Plane className="w-6 h-6" />
  },
  {
    title: "Airport-to-Airport",
    desc: "Smooth transition services for transit and visa change needs.",
    icon: <MapPin className="w-6 h-6" />
  },
  {
    title: "Residence & Extensions",
    desc: "Reliable long-term solutions and easy renewal support.",
    icon: <Users2 className="w-6 h-6" />
  }
];

const features = [
  { 
    title: "Instant Support", 
    desc: "Get quick responses when you need help.", 
    icon: <MessageCircle className="w-5 h-5 text-[#E11D48]" /> 
  },
  { 
    title: "Transparent Timelines", 
    desc: "Clear expectations with real-time updates.", 
    icon: <Clock className="w-5 h-5 text-[#E11D48]" /> 
  },
  { 
    title: "Private & Secure", 
    desc: "Your data is handled with strict security standards.", 
    icon: <ShieldCheck className="w-5 h-5 text-[#E11D48]" /> 
  }
];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 md:p-16 font-sans relative overflow-hidden">
      {/* Background Dot Pattern (from your design language) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        
        {/* === HERO SECTION === */}
        <section className="text-center max-w-4xl mx-auto pt-10">
          <span className="bg-[#FDF2F2] text-[#E11D48] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#FEE2E2]">
            About dubaitravels
          </span>
         <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.1]">
  Your trusted partner for UAE visas & <span className="text-[#E11D48]">smooth travel</span>
</h1>

<p className="mt-8 text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
  We help travelers, residents, and businesses apply for UAE visas with clear steps, transparent pricing, and real human support. From tourist visas to multi-entry and residence options — everything is designed to be simple, fast, and reliable.
</p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <WhatsAppButton />
            
          </div>
        </section>

        {/* === MISSION SECTION === */}
        <section className="bg-white p-12 md:p-16 rounded-[40px] border border-slate-100 shadow-xl shadow-rose-950/5 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-[#0F172A]">
              Our Mission
            </h2>
            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
  Travel should feel exciting — not complicated. Our mission is to simplify UAE visa processing through a digital-first experience backed by real support. We focus on clarity, speed, and trust so you can focus on your journey, not the paperwork.
</p>
          </div>
          <div className="bg-[#F9FAFB] p-8 rounded-3xl border border-slate-100 space-y-5">
            {[ "Simple step-by-step application flow", 
               "Transparent prices with no hidden fees", 
               "Secure document handling & status tracking"].map(item => (
                 <div key={item} className="flex gap-4 items-center p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                   <CheckCircle2 className="w-6 h-6 text-[#E11D48]" />
                   <span className="font-semibold text-slate-800">{item}</span>
                 </div>
               ))}
          </div>
        </section>

        {/* === WHAT WE DO (SERVICES) === */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative">
      {/* Header with red accent line */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="w-12 h-1.5 bg-[#E11D48] mb-6 rounded-full" />
          <h2 className="text-5xl font-black text-[#0F172A] tracking-tight mb-6">
            What We Do
          </h2>
         <p className="text-xl text-slate-500 leading-relaxed">
  We help individuals and companies apply for UAE visa categories and manage the 
  <span className="text-[#0F172A] font-semibold"> entire process end-to-end</span> — from document verification to secure payments and timely updates.
</p>
        </div>
        <button className="flex items-center gap-2 font-bold text-[#E11D48] hover:gap-4 transition-all">
          View all categories <ArrowRight size={20} />
        </button>
      </div>

      {/* Main Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {categories.map((item, idx) => (
          <div 
            key={idx} 
            className="group relative p-10 bg-white rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-rose-900/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F172A] text-white group-hover:bg-[#E11D48] transition-colors duration-300 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#0F172A] mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Feature Bar */}
      <div className="bg-[#F8FAFC] rounded-[40px] p-8 md:p-12 border border-slate-200/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-5 items-start">
              <div className="mt-1 p-2 bg-white rounded-lg shadow-sm border border-slate-100">
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-[#0F172A] mb-1">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-snug">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* === HOW IT WORKS (STEPS) === */}
        <section className="bg-[#0B1221] rounded-[40px] p-16 text-center shadow-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight text-white">How it works</h2>
          <p className="mt-3 text-slate-400">Our seamless process, simplified</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16 text-center">
           {[
  { num: 1, title: "Accept Terms", desc: "Review and begin your application." },
  { num: 2, title: "Upload Documents", desc: "Submit passport, photo, and required details." },
  { num: 3, title: "Fill Information", desc: "Provide basic personal and travel details." },
  { num: 4, title: "Choose Plan", desc: "Select your option with add-ons if needed." },
  { num: 5, title: "Pay & Track", desc: "Secure payment and track your status live." }
].map((step, idx) => (
              <div key={idx} className="space-y-4 relative flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E11D48] text-white font-extrabold text-2xl shadow-xl shadow-rose-900/20">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-white pt-2">{step.title}</h4>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-xs font-medium text-slate-600 max-w-xl mx-auto italic">
            Note: Entry approvals are at the discretion of UAE authorities. We facilitate applications and updates; we are not a government entity.
          </p>
        </section>

        {/* === WHY CHOOSE US === */}
        <section>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-black tracking-tight text-[#0F172A]">
             <h2 className="text-4xl font-black tracking-tight text-[#0F172A]">
  Why people trust dubaitravels
</h2>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:border-[#FEE2E2]">
                <h4 className="text-2xl font-black text-[#E11D48] tracking-tighter">
                  {value.title}
                </h4>
                <p className="mt-3 text-base text-slate-500 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* === FOOTER CTA & OFFICE === */}
        <section className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black text-[#0F172A] tracking-tight">  Ready to start your UAE visa process?</h3>
            <p className="mt-4 text-lg text-slate-500">Connect with us on WhatsApp — we’ll guide you step by step.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <WhatsAppButton />
              <Link href="https://wa.me/+971502947867" className="px-10 py-4.5 bg-[#0B1221] text-white font-bold rounded-full hover:bg-black transition-all">Apply Now</Link>
            </div>
          </div>
          <div className="border border-slate-100 rounded-3xl p-8 bg-[#F9FAFB]">
            <span className="text-xs font-bold text-[#E11D48] uppercase tracking-widest">Visit our office</span>
            <p className="mt-4 text-lg font-bold text-slate-800 leading-tight">
              BUSINESS VILLAGE | 1ST FLOOR, CLOCK TOWER DEIRA, Dubai, UAE
            </p>
          </div>
        </section>
        
      </div>
    </div>
  );
};

// Simplified WhatsApp button helper
const WhatsAppButton = () => (
  <Link href="https://wa.me/+971502947867" className="flex items-center gap-3 px-8 py-4.5 bg-[#E11D48] text-white font-bold rounded-full hover:bg-[#BE123C] transition-all shadow-lg shadow-rose-200">
    <MessageSquareText size={20} />
    Talk to us on WhatsApp
  </Link>
);

export default page;