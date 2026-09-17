const { execSync } = require('child_process');
const path = require('path');

const brainDir = `C:\\Users\\ISHA  RANI\\.gemini\\antigravity\\brain\\936aa7f3-e30a-4334-85ef-cbeda5d9b9c8`;
const ffmpegExe = path.join(brainDir, `scratch\\tools\\ffmpeg-7.1-essentials_build\\bin\\ffmpeg.exe`);

const img1 = path.join(brainDir, `promo_scene_1_1789649947221.jpg`);
const img2 = path.join(brainDir, `promo_scene_2_1789649972829.jpg`);
const img3 = path.join(brainDir, `promo_scene_3_1789650010052.jpg`);
const img4 = path.join(brainDir, `promo_scene_4_1789650043943.jpg`);
const img5 = path.join(brainDir, `promo_scene_5_1789650066622.jpg`);

const audioWav = `c:\\Users\\ISHA  RANI\\Downloads\\nextgen website\\public\\nextgen_promo_voiceover.wav`;
const outputVideo = `c:\\Users\\ISHA  RANI\\Downloads\\nextgen website\\public\\nextgen_visual_voiceover_promo.mp4`;

console.log('Generating 60-Sec Voiceover Promo Reel MP4 Video with Audio...');

// 5 images x 4.5 seconds = ~22.5s matched with voiceover duration
const cmd = `"${ffmpegExe}" -y -loop 1 -t 4.5 -i "${img1}" -loop 1 -t 4.5 -i "${img2}" -loop 1 -t 4.5 -i "${img3}" -loop 1 -t 4.5 -i "${img4}" -loop 1 -t 4.5 -i "${img5}" -i "${audioWav}" -filter_complex "[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v0];[1:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v1];[2:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v2];[3:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v3];[4:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v4];[v0][v1][v2][v3][v4]concat=n=5:v=1:a=0[outv]" -map "[outv]" -map 5:a -c:v libx264 -pix_fmt yuv420p -c:a aac -b:a 192k -r 30 "${outputVideo}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Successfully generated voiceover video:', outputVideo);
} catch (err) {
  console.error('Error generating video:', err);
}
