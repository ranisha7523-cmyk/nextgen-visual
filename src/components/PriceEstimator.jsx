import React, { useState } from 'react';
import { Calculator, Globe, Cpu, Film, Sparkles, Check, ArrowRight, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { IS_RAKSHA_BANDHAN_THEME } from '../config/themeConfig';

export default function PriceEstimator() {
  // Calculator State
  const [websiteType, setWebsiteType] = useState('landing'); // 'none', 'landing', 'business', 'ecommerce'
  const [aiVideosCount, setAiVideosCount] = useState(0); // 0, 1, 3, 5
  const [videoEditsCount, setVideoEditsCount] = useState(0); // 0, 3, 5, 10
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [seoOptimization, setSeoOptimization] = useState(true);

  // Price Calculation Logic
  const getCalculatedEstimate = () => {
    let min = 0;
    let max = 0;

    // Website Building Costs
    if (websiteType === 'landing') {
      min += 2999;
      max += 4999;
    } else if (websiteType === 'business') {
      min += 5999;
      max += 9999;
    } else if (websiteType === 'ecommerce') {
      min += 11999;
      max += 18999;
    }

    // AI Videos Costs
    if (aiVideosCount === 1) {
      min += 999;
      max += 1499;
    } else if (aiVideosCount === 3) {
      min += 2499;
      max += 3499;
    } else if (aiVideosCount === 5) {
      min += 3999;
      max += 5499;
    }

    // Video Editing Costs
    if (videoEditsCount === 3) {
      min += 1499;
      max += 2499;
    } else if (videoEditsCount === 5) {
      min += 2499;
      max += 3999;
    } else if (videoEditsCount === 10) {
      min += 4499;
      max += 6999;
    }

    // Addons
    if (expressDelivery) {
      min += 999;
      max += 1499;
    }

    // Default if nothing selected
    if (min === 0) {
      min = 2499;
      max = 4999;
    }

    // Apply 35% Discount if Rakhi Sale active
    const discountFactor = IS_RAKSHA_BANDHAN_THEME ? 0.65 : 1.0;
    const finalMin = Math.round(min * discountFactor);
    const finalMax = Math.round(max * discountFactor);

    return {
      min: finalMin,
      max: finalMax,
      originalMin: min,
      originalMax: max
    };
  };

  const estimate = getCalculatedEstimate();

  const handleWhatsAppQuote = () => {
    let summaryText = `Hello NextGen Visual! I calculated a project estimate on your website:\n\n`;

    if (websiteType !== 'none') {
      const webNames = { landing: '1-Page Landing Website', business: '3-5 Page Business Website', ecommerce: 'E-Commerce / Custom Portal' };
      summaryText += `🌐 Website: ${webNames[websiteType]}\n`;
    }

    if (aiVideosCount > 0) {
      summaryText += `🤖 AI Videos: ${aiVideosCount} Videos\n`;
    }

    if (videoEditsCount > 0) {
      summaryText += `🎬 Video Edits: ${videoEditsCount} Reels/Shorts\n`;
    }

    if (expressDelivery) {
      summaryText += `⚡ Express 48H Delivery: Yes\n`;
    }

    summaryText += `\n💰 Estimated Price Range: ₹${estimate.min.toLocaleString('en-IN')} - ₹${estimate.max.toLocaleString('en-IN')}\n\nPlease confirm availability and start my project!`;

    const encoded = encodeURIComponent(summaryText);
    window.open(`https://wa.me/917065411640?text=${encoded}`, '_blank');
  };

  return (
    <section id="estimator" className="py-20 bg-white text-[#111111] relative overflow-hidden">
      {/* Background Subtle Blobs */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#FFD600]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <AnimatedSection direction="up" delay={100}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-black uppercase tracking-wider text-black shadow-xs">
              <Calculator className="w-3.5 h-3.5 text-black" />
              <span>INSTANT COST CALCULATOR</span>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black">
              Calculate Your Project{' '}
              <span className="relative inline-block text-black">
                <span className="relative z-10 px-2 py-0.5 bg-[#FFD600] rounded-lg">Instant Rate</span>
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={300}>
            <p className="text-gray-600 text-base sm:text-lg font-medium">
              Select your required website, AI video, and editing services to get a real-time price estimate.
            </p>
          </AnimatedSection>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selection Controls */}
          <div className="lg:col-span-7 space-y-8 bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm text-left">
            
            {/* 1. Website Building Options */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black">
                <Globe className="w-4 h-4 text-black" />
                <span>1. Select Website Building Package</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'landing', label: '1-Page Landing', desc: 'Fast, high-converting portfolio/product page' },
                  { id: 'business', label: '3-5 Page Business', desc: 'Complete company website with contact forms' },
                  { id: 'ecommerce', label: 'E-Commerce', desc: 'Full online store with payment integrations' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setWebsiteType(websiteType === item.id ? 'none' : item.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                      websiteType === item.id
                        ? 'bg-black text-white border-black shadow-lg scale-[1.02]'
                        : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                  >
                    {websiteType === item.id && (
                      <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#FFD600] text-black flex items-center justify-center text-xs font-black">
                        ✓
                      </span>
                    )}
                    <div className="font-extrabold text-sm">{item.label}</div>
                    <div className={`text-[11px] font-medium mt-1 ${websiteType === item.id ? 'text-gray-300' : 'text-gray-500'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. AI Video Creation Count */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black">
                <Cpu className="w-4 h-4 text-black" />
                <span>2. AI Video Creation (UGC & Ads)</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { count: 0, label: 'None (0)' },
                  { count: 1, label: '1 AI Video' },
                  { count: 3, label: '3 AI Videos' },
                  { count: 5, label: '5+ Bulk Pack' },
                ].map((item) => (
                  <button
                    key={item.count}
                    type="button"
                    onClick={() => setAiVideosCount(item.count)}
                    className={`py-3 px-4 rounded-xl border text-center font-extrabold text-xs transition-all ${
                      aiVideosCount === item.count
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Video Editing Count */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <label className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black">
                <Film className="w-4 h-4 text-black" />
                <span>3. Video Editing (Reels, Shorts & Commercials)</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { count: 0, label: 'None (0)' },
                  { count: 3, label: '3 Reels Edits' },
                  { count: 5, label: '5 Reels Edits' },
                  { count: 10, label: '10+ Bulk Edits' },
                ].map((item) => (
                  <button
                    key={item.count}
                    type="button"
                    onClick={() => setVideoEditsCount(item.count)}
                    className={`py-3 px-4 rounded-xl border text-center font-extrabold text-xs transition-all ${
                      videoEditsCount === item.count
                        ? 'bg-black text-white border-black shadow-md'
                        : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Addon Extras */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <label className="text-xs font-black uppercase tracking-wider text-black">
                4. Select Add-On Options
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <label className="inline-flex items-center gap-2.5 cursor-pointer bg-white px-4 py-3 rounded-xl border border-gray-200 hover:border-black transition-colors text-xs font-extrabold">
                  <input
                    type="checkbox"
                    checked={expressDelivery}
                    onChange={(e) => setExpressDelivery(e.target.checked)}
                    className="w-4 h-4 accent-black rounded"
                  />
                  <span>⚡ Express 48-Hour Fast Delivery</span>
                </label>

                <label className="inline-flex items-center gap-2.5 cursor-pointer bg-white px-4 py-3 rounded-xl border border-gray-200 hover:border-black transition-colors text-xs font-extrabold">
                  <input
                    type="checkbox"
                    checked={seoOptimization}
                    onChange={(e) => setSeoOptimization(e.target.checked)}
                    className="w-4 h-4 accent-black rounded"
                  />
                  <span>🔍 On-Page SEO & Speed Optimization (FREE)</span>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Live Calculated Estimate Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-[#0D0D0D] text-white p-8 rounded-3xl border border-white/20 shadow-2xl space-y-6 text-left relative overflow-hidden">
              
              {/* Top Discount Badge */}
              {IS_RAKSHA_BANDHAN_THEME && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E91E63]/20 border border-[#E91E63]/50 text-xs font-black text-[#FF80AB] uppercase">
                  <span>🎀</span>
                  <span>FLAT 35% FESTIVE DISCOUNT APPLIED</span>
                </div>
              )}

              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  Estimated Total Investment
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#FFD600] tracking-tight">
                    ₹{estimate.min.toLocaleString('en-IN')} - ₹{estimate.max.toLocaleString('en-IN')}
                  </span>
                </div>

                {IS_RAKSHA_BANDHAN_THEME && (
                  <div className="text-xs text-gray-400 line-through font-semibold mt-1">
                    Standard Rate: ₹{estimate.originalMin.toLocaleString('en-IN')} - ₹{estimate.originalMax.toLocaleString('en-IN')}
                  </div>
                )}
              </div>

              {/* Breakdown Summary */}
              <div className="space-y-2.5 pt-4 border-t border-white/15 text-xs text-gray-300 font-medium">
                <div className="flex justify-between items-center">
                  <span>Selected Website:</span>
                  <strong className="text-white uppercase font-extrabold">{websiteType}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span>AI Videos Included:</span>
                  <strong className="text-white font-extrabold">{aiVideosCount} Videos</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span>Video Edits Included:</span>
                  <strong className="text-white font-extrabold">{videoEditsCount} Reels</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span>Delivery Speed:</span>
                  <strong className="text-[#FFD600] font-extrabold">{expressDelivery ? '48 Hours Express' : 'Standard 3-4 Days'}</strong>
                </div>
              </div>

              {/* 1-Click WhatsApp Action Button */}
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 button-magnetic"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>GET INSTANT WHATSAPP QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[11px] text-gray-400 text-center font-medium">
                🔒 No hidden fees. Instant reply on WhatsApp (+91 7065411640).
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
