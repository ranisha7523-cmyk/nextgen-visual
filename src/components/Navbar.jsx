import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { IS_INDEPENDENCE_DAY_THEME, IS_RAKSHA_BANDHAN_THEME } from '../config/themeConfig';
import IndependenceOfferTimer from './IndependenceOfferTimer';
import RakshaBandhanOfferTimer from './RakshaBandhanOfferTimer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'OUR WORK', href: '#portfolio' },
    { name: 'WHY US', href: '#why-us' },
    { name: 'SHOWCASE', href: '#showcase' },
    { name: 'TESTIMONIALS', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* 🎀 Raksha Bandhan Special Live Offer Top Bar */}
      {IS_RAKSHA_BANDHAN_THEME && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <RakshaBandhanOfferTimer variant="banner" />
        </div>
      )}

      {/* 🇮🇳 15th August Freedom Sale Live Countdown Timer Top Bar */}
      {IS_INDEPENDENCE_DAY_THEME && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <IndependenceOfferTimer variant="banner" />
        </div>
      )}

      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          IS_RAKSHA_BANDHAN_THEME || IS_INDEPENDENCE_DAY_THEME ? 'top-[42px] sm:top-[44px]' : 'top-0'
        } ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-3 shadow-sm'
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Optional Theme Glow */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl bg-black flex items-center justify-center overflow-hidden border shadow-md group-hover:scale-105 transition-transform duration-300 ${
              IS_RAKSHA_BANDHAN_THEME ? 'border-2 border-[#E91E63] shadow-[0_0_12px_rgba(233,30,99,0.4)]' :
              IS_INDEPENDENCE_DAY_THEME ? 'border-2 border-[#FF671F] shadow-[0_0_12px_rgba(255,103,31,0.4)]' : 'border-black'
            }`}>
              <img
                src="/assets/logo/logo.jpg"
                alt="NextGen Visual Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="text-yellow-400 font-bold text-lg">NG</span>';
                }}
              />
            </div>
            <div className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight">
              <span className="text-black font-extrabold">NextGen</span>
              <span className={`ml-1 px-2 py-0.5 text-black text-sm uppercase rounded font-bold tracking-wider ${
                IS_RAKSHA_BANDHAN_THEME ? 'bg-gradient-to-r from-[#E91E63] via-[#FFD600] to-[#8E24AA] text-white shadow-xs' :
                IS_INDEPENDENCE_DAY_THEME ? 'bg-gradient-to-r from-[#FF671F] via-[#FFD600] to-[#046A38] text-white shadow-xs' : 'bg-[#FFD600]'
              }`}>
                Visual
              </span>
            </div>
          </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs xl:text-sm font-semibold tracking-wider text-gray-800 hover:text-black hover:underline decoration-[#FFD600] decoration-2 underline-offset-4 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FFD600] hover:bg-[#E5C000] text-black font-bold text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="#contact"
            className="bg-[#FFD600] text-black font-bold text-xs px-3.5 py-2 rounded-full flex items-center gap-1"
          >
            <span>Book</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-4 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-gray-900 hover:text-black hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#FFD600] hover:bg-[#E5C000] text-black font-bold py-3 rounded-xl transition-all shadow"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
