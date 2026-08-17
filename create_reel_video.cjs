const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const brainDir = `C:\\Users\\ISHA  RANI\\.gemini\\antigravity\\brain\\936aa7f3-e30a-4334-85ef-cbeda5d9b9c8`;
const ffmpegExe = path.join(brainDir, `scratch\\tools\\ffmpeg-7.1-essentials_build\\bin\\ffmpeg.exe`);

const img1 = path.join(brainDir, `insta_reel_slide_1_1786678089651.jpg`);
const img2 = path.join(brainDir, `insta_reel_slide_2_1786678125286.jpg`);
const img3 = path.join(brainDir, `insta_reel_slide_3_1786678169878.jpg`);

const outputVideo = path.join(brainDir, `nextgen_freedom_sale_reel.mp4`);

console.log('Generating Reel MP4 Video...');

const cmd = `"${ffmpegExe}" -y -loop 1 -t 4 -i "${img1}" -loop 1 -t 4 -i "${img2}" -loop 1 -t 4 -i "${img3}" -filter_complex "[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v0];[1:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v1];[2:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v2];[v0][v1][v2]concat=n=3:v=1:a=0[outv]" -map "[outv]" -c:v libx264 -pix_fmt yuv420p -r 30 "${outputVideo}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Successfully generated:', outputVideo);
} catch (err) {
  console.error('Error generating video:', err);
}
