import React, { useState } from 'react';
import { MessageSquare, Globe, Cpu, Film, Gift, X, Send } from 'lucide-react';

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false);

  const presets = [
    {
      icon: Globe,
      title: "Website Building",
      desc: "Custom, responsive & high-converting websites",
      message: "Hello NextGen Visual! I am interested in getting a Custom Website built. Please share details and pricing.",
      badge: "Popular"
    },
    {
      icon: Cpu,
      title: "AI Video Creation",
      desc: "UGC AI Avatars & high-impact video ads",
      message: "Hello NextGen Visual! I need AI-powered videos created for my brand. Please share sample work & pricing.",
      badge: "Trending"
    },
    {
      icon: Film,
      title: "Video Editing",
      desc: "Reels, Shorts, & Cinematic Editing",
      message: "Hello NextGen Visual! I need professional Video Editing for my Reels/Videos. Please share details.",
      badge: "Fast 48H"
    },
    {
      icon: Gift,
      title: "Claim 35% Offer",
      desc: "Festive Special Sale (Valid till 29th Aug)",
      message: "Hello NextGen Visual! I want to claim the 35% Discount Offer on my project!",
      badge: "35% OFF"
    }
  ];

  const handleOpenWhatsApp = (customMessage) => {
    const encoded = encodeURIComponent(customMessage);
    window.open(`https://wa.me/917065411640?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Presets Floating Modal Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[360px] bg-[#141414] text-white rounded-3xl border border-white/20 shadow-2xl overflow-hidden animate-modal">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#25D366] via-[#1EAE53] to-[#128C7E] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30">
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white tracking-wide">NextGen Visual Support</h4>
                <div className="flex items-center gap-1.5 text-[11px] text-white/90 font-medium">
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  <span>Online • Instant Reply</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Subtitle instructions */}
          <div className="p-3.5 bg-black/60 border-b border-white/10 text-xs text-gray-300 font-medium">
            Select a service to send an instant message on WhatsApp:
          </div>

          {/* Presets List */}
          <div className="p-3 space-y-2 max-h-[320px] overflow-y-auto">
            {presets.map((preset, idx) => {
              const IconComp = preset.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(preset.message)}
                  className="w-full p-3 rounded-2xl bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/60 transition-all duration-200 text-left flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-black border border-white/15 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-black text-white group-hover:text-[#25D366] transition-colors">
                          {preset.title}
                        </span>
                        <span className="text-[9px] font-extrabold px-2 py-0.2 rounded-full bg-[#FFD600] text-black uppercase">
                          {preset.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400 font-medium line-clamp-1">
                        {preset.desc}
                      </p>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
                </button>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="p-3 bg-black/80 text-center border-t border-white/10">
            <span className="text-[11px] text-gray-400 font-semibold">
              Direct WhatsApp: <strong className="text-white">+91 7065411640</strong>
            </span>
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 button-magnetic focus:outline-none"
        aria-label="Contact us on WhatsApp"
        title="Chat on WhatsApp (+91 7065411640)"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }}></span>

        {isOpen ? (
          <X className="w-7 h-7 text-white relative z-10" />
        ) : (
          <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
        )}
      </button>
    </div>
  );
}
