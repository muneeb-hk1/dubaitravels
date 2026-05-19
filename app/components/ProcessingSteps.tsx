import Link from "next/link";
import {
  FileText,
  ClipboardCheck,
  PlaneTakeoff,
  Mail,
  ChevronRight,
} from "lucide-react";

const PremiumProcessSection = () => {
  const steps = [
    {
      icon: FileText,
      stage: "01",
      title: "Submit Online",
      text: "Provide personal details & upload required documents in minutes",
    },
    {
      icon: ClipboardCheck,
      stage: "02",
      title: "Confirm Details",
      text: "Our experts review all information for complete accuracy",
    },
    {
      icon: PlaneTakeoff,
      stage: "03",
      title: "Sent for Review",
      text: "Your application is submitted to  Application Processing Assistance",
    },
    {
      icon: Mail,
      stage: "04",
      title: "Receive Permit",
      text: "Get your  Travel Status Update delivered straight to your email",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#FDFDFB] font-sans flex items-center justify-center overflow-hidden py-24 px-6 md:px-16 lg:px-24">
      {/* === ABSTRACT LIGHT/GOLD BACKGROUND ACCENTS === */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#F9F1E6] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[40%] h-[60%] bg-[#F7EDDE] rounded-full blur-[130px]" />
        {/* Subtle Textured Overlay */}
        <div
          className="absolute inset-0 bg-repeat opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23C5A059' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto">
        {/* === HEADER SECTION === */}
        <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] text-[#C5A059] uppercase mb-3">
              Process Overview
            </p>
            <h2 className="text-5xl md:text-5xl bauhaus font-extrabold leading-[1.0] text-slate-900 tracking-tighter">
              A Seamless <br />
              <span className="text-[#E11D48] italic">
                Application Journey.
              </span>
            </h2>
          </div>

          {/* Premium Button: Clean White with Gold Accents */}
          <Link
            href="https://wa.me/+971502947867"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#1E293B] rounded-xl font-bold border-2 border-[#1E293B]/10 hover:bg-[#F9F1E6]/50 hover:border-[#C5A059]/50 transition-all shadow-[0_10px_20px_-10px_rgba(0,0,0,0.05)] active:scale-95 whitespace-nowrap"
          >
            Apply Now
            <ChevronRight size={18} className="text-[#C5A059]" />
          </Link>
        </header>

        {/* === CARDS GRID === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const IconComponent = step.icon;

            return (
              <div key={step.stage} className="relative group">
                {/* PREMIUM CARD: Whitish Base with Glassmorphism */}
                <div className="relative z-10 bg-white/60 backdrop-blur-lg rounded-[24px] p-8 h-full border border-white flex flex-col items-start transition-all duration-300 hover:shadow-[0_40px_80px_-20px_rgba(197,160,89,0.15)] hover:border-[#C5A059]/30">
                  {/* Subtly Glowing 'Backlight' behind the icon */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-[#C5A059]/10 rounded-full blur-[20px] -z-10" />

                  {/* === TOP ROW: ICON & STAGE === */}
                  <div className="w-full flex justify-between items-center mb-10">
                    <div className="p-4 bg-white/80 rounded-[20px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-[#C5A059]/10 group-hover:border-[#C5A059]/30 transition-colors">
                      {/* Icon in contrasting Navy/Deep Slate */}
                      <IconComponent
                        size={24}
                        className="text-[#1E293B]"
                        strokeWidth={2.5}
                      />
                    </div>
                    {/* Stage Number in Gold */}
                    <span className="text-xl font-black text-[#E11D48]">
                      {step.stage}
                    </span>
                  </div>

                  {/* === CONTENT: TITLE & TEXT === */}
                  <div className="flex-grow space-y-3">
                    <h3 className="text-2xl font-black font-bold text-[#1E293B] leading-[1.2] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-[220px]">
                      {step.text}
                    </p>
                  </div>

                  {/* Subtle Golden Divider at the bottom */}
                  <div className="w-12 h-1 bg-gradient-to-r from-[#E11D48]/80 to-[#E9D9B5]/80 rounded-full mt-10 transition-transform group-hover:scale-x-125 group-hover:origin-left" />
                </div>

                {/* === CONNECTING CHEVRON (LIGHT GOLD) === */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 z-20 -translate-y-1/2 p-2 bg-white/50 rounded-full text-[#E9D9B5]">
                    <ChevronRight size={16} strokeWidth={3} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PremiumProcessSection;
