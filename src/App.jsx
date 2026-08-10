import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CapabilityStrip from './components/CapabilityStrip';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import VideoShowcase from './components/VideoShowcase';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#111111] selection:bg-[#FFD600] selection:text-black relative">
      {/* Sticky Fixed Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with autoplaying HTML5 video */}
        <Hero />

        {/* 2. Capability / Trust Strip */}
        <CapabilityStrip />

        {/* 3. About Section */}
        <About />

        {/* 4. Core Services (Website Building, AI Videos, Video Editing) */}
        <Services />

        {/* 5. 3-Step Process (Discover, Create, Deliver) */}
        <Process />

        {/* 6. Why Choose Us (Highlighted yellow card) */}
        <WhyChooseUs />

        {/* 7. Our Work / Portfolio (Filterable categories + live website links + video modals) */}
        <Portfolio />

        {/* 8. Creative Video Showcase (3-Card Compact 3D Coverflow + Top-Right Volume Toggle) */}
        <VideoShowcase />

        {/* 9. Testimonials (Structured review placeholder) */}
        <Testimonials />

        {/* 10. FAQ Accordion */}
        <FAQ />

        {/* 11. Contact CTA & Architecture-Ready Form */}
        <ContactCTA />
      </main>

      {/* 12. Premium Footer */}
      <Footer />

      {/* 13. Floating WhatsApp Chat Widget */}
      <WhatsAppFloating />
    </div>
  );
}
