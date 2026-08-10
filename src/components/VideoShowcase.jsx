import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight } from 'lucide-react';
import VideoModal from './VideoModal';
import AnimatedSection from './AnimatedSection';

export default function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isInViewport, setIsInViewport] = useState(true);

  const videoRefs = useRef([]);
  const sectionRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // All 8 Actual User Videos (AI Videos + Video Editing)
  const showcaseVideos = [
    {
      id: "ai-1",
      title: "AI UGC Promotional Campaign",
      category: "AI VIDEO",
      description: "High-converting UGC advertorial crafted with AI digital avatars and cinematic visual effects.",
      videoUrl: "/assets/videos/ai-videos/ai-01.mp4",
      badge: "FEATURED"
    },
    {
      id: "edit-1",
      title: "High-Energy Reels & Shorts Edit",
      category: "VIDEO EDITING",
      description: "Fast-paced social media edit featuring animated captions, sound FX, and speed ramps.",
      videoUrl: "/assets/videos/editing-videos/edit-01.mp4",
      badge: "FEATURED"
    },
    {
      id: "ai-2",
      title: "AI Product Commercial Spotlight",
      category: "AI VIDEO",
      description: "Hyper-realistic AI visual commercial created for high-performing ad campaigns.",
      videoUrl: "/assets/videos/ai-videos/ai-02.mp4",
      badge: "FEATURED"
    },
    {
      id: "edit-2",
      title: "Commercial Motion Graphics Edit",
      category: "VIDEO EDITING",
      description: "Professional post-production editing blending live footage with sleek motion graphics.",
      videoUrl: "/assets/videos/editing-videos/edit-02.mp4",
      badge: "FEATURED"
    },
    {
      id: "ai-3",
      title: "Cinematic AI Motion Production",
      category: "AI VIDEO",
      description: "High-impact cinematic AI content featuring dynamic lighting and sound design.",
      videoUrl: "/assets/videos/ai-videos/ai-03.mp4",
      badge: "FEATURED"
    },
    {
      id: "edit-3",
      title: "Cinematic Brand Story Edit",
      category: "VIDEO EDITING",
      description: "Color-graded, sound-designed brand documentary edit with smooth visual transitions.",
      videoUrl: "/assets/videos/editing-videos/edit-03.mp4",
      badge: "FEATURED"
    },
    {
      id: "ai-4",
      title: "AI Creative Visual Experience",
      category: "AI VIDEO",
      description: "Engaging AI creative production engineered for maximum social media hook rates.",
      videoUrl: "/assets/videos/ai-videos/ai-04.mp4",
      badge: "FEATURED"
    },
    {
      id: "edit-4",
      title: "Masterclass & YouTube Video Edit",
      category: "VIDEO EDITING",
      description: "Engaging long-form & short-form video editing designed for maximum viewer retention.",
      videoUrl: "/assets/videos/editing-videos/edit-04.mp4",
      badge: "FEATURED"
    }
  ];

  const totalVideos = showcaseVideos.length;

  // Handle active slide change & single active video playback control
  const changeSlide = useCallback((newIndex) => {
    const validIndex = (newIndex + totalVideos) % totalVideos;
    setActiveIndex(validIndex);
    setIsPlaying(true);

    // Pause all non-active videos, play only active video
    videoRefs.current.forEach((videoEl, idx) => {
      if (!videoEl) return;
      if (idx === validIndex) {
        videoEl.currentTime = 0;
        videoEl.muted = isMuted;
        videoEl.play().catch((err) => console.log('Autoplay deferred:', err));
      } else {
        videoEl.pause();
      }
    });
  }, [totalVideos, isMuted]);

  const handleNext = useCallback(() => {
    changeSlide(activeIndex + 1);
  }, [activeIndex, changeSlide]);

  const handlePrev = useCallback(() => {
    changeSlide(activeIndex - 1);
  }, [activeIndex, changeSlide]);

  // Mute / Unmute Volume Toggle directly on Active Card
  const toggleVolume = (e) => {
    e.stopPropagation();
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      const nextMuted = !isMuted;
      activeVideo.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  // Play / Pause Toggle directly on Active Card
  const togglePlayPause = (e) => {
    e.stopPropagation();
    const activeVideo = videoRefs.current[activeIndex];
    if (activeVideo) {
      if (isPlaying) {
        activeVideo.pause();
        setIsPlaying(false);
      } else {
        activeVideo.play();
        setIsPlaying(true);
      }
    }
  };

  // Intersection Observer to track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
        if (!entry.isIntersecting) {
          if (videoRefs.current[activeIndex]) {
            videoRefs.current[activeIndex].pause();
          }
        } else {
          if (videoRefs.current[activeIndex]) {
            videoRefs.current[activeIndex].play().catch(() => {});
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [activeIndex]);

  // Carousel Auto Advancement Timer
  useEffect(() => {
    if (isHovered || !isInViewport) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isHovered, isInViewport, handleNext]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 40) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Keyboard Navigation Support
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
  };

  return (
    <section
      id="showcase"
      ref={sectionRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="py-20 bg-[#F6F6F8] text-black relative overflow-hidden focus:outline-none select-none"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD600]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <AnimatedSection direction="up" delay={100}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wider text-black shadow-xs">
                <Sparkles className="w-3.5 h-3.5 fill-[#FFD600] text-black" />
                <span>CREATIVE SHOWCASE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight">
                Creative Showcase
              </h2>

              <p className="text-gray-600 font-medium text-sm sm:text-base max-w-xl">
                Explore our AI videos and professional editing work.
              </p>
            </div>

            {/* Right Side Link to Full Portfolio */}
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-black font-extrabold text-sm uppercase tracking-wider group hover:text-[#E5C000] transition-colors"
            >
              <span className="border-b-2 border-[#FFD600] pb-0.5">View Full Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>

        {/* 3-CARD SHOWCASE CAROUSEL CONTAINER */}
        <div
          className="relative py-4 min-h-[420px] sm:min-h-[460px] flex items-center justify-center overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Control Left Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Showcase Video"
            className="absolute left-2 sm:left-6 lg:left-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-black shadow-xl border border-gray-200 flex items-center justify-center hover:scale-110 hover:bg-[#FFD600] transition-all duration-300 button-magnetic"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Navigation Control Right Button */}
          <button
            onClick={handleNext}
            aria-label="Next Showcase Video"
            className="absolute right-2 sm:right-6 lg:right-12 z-40 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFD600] text-black shadow-xl flex items-center justify-center hover:scale-110 hover:bg-black hover:text-[#FFD600] transition-all duration-300 button-magnetic"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* 3 Cards Container */}
          <div className="relative w-full max-w-4xl h-[380px] sm:h-[430px] flex items-center justify-center perspective-[1000px]">
            {showcaseVideos.map((video, idx) => {
              let offset = idx - activeIndex;
              if (offset > totalVideos / 2) offset -= totalVideos;
              if (offset < -totalVideos / 2) offset += totalVideos;

              const isVisible = Math.abs(offset) <= 1;
              if (!isVisible) return null;

              const isActive = offset === 0;

              let translateX = 0;
              let scale = 1;
              let rotate = 0;
              let zIndex = 30;
              let opacity = 1;

              if (offset === -1) {
                translateX = -75;
                scale = 0.88;
                rotate = 4;
                zIndex = 20;
                opacity = 0.9;
              } else if (offset === 1) {
                translateX = 75;
                scale = 0.88;
                rotate = -4;
                zIndex = 20;
                opacity = 0.9;
              } else {
                translateX = 0;
                scale = 1.05;
                rotate = 0;
                zIndex = 30;
                opacity = 1;
              }

              if (window.innerWidth < 640) {
                if (offset === -1) translateX = -82;
                if (offset === 1) translateX = 82;
                scale = isActive ? 0.98 : 0.78;
              }

              return (
                <div
                  key={video.id}
                  onClick={() => {
                    if (isActive) {
                      setSelectedVideo(video);
                    } else {
                      changeSlide(idx);
                    }
                  }}
                  style={{
                    transform: `translateX(${translateX}%) scale(${scale}) rotate(${rotate}deg)`,
                    opacity: opacity,
                    zIndex: zIndex,
                    transition: 'transform 550ms cubic-bezier(0.16, 1, 0.3, 1), opacity 550ms ease'
                  }}
                  className={`absolute w-[190px] sm:w-[240px] md:w-[270px] bg-white rounded-[2rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-500 border-4 ${
                    isActive
                      ? 'border-[#FFD600] shadow-[0_20px_40px_rgba(255,214,0,0.3)]'
                      : 'border-[#FFD600] opacity-90 hover:opacity-100'
                  }`}
                >
                  {/* HTML5 VIDEO DISPLAY AREA */}
                  <div className="relative aspect-[9/14] bg-black overflow-hidden group/card">
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      muted={isMuted}
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                    </video>

                    {/* TOP-RIGHT VOLUME TOGGLE BUTTON (Exact match to user's screenshot) */}
                    {isActive && (
                      <button
                        onClick={toggleVolume}
                        aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
                        className={`absolute top-3 right-3 z-30 p-2.5 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-115 ${
                          isMuted
                            ? 'bg-black/60 text-white hover:bg-black'
                            : 'bg-[#FFD600] text-black hover:bg-white'
                        }`}
                        title={isMuted ? "Click to Unmute Sound" : "Muted"}
                      >
                        {isMuted ? (
                          <VolumeX className="w-4 h-4" />
                        ) : (
                          <Volume2 className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </button>
                    )}

                    {/* CENTER CIRCULAR PLAY / PAUSE BUTTON */}
                    <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/30 transition-colors flex items-center justify-center">
                      <button
                        onClick={isActive ? togglePlayPause : undefined}
                        className={`rounded-full bg-[#FFD600] text-black flex items-center justify-center shadow-2xl transition-all duration-300 ${
                          isActive
                            ? 'w-13 h-13 scale-100 hover:scale-115'
                            : 'w-10 h-10 opacity-90'
                        }`}
                      >
                        {isActive && !isPlaying ? (
                          <Play className="w-6 h-6 fill-black ml-0.5" />
                        ) : isActive && isPlaying ? (
                          <Pause className="w-6 h-6 fill-black stroke-[3]" />
                        ) : (
                          <Play className="w-4 h-4 fill-black ml-0.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* BOTTOM WHITE INFO CARD */}
                  <div className="p-4 bg-white text-center flex flex-col items-center space-y-1.5 border-t border-gray-100">
                    <span className="px-3 py-0.5 bg-[#FFD600] text-black text-[10px] font-black uppercase rounded-full tracking-wider shadow-2xs">
                      {video.badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-black line-clamp-1 leading-snug">
                      {video.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {showcaseVideos.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => changeSlide(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === dotIdx
                  ? 'w-8 bg-[#FFD600]'
                  : 'w-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Expanded Video Lightbox Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
}
