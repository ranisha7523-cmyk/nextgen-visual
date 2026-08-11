/**
 * CENTRALIZED VIDEO CONFIGURATION FOR NEXTGEN VISUAL
 * 
 * Instructions:
 * To serve videos from external HTTPS hosting (Cloudflare R2, AWS S3, Bunny CDN, Supabase, Vercel Blob, etc.),
 * paste the HTTPS video URL inside the corresponding string field below.
 * 
 * If a field is left empty (""), the website will automatically use the local fallback video path
 * so that video playback never breaks.
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
  // 1. HERO VIDEO (Original file: 0721.mp4)
  hero: "https://files.catbox.moe/blpven.mp4",

  // 2-5. AI VIDEOS (Original files: ai-01.mp4, ai-02.mp4, ai-03.mp4, ai-04.mp4)
  aiVideos: [
    "https://files.catbox.moe/3ykk1z.mp4", // AI Video 1: ai-01.mp4 (AI UGC Promotional Campaign)
    "https://files.catbox.moe/0jw4sy.mp4", // AI Video 2: ai-02.mp4 (AI Product Commercial Spotlight)
    "https://files.catbox.moe/kgwt0h.mp4", // AI Video 3: ai-03.mp4 (Cinematic AI Motion Production)
    "https://files.catbox.moe/nx20un.mp4"  // AI Video 4: ai-04.mp4 (AI Creative Visual Experience)
  ],

  // 6-9. VIDEO EDITING (Original files: edit-01.mp4, edit-02.mp4, edit-03.mp4, edit-04.mp4)
  editingVideos: [
    "https://files.catbox.moe/1ypeh8.mp4", // Editing Video 1: edit-01.mp4 (High-Energy Reels & Shorts Edit)
    "https://files.catbox.moe/l5k180.mp4", // Editing Video 2: edit-02.mp4 (Commercial Motion Graphics Edit)
    "https://files.catbox.moe/kw4fd3.mp4", // Editing Video 3: edit-03.mp4 (Cinematic Brand Story Edit)
    "https://files.catbox.moe/blpven.mp4"  // Editing Video 4: edit-04.mp4 (Masterclass & YouTube Video Edit)
  ]
};

/**
 * Returns active video URL (External HTTPS URL if provided, otherwise Local Fallback)
 */
export function getActiveVideoUrl(externalUrl, fallbackLocalPath) {
  if (externalUrl && typeof externalUrl === 'string' && externalUrl.trim().length > 0) {
    return externalUrl.trim();
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
