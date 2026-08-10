import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: "What services do you provide?",
      answer: "NextGen Visual specializes in three core digital services: 1) Modern Website Building, 2) AI-Powered Video Creation (UGC, promos, product ads), and 3) Professional Video Editing for social media, YouTube, and digital platforms."
    },
    {
      question: "Can you build a website from my idea or reference?",
      answer: "Yes, absolutely! We analyze your brand identity, preferences, and reference designs (or wireframes) to craft a high-performance, original, responsive website customized for your specific business goals."
    },
    {
      question: "Can you create AI promotional videos?",
      answer: "Yes, we produce cutting-edge AI promotional videos, AI UGC-style advertorials, digital product demos, and cinematic AI visual assets designed to capture attention and boost conversions."
    },
    {
      question: "Do you also edit existing videos?",
      answer: "Yes! If you already have raw video footage, we provide professional post-production editing—including color grading, sound design, motion graphics, captioning, and platform-specific formatting."
    },
    {
      question: "Can you create content for Instagram and YouTube?",
      answer: "Definitely. We optimize videos for Instagram Reels, YouTube Shorts, YouTube Long-form, TikTok, and digital ads, ensuring the aspect ratios, pacing, and visual style match each platform's best practices."
    },
    {
      question: "How can I start a project?",
      answer: "Starting a project is simple: click 'Start a Project' or fill out the contact form below with your project details. We will review your requirements and get back to you promptly with next steps and a customized proposal."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-wider text-black">
              <HelpCircle className="w-3.5 h-3.5 text-black" />
              <span>GOT QUESTIONS?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-600 font-medium text-base">
              Everything you need to know about working with NextGen Visual.
            </p>
          </div>
        </AnimatedSection>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={index} direction="up" delay={index * 100}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#F6F6F8] border-black/40 shadow-sm'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-extrabold text-black group-hover:text-black">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#FFD600] text-black rotate-180 scale-110' : 'bg-gray-100 text-gray-700 group-hover:bg-[#FFD600]'
                    }`}>
                      <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </button>

                  {/* Collapsible Answer */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-700 font-medium leading-relaxed border-t border-gray-200/60 animate-fade-in mt-2">
                      <p className="pt-4">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
