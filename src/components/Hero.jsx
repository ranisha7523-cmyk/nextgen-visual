import React, { useRef, useEffect } from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { VIDEO_URLS, LOCAL_VIDEO_PATHS, getActiveVideoUrl } from '../config/videoUrls';
import { IS_INDEPENDENCE_DAY_THEME } from '../config/themeConfig';
import IndependenceOfferTimer from './IndependenceOfferTimer';

export default function Hero() {
  const videoRef = useRef(null);
  const heroVideoSrc = getActiveVideoUrl(VIDEO_URLS.hero, LOCAL_VIDEO_PATHS.hero);

  useEffect(() => {
    // Force autoplay muted video playback across browsers
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn('Hero video autoplay was deferred or blocked:', err);
      });
    }
  }, []);

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-white overflow-hidden">
      {/* Dynamic Background Glowing Blobs with Tricolour Support */}
      {IS_INDEPENDENCE_DAY_THEME ? (
        <>
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#FF671F]/20 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#046A38]/20 rounded-full blur-3xl -z-10 pointer-events-none animate-float" />
        </>
      ) : (
        <>
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#FFD600]/15 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gray-200/60 rounded-full blur-2xl -z-10 pointer-events-none animate-float" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Text Content with Staggered Entrance */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <AnimatedSection direction="down" delay={100}>
              {IS_INDEPENDENCE_DAY_THEME ? (
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF671F]/10 via-white to-[#046A38]/10 border-2 border-[#FF671F]/40 text-xs font-black uppercase tracking-wider text-black shadow-sm">
                  <span className="text-sm">🇮🇳</span>
                  <span className="text-[#FF671F] font-black">15TH AUGUST</span>
                  <span className="text-black">•</span>
                  <span className="text-[#046A38] font-black">HAPPY INDEPENDENCE DAY</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold uppercase tracking-wider text-black shadow-xs hover:border-[#FFD600] transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-black fill-[#FFD600] animate-spin" style={{ animationDuration: '6s' }} />
                  <span>Next-Gen Creative Studio</span>
                </div>
              )}
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.1]">
                Creative Digital Solutions For{' '}
                <span className="relative inline-block px-2">
                  <span className="relative z-10 text-black">Modern Brands</span>
                  <span className="absolute inset-x-0 bottom-1.5 h-4 sm:h-5 bg-[#FFD600] -z-10 rounded-sm transform -rotate-1 animate-sweep"></span>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl font-medium leading-relaxed">
                We build modern websites, create AI-powered videos, and edit content that helps brands stand out online.
              </p>
            </AnimatedSection>

            {/* 🇮🇳 15th August Flipkart/Amazon Style Live Countdown Card */}
            {IS_INDEPENDENCE_DAY_THEME && (
              <AnimatedSection direction="up" delay={350}>
                <div className="pt-2">
                  <IndependenceOfferTimer variant="card" />
                </div>
              </AnimatedSection>
            )}

            {/* CTAs with Magnetic Hover Animations */}
            <AnimatedSection direction="up" delay={400}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 bg-[#FFD600] hover:bg-[#E5C000] text-black font-extrabold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-2xl button-magnetic group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-gray-100 border-2 border-black text-black font-bold text-base px-7 py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current text-black" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>View Portfolio</span>
                </a>
              </div>
            </AnimatedSection>

            {/* Service Highlights Pills */}
            <AnimatedSection direction="up" delay={500}>
              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-black hover:text-yellow-600 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD600] animate-ping" style={{ animationDuration: '3s' }}></span>
                  Website Building
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1.5 text-black hover:text-yellow-600 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD600]"></span>
                  AI Video Creation
                </span>
                <span className="text-gray-300">•</span>
                <span className="flex items-center gap-1.5 text-black hover:text-yellow-600 transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFD600]"></span>
                  Video Editing
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT: REAL HTML5 Video Visual with Floating Glow Frame */}
          <div className="lg:col-span-5 relative">
            <AnimatedSection direction="scale" delay={300}>
              <div className="relative mx-auto max-w-md lg:max-w-none group">
                
                {/* Outer Ambient Glow Effect */}
                <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-[#FFD600] via-black to-[#FFD600] opacity-30 blur-xl group-hover:opacity-75 transition duration-1000 group-hover:scale-105"></div>

                <div className="relative rounded-[2rem] overflow-hidden bg-black border-4 border-black shadow-2xl aspect-[4/5] sm:aspect-square lg:aspect-[4/5] flex items-center justify-center">
                  
                  {/* HTML5 REAL VIDEO */}
                  <video
                    ref={videoRef}
                    key={heroVideoSrc}
                    src={heroVideoSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    referrerPolicy="no-referrer"
                    controls={false}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Live Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full flex items-center gap-2 border border-white/20 shadow-lg">
                    {IS_INDEPENDENCE_DAY_THEME ? (
                      <>
                        <span className="text-sm">🇮🇳</span>
                        <span className="text-[#FF671F] font-extrabold tracking-wide">15TH AUGUST EDITION</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-[#FFD600] animate-ping"></span>
                        <span className="text-white font-bold tracking-wide">NEXTGEN REEL</span>
                      </>
                    )}
                  </div>

                  <div className="absolute bottom-4 inset-x-4 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white flex items-center justify-between shadow-lg transform group-hover:translate-y-[-2px] transition-transform">
                    <div>
                      <div className="text-[10px] text-[#FFD600] font-black uppercase tracking-wider">Showcase Preview</div>
                      <div className="text-sm font-extrabold text-white">AI & Video Craftsmanship</div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#FFD600] text-black flex items-center justify-center font-black shadow-md hover:rotate-12 transition-transform">
                      ★
                    </div>
                  </div>

                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
