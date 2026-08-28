import React from 'react';
import { Layers, Cpu, Layout, Film } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function CapabilityStrip() {
  const capabilities = [
    {
      icon: Layout,
      highlight: "50+",
      label: "Websites Built",
      description: "Modern, Responsive & High Converting"
    },
    {
      icon: Cpu,
      highlight: "100+",
      label: "AI Videos",
      description: "UGC Avatars & High-Impact Ads"
    },
    {
      icon: Film,
      highlight: "250+",
      label: "Video Edits",
      description: "Shorts, Reels & Cinema Quality"
    },
    {
      icon: Layers,
      highlight: "48-Hour",
      label: "Express Delivery",
      description: "Fast Turnaround & 24/7 Support"
    }
  ];

  return (
    <section className="bg-[#0D0D0D] text-white py-12 border-y border-white/10 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFD600]/5 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {capabilities.map((cap, idx) => {
            const IconComponent = cap.icon;
            return (
              <AnimatedSection key={idx} direction="up" delay={idx * 150}>
                <div
                  className={`pt-6 md:pt-0 ${idx !== 0 ? 'md:pl-6 lg:pl-8' : ''} flex flex-col justify-center space-y-2 group cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFD600]/10 border border-[#FFD600]/30 flex items-center justify-center text-[#FFD600] group-hover:scale-110 group-hover:bg-[#FFD600] group-hover:text-black transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-black tracking-tight leading-none text-white group-hover:text-[#FFD600] transition-colors">
                      <span className="text-[#FFD600] group-hover:text-white">{cap.highlight}</span> {cap.label}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium pl-13">
                    {cap.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
