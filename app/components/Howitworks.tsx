import React from 'react';
import { MousePointer2, Camera, ShieldCheck, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <MousePointer2 className="w-6 h-6 text-[#C5A059]" />,
      title: 'Digital Intake',
      description: 'Initiate your entry request through our secure portal. Provide essential details and select your preferred processing velocity.',
    },
    {
      number: '02',
      icon: <Camera className="w-6 h-6 text-[#C5A059]" />,
      title: 'Document Upload',
      description: 'Submit high-resolution scans of your credentials. Our intelligent system provides real-time guidance on quality requirements.',
    },
    {
      number: '03',
      icon: <ShieldCheck className="w-6 h-6 text-[#C5A059]" />,
      title: 'Expert Validation',
      description: 'Our compliance team verifies your dossier before official filing, ensuring a 99% approval rate through the UAE authorities.',
    },
  ];

  return (
    <section className="relative bg-[#fffff7] py-20 px-6 overflow-hidden">
      {/* Background Sophistication */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#F9F1E6]/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-50 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 shadow-sm mb-6">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#C5A059] uppercase">
              The Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl bauhaus font-black text-slate-900 leading-[1.0] tracking-tighter mb-6">
            Our Streamlined <br />
            <span className="text-slate-400 italic serif">Application Protocol.</span>
          </h2>
          <p className="text-slate-500 text-lg font-medium max-w-md">
            Experience a white-glove approach to UAE entry, where speed meets absolute precision.
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Floating Number Background */}
              <div className="absolute -top-12 -left-4 text-[120px] font-black text-slate-100/60 select-none group-hover:text-[#ffedd4] transition-colors duration-500">
                {step.number}
              </div>

              <div className="relative z-10 bg-white/40 backdrop-blur-md rounded-[40px] p-10 h-full border border-gray-300 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(197,160,89,0.15)] hover:bg-white/80">
                
                {/* Icon Wrapper with Custom Gold Glow */}
                <div className="relative w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-10 group-hover:border-[#C5A059]/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-[#C5A059]/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[16px] font-medium">
                    {step.description}
                  </p>
                </div>

                {/* Interactive Detail Link */}
                <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Stage {step.number}</span>
                    <div className="p-2 bg-slate-50 rounded-full text-slate-400 group-hover:bg-[#E11D48] group-hover:text-white transition-all">
                        <ChevronRight size={14} />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;