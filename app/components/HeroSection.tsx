import { Search, ArrowRight, Zap, ShieldCheck, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_banner.jpg"
          alt="Dubai Desert Experience"
          className="w-full h-full object-cover"
        />
        {/* Cinematic Overlay - Darker on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full pt-20">
        <div className="max-w-2xl space-y-8">
          {/* Subtle Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
              Dubai Travel Assistance / UAE Entry Support
            </span>
          </div>

          {/* Main Hero Text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Experience the <br />
              <span className="text-white/90 font-light italic">
                Best of Dubai
              </span>
            </h1>
            <p className="text-white/80 text-md md:text-lg max-w-lg leading-relaxed">
              Golden deserts and world-class service. Secure your UAE entry
              permit through our streamlined, expert-led digital portal.
            </p>
          </div>

          {/* Luxury Action Bar */}
          <div className="relative group max-w-lg">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/50 group-focus-within:text-white transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Enter your nationality"
              className="w-full pl-16 pr-36 py-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all text-lg"
            />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-white text-slate-900 rounded-xl font-bold hover:bg-[#E11D48] hover:text-white transition-all flex items-center gap-2 group/btn">
              Start Application
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Bottom Features */}
          <div className="flex flex-wrap gap-8 pt-4">
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 rounded-lg">
                <Zap size={20} className="text-rose-400" />
              </div>
              <div>
                <p className="text-sm font-bold">24h Express</p>
                <p className="text-[11px] opacity-60 uppercase tracking-wider">
                  Fast-Tracked
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <div className="p-2 bg-white/10 rounded-lg">
                <ShieldCheck size={20} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold">
                  Expert Document Review Support
                </p>
                <p className="text-[11px] opacity-60 uppercase tracking-wider">
                  Expert Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Scroll Indicator */}
    </section>
  );
}
