import React from 'react';
import { Search } from 'lucide-react';

const Page = () => {
  return (
    <div className="flex items-center justify-center bg-[#F8FAFC] relative overflow-hidden p-6 pt-36 pb-18">
      {/* Background Dot Pattern to match previous design */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}  
      />

      {/* Main Dark Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#0B1221] rounded-[40px] p-8 md:p-10 text-center shadow-2xl">
        
        {/* Top Search Icon Circle */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner">
          <Search className="h-6 w-6 text-slate-400" />
        </div>

        {/* Text Content */}
        <h2 className="mb-4 text-4xl md:text-3xl font-extrabold text-white tracking-tight">
          Track Your Application
        </h2>
        <p className="mb-10 text-slate-400 text-lg">
          Enter your Tracking ID to see real-time status
        </p>

        {/* Input Group */}
        <div className="relative mx-auto flex w-full max-w-lg items-center overflow-hidden rounded-2xl border border-white/10 bg-[#161F30] p-1.5 focus-within:ring-2 focus-within:ring-rose-500/20 transition-all">
          <input
            type="text"
            placeholder="e.g. TUAE-AB12-CD34"
            className="w-full bg-transparent px-6 py-3 text-white placeholder:text-slate-500 focus:outline-none"
          />
          <button className="flex items-center gap-2 rounded-xl bg-[#E11D48] px-8 py-3.5 font-bold text-white transition-all hover:bg-[#BE123C] active:scale-95 shadow-lg shadow-rose-900/20">
            <Search className="h-4 w-4" />
            Track
          </button>
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-sm font-medium text-slate-500">
          Check your confirmation email for your Tracking ID
        </p>
      </div>
    </div>
  );
};

export default Page;