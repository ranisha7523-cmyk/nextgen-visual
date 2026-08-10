import React from 'react';
import { Palette, Cpu, Sparkles, Target } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      icon: Palette,
      title: "MODERN & CREATIVE",
      description: "Fresh visual concepts designed to help your brand stand out.",
      isYellow: false
    },
    {
      number: "02",
      icon: Cpu,
      title: "AI-POWERED",
      description: "Modern AI-driven creative workflows for engaging and efficient content production.",
      isYellow: false
    },
    {
      number: "03",
      icon: Sparkles,
      title: "ALL-IN-ONE CREATIVE SUPPORT",
      description: "Websites, AI videos and professional video editing under one roof.",
      isYellow: true // HIGHLIGHT CARD IN YELLOW
    },
    {
      number: "04",
      icon: Target,
      title: "BUILT FOR YOUR BRAND",
      description: "Every project is customized according to your goals, audience and visual identity.",
      isYellow: false
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#F6F6F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" delay={100}>
          <div className="max-w-3xl mb-16 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-black">
              <span>OUR ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
              Why Choose{' '}
              <span className="relative inline-block px-1">
                <span className="relative z-10">NextGen Visual</span>
                <span className="absolute inset-x-0 bottom-1 h-3.5 bg-[#FFD600] -z-10 rounded animate-sweep"></span>
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 font-medium max-w-2xl">
              We combine creative thinking, modern technology and professional execution to create digital work that makes an impact.
            </p>
          </div>
        </AnimatedSection>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div
                  className={`rounded-3xl p-8 transition-all duration-500 card-hover border flex flex-col justify-between relative overflow-hidden h-full ${
                    item.isYellow
                      ? 'bg-[#FFD600] border-[#E5C000] text-black shadow-xl scale-105 z-10 animate-float'
                      : 'bg-white border-gray-200 text-black shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-4xl font-black ${item.isYellow ? 'text-black/80' : 'text-gray-300'}`}>
                        {item.number}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                        item.isYellow ? 'bg-black text-[#FFD600]' : 'bg-gray-100 text-black'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-black tracking-tight mb-3 leading-snug">
                      {item.title}
                    </h3>

                    <p className={`text-xs sm:text-sm font-medium leading-relaxed ${
                      item.isYellow ? 'text-black/90 font-semibold' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  {item.isYellow && (
                    <div className="mt-6 pt-4 border-t border-black/10 text-[11px] font-extrabold uppercase tracking-wider text-black flex items-center justify-between">
                      <span>★ FEATURED VALUE</span>
                      <span>NEXTGEN</span>
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
