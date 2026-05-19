"use client"
import React, { useState, useEffect } from 'react';
import { 
    ShieldCheck, Eye, Lock, Database, Trash2, 
    Globe, ChevronRight, MessageSquare, Scale, 
    Share2, Cookie, LucideProps 
} from 'lucide-react';

const Page = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', title: 'Introduction' },
        { id: 'data-collect', title: 'Information Gathering' },
        { id: 'how-use', title: 'Data Processing' },
        { id: 'lawful-basis', title: 'Legal Grounds' },
        { id: 'sharing', title: 'Third-Party Disclosure' },
        { id: 'cookies', title: 'Tracking Technologies' },
        { id: 'security', title: 'Data Protection' },
        { id: 'retention', title: 'Storage & Removal' },
        { id: 'rights', title: "User Control" },
        { id: 'contact', title: 'Reach Out' },
    ];

    const summaryPoints = [
        "We prioritize data minimization, collecting only essential details.",
        "Your sensitive documents are processed with strict confidentiality.",
        "Transactions are handled by industry-leading encrypted payment gateways.",
        "Full transparency regarding your right to access or erase data.",
        "Cookies are used solely to optimize site stability and user flow.",
        "We maintain a strict policy against selling user data to third parties."
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-20% 0px -70% 0px' }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -40;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans relative overflow-hidden">
            <div 
                className="absolute inset-0 z-0 opacity-[0.4]"
                style={{
                    backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 mt-15">
                
                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-[#FDF2F2] text-[#E11D48] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#FEE2E2]">
                            Compliance
                        </span>
                        <span className="text-slate-400 text-sm font-medium">Revision Date: April 20, 2026</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight">
                        Privacy <span className="text-[#E11D48]">Policy</span>
                    </h1>
                    <p className="mt-6 text-xl text-slate-500 max-w-3xl leading-relaxed">
                        We are committed to safeguarding your personal information. This document outlines our protocols for data handling, security measures, and your privacy rights.
                    </p>
                </header>

                <section className="mb-16 bg-[#0B1221] rounded-[40px] p-8 md:p-12 shadow-2xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-white/10 rounded-2xl">
                            <ShieldCheck className="text-[#E11D48] w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-white">At a Glance</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {summaryPoints.map((point, idx) => (
                            <div key={idx} className="flex gap-3 items-start">
                                <div className="mt-1 bg-[#E11D48]/20 p-1 rounded-full">
                                    <div className="w-1.5 h-1.5 bg-[#E11D48] rounded-full" />
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <aside className="lg:w-1/4 lg:sticky lg:top-10">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-1">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-3">Navigation</h3>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
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

                    <main className="lg:w-3/4 space-y-16 pb-24">
                        <Section id="overview" icon={Eye} title="Introduction">
                            dubaitravels prioritizes the confidentiality of your personal data. This policy applies to information submitted during your visa application, interactions with our support team, and general engagement with our digital platform.
                        </Section>

                        <Section id="data-collect" icon={Database} title="Information Gathering">
                            To facilitate our services, we collect identity verification details, travel documentation, passport scans, and technical telemetry necessary to ensure a functional and personalized user experience.
                        </Section>

                        <Section id="how-use" icon={ShieldCheck} title="Data Processing">
                            We process your information to manage applications, communicate status updates, provide technical assistance, and maintain the security and integrity of our transaction environment.
                        </Section>

                        <Section id="lawful-basis" icon={Scale} title="Legal Grounds">
                            Our processing of your data is governed by contractual necessity for fulfilling your service requests, legal obligations, and our legitimate interest in providing a secure, high-performance platform.
                        </Section>

                        <Section id="sharing" icon={Share2} title="Third-Party Disclosure">
                            We only disclose information to official authorities for application processing and to trusted service providers who assist in our operations, under strict confidentiality agreements.
                        </Section>

                        <Section id="cookies" icon={Cookie} title="Tracking Technologies">
                            Our website utilizes cookies and similar tools to monitor site performance, remember user preferences, and provide a seamless navigation experience across different sessions.
                        </Section>

                        <Section id="security" icon={Lock} title="Data Protection">
                            <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
                                We implement robust cryptographic protocols and administrative controls to prevent unauthorized access or data breaches. All sensitive documents are stored in encrypted environments.
                            </div>
                        </Section>

                        <Section id="retention" icon={Trash2} title="Storage & Removal">
                            Records are kept only for the duration required to complete our service obligations and to satisfy legal, tax, or regulatory retention mandates.
                        </Section>

                        <Section id="rights" icon={Globe} title="User Control">
                            Depending on your location, you may hold rights to inspect, amend, or delete your personal records. We provide streamlined channels for you to exercise these data protections.
                        </Section>

                        <Section id="contact" icon={MessageSquare} title="Reach Out">
                            For inquiries regarding this policy or our data practices, please contact our privacy compliance team via our official support channels.
                        </Section>
                    </main>
                </div>
            </div>
        </div>
    );
};

interface SectionProps {
    id: string;
    title: string;
    icon: React.ComponentType<LucideProps>;
    children: React.ReactNode;
}

const Section = ({ id, title, icon: Icon, children }: SectionProps) => (
    <div id={id} className="scroll-mt-10">
        <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-rose-50 text-[#E11D48] rounded-lg">
                <Icon size={20} /> 
            </div>
            <h2 className="text-2xl font-black text-[#0F172A] tracking-tight">
                {title}
            </h2>
        </div>
        <div className="text-slate-600 leading-relaxed text-lg pl-12">
            {children}
        </div>
    </div>
);

export default Page;