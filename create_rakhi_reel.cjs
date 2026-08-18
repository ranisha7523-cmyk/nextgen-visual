const { execSync } = require('child_process');
const path = require('path');

const brainDir = `C:\\Users\\ISHA  RANI\\.gemini\\antigravity\\brain\\936aa7f3-e30a-4334-85ef-cbeda5d9b9c8`;
const ffmpegExe = path.join(brainDir, `scratch\\tools\\ffmpeg-7.1-essentials_build\\bin\\ffmpeg.exe`);

const img1 = path.join(brainDir, `rakhi_reel_slide_1_1787072200142.jpg`);
const img2 = path.join(brainDir, `rakhi_reel_slide_2_1787072383159.jpg`);
const img3 = path.join(brainDir, `rakhi_reel_slide_3_1787072689799.jpg`);

const outputVideo = `c:\\Users\\ISHA  RANI\\Downloads\\nextgen website\\public\\nextgen_rakhi_special_reel.mp4`;

console.log('Generating Raksha Bandhan Reel MP4 Video...');

const cmd = `"${ffmpegExe}" -y -loop 1 -t 4 -i "${img1}" -loop 1 -t 4 -i "${img2}" -loop 1 -t 4 -i "${img3}" -filter_complex "[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v0];[1:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v1];[2:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920[v2];[v0][v1][v2]concat=n=3:v=1:a=0[outv]" -map "[outv]" -c:v libx264 -pix_fmt yuv420p -r 30 "${outputVideo}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Successfully generated:', outputVideo);
} catch (err) {
  console.error('Error generating video:', err);
}
