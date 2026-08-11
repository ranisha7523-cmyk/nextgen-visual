import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'exclude-large-videos-from-dist',
      closeBundle() {
        const rootDir = import.meta.dirname || path.resolve();
        const distVideosDir = path.resolve(rootDir, 'dist/assets/videos');
        if (fs.existsSync(distVideosDir)) {
          console.log('🧹 Excluding large videos from dist/ for Cloudflare deployment...');
          fs.rmSync(distVideosDir, { recursive: true, force: true });
        }
      }
    }
  ],
})
