import React from 'react';
import { Quote, Sparkles, MessageSquarePlus } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F6F6F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-black shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD600] fill-[#FFD600]" />
            <span>CLIENT REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 font-medium text-base">
            Honest feedback and stories from businesses and creators we work with.
          </p>
        </div>

        {/* Testimonials Container / Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm relative overflow-hidden text-center space-y-6">
            
            <div className="w-16 h-16 rounded-2xl bg-[#FFD600] text-black flex items-center justify-center mx-auto shadow-md">
              <Quote className="w-8 h-8 fill-black" />
            </div>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-900 rounded-full text-xs font-bold uppercase tracking-wider">
                TESTIMONIALS SECTION READY
              </span>
              <h3 className="text-2xl font-extrabold text-black">
                "Client testimonials will be added here."
              </h3>
            </div>

            <p className="text-gray-500 font-medium text-sm max-w-lg mx-auto leading-relaxed">
              We uphold complete integrity and do not display fabricated reviews. Verified client feedback, ratings, and video testimonials will be featured here as completed projects launch.
            </p>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-black">
                <MessageSquarePlus className="w-4 h-4 text-[#FFD600]" />
                NextGen Visual Client Trust Protocol
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
