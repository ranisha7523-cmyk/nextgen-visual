import React, { useState } from 'react';

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = "https://wa.me/917065411640?text=Hello%20NextGen%20Visual,%20I%20want%20to%20start%20a%20project!";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Hover Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-black text-white text-xs font-extrabold px-3.5 py-2 rounded-xl shadow-2xl border border-white/20 animate-fade-in whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping"></span>
          <span>Chat on WhatsApp</span>
        </div>
      )}

      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 button-magnetic focus:outline-none"
        aria-label="Contact us on WhatsApp"
        title="Chat on WhatsApp (+91 7065411640)"
      >
        {/* Outer Pulsing Aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }}></span>

        {/* Crisp WhatsApp SVG Icon */}
        <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>
    </div>
  );
}
