"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FIXED: Renamed from 'Page' to 'Page'
const Page = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const faqs = [
  {
    question: "Which UAE entry permits can I apply for through this portal?",
    answer: "We facilitate a comprehensive range of entry options, including Tourist (Single & Multi-entry), Business, Transit, and Residence permits. Our system suggests the most suitable category based on your travel goals and nationality."
  },
  {
    question: "How do I initiate my application?",
    answer: "Our application flow is fully digitized. Simply select your country of origin, choose your permit type, and submit your documentation through our encrypted portal. Our experts handle the verification and submission to authorities."
  },
  {
    question: "What are the standard documentation requirements?",
    answer: "Generally, you only need a high-resolution color scan of your passport (valid for at least 6 months) and a recent passport-sized photograph. We will reach out if your specific region requires additional verification files."
  },
  {
    question: "What is the expected turnaround time for approval?",
    answer: "Standard applications typically conclude within 3 to 5 business days. For urgent travel, our Express service provides a fast-track option with approvals often granted within 24 to 48 hours."
  },
  {
    question: "Is it possible to extend my stay once I have arrived?",
    answer: "Yes, most visit and tourist permits allow for internal extensions of 30 or 60 days. You can initiate this process without exiting the country by contacting our support team via our dedicated WhatsApp channel."
  },
  {
    question: "What steps should I take if my application is not approved?",
    answer: "Government decisions are final, but rejections are often due to clerical errors. We review the official feedback, assist you in correcting the data, and manage the re-application process to maximize your chances of success."
  },
  {
    question: "Are there specific customs protocols I should be aware of?",
    answer: "The UAE maintains clear guidelines regarding medications and restricted imports. We provide a simplified checklist of regulated items to ensure you pass through customs with total peace of mind."
  },
  {
    question: "What should I know about the local currency?",
    answer: "The UAE Dirham (AED) is the official currency, fixed at a rate of 3.67 to 1 USD. While digital payments and credit cards are used almost universally, carrying some cash is recommended for traditional souks and local markets."
  },
  {
    question: "Will I face language barriers in the UAE?",
    answer: "While Arabic is the official language, English is the lingua franca for commerce, tourism, and law. You will find that all signage, menus, and professional services are primarily provided in English."
  },
  {
    question: "Is the UAE safe for solo and family travel?",
    answer: "The UAE is globally recognized as one of the safest destinations on earth. With exceptionally low crime rates and world-class emergency infrastructure, it offers a secure environment for all visitors."
  }
];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-sans">
      {/* Header */}
      <div className="text-center mt-10 mb-16">
        <span className="bg-[#FDF2F2] text-[#E11D48] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#FEE2E2]">
          Assistance
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#0F172A]">
          Commonly Asked <span className="text-[#E11D48]">Questions</span>
        </h2>
        <p className="mt-4 text-slate-400 text-lg">
          Clarifying your journey and entry requirements
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="border-b border-slate-100 last:border-none"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-6 flex justify-between items-center text-left group transition-all"
              >
                <span className={`text-md font-bold transition-colors ${isOpen ? 'text-[#213657]' : 'text-[#1e293b] group-hover:text-[#E11D48]'}`}>
                  {faq.question}
                </span>
                
                <div className={`flex shrink-0 items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#E11D48] text-white shadow-lg shadow-rose-200' : 'bg-white border border-slate-200 text-slate-400'}`}>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="pb-6 text-slate-500 leading-relaxed text-[16px] max-w-3xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page; // FIXED: Exporting the capitalized component