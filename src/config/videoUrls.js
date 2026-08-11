/**
 * CENTRALIZED VIDEO CONFIGURATION FOR NEXTGEN VISUAL
 * 
 * All 9 portfolio videos are compressed under 19 MB and bundled directly in the project.
 * Cloudflare Workers Assets supports up to 25 MB per asset.
 * 
 * If a field is left empty (""), the website will automatically use the local bundled video path
 * for 100% reliable, zero-latency HD video streaming.
 */

export const LOCAL_VIDEO_PATHS = {
  hero: "/assets/videos/hero/0721.mp4",
  ai01: "/assets/videos/ai-videos/ai-01.mp4",
  ai02: "/assets/videos/ai-videos/ai-02.mp4",
  ai03: "/assets/videos/ai-videos/ai-03.mp4",
  ai04: "/assets/videos/ai-videos/ai-04.mp4",
  edit01: "/assets/videos/editing-videos/edit-01.mp4",
  edit02: "/assets/videos/editing-videos/edit-02.mp4",
  edit03: "/assets/videos/editing-videos/edit-03.mp4",
  edit04: "/assets/videos/editing-videos/edit-04.mp4",
};

export const VIDEO_URLS = {
  // 1. HERO VIDEO (Original file: 0721.mp4 - Compressed 18.6 MB)
  hero: "",

  // 2-5. AI VIDEOS (Original files: ai-01.mp4 to ai-04.mp4 - All < 16 MB)
  aiVideos: [
    "", // AI Video 1: ai-01.mp4 (AI UGC Promotional Campaign)
    "", // AI Video 2: ai-02.mp4 (AI Product Commercial Spotlight)
    "", // AI Video 3: ai-03.mp4 (Cinematic AI Motion Production)
    ""  // AI Video 4: ai-04.mp4 (AI Creative Visual Experience)
  ],

  // 6-9. VIDEO EDITING (Original files: edit-01.mp4 to edit-04.mp4 - All < 19 MB)
  editingVideos: [
    "", // Editing Video 1: edit-01.mp4 (High-Energy Reels & Shorts Edit)
    "", // Editing Video 2: edit-02.mp4 (Commercial Motion Graphics Edit)
    "", // Editing Video 3: edit-03.mp4 (Cinematic Brand Story Edit)
    ""  // Editing Video 4: edit-04.mp4 (Masterclass & YouTube Video Edit)
  ]
};

/**
 * Returns active video URL (External HTTPS URL if provided, otherwise Local Fallback)
 */
export function getActiveVideoUrl(externalUrl, fallbackLocalPath) {
  if (externalUrl && typeof externalUrl === 'string' && externalUrl.trim().length > 0) {
    const trimmed = externalUrl.trim();
    const driveMatch = trimmed.match(/\/file\/d\/([^\/]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
    }
    return trimmed;
  }
  return fallbackLocalPath;
}

export const ACTIVE_VIDEO_URLS = {
  hero: getActiveVideoUrl(VIDEO_URLS.hero, LOCAL_VIDEO_PATHS.hero),
  ai01: getActiveVideoUrl(VIDEO_URLS.aiVideos[0], LOCAL_VIDEO_PATHS.ai01),
  ai02: getActiveVideoUrl(VIDEO_URLS.aiVideos[1], LOCAL_VIDEO_PATHS.ai02),
  ai03: getActiveVideoUrl(VIDEO_URLS.aiVideos[2], LOCAL_VIDEO_PATHS.ai03),
  ai04: getActiveVideoUrl(VIDEO_URLS.aiVideos[3], LOCAL_VIDEO_PATHS.ai04),
  edit01: getActiveVideoUrl(VIDEO_URLS.editingVideos[0], LOCAL_VIDEO_PATHS.edit01),
  edit02: getActiveVideoUrl(VIDEO_URLS.editingVideos[1], LOCAL_VIDEO_PATHS.edit02),
  edit03: getActiveVideoUrl(VIDEO_URLS.editingVideos[2], LOCAL_VIDEO_PATHS.edit03),
  edit04: getActiveVideoUrl(VIDEO_URLS.editingVideos[3], LOCAL_VIDEO_PATHS.edit04),
};

export default VIDEO_URLS;
