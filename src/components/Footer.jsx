import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/15">
          
          {/* Brand Info (Cols 1 & 2) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black border border-white/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/logo/logo.jpg"
                  alt="NextGen Visual Logo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex items-center text-xl font-black">
                <span className="text-white">NextGen</span>
                <span className="ml-1 px-2 py-0.5 bg-[#FFD600] text-black text-xs uppercase rounded font-extrabold tracking-wider">
                  Visual
                </span>
              </div>
            </div>

            <p className="text-gray-400 font-medium text-sm max-w-sm leading-relaxed">
              Creative digital solutions for modern brands. We build modern websites, create AI-powered videos, and edit high-impact visual content.
            </p>

            {/* Official Social Icons */}
            <div className="pt-2 flex items-center space-x-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FFD600] hover:text-black flex items-center justify-center transition-all button-magnetic text-gray-300"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/?ref=homescreenpwa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FFD600] hover:text-black flex items-center justify-center transition-all button-magnetic text-gray-300"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/nextgenvisual0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FFD600] hover:text-black flex items-center justify-center transition-all button-magnetic text-gray-300"
                aria-label="Telegram"
                title="Telegram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.761-.17.71-.43 1.01-.68 1.03-.55.05-.97-.36-1.5-.71-.83-.55-1.3-0.89-2.11-1.42-.94-.62-.33-.96.21-1.52.14-.14 2.58-2.36 2.63-2.57.01-.03.01-.14-.06-.2-.07-.06-.17-.04-.25-.02-.11.02-1.89 1.2-5.33 3.53-.5.35-.96.52-1.37.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.37-.49 1.03-.75 4.04-1.76 6.74-2.92 8.09-3.48 3.85-1.6 4.65-1.88 5.17-1.89.11 0 .37.03.54.17.14.12.18.28.2.45-.01.07.01.21 0 .28z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917065411640"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#FFD600] hover:text-black flex items-center justify-center transition-all button-magnetic text-gray-300"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFD600]">
              SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-semibold">
              <li><a href="#services" className="hover:text-white transition-colors">Website Building</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Video Creation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Video Editing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Responsive Web UI/UX</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cinematic AI Content</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#FFD600]">
              COMPANY
            </h4>
            <ul className="space-y-2 text-sm text-gray-400 font-semibold">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Our Work</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details & Scroll Top */}
          <div className="space-y-3 text-left flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#FFD600] mb-3">
                LET'S TALK
              </h4>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                📧 nextgenv.info@gmail.com
              </p>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed mt-1">
                💬 WhatsApp: +91 7065411640
              </p>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed mt-1">
                ✈️ Telegram: t.me/nextgenvisual0
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 self-start px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#FFD600] hover:text-black text-white text-xs font-extrabold uppercase tracking-wider transition-all button-magnetic"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-gray-500">
          <div>
            © 2026 NextGen Visual. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-gray-400">
            <span>Modern Websites</span>
            <span>•</span>
            <span>AI Videos</span>
            <span>•</span>
            <span>Video Editing</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
