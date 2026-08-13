import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Mail, Phone, MessageCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Website Building',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        _subject: `🚀 New Project Appointment: ${formData.fullName} (${formData.service})`,
        'Full Name': formData.fullName,
        'Email Address': formData.email,
        'Phone / WhatsApp': formData.phone || 'N/A',
        'Service Required': formData.service,
        'Project Message': formData.message,
        'Submitted At': new Date().toLocaleString()
      };

      // 1. Send to Gmail Inbox (nextgenv.info@gmail.com)
      const emailPromise = fetch('https://formsubmit.co/ajax/nextgenv.info@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // 2. Send to Google Sheets Webhook
      const sheetWebhookUrl = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL;
      let sheetPromise = Promise.resolve();
      if (sheetWebhookUrl) {
        sheetPromise = fetch(sheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString(),
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone || 'N/A',
            service: formData.service,
            message: formData.message
          })
        }).catch((err) => console.log('Sheets Webhook:', err));
      }

      await Promise.allSettled([emailPromise, sheetPromise]);
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] text-white relative overflow-hidden">
      {/* Background Accent Lines & Glowing Blobs */}
      <div className="absolute top-0 right-0 w-full h-full bg-[#FFD600]/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFD600]/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Official Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <AnimatedSection direction="right" delay={100}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-[#FFD600]">
                <Sparkles className="w-3.5 h-3.5 fill-[#FFD600]" />
                <span>START A PROJECT</span>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Let's Build{' '}
                <span className="relative inline-block text-black">
                  <span className="relative z-10 px-2 py-0.5 bg-[#FFD600] rounded-lg">Something Great</span>
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300}>
              <p className="text-lg text-gray-300 font-medium leading-relaxed">
                Have a website, video or creative project in mind? Let's turn your idea into something professional.
              </p>
            </AnimatedSection>

            {/* Official Contact Links */}
            <AnimatedSection direction="right" delay={400}>
              <div className="pt-6 space-y-4 border-t border-white/15">
                {/* Email */}
                <a
                  href="mailto:nextgenv.info@gmail.com"
                  className="flex items-center gap-4 text-gray-300 text-sm font-semibold group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-[#FFD600] flex items-center justify-center group-hover:bg-[#FFD600] group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Direct Email</div>
                    <span className="text-white font-extrabold group-hover:text-[#FFD600] transition-colors">
                      nextgenv.info@gmail.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/917065411640"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 text-sm font-semibold group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-[#FFD600] flex items-center justify-center group-hover:bg-[#FFD600] group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">WhatsApp / Contact</div>
                    <span className="text-white font-extrabold group-hover:text-[#FFD600] transition-colors">
                      +91 7065411640
                    </span>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/nextgenvisual0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 text-sm font-semibold group"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 text-[#FFD600] flex items-center justify-center group-hover:bg-[#FFD600] group-hover:text-black transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase">Telegram Channel</div>
                    <span className="text-white font-extrabold group-hover:text-[#FFD600] transition-colors">
                      t.me/nextgenvisual0
                    </span>
                  </div>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <AnimatedSection direction="scale" delay={300}>
              <div className="bg-[#141414] p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl relative dark-card-hover">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#FFD600] text-black flex items-center justify-center mx-auto shadow-lg animate-bounce">
                      <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">Project Request Sent!</h3>
                    <p className="text-gray-300 font-medium text-sm max-w-md mx-auto">
                      Thank you for reaching out to NextGen Visual. We have received your project details and will reply to <span className="text-[#FFD600]">{formData.email}</span> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-white font-bold text-xs hover:bg-[#FFD600] hover:text-black transition-all button-magnetic"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD600] transition-colors text-sm font-medium"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD600] transition-colors text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone / WhatsApp */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                          PHONE / WHATSAPP
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 7065411640"
                          className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD600] transition-colors text-sm font-medium"
                        />
                      </div>

                      {/* Service Selection */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                          SERVICE REQUIRED *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/20 text-white focus:outline-none focus:border-[#FFD600] transition-colors text-sm font-medium"
                        >
                          <option value="Website Building">Website Building</option>
                          <option value="AI Video Creation">AI Video Creation</option>
                          <option value="Video Editing">Video Editing</option>
                          <option value="Multiple Services">Multiple Services</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-300">
                        PROJECT MESSAGE *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project goals, references, timelines, or requirements..."
                        className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFD600] transition-colors text-sm font-medium resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-[#FFD600] hover:bg-[#E5C000] text-black font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 button-magnetic"
                    >
                      {loading ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Start My Project</span>
                          <Send className="w-4 h-4 fill-black" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
