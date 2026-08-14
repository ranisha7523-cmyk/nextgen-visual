import React, { useState, useEffect } from 'react';
import { Timer, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { IS_INDEPENDENCE_DAY_THEME } from '../config/themeConfig';

export default function IndependenceOfferTimer({ variant = 'banner' }) {
  // Target: Midnight of 15th August (15 Aug 23:59:59)
  const calculateTimeLeft = () => {
    const now = new Date();
    // 15th August 2026, 23:59:59
    const targetDate = new Date(now.getFullYear(), 7, 15, 23, 59, 59);
    
    // If target has passed for today, fallback to 16th Aug end
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

  if (!IS_INDEPENDENCE_DAY_THEME) return null;

  if (variant === 'banner') {
    return (
      <div className="bg-gradient-to-r from-[#FF671F] via-[#111111] to-[#046A38] text-white py-2.5 px-4 shadow-xl border-b border-white/20 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-bold">
        {/* Left Side Tag */}
        <div className="flex items-center gap-2">
          <span className="text-lg animate-bounce">🇮🇳</span>
          <span className="bg-[#FF671F] text-white px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-sm">
            FREEDOM SALE
          </span>
          <span className="hidden md:inline text-white/90 font-extrabold">
            Get Up To <span className="text-[#FFD600] font-black underline">30% OFF</span> On Website & Video Projects!
          </span>
        </div>

        {/* Center: Live Flipkart/Amazon Style Countdown Clock */}
        <div className="flex items-center gap-2 mx-auto md:mx-0 bg-black/70 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20 shadow-inner">
          <Timer className="w-4 h-4 text-[#FFD600] animate-pulse" />
          <span className="text-gray-300 text-[11px] font-bold uppercase tracking-wider hidden sm:inline">ENDS IN:</span>
          
          <div className="flex items-center gap-1 font-mono font-black text-sm">
            <span className="bg-[#FF671F] text-white px-1.5 py-0.5 rounded shadow-sm min-w-[24px] text-center">
              {timeLeft.hours}
            </span>
            <span className="text-[#FFD600] font-bold">:</span>
            <span className="bg-white text-black px-1.5 py-0.5 rounded shadow-sm min-w-[24px] text-center font-bold">
              {timeLeft.minutes}
            </span>
            <span className="text-[#FFD600] font-bold">:</span>
            <span className="bg-[#046A38] text-white px-1.5 py-0.5 rounded shadow-sm min-w-[24px] text-center">
              {timeLeft.seconds}
            </span>
          </div>
        </div>

        {/* Right CTA Button */}
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 bg-[#FFD600] hover:bg-white text-black font-black text-xs px-3.5 py-1.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
        >
          <span>CLAIM OFFER</span>
          <Zap className="w-3.5 h-3.5 fill-black" />
        </a>
      </div>
    );
  }

  // Hero Card Offer Widget Variant
  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#141414] via-black to-[#1a1a1a] border-2 border-[#FF671F]/40 shadow-2xl space-y-3 relative overflow-hidden group">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF671F]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF671F]/20 border border-[#FF671F]/50 text-xs font-black uppercase text-[#FF671F]">
          <span>🇮🇳</span>
          <span>15TH AUGUST FREEDOM OFFER</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-bold text-gray-400">
          <Zap className="w-3.5 h-3.5 text-[#FFD600] fill-[#FFD600]" />
          <span>FLAT 30% OFF</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
        <div>
          <h4 className="text-white text-base font-extrabold tracking-tight">
            Special Independence Day Discount
          </h4>
          <p className="text-gray-400 text-xs font-medium">
            Valid on Website Building & AI Video Creation packages.
          </p>
        </div>

        {/* Live Timer Clock Boxes */}
        <div className="flex items-center gap-1.5 bg-black/90 p-2 rounded-xl border border-white/15 shadow-inner">
          <div className="text-center px-2 py-1 bg-[#FF671F] text-white rounded-lg">
            <div className="text-xs font-mono font-black">{timeLeft.hours}</div>
            <div className="text-[9px] font-bold uppercase opacity-80">HRS</div>
          </div>
          <span className="text-[#FFD600] font-black text-sm">:</span>
          <div className="text-center px-2 py-1 bg-white text-black rounded-lg">
            <div className="text-xs font-mono font-black">{timeLeft.minutes}</div>
            <div className="text-[9px] font-bold uppercase opacity-80">MIN</div>
          </div>
          <span className="text-[#FFD600] font-black text-sm">:</span>
          <div className="text-center px-2 py-1 bg-[#046A38] text-white rounded-lg">
            <div className="text-xs font-mono font-black">{timeLeft.seconds}</div>
            <div className="text-[9px] font-bold uppercase opacity-80">SEC</div>
          </div>
        </div>
      </div>

      <a
        href="#contact"
        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF671F] via-[#FFD600] to-[#046A38] text-black font-black text-xs uppercase tracking-wider hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg"
      >
        <span>CLAIM FREEDOM OFFER NOW</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
