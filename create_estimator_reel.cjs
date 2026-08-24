const { execSync } = require('child_process');
const path = require('path');

const brainDir = `C:\\Users\\ISHA  RANI\\.gemini\\antigravity\\brain\\936aa7f3-e30a-4334-85ef-cbeda5d9b9c8`;
const ffmpegExe = path.join(brainDir, `scratch\\tools\\ffmpeg-7.1-essentials_build\\bin\\ffmpeg.exe`);

const img1 = path.join(brainDir, `estimator_slide_1_1787580824987.png`);
const img2 = path.join(brainDir, `estimator_slide_2_1787580855734.png`);
const img3 = path.join(brainDir, `estimator_slide_3_1787580877833.png`);

const outputVideo = `c:\\Users\\ISHA  RANI\\Downloads\\nextgen website\\public\\nextgen_estimator_feature_reel.mp4`;

console.log('Generating Cost Estimator Feature Reel MP4 Video...');

const cmd = `"${ffmpegExe}" -y -loop 1 -t 4 -i "${img1}" -loop 1 -t 4 -i "${img2}" -loop 1 -t 4 -i "${img3}" -filter_complex "[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v0];[1:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v1];[2:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v2];[v0][v1][v2]concat=n=3:v=1:a=0[outv]" -map "[outv]" -c:v libx264 -pix_fmt yuv420p -r 30 "${outputVideo}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Successfully generated:', outputVideo);
} catch (err) {
  console.error('Error generating video:', err);
}
