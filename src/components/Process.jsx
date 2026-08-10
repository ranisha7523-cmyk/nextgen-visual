import React from 'react';
import { Search, Sparkles, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      icon: Search,
      description: "We understand your brand, goals, audience and project requirements."
    },
    {
      number: "02",
      title: "CREATE",
      icon: Sparkles,
      description: "We design, build, edit or produce the content according to your requirements."
    },
    {
      number: "03",
      title: "DELIVER",
      icon: Send,
      description: "You receive a polished and professional final product ready to use."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection direction="up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-wider text-black">
              <span>HOW WE WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
              Our 3-Step Process
            </h2>
            <p className="text-gray-600 font-medium text-base">
              Simple, transparent, and built for speed and visual excellence.
            </p>
          </div>
        </AnimatedSection>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <AnimatedSection key={index} direction="up" delay={index * 200}>
                <div
                  className="bg-[#F6F6F8] rounded-3xl p-8 border border-gray-200 shadow-sm relative group hover:border-black/40 transition-all duration-500 card-hover flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Step Number in Yellow */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-5xl lg:text-6xl font-black text-[#FFD600] tracking-tighter drop-shadow-xs group-hover:scale-110 transition-transform origin-left">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold group-hover:rotate-12 transition-transform">
                        <IconComp className="w-5 h-5 text-[#FFD600]" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-black tracking-tight mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 font-medium text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200/80 flex items-center justify-between text-xs font-extrabold uppercase tracking-wider text-gray-400 group-hover:text-black transition-colors">
                    <span>Step {step.number} of 03</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFD600] group-hover:scale-150 transition-transform"></span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
