import React, { useState, useRef, useEffect } from 'react';
import { X, Volume2, VolumeX, Play, Pause, Maximize } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log('Autoplay modal video:', err));
    }
  }, [video]);

  if (!video) return null;

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-10 animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#0D0D0D] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-black/60 text-white">
          <div>
            <span className="text-xs text-[#FFD600] font-bold uppercase tracking-wider block">
              {video.category || 'PROJECT SHOWCASE'}
            </span>
            <h3 className="text-lg sm:text-xl font-black text-white">{video.title}</h3>
          </div>

          <div className="flex items-center gap-3">
            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#FFD600] hover:text-black text-white text-xs font-bold transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#FFD600]" />}
              <span>{isMuted ? 'Muted' : 'Sound On'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
          <video
            ref={videoRef}
            key={video.videoUrl || video.url}
            src={video.videoUrl || video.url || '/assets/videos/hero/0721.mp4'}
            autoPlay
            loop
            playsInline
            preload="auto"
            referrerPolicy="no-referrer"
            muted={isMuted}
            className="w-full h-full object-contain max-h-[70vh]"
            onClick={togglePlay}
          />

          {/* Floating Controls Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-black/70 backdrop-blur-md p-3.5 rounded-2xl border border-white/10 text-white">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-xl bg-[#FFD600] text-black hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-black" /> : <Play className="w-5 h-5 fill-black" />}
              </button>
              <span className="text-xs text-gray-300 font-medium">
                {video.description || 'NextGen Visual High Quality Digital Content'}
              </span>
            </div>

            <button
              onClick={toggleSound}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
