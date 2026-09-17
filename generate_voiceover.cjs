const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const wavPath = `c:\\Users\\ISHA  RANI\\Downloads\\nextgen website\\public\\nextgen_promo_voiceover.wav`;
const vbsPath = `c:\\Users\\ISHA  RANI\\Downloads\\nextgen website\\generate_tts.vbs`;

const scriptContent = `
Set SAPI = CreateObject("SAPI.SpVoice")
Set stream = CreateObject("SAPI.SpFileStream")
stream.Open "${wavPath.replace(/\\/g, '\\\\')}", 3, False
Set SAPI.AudioOutputStream = stream
SAPI.Speak "Want to elevate your brand online? Welcome to NextGen Visual! We build modern high converting custom websites, create engaging AI powered promo videos, and edit high impact reels for your business. Visit nextgen visual dot in to calculate your price instantly, or contact us on WhatsApp today!"
stream.Close
`;

fs.writeFileSync(vbsPath, scriptContent);

console.log('Generating Voiceover WAV file...');
try {
  execSync(`cscript //nologo "${vbsPath}"`, { stdio: 'inherit' });
  console.log('Voiceover file generated successfully:', wavPath);
} catch (err) {
  console.error('Error generating voiceover:', err);
}
