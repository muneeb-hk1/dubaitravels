"use client"
import { useState } from 'react';
import { ShieldCheck, Scale, Clock, AlertCircle, FileText, ChevronRight } from 'lucide-react';

const Page = () => {
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: 'Agreement & Revisions' },
    { id: 'eligibility', title: 'User Requirements' },
    { id: 'scope', title: 'Services Portfolio' },
    { id: 'pricing', title: 'Fees & Transactions' },
    { id: 'timelines', title: 'Processing Windows' },
    { id: 'documents', title: 'Data Integrity' },
    { id: 'refunds', title: 'Refund Provisions' }
  ];

  const summaryPoints = [
    "Engagement with our platform constitutes full legal agreement.",
    "Our role is facilitative; government bodies hold final authority.",
    "Stated durations are estimates and subject to external change.",
    "Users must ensure all submitted records are authentic and valid.",
    "Cost structures are fixed at checkout with secure handling.",
    "Refund eligibility is determined by the application status."
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 mt-15">
        
        {/* === HEADER === */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#FDF2F2] text-[#E11D48] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#FEE2E2]">
              Compliance
            </span>
            <span className="text-slate-400 text-sm font-medium">Last updated: April 20, 2026</span>
          </div>
          <h1 className="text-5xl md:text-5xl font-black text-[#0F172A] tracking-tight">
            Terms of <span className="text-[#E11D48]">Use</span>
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-3xl leading-relaxed">
            Establishing a transparent framework for our partnership. These provisions outline the operational standards for dubaitravels’s digital platform and consultancy services.
          </p>
        </header>

        {/* === QUICK SUMMARY BOX === */}
        <section className="mb-16 bg-[#0B1221] rounded-[40px] p-8 md:p-12 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white/10 rounded-2xl">
              <Scale className="text-[#E11D48] w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">Essential Overview</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {summaryPoints.map((point, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <ShieldCheck className="text-[#E11D48] w-5 h-5 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* === SIDEBAR NAV === */}
          <aside className="lg:w-1/4 lg:sticky lg:top-10">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-1">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-3">
                Contents
              </h3>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    const element = document.getElementById(section.id);
                    if (element) {
                      const yOffset = -40; 
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${
                    activeSection === section.id 
                    ? 'bg-rose-50 text-[#E11D48]' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-[#0F172A]'
                  }`}
                >
                  {section.title}
                  <ChevronRight size={14} className={`transition-transform ${activeSection === section.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:w-3/4 space-y-12 pb-24">
            <Section id="acceptance" title="Agreement & Revisions">
              By utilizing our digital interface or engaging our support, you formally consent to these Terms. We reserve the right to update these protocols to reflect regulatory changes; continued use signifies acceptance of the current version.
            </Section>

            <Section id="eligibility" title="User Requirements">
              Users must possess the legal authority to bind themselves to these conditions. You are responsible for the veracity of all submitted data and for maintaining the strict confidentiality of your unique tracking credentials.
            </Section>

            <Section id="scope" title="Services Portfolio">
              dubaitravels operates as a facilitation platform offering document preparation, secure payment routing, and application tracking for UAE entry permits. <span className="text-[#E11D48] font-bold">Please note that official government entities hold the exclusive right to approve or deny applications.</span>
            </Section>

            <Section id="pricing" title="Fees & Transactions">
              All costs are disclosed prior to finalization and fluctuate based on permit type and expedited options. Our third-party processors ensure financial security. External banking institutions may apply independent processing or conversion fees.
            </Section>

            <Section id="timelines" title="Processing Windows">
              Temporal estimates provided on our site reflect standard historical averages. External factors, including public holidays, government backlogs, or policy shifts, may cause deviations. We do not guarantee fixed turnaround dates.
            </Section>

            <Section id="refunds" title="Refund Provisions">
              <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-100/50">
                <div className="flex gap-3 mb-3">
                  <AlertCircle className="text-[#E11D48] w-5 h-5" />
                  <span className="font-bold text-[#0F172A]">Financial Policy Note</span>
                </div>
                Cancellations requested before internal processing begins may qualify for a partial refund minus administrative overhead. Once an application is lodged with the authorities, all fees become non-refundable due to non-recoverable costs.
              </div>
            </Section>
          </main>
        </div>
      </div>
    </div>
  );
};

// Sub-component for individual sections
const Section = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <div id={id} className="scroll-mt-10">
    <h2 className="text-2xl font-black text-[#0F172A] mb-6 flex items-center gap-3">
      <div className="w-2 h-8 bg-[#E11D48] rounded-full" />
      {title}
    </h2>
    <div className="text-slate-600 leading-relaxed text-lg space-y-4">
      {children}
    </div>
  </div>
);

export default Page;