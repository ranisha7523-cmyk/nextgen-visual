import React from 'react';
import { Globe, Video, Film, Check, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Services() {
  const services = [
    {
      number: "01",
      icon: Globe,
      title: "Website Building",
      tagline: "Modern, responsive and professional websites designed for businesses, brands and creators.",
      features: [
        "Business Websites",
        "Landing Pages",
        "Portfolio Websites",
        "Responsive Design",
        "Custom UI/UX",
        "Mobile-Friendly Websites"
      ],
      badge: "WEB DESIGN & DEV"
    },
    {
      number: "02",
      icon: Video,
      title: "AI Video Creation",
      tagline: "AI-powered promotional videos and advertisements designed to bring ideas and products to life.",
      features: [
        "AI Promotional Videos",
        "AI Advertisements",
        "Product Videos",
        "AI UGC-Style Videos",
        "Social Media Videos",
        "Cinematic AI Content"
      ],
      badge: "AI VIDEO CREATIVE"
    },
    {
      number: "03",
      icon: Film,
      title: "Video Editing",
      tagline: "Professional editing that transforms raw footage into engaging content for social media and digital platforms.",
      features: [
        "Reels & Shorts",
        "YouTube Videos",
        "Promotional Videos",
        "Social Media Content",
        "Motion Graphics",
        "Cinematic Editing"
      ],
      badge: "POST-PRODUCTION"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#F6F6F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-black shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FFD600] animate-ping"></span>
              <span>OUR CORE SERVICES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
              What We Do
            </h2>

            <p className="text-base sm:text-lg text-gray-600 font-medium">
              Creative digital solutions designed to help your brand stand out online.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 Service Cards Grid with Staggered Scroll Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <AnimatedSection key={index} direction="up" delay={150 * (index + 1)}>
                <div
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl hover:border-black/40 transition-all duration-500 card-hover flex flex-col justify-between group relative overflow-hidden h-full"
                >
                  {/* Yellow Top Border Line Accent */}
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-[#FFD600] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 transform origin-left" />

                  <div>
                    {/* Card Top: Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-black text-[#FFD600] flex items-center justify-center font-bold shadow-md group-hover:scale-110 group-hover:bg-[#FFD600] group-hover:text-black transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-gray-300 group-hover:text-black transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Service Badge */}
                    <div className="inline-block px-2.5 py-1 bg-gray-100 rounded-md text-[10px] font-extrabold uppercase tracking-wider text-gray-700 mb-3 group-hover:bg-black group-hover:text-[#FFD600] transition-colors">
                      {service.badge}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl font-black text-black mb-3 group-hover:text-black">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 font-medium mb-6 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-8">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800 group/feat">
                          <div className="w-4 h-4 rounded-full bg-[#FFD600] text-black flex items-center justify-center shrink-0 group-hover/feat:scale-125 transition-transform">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card CTA Link */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-gray-100 group-hover:bg-[#FFD600] text-black font-bold text-xs uppercase tracking-wider transition-colors duration-300 shadow-xs"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </a>
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
