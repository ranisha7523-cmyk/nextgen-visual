import React, { useState, useEffect } from 'react';
import { Timer, Gift, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { IS_RAKSHA_BANDHAN_THEME } from '../config/themeConfig';

export default function RakshaBandhanOfferTimer({ variant = 'banner' }) {
  // Target: 29th August 2026 Midnight (29 Aug 23:59:59)
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), 7, 29, 23, 59, 59);
    
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
      return { hours: '00', minutes: '00', seconds: '00', expired: true };
    }

    const hours = Math.floor((diff / (1000 * 60 * 60)));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return {
      hours: hours < 10 ? `0${hours}` : `${hours}`,
      minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
      seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
      expired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!IS_RAKSHA_BANDHAN_THEME) return null;

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-[#E91E63] via-[#8E24AA] to-[#D81B60] text-white py-2.5 px-4 shadow-xl border-b border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold">
        {/* Left Side Tag */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/images/rakhi.jpg"
            alt="Rakhi"
            className="w-6 h-6 object-cover rounded-full border border-[#FFD600] animate-pulse"
          />
          <span className="bg-[#FFD600] text-black px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
            <Gift className="w-3 h-3 fill-black" />
            <span>RAKHI SPECIAL SALE</span>
          </span>
          <span className="hidden md:inline text-white font-extrabold">
            Gift Your Brand <span className="text-[#FFD600] font-black underline">FLAT 35% OFF</span> On Websites & Videos!
          </span>
        </div>

        {/* Center: Live Flipkart/Amazon Style Countdown Clock */}
        <div className="flex items-center gap-2 mx-auto md:mx-0 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20 shadow-inner">
          <Timer className="w-4 h-4 text-[#FFD600] animate-pulse" />
          <span className="text-gray-200 text-[11px] font-bold uppercase tracking-wider hidden sm:inline">RAKHI OFFER ENDS IN:</span>
          
          <div className="flex items-center gap-1 font-mono font-black text-sm">
            <span className="bg-[#E91E63] text-white px-1.5 py-0.5 rounded shadow-sm min-w-[24px] text-center">
              {timeLeft.hours}
            </span>
            <span className="text-[#FFD600] font-bold">:</span>
            <span className="bg-white text-black px-1.5 py-0.5 rounded shadow-sm min-w-[24px] text-center font-bold">
              {timeLeft.minutes}
            </span>
            <span className="text-[#FFD600] font-bold">:</span>
            <span className="bg-[#8E24AA] text-white px-1.5 py-0.5 rounded shadow-sm min-w-[24px] text-center">
              {timeLeft.seconds}
            </span>
          </div>
        </div>

        {/* Right CTA Button */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 bg-[#FFD600] hover:bg-white text-black font-black text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
        >
          <span>CLAIM RAKHI OFFER</span>
          <Gift className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  // Hero Card Offer Widget Variant
  return (
    <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1c0d1a] via-[#120514] to-[#25081c] border-2 border-[#E91E63]/50 shadow-2xl space-y-3.5 relative overflow-hidden group">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#E91E63]/20 rounded-full blur-2xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#8E24AA]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E91E63]/20 border border-[#E91E63]/50 text-xs font-black uppercase text-[#FF80AB]">
          <span>🎀</span>
          <span>RAKSHA BANDHAN SPECIAL OFFER</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold text-[#FFD600] bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
          <Sparkles className="w-3.5 h-3.5 fill-[#FFD600]" />
          <span>FLAT 35% OFF</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1 relative z-10">
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/rakhi.jpg"
            alt="Traditional Rakhi"
            className="w-14 h-14 object-cover rounded-xl border-2 border-[#FFD600] shadow-md hover:scale-105 transition-transform"
          />
          <div>
            <h4 className="text-white text-base font-extrabold tracking-tight flex items-center gap-1.5">
              <span>Gift Your Brand Digital Success</span>
              <Heart className="w-4 h-4 text-[#E91E63] fill-[#E91E63] inline" />
            </h4>
            <p className="text-gray-300 text-xs font-medium mt-0.5">
              Special discounts on Website Building, AI Video Ads & Video Editing (Valid till 29th Aug)!
            </p>
          </div>
        </div>

        {/* Live Timer Clock Boxes */}
        <div className="flex items-center gap-1.5 bg-black/80 p-2 rounded-xl border border-white/15 shadow-inner">
          <div className="text-center px-2 py-1 bg-[#E91E63] text-white rounded-lg">
            <div className="text-xs font-mono font-black">{timeLeft.hours}</div>
            <div className="text-[9px] font-bold uppercase opacity-80">HRS</div>
          </div>
          <span className="text-[#FFD600] font-black text-sm">:</span>
          <div className="text-center px-2 py-1 bg-white text-black rounded-lg">
            <div className="text-xs font-mono font-black">{timeLeft.minutes}</div>
            <div className="text-[9px] font-bold uppercase opacity-80">MIN</div>
          </div>
          <span className="text-[#FFD600] font-black text-sm">:</span>
          <div className="text-center px-2 py-1 bg-[#8E24AA] text-white rounded-lg">
            <div className="text-xs font-mono font-black">{timeLeft.seconds}</div>
            <div className="text-[9px] font-bold uppercase opacity-80">SEC</div>
          </div>
        </div>
      </div>

      <a
        href="#contact"
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E91E63] via-[#FFD600] to-[#8E24AA] text-black font-black text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg relative z-10"
      >
        <Gift className="w-4 h-4 text-black" />
        <span>CLAIM RAKSHA BANDHAN OFFER (FLAT 35% OFF)</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
