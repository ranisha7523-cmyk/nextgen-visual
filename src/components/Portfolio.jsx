import React, { useState } from 'react';
import { Play, ExternalLink, Sparkles, Globe } from 'lucide-react';
import VideoModal from './VideoModal';
import AnimatedSection from './AnimatedSection';
import { VIDEO_URLS, LOCAL_VIDEO_PATHS, getActiveVideoUrl } from '../config/videoUrls';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['ALL', 'WEBSITES', 'AI VIDEOS', 'VIDEO EDITING'];

  const projects = [
    // 1. Live User Website 1
    {
      id: 1,
      title: "ShopNear E-Commerce Platform",
      category: "WEBSITES",
      description: "Modern e-commerce shopping web app built with ultra-responsive layout and high-converting product UX.",
      type: "website",
      liveUrl: "https://shop-near-website.vercel.app",
      imageUrl: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      tag: "E-Commerce Web App"
    },
    // 2. Live User Website 2
    {
      id: 2,
      title: "Neckband Audio Product Landing Page",
      category: "WEBSITES",
      description: "Sleek, dark-themed audio gadget landing page engineered for high conversion and product immersion.",
      type: "website",
      liveUrl: "https://neckband-website.vercel.app",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      tag: "Product Landing Page"
    },
    // 3. Live User Website 3
    {
      id: 3,
      title: "NextGen Visual Digital Deck",
      category: "WEBSITES",
      description: "Interactive brand presentation platform showcasing modern creative design and visual strategy.",
      type: "website",
      liveUrl: "https://nextgen-visual-jhea365.gamma.site/",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tag: "Brand Presentation"
    },
    // 4. Actual User AI Video 1
    {
      id: 4,
      title: "AI UGC Promotional Campaign",
      category: "AI VIDEOS",
      description: "Cinematic AI-generated product commercial with hyper-realistic visual effects and AI voiceover.",
      type: "video",
      videoUrl: getActiveVideoUrl(VIDEO_URLS.aiVideos[0], LOCAL_VIDEO_PATHS.ai01),
      tag: "AI UGC & Commercial"
    },
    // 5. Actual User AI Video 2
    {
      id: 5,
      title: "AI Product Commercial Spotlight",
      category: "AI VIDEOS",
      description: "Engaging AI spokesperson and commercial video created for high-performing ad campaigns.",
      type: "video",
      videoUrl: getActiveVideoUrl(VIDEO_URLS.aiVideos[1], LOCAL_VIDEO_PATHS.ai02),
      tag: "AI Ad Creative"
    },
    // 6. Actual User Editing Video 1
    {
      id: 6,
      title: "High-Energy Reels & Shorts Edit",
      category: "VIDEO EDITING",
      description: "Fast-paced, motion-graphics driven viral video edits engineered for social media retention.",
      type: "video",
      videoUrl: getActiveVideoUrl(VIDEO_URLS.editingVideos[0], LOCAL_VIDEO_PATHS.edit01),
      tag: "Short Form Content"
    },
    // 7. Actual User Editing Video 2
    {
      id: 7,
      title: "Cinematic Brand Story & Motion Edit",
      category: "VIDEO EDITING",
      description: "Color-graded, sound-designed promotional video with custom motion graphics.",
      type: "video",
      videoUrl: getActiveVideoUrl(VIDEO_URLS.editingVideos[1], LOCAL_VIDEO_PATHS.edit02),
      tag: "Cinematic Post-Prod"
    }
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleCardClick = (project) => {
    if (project.type === 'website') {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else if (project.type === 'video') {
      setSelectedVideo(project);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <AnimatedSection direction="up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-bold uppercase tracking-wider text-black">
                <Sparkles className="w-3.5 h-3.5 text-[#FFD600] fill-[#FFD600]" />
                <span>REAL PORTFOLIO WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
                Our Work
              </h2>
              <p className="text-gray-600 font-medium text-base max-w-xl">
                Explore our live websites, AI videos and professional editing projects.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-[#F6F6F8] p-1.5 rounded-2xl border border-gray-200">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-black text-[#FFD600] shadow-md scale-105'
                      : 'text-gray-600 hover:text-black hover:bg-white/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <AnimatedSection key={project.id} direction="up" delay={idx * 120}>
              <div
                onClick={() => handleCardClick(project)}
                className="bg-[#F6F6F8] rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:border-black/40 transition-all duration-500 group cursor-pointer flex flex-col justify-between h-full"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden">
                  {project.type === 'video' ? (
                    <>
                      <video
                        key={project.videoUrl}
                        src={project.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Play Badge */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#FFD600] text-black flex items-center justify-center shadow-xl group-hover:scale-125 transition-transform duration-300">
                          <Play className="w-6 h-6 fill-black ml-0.5" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md text-[#FFD600] text-xs font-extrabold flex items-center gap-2 border border-white/20 shadow-lg group-hover:bg-[#FFD600] group-hover:text-black transition-colors">
                          <Globe className="w-4 h-4" />
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-[#FFD600] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {project.tag}
                  </div>
                </div>

                {/* Card Footer Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-black group-hover:text-black mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span>{project.category}</span>
                    <span className="text-black font-extrabold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      {project.type === 'website' ? (
                        <>
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#FFD600] fill-[#FFD600]" />
                        </>
                      ) : (
                        'Preview Video →'
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
}
