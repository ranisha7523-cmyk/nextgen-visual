import React from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function About() {
  const highlights = [
    "Modern Web Architecture & Responsive Design",
    "High-Impact AI Promotional & UGC Video Production",
    "Cinematic Video Editing for Reels, YouTube & Ads",
    "Custom Tailored Solutions for Every Brand"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Highlight */}
          <div className="lg:col-span-6 space-y-6">
            <AnimatedSection direction="right" delay={100}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-wider text-black">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD600] fill-[#FFD600]" />
                <span>About NextGen Visual</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
                Turning Ideas Into{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Digital Experiences</span>
                  <span className="absolute inset-x-0 bottom-1 h-3.5 bg-[#FFD600] -z-10 rounded animate-sweep"></span>
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300}>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                NextGen Visual helps businesses, creators and brands build a stronger digital presence through modern websites, AI-powered video content and professional video editing.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={400}>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-black font-extrabold text-sm uppercase tracking-wider group hover:text-[#E5C000] transition-colors"
                >
                  <span className="border-b-2 border-[#FFD600] pb-0.5">Let's Discuss Your Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Values & Visual Grid */}
          <div className="lg:col-span-6">
            <AnimatedSection direction="scale" delay={300}>
              <div className="bg-[#F6F6F8] p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-sm space-y-6 relative overflow-hidden card-hover">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD600]/20 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />

                <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-4 flex items-center justify-between">
                  <span>Our Core Focus</span>
                  <span className="text-xs bg-black text-[#FFD600] px-2.5 py-1 rounded-full font-bold">NEXTGEN</span>
                </h3>

                <div className="space-y-4">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 group/item">
                      <CheckCircle2 className="w-5 h-5 text-black fill-[#FFD600] shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                      <span className="text-sm sm:text-base text-gray-800 font-semibold group-hover/item:text-black transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <span>Creativity • AI • Craft</span>
                  <span className="text-black font-extrabold">NextGen Visual Studio</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
