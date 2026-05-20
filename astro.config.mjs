import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 1. Ganti 'username-github-anda' dengan username asli akun GitHub Anda nanti
  site: 'https://github.com/signline-project', 
  
  // 2. Base URL disesuaikan dengan nama folder & repositori proyek Anda
  base: '/borobudur-vacation',
  
  vite: {
    plugins: [tailwindcss()],
  },
});